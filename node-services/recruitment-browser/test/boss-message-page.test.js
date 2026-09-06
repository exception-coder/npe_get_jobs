import test from 'node:test';
import assert from 'node:assert/strict';
import { openMessagePage, requireMatchingConversation, uploadConfirmedResumeImage } from '../src/platforms/boss/message-page.js';

const recipient = { platformJobId: 'job-1', company: 'Company', recruiterName: 'Recruiter' };

test('message navigation never visits a job or resume URL', async () => {
  let url = 'https://www.zhipin.com/job_detail/job-1.html';
  const destinations = [];
  const page = { url: () => url, goto: async target => { destinations.push(target); url = target; } };
  await openMessagePage(page);
  await openMessagePage(page);
  assert.deepEqual(destinations, ['https://www.zhipin.com/web/geek/chat']);
});

test('same company or newest conversation is insufficient evidence', () => {
  assert.throws(() => requireMatchingConversation(recipient, { ...recipient, platformJobId: 'other' }));
  assert.throws(() => requireMatchingConversation(recipient, { ...recipient, recruiterName: 'Other' }));
  assert.throws(() => requireMatchingConversation(recipient, { ...recipient, recruiterName: '' }));
  requireMatchingConversation(recipient, recipient);
});

test('unconfirmed images cannot reach the uploader', async () => {
  let uploads = 0;
  await assert.rejects(uploadConfirmedResumeImage({ upload: async () => uploads++ }, recipient, {}),
    /IMAGE_SEND_CONFIRMATION_REQUIRED/);
  assert.equal(uploads, 0);
});

test('confirmed image rechecks recipient and does not claim delivery', async () => {
  const input = { confirmImageSend: true, mimeType: 'image/png', base64: Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).toString('base64') };
  let uploads = 0;
  const upload = async () => uploads++;
  await assert.rejects(uploadConfirmedResumeImage({ readConversation: async () => ({ ...recipient, company: 'Other' }), upload }, recipient, input));
  assert.equal(uploads, 0);
  const result = await uploadConfirmedResumeImage({ readConversation: async () => recipient, upload }, recipient, input);
  assert.equal(uploads, 1);
  assert.equal(result.delivered, false);
});
