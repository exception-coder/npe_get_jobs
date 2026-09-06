import { readFile, stat, mkdir, open, writeFile } from 'node:fs/promises';
import { isAbsolute, extname, join } from 'node:path';
import { createHash } from 'node:crypto';
import { openMessagePage, requireConfirmedImage } from './message-page.js';

const EDITOR = '#chat-input[contenteditable="true"]';
const IMAGE_INPUT = 'input[type="file"][accept="image/gif,image/jpeg,image/jpg,image/png"]';
const TIMEOUT = 15_000;
const attemptedJobsByPage = new WeakMap();

async function reserveAttempt(page, job, state) {
  if (!job.platformJobId) throw new Error('JOB_ID_REQUIRED');
  const attempts = attemptedJobsByPage.get(page) || new Set();
  let journalPath;
  if (attempts.has(job.platformJobId)) throw new Error('CONTACT_ALREADY_ATTEMPTED_VERIFY_PLATFORM');
  if (state?.contactJournalDirectory) {
    await mkdir(state.contactJournalDirectory, { recursive: true });
    const key = createHash('sha256').update(job.platformJobId).digest('hex');
    journalPath = join(state.contactJournalDirectory, key + '.json');
    let handle;
    try {
      handle = await open(journalPath, 'wx');
      await handle.writeFile(JSON.stringify({ platformJobId: job.platformJobId, startedAt: new Date().toISOString() }));
    } catch (error) {
      if (error.code === 'EEXIST') throw new Error('CONTACT_ALREADY_ATTEMPTED_VERIFY_PLATFORM');
      throw error;
    } finally { await handle?.close(); }
  }
  attempts.add(job.platformJobId);
  attemptedJobsByPage.set(page, attempts);
  return journalPath;
}

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
  if (!job.company?.trim() || !job.title?.trim()) throw new Error('RECIPIENT_IDENTITY_REQUIRED');
  await openMessagePage(page);
  let contacts = page.locator('.name-box').filter({ hasText: job.company });
  if (job.facts?.recruiterName) {
    contacts = contacts.filter({ has: page.getByText(job.facts.recruiterName, { exact: true }) });
  }
  await contacts.first().waitFor({ state: 'visible', timeout: TIMEOUT });
  if (await contacts.count() !== 1) throw new Error('AMBIGUOUS_CONVERSATION');
  const recruiter = (await contacts.locator('.name-text').innerText()).trim();
  await contacts.click();
  await page.locator(EDITOR).waitFor({ state: 'visible', timeout: TIMEOUT });
  await page.waitForFunction(({ company, title, recruiterName }) => {
    const lines = document.querySelector('.chat-conversation')?.innerText.split('\n').map(s => s.trim()) || [];
    return [company, title, recruiterName].every(value => lines.includes(value));
  }, { company: job.company, title: job.title, recruiterName: recruiter }, { timeout: TIMEOUT });
  return { ...job, recruiterName: recruiter };
}

export async function verifyConversation(page, expected) {
  const url = new URL(page.url());
  if (url.hostname !== 'www.zhipin.com' || url.pathname !== '/web/geek/chat') throw new Error('MESSAGE_PAGE_UNAVAILABLE');
  const lines = (await page.locator('.chat-conversation').innerText()).split('\n').map(s => s.trim());
  if (![expected.company, expected.title, expected.recruiterName].every(value => value && lines.includes(value))) {
    throw new Error('CONVERSATION_RECIPIENT_MISMATCH');
  }
}

export async function fillConversationDraft(page, greeting) {
  if (!greeting?.trim() || greeting.length > 500) throw new Error('INVALID_GREETING');
  const editor = page.locator(EDITOR);
  const existing = await editor.innerText();
  if (existing.trim() && existing !== greeting) throw new Error('EXISTING_DRAFT_NOT_OVERWRITTEN');
  await editor.fill(greeting);
  if (await editor.innerText() !== greeting) throw new Error('DRAFT_VERIFICATION_FAILED');
}

