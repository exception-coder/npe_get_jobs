import { setTimeout as pause } from 'node:timers/promises';

export const BOSS_EDITOR_SELECTOR = '#chat-input[contenteditable="true"]';
const DRAFT_SETTLE_MS = 800;

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

/** 填入或复用草稿；补入时只插入纯文本，不按 Enter、不覆盖用户的不同草稿。 */
export async function fillVerifiedBossDraft(editor, greeting, keyboard) {
  if (!greeting?.trim() || greeting.length > 500) throw new Error('INVALID_GREETING');
  await editor.waitFor({ state: 'visible', timeout: 15_000 });
  const existing = normalizeBossDraft(await readBossDraft(editor));
  const expected = normalizeBossDraft(greeting);
  if (existing === expected) return;
  if (existing.trim()) throw new Error('EXISTING_DRAFT_NOT_OVERWRITTEN');
  await editor.fill(greeting);
  if (await waitForDraft(editor, greeting)) return;
  if (keyboard && !normalizeBossDraft(await readBossDraft(editor)).trim()) {
    await editor.focus();
    await keyboard.insertText(greeting);
    if (await waitForDraft(editor, greeting)) return;
  }
  throw new Error('DRAFT_VERIFICATION_FAILED');
}

/** 只刷新当前目标草稿的原生输入事件；不覆盖不同正文、不使用发送键。 */
export async function refreshBossDraft(editor, greeting, keyboard) {
  if (!greeting?.trim() || greeting.length > 500) throw new Error('INVALID_GREETING');
  if (!keyboard) throw new Error('CHAT_KEYBOARD_UNAVAILABLE');
  await editor.focus();
  const actual = normalizeBossDraft(await readBossDraft(editor));
  if (actual.trim() && actual !== normalizeBossDraft(greeting)) {
    throw new Error('EXISTING_DRAFT_NOT_OVERWRITTEN');
  }
  await editor.press('ControlOrMeta+A');
  // insertText 保持多行纯文本；方向键完成键盘事件周期但不会提交消息。
  await keyboard.insertText(greeting);
  await editor.press('ArrowRight');
  if (!(await waitForDraft(editor, greeting))) throw new Error('DRAFT_VERIFICATION_FAILED');
}
