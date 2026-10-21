import { readFile, stat } from 'node:fs/promises';
import { isAbsolute, extname } from 'node:path';
import { requireConfirmedImage, verifyConversation } from './message-page.js';
import { BOSS_EDITOR_SELECTOR, fillVerifiedBossDraft, refreshBossDraft } from './conversation-draft.js';
import { waitForBossSendControl } from './conversation-controls.js';
import { selectBossConversation } from './conversation-locator.js';
import { sendConversationGreeting } from './conversation-send.js';
import { reserveContactAttempt } from './contact-journal.js';
export { verifyConversation } from './message-page.js';
export { sendConversationGreeting } from './conversation-send.js';

const EDITOR = BOSS_EDITOR_SELECTOR;
const IMAGE_INPUT = 'input[type="file"][accept="image/gif,image/jpeg,image/jpg,image/png"]';
const TIMEOUT = 15_000;

export async function readResumeImage(options = {}) {
  if (options.sendResumeImage !== true) return null;
  const path = options.resumeImagePath?.trim();
  if (!path || !isAbsolute(path) || path.startsWith('\\\\')) throw new Error('INVALID_RESUME_IMAGE_PATH');
  const extension = extname(path).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(extension)) throw new Error('UNSUPPORTED_IMAGE_TYPE');
  const info = await stat(path);
  if (!info.isFile() || info.size > 5 * 1024 * 1024) throw new Error('INVALID_IMAGE_SIZE');
  const buffer = await readFile(path);
  return requireConfirmedImage({ confirmImageSend: true,
    mimeType: extension === '.png' ? 'image/png' : 'image/jpeg', base64: buffer.toString('base64') });
}

export async function selectConversation(page, job) {
  return selectBossConversation(page, job);
}

export async function fillConversationDraft(page, greeting, expected) {
  if (expected) await verifyConversation(page, expected);
  const editor = page.locator(EDITOR + ':visible');
  if (await editor.count() !== 1) throw new Error('CHAT_EDITOR_UNAVAILABLE');
  await fillVerifiedBossDraft(editor, greeting, page.keyboard);
  let control = await waitForBossSendControl(page);
  if (control.status === 'disabled') {
    if (expected) await verifyConversation(page, expected);
    await refreshBossDraft(editor, greeting, page.keyboard);
    control = await waitForBossSendControl(page);
  }
  if (expected) await verifyConversation(page, expected);
  return { draftFilled: true, sendReady: control.status === 'ready' };
}

async function uploadImageOnce(page, expected, file, beforeSubmit) {
  await verifyConversation(page, expected);
  const input = page.locator(IMAGE_INPUT);
  if (await input.count() !== 1) throw new Error('IMAGE_INPUT_AMBIGUOUS');
  const images = page.locator('.chat-conversation img.message-image');
  const before = await images.count();
  await beforeSubmit();
  await input.setInputFiles(file);
  await images.nth(before).waitFor({ state: 'visible', timeout: TIMEOUT });
  await verifyConversation(page, expected);
  // A new image alone may still be uploading; require its own nearby receipt.
  await page.waitForFunction(index => {
    let node = document.querySelectorAll('.chat-conversation img.message-image')[index];
    for (let depth = 0; node && depth < 5; depth++, node = node.parentElement) {
      if (node.classList.contains('chat-conversation')) return false;
      const receipt = (node.innerText || '').trim();
      if (node.querySelectorAll('img.message-image').length > 1) return false;
      if (/^(?:\d{1,2}:\d{2}\s*)?(?:送达|已读)$/.test(receipt)) return true;
    }
    return false;
  }, before, { timeout: TIMEOUT });
}

/** Establishes contact before entering chat; uncertain sends are never retried. */
export async function contactThroughMessagePage(page, job, input, state) {
  const result = { platformJobId: job.platformJobId, status: 'FAILED',
    conversationEstablished: false, textSent: false, draftFilled: false, imageDelivered: false };
  let attempt;
  try {
    const file = await readResumeImage(input.deliveryOptions);
    if (!input.greeting?.trim()) throw new Error('GREETING_REQUIRED');
    const url = new URL(job.href);
    if (url.protocol !== 'https:' || url.hostname !== 'www.zhipin.com'
        || url.pathname !== `/job_detail/${job.platformJobId}.html`) throw new Error('JOB_URL_MISMATCH');
    attempt = await reserveContactAttempt(page, job, state);
    if (!attempt.resumeConversation) {
      await page.goto(job.href, { waitUntil: 'domcontentloaded', timeout: 45_000 });
      const entry = page.locator('a.btn.btn-startchat:visible').first();
      await entry.waitFor({ state: 'visible', timeout: TIMEOUT });
      await attempt.update({ stage: 'CONTACT_OPENING', entryAttempted: true });
      await entry.click();
      await page.locator('#chat-input, textarea[placeholder="请简短描述您的问题"]')
        .first().waitFor({ state: 'visible', timeout: TIMEOUT });
    }
    const expected = await selectConversation(page, job);
    result.conversationEstablished = true;
    await verifyConversation(page, expected);
    await attempt.update({ stage: 'CONVERSATION_READY', conversationEstablished: true });
    await fillConversationDraft(page, input.greeting, expected);
    result.draftFilled = true;
    await attempt.update({ stage: 'DRAFT_READY', draftFilled: true });
    if (input.confirmContact === true) {
      await sendConversationGreeting(page, expected, input.greeting, {
        beforeSubmit: async () => {
          await attempt.update({ stage: 'TEXT_SUBMITTING', textAttempted: true });
          result.reason = 'TEXT_SEND_UNCERTAIN_VERIFY_PLATFORM';
        },
        onNotSubmitted: async () => {
          await attempt.update({ stage: 'DRAFT_READY', textAttempted: false });
          result.reason = undefined;
        },
      });
      result.textSent = true;
      result.reason = undefined;
      await attempt.update({ stage: 'TEXT_DELIVERED', textSent: true });
    }
    if (file) {
      await uploadImageOnce(page, expected, file, async () => {
        await attempt.update({ stage: 'IMAGE_SUBMITTING', imageAttempted: true });
        result.reason = 'IMAGE_SEND_UNCERTAIN_VERIFY_PLATFORM';
      });
      result.imageDelivered = true;
      await attempt.update({ stage: 'IMAGE_DELIVERED', imageDelivered: true });
    }
    result.status = 'SUCCEEDED';
    result.reason = result.textSent ? (file ? 'TEXT_AND_IMAGE_DELIVERED' : 'TEXT_DELIVERED')
      : file ? 'IMAGE_DELIVERED_TEXT_DRAFT_ONLY' : 'CONVERSATION_ESTABLISHED_TEXT_DRAFT_ONLY';
  } catch (error) {
    result.reason ||= error.message;
  } finally {
    if (attempt) {
      try {
        await attempt.update(result);
      } catch {
        result.status = 'FAILED';
        result.reason = 'CONTACT_JOURNAL_WRITE_FAILED_VERIFY_PLATFORM';
      } finally {
        await attempt.release();
      }
    }
  }
  return result;
}