async function uploadImageOnce(page, expected, file) {
  await verifyConversation(page, expected);
  const input = page.locator(IMAGE_INPUT);
  if (await input.count() !== 1) throw new Error('IMAGE_INPUT_AMBIGUOUS');
  const images = page.locator('.chat-conversation img.message-image');
  const before = await images.count();
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

/** Sends once only after explicit consent and verifies a receipt in the selected conversation. */
export async function sendConversationGreeting(page, expected, greeting) {
  await verifyConversation(page, expected);
  const send = page.locator('.chat-conversation').getByRole('button', { name: '发送', exact: true });
  if (await send.count() !== 1) throw new Error('TEXT_SEND_BUTTON_AMBIGUOUS');
  const before = await page.evaluate(textReceiptCount, { text: greeting });
  await send.click();
  await page.waitForFunction(textReceiptCount, { text: greeting, before }, { timeout: TIMEOUT });
  await verifyConversation(page, expected);
}

function textReceiptCount({ text, before }) {
    const editor = document.querySelector('#chat-input');
    const count = [...document.querySelectorAll('.chat-conversation *')].filter(node => {
      if (node.children.length || node.closest('[contenteditable="true"]') || node.textContent.trim() !== text) return false;
      let parent = node.parentElement;
      for (let depth = 0; parent && depth < 4; depth++, parent = parent.parentElement) {
        if (parent.classList.contains('chat-conversation')) return false;
        if (/送达|已读/.test(parent.innerText)) return true;
      }
      return false;
    }).length;
    return before === undefined ? count : !editor?.innerText.trim() && count > before;
}

/** Establishes contact before entering chat; uncertain sends are never retried. */
export async function contactThroughMessagePage(page, job, input, state) {
  const result = { platformJobId: job.platformJobId, status: 'FAILED',
    conversationEstablished: false, textSent: false, draftFilled: false, imageDelivered: false };
  let journalPath;
  try {
    const file = await readResumeImage(input.deliveryOptions);
    if (!input.greeting?.trim()) throw new Error('GREETING_REQUIRED');
    const url = new URL(job.href);
    if (url.protocol !== 'https:' || url.hostname !== 'www.zhipin.com'
        || url.pathname !== `/job_detail/${job.platformJobId}.html`) throw new Error('JOB_URL_MISMATCH');
    await page.goto(job.href, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    const entry = page.locator('a.btn.btn-startchat');
    await entry.waitFor({ state: 'visible', timeout: TIMEOUT });
    journalPath = await reserveAttempt(page, job, state);
    await entry.click();
    await page.locator('#chat-input, textarea[placeholder="请简短描述您的问题"]')
      .first().waitFor({ state: 'visible', timeout: TIMEOUT });
    const expected = await selectConversation(page, job);
    result.conversationEstablished = true;
    await verifyConversation(page, expected);
    await fillConversationDraft(page, input.greeting);
    result.draftFilled = true;
    if (input.deliveryOptions?.sendGreeting === true) {
      result.reason = 'TEXT_SEND_UNCERTAIN_VERIFY_PLATFORM';
      await sendConversationGreeting(page, expected, input.greeting);
      result.textSent = true;
      result.reason = undefined;
    }
    if (file) {
      result.reason = 'IMAGE_SEND_UNCERTAIN_VERIFY_PLATFORM';
      await uploadImageOnce(page, expected, file);
      result.imageDelivered = true;
    }
    result.status = 'SUCCEEDED';
    result.reason = result.textSent ? (file ? 'TEXT_AND_IMAGE_DELIVERED' : 'TEXT_DELIVERED')
      : file ? 'IMAGE_DELIVERED_TEXT_DRAFT_ONLY' : 'CONVERSATION_ESTABLISHED_TEXT_DRAFT_ONLY';
  } catch (error) {
    result.reason ||= error.message;
  } finally {
    if (journalPath) await writeFile(journalPath, JSON.stringify({ ...result, recordedAt: new Date().toISOString() }));
  }
  return result;
}
