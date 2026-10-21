import { setTimeout as pause } from 'node:timers/promises';
import { BOSS_EDITOR_SELECTOR, normalizeBossDraft, requireBossDraft } from './conversation-draft.js';
import { verifyConversation } from './message-page.js';
import { inspectBossSendControl, waitForBossSendControl } from './conversation-controls.js';

async function requireReadySendControl(page) {
  const control = await waitForBossSendControl(page);
  if (control.status !== 'ready') throw new Error('CHAT_SEND_ACTION_UNAVAILABLE');
  return control;
}

function readReceiptSnapshot() {
  const root = document.querySelector('.chat-conversation');
  const editor = document.querySelector('#chat-input');
  const nodes = root ? [...root.querySelectorAll('*')] : [];
  const receipts = [];
  for (const node of nodes) {
    if (node.closest('[contenteditable="true"]') || node.matches('button,input,textarea')) continue;
    let parent = node.parentElement;
    for (let depth = 0; parent && parent !== root && depth < 4; depth++, parent = parent.parentElement) {
      if (parent.contains(editor)) break;
      const hasReceipt = [...parent.childNodes].some(branch => {
        if (branch.contains(node) || node.contains(branch)) return false;
        return /^(?:\d{1,2}:\d{2}\s*)?(?:送达|已读)$/.test((branch.innerText ?? branch.textContent ?? '').trim());
      });
      if (hasReceipt) {
        receipts.push({ text: node.innerText ?? node.textContent ?? '', bubble: nodes.indexOf(parent) });
        break;
      }
    }
  }
  return { editorPresent: Boolean(editor), editorText: editor?.innerText ?? '', receipts };
}

async function observeDelivery(page, greeting) {
  const snapshot = await page.evaluate(readReceiptSnapshot);
  const count = new Set(snapshot.receipts.filter(item => normalizeBossDraft(item.text) === normalizeBossDraft(greeting))
    .map(item => item.bubble)).size;
  return { cleared: snapshot.editorPresent && !normalizeBossDraft(snapshot.editorText).trim(), count };
}

/** 先确定唯一提交动作，执行后仅等待回执；不因延迟清空改用第二次发送。 */
export async function sendConversationGreeting(page, expected, greeting, options = {}) {
  if (!greeting?.trim() || greeting.length > 500) throw new Error('INVALID_GREETING');
  await verifyConversation(page, expected);
  const editor = page.locator(BOSS_EDITOR_SELECTOR + ':visible');
  if (await editor.count() !== 1) throw new Error('CHAT_EDITOR_UNAVAILABLE');
  await requireBossDraft(editor, greeting);
  await requireReadySendControl(page);
  const before = (await observeDelivery(page, greeting)).count;
  await editor.focus();
  await verifyConversation(page, expected);
  await requireBossDraft(editor, greeting);
  await options.beforeSubmit?.();
  let control;
  try {
    await verifyConversation(page, expected);
    await requireBossDraft(editor, greeting);
    control = await inspectBossSendControl(page);
    if (control.status !== 'ready') throw new Error('CHAT_SEND_ACTION_UNAVAILABLE');
  } catch (error) {
    // 此边界尚未调用 click，才有充分依据撤销提交预占。
    await options.onNotSubmitted?.();
    throw error;
  }
  // click 一旦被调用，即使抛错也不能证明消息没有发出。
  await control.button.click({ timeout: 2000 });
  const deadline = Date.now() + (options.receiptTimeoutMs ?? 15_000);
  do {
    await verifyConversation(page, expected);
    const observation = await observeDelivery(page, greeting);
    if (observation.cleared && observation.count > before) return;
    await pause(100);
  } while (Date.now() < deadline);
  throw new Error('TEXT_SEND_UNCERTAIN_VERIFY_PLATFORM');
}
