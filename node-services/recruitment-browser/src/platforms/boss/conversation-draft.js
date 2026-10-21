import { setTimeout as pause } from 'node:timers/promises';

export const BOSS_EDITOR_SELECTOR = '#chat-input[contenteditable="true"]';
const DRAFT_SETTLE_MS = 800;
const KEY_DELAY_MS = 15;

function requireGreeting(greeting) {
  if (typeof greeting !== 'string' || !greeting.trim() || greeting.length > 500
      || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(greeting)) throw new Error('INVALID_GREETING');
}

/** 仅消除编辑器排版差异，保留正文空格和段落。 */
export function normalizeBossDraft(value = '') {
  return String(value).replace(/\r\n?/g, '\n').replace(/\u00a0/g, ' ')
    .replace(/[\u200b\ufeff]/g, '').replace(/\n+$/, '');
}

export async function readBossDraft(editor) {
  return editor.evaluate(element => 'value' in element ? element.value
    : element.innerText ?? element.textContent ?? '');
}

export async function requireBossDraft(editor, greeting) {
  if (normalizeBossDraft(await readBossDraft(editor)) !== normalizeBossDraft(greeting)) {
    throw new Error('DRAFT_VERIFICATION_FAILED');
  }
}

async function waitForDraft(editor, greeting) {
  const deadline = Date.now() + DRAFT_SETTLE_MS;
  do {
    if (normalizeBossDraft(await readBossDraft(editor)) === normalizeBossDraft(greeting)) return true;
    await pause(80);
  } while (Date.now() < deadline);
  return false;
}

/** 点击聚焦后逐字输入；中文也完成正文编辑键周期，任何路径均不按 Enter。 */
async function typeBossDraft(editor, greeting, keyboard) {
  const input = keyboard ?? editor.page?.().keyboard;
  if (!input?.type || !input?.press) throw new Error('CHAT_KEYBOARD_UNAVAILABLE');
  await editor.click({ timeout: 15_000 });
  const expected = normalizeBossDraft(greeting);
  const actual = normalizeBossDraft(await readBossDraft(editor));
  if (actual.trim() && actual !== expected) throw new Error('EXISTING_DRAFT_NOT_OVERWRITTEN');
  if (actual) await editor.press('ControlOrMeta+A');
  // type 把换行/Tab 当作按键，可能提交或转移焦点；只对正文逐字输入。
  const fragments = expected.split(/([\n\t])/);
  if (fragments.length > 1 && !input.insertText) throw new Error('CHAT_KEYBOARD_UNAVAILABLE');
  for (const fragment of fragments) {
    if (fragment === '\n' || fragment === '\t') await input.insertText(fragment);
    else if (fragment) await input.type(fragment, { delay: KEY_DELAY_MS });
  }
  if (!(await waitForDraft(editor, expected))) throw new Error('DRAFT_VERIFICATION_FAILED');

  // 非拉丁字符不保证产生字母键事件；用可核验的临时空格完成正文编辑周期。
  await input.type(' ');
  const withSpace = normalizeBossDraft(await readBossDraft(editor));
  if (withSpace === expected + ' ') {
    await input.press('Backspace');
  } else if (withSpace !== expected) {
    throw new Error('DRAFT_VERIFICATION_FAILED');
  }
  // 长度限制可能拒绝空格，不能因此删掉真正的最后一个字符。
  if (!(await waitForDraft(editor, expected))) throw new Error('DRAFT_VERIFICATION_FAILED');
}

/** 填入或复用草稿；不使用 fill/批量 insertText，也不覆盖不同正文。 */
export async function fillVerifiedBossDraft(editor, greeting, keyboard) {
  requireGreeting(greeting);
  await editor.waitFor({ state: 'visible', timeout: 15_000 });
  const existing = normalizeBossDraft(await readBossDraft(editor));
  const expected = normalizeBossDraft(greeting);
  if (existing === expected) return;
  if (existing.trim()) throw new Error('EXISTING_DRAFT_NOT_OVERWRITTEN');
  await typeBossDraft(editor, greeting, keyboard);
}

/** 只刷新当前目标草稿的原生输入事件；不覆盖不同正文、不使用发送键。 */
export async function refreshBossDraft(editor, greeting, keyboard) {
  requireGreeting(greeting);
  await typeBossDraft(editor, greeting, keyboard);
}
