export const BOSS_MESSAGE_URL = 'https://www.zhipin.com/web/geek/chat';

/** Navigation is restricted to the message page, never a resume or job-detail page. */
export async function openMessagePage(page) {
  const current = new URL(page.url());
  if (current.hostname !== 'www.zhipin.com' || current.pathname !== '/web/geek/chat') {
    await page.goto(BOSS_MESSAGE_URL, { waitUntil: 'domcontentloaded', timeout: 45_000 });
  }
  if (new URL(page.url()).pathname !== '/web/geek/chat') {
    throw new Error('MESSAGE_PAGE_UNAVAILABLE');
  }
}

/** Requires identity evidence from the active conversation, not the complete page/sidebar. */
export function requireMatchingConversation(expected, actual) {
  const normalize = value => String(value ?? '').trim();
  const expectedId = normalize(expected.platformJobId);
  const actualId = normalize(actual.platformJobId);
  if (!expectedId || !actualId || expectedId !== actualId) throw new Error('CONVERSATION_JOB_MISMATCH');
  for (const field of ['company', 'recruiterName']) {
    if (!normalize(expected[field]) || normalize(expected[field]) !== normalize(actual[field])) {
      throw new Error('CONVERSATION_RECIPIENT_MISMATCH');
    }
  }
}

/** Upload is consequential: only an explicitly confirmed PNG/JPEG payload is accepted. */
export function requireConfirmedImage(input) {
  if (input.confirmImageSend !== true) throw new Error('IMAGE_SEND_CONFIRMATION_REQUIRED');
  if (!['image/png', 'image/jpeg'].includes(input.mimeType)) throw new Error('UNSUPPORTED_IMAGE_TYPE');
  if (typeof input.base64 !== 'string' || input.base64.length > 7_000_000
      || !/^[A-Za-z0-9+/]+={0,2}$/.test(input.base64)) throw new Error('INVALID_IMAGE_PAYLOAD');
  const buffer = Buffer.from(input.base64, 'base64');
  const png = buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const jpeg = buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255;
  if (buffer.length > 5 * 1024 * 1024 || !(input.mimeType === 'image/png' ? png : jpeg)) {
    throw new Error('INVALID_IMAGE_PAYLOAD');
  }
  return { name: input.mimeType === 'image/png' ? 'resume.png' : 'resume.jpg', mimeType: input.mimeType, buffer };
}

/** Revalidates immediately before upload; never automatically retries an uncertain upload. */
export async function uploadConfirmedResumeImage({ readConversation, upload }, expected, input) {
  const file = requireConfirmedImage(input);
  requireMatchingConversation(expected, await readConversation());
  await upload(file);
  return { status: 'UPLOAD_SUBMITTED', delivered: false, requiresPlatformVerification: true };
}
