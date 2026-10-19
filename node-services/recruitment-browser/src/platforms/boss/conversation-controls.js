import { setTimeout as pause } from 'node:timers/promises';

const CONTROL_SETTLE_MS = 2000;

/** 只探测当前会话的发送控件；不点击、不按键，每轮重新解析挂载状态。 */
export async function inspectBossSendControl(page) {
  const conversation = page.locator('.chat-conversation:visible');
  if (await conversation.count() !== 1) throw new Error('CHAT_CONVERSATION_UNAVAILABLE');
  const candidates = conversation.locator('.btn-send')
    .or(conversation.getByRole('button', { name: '发送', exact: true }));
  const visible = [];
  for (const candidate of await candidates.all()) {
    if (await candidate.isVisible()) visible.push(candidate);
  }
  if (visible.length > 1) throw new Error('CHAT_SEND_ACTION_AMBIGUOUS');
  if (!visible.length) return { status: 'missing' };
  const button = visible[0];
  const disabled = await button.getAttribute('aria-disabled');
  const classes = await button.getAttribute('class') || '';
  const enabled = await button.isEnabled() && disabled !== 'true'
    && !/(?:^|\s)(?:disabled|is-disabled)(?:\s|$)/.test(classes);
  return { status: enabled ? 'ready' : 'disabled', button };
}

/** 容忍延迟渲染；超时返回实际状态，不能把缺失控件推断为 Enter 发送。 */
export async function waitForBossSendControl(page) {
  const deadline = Date.now() + CONTROL_SETTLE_MS;
  let control;
  do {
    control = await inspectBossSendControl(page);
    if (control.status === 'ready') return control;
    await pause(100);
  } while (Date.now() < deadline);
  return control;
}
