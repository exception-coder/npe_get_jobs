import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'patchright';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { contactThroughMessagePage, readResumeImage, verifyConversation, fillConversationDraft, sendConversationGreeting } from '../src/platforms/boss/contact-workflow.js';

const job = { platformJobId: 'fixture-job', company: '测试公司', title: 'Java开发',
  href: 'https://www.zhipin.com/job_detail/fixture-job.html', facts: { recruiterName: '测试联系人' } };
const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aP9sAAAAASUVORK5CYII=';

async function fixture(run) {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  const visits = [];
  await page.route('**/*', async route => {
    const url = route.request().url();
    visits.push(url);
    const html = url.includes('/job_detail/')
      ? '<a class="btn btn-startchat" onclick="document.querySelector(\'textarea\').hidden=false">立即沟通</a><textarea hidden placeholder="请简短描述您的问题"></textarea>'
      : `<span class="name-box" onclick="document.querySelector('.chat-conversation').hidden=false"><span class="name-text">测试联系人</span>测试公司</span>
        <div class="chat-conversation" hidden><div>测试联系人</div><div>测试公司</div><div>Java开发</div>
        <div id="chat-input" contenteditable="true"></div>
        <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" onchange="const box=document.createElement('div');box.innerHTML='<img class=message-image src=data:image/png;base64,${png}>送达';this.parentElement.append(box)">
        <button class="btn-send" onclick="throw Error('TEXT_SEND_FORBIDDEN')">发送</button></div>`;
    await route.fulfill({ contentType: 'text/html; charset=utf-8', body: html });
  });
  try { await run(page, visits); } finally { await browser.close(); }
}

test('draft flow establishes contact before chat and never uploads by default', async () => {
  await fixture(async (page, visits) => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好' });
    assert.equal(result.status, 'SUCCEEDED', JSON.stringify(result));
    assert.equal(result.draftFilled, true);
    assert.equal(result.textSent, false);
    assert.equal(result.imageDelivered, false);
    assert.equal(await page.locator('#chat-input').innerText(), '您好');
    await assert.rejects(() => verifyConversation(page, { ...job, recruiterName: '另一位联系人' }), /MISMATCH/);
    await assert.rejects(() => fillConversationDraft(page, '其它草稿'), /NOT_OVERWRITTEN/);
    assert.match(visits[0], /job_detail/);
    assert.match(visits[1], /geek\/chat/);
    const repeated = await contactThroughMessagePage(page, job, { greeting: '您好' });
    assert.match(repeated.reason, /ALREADY_ATTEMPTED/);
  });
});

test('explicit text send requires a new delivered message and clears the draft', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好' });
    await page.locator('.btn-send').evaluate(button => {
      button.onclick = () => {
        const editor = document.querySelector('#chat-input');
        const bubble = document.createElement('div');
        const text = document.createElement('span');
        text.textContent = editor.innerText;
        bubble.append(text, document.createTextNode('送达'));
        button.parentElement.append(bubble);
        editor.innerText = '';
      };
    });
    await sendConversationGreeting(page, { ...job, recruiterName: '测试联系人' }, '您好');
    assert.equal(await page.locator('#chat-input').innerText(), '');
  });
});

test('attempt reservation survives a new browser session', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'boss-journal-test-'));
  const state = { contactJournalDirectory: directory };
  try {
    await fixture(async page => {
      const result = await contactThroughMessagePage(page, job, { greeting: '您好' }, state);
      assert.equal(result.status, 'SUCCEEDED', result.reason);
    });
    await fixture(async page => {
      const result = await contactThroughMessagePage(page, job, { greeting: '您好' }, state);
      assert.equal(result.reason, 'CONTACT_ALREADY_ATTEMPTED_VERIFY_PLATFORM');
    });
  } finally { await rm(directory, { recursive: true }); }
});

test('invalid image is rejected before navigation and absent image is ignored', async () => {
  assert.equal(await readResumeImage({ sendResumeImage: false, resumeImagePath: 'invalid' }), null);
  const result = await contactThroughMessagePage({}, job, {
    greeting: '您好', deliveryOptions: { sendResumeImage: true, resumeImagePath: 'relative.png' },
  });
  assert.equal(result.reason, 'INVALID_RESUME_IMAGE_PATH');
  assert.equal(result.conversationEstablished, false);
});

test('confirmed image uploads once to a local fixture and requires a receipt', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'boss-image-test-'));
  const path = join(directory, 'resume.png');
  await writeFile(path, Buffer.from(png, 'base64'));
  try {
    await fixture(async page => {
      const result = await contactThroughMessagePage(page, job, { greeting: '您好',
        deliveryOptions: { sendResumeImage: true, resumeImagePath: path } });
      assert.equal(result.imageDelivered, true, JSON.stringify(result));
      assert.equal(result.textSent, false);
      assert.equal(await page.locator('img.message-image').count(), 1);
    });
  } finally { await rm(directory, { recursive: true }); }
});
