import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'patchright';
import { mkdtemp, writeFile, rm, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { contactThroughMessagePage, readResumeImage, verifyConversation, fillConversationDraft, sendConversationGreeting, selectConversation } from '../src/platforms/boss/contact-workflow.js';

const job = { platformJobId: 'fixture-job', company: '测试公司', title: 'Java开发',
  href: 'https://www.zhipin.com/job_detail/fixture-job.html', facts: { recruiterName: '测试联系人' } };
const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aP9sAAAAASUVORK5CYII=';

async function fixture(run, options = {}) {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  const visits = [];
  await page.route('**/*', async route => {
    const url = route.request().url();
    visits.push(url);
    const html = url.includes('/job_detail/')
      ? '<a class="btn btn-startchat" onclick="document.querySelector(\'textarea\').hidden=false">立即沟通</a><a class="btn btn-startchat" onclick="document.querySelector(\'textarea\').hidden=false">立即沟通</a><textarea hidden placeholder="请简短描述您的问题"></textarea>'
      : `<div role="listitem"><span class="name-box" onclick="document.querySelector('.chat-conversation').hidden=false"><span class="name-text">测试联系人</span>${options.companyOutside ? '' : '测试公司'}</span>${options.companyOutside ? '<span>测试公司</span>' : ''}</div>
        <div class="chat-conversation" hidden><div>测试联系人</div><div>测试公司</div><div>Java开发</div>
        <div id="chat-input" contenteditable="true"></div>
        <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" onchange="const box=document.createElement('div');box.innerHTML='<img class=message-image src=data:image/png;base64,${png}>送达';this.parentElement.append(box)">
        ${options.noButton ? '' : `<button ${options.semanticButton ? '' : 'class="btn-send"'} ${options.disabled ? 'disabled' : ''} onclick="document.body.dataset.sendClicks=String(Number(document.body.dataset.sendClicks||0)+1);submitFixtureMessage()">发送</button>`}</div>
        <script>
          const options = ${JSON.stringify(options)};
          const editor = document.querySelector('#chat-input');
          if (options.lateButton) {
            setTimeout(() => {
              const button = document.createElement('button'); button.className = 'btn-send'; button.textContent = '发送';
              button.onclick = () => submitFixtureMessage(); editor.parentElement.append(button);
            }, 1800);
          }
          window.submitFixtureMessage = () => {
            document.body.dataset.submissions = String(Number(document.body.dataset.submissions || 0) + 1);
            const greeting = editor.innerText;
            if (options.noReceipt) return;
            setTimeout(() => {
              const bubble = document.createElement('div');
              const text = document.createElement('span'); text.style.whiteSpace = 'pre-wrap'; text.textContent = greeting;
              bubble.append(text, document.createTextNode(options.receiptText || '送达'));
              editor.parentElement.append(bubble); editor.innerHTML = '';
              if (options.removeEditor) editor.remove();
            }, options.receiptDelay || 0);
          };
          editor.addEventListener('keydown', event => {
            if (event.key === 'Enter' && !event.ctrlKey) {
              event.preventDefault();
              document.body.dataset.enterPresses = String(Number(document.body.dataset.enterPresses || 0) + 1);
              if (options.enterSends !== false) submitFixtureMessage();
            }
          });
          editor.addEventListener('keyup', () => {
            if (options.requireKeyUp && editor.innerText.trim()) document.querySelector('button').disabled = false;
          });
          editor.addEventListener('input', () => {
            document.body.dataset.inputs = String(Number(document.body.dataset.inputs || 0) + 1);
            if (options.ignoreFirstFill && document.body.dataset.inputs === '1') editor.innerHTML = '';
            if (options.corruptDraft) editor.innerText = '被页面改写的不同正文';
            if (options.userEditsDraft) setTimeout(() => { editor.innerText = '用户后来填写的正文'; }, 200);
            if (options.enableButtonAfterInput) {
              setTimeout(() => { document.querySelector('button').disabled = false; }, 300);
            }
          });
        </script>`;
    await route.fulfill({ contentType: 'text/html; charset=utf-8', body: html });
  });
  try { await run(page, visits); } finally { await browser.close(); }
}

test('draft-only recovery returns directly to chat without another contact-entry click', async () => {
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
    assert.equal(repeated.status, 'SUCCEEDED', JSON.stringify(repeated));
    assert.equal(visits.filter(url => url.includes('/job_detail/')).length, 1);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  });
});

test('explicit text send requires a new delivered message and clears the draft', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好' });
    await sendConversationGreeting(page, { ...job, recruiterName: '测试联系人' }, '您好');
    assert.equal(await page.locator('#chat-input').innerText(), '');
  });
});

test('explicitly confirmed contact submits through the verified send button exactly once', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, {
      greeting: '您好', confirmContact: true, deliveryOptions: { sendGreeting: false },
    });
    assert.equal(result.status, 'SUCCEEDED', JSON.stringify(result));
    assert.equal(result.textSent, true);
    assert.equal(result.reason, 'TEXT_DELIVERED');
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
    assert.equal(await page.locator('body').getAttribute('data-send-clicks'), '1');
    const repeated = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true });
    assert.equal(repeated.reason, 'CONTACT_ALREADY_ATTEMPTED_VERIFY_PLATFORM');
    assert.equal(await page.locator('body').getAttribute('data-submissions'), '1');
  });
});

test('draft-only journal can resume in a new browser session without reopening contact', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'boss-journal-test-'));
  const state = { contactJournalDirectory: directory };
  try {
    await fixture(async page => {
      const result = await contactThroughMessagePage(page, job, { greeting: '您好' }, state);
      assert.equal(result.status, 'SUCCEEDED', result.reason);
    });
    await fixture(async (page, visits) => {
      const result = await contactThroughMessagePage(page, job, { greeting: '您好' }, state);
      assert.equal(result.status, 'SUCCEEDED', JSON.stringify(result));
      assert.equal(visits.some(url => url.includes('/job_detail/')), false);
    });
  } finally { await rm(directory, { recursive: true }); }
});

test('contenteditable formatting and blank trailing lines verify without a send key', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好\n期待沟通' });
    await page.locator('#chat-input').evaluate(element => {
      element.innerHTML = '<div>您好</div><div>期待沟通</div><div><br></div>';
    });
    await fillConversationDraft(page, '您好\r\n期待沟通');
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  });
});

test('ignored initial fill uses text insertion without pressing Enter or submitting', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好\n期待沟通' });
    assert.equal(result.status, 'SUCCEEDED', JSON.stringify(result));
    assert.equal(await page.locator('#chat-input').innerText(), '您好\n期待沟通');
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  }, { ignoreFirstFill: true });
});

test('semantic send button works even when Enter is configured not to send', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true });
    assert.equal(result.textSent, true, JSON.stringify(result));
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), '1');
  }, { semanticButton: true, enterSends: false });
});

test('send waits for the reactive button to become enabled after filling', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true });
    assert.equal(result.textSent, true, JSON.stringify(result));
    assert.equal(await page.locator('body').getAttribute('data-submissions'), '1');
  }, { disabled: true, enableButtonAfterInput: true });
});

test('multiline greeting is verified against its own new receipt', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好\n期待进一步沟通', confirmContact: true });
    assert.equal(result.textSent, true, JSON.stringify(result));
    assert.equal(await page.locator('body').getAttribute('data-submissions'), '1');
  });
});

test('missing send control never guesses Enter or marks a submission', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true });
    assert.equal(result.reason, 'CHAT_SEND_ACTION_UNAVAILABLE');
    assert.equal(result.textSent, false);
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  }, { noButton: true });
});

test('reactive readiness refreshes identical multiline draft without sending during preparation', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好\n期待沟通' });
    assert.equal(await page.locator('.btn-send').isEnabled(), true);
    assert.equal(await page.locator('#chat-input').innerText(), '您好\n期待沟通');
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  }, { disabled: true, requireKeyUp: true });
});

test('native refresh never overwrites a draft changed while waiting for button readiness', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好' });
    assert.equal(result.reason, 'EXISTING_DRAFT_NOT_OVERWRITTEN');
    assert.equal(await page.locator('#chat-input').innerText(), '用户后来填写的正文');
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
  }, { disabled: true, userEditsDraft: true });
});

test('late-mounted button is resolved rather than submitting with an unverified Enter', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true });
    assert.equal(result.textSent, true, JSON.stringify(result));
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), '1');
  }, { noButton: true, lateButton: true, receiptDelay: 1200 });
});

test('exact recruiter can be selected when company is outside name-box', async () => {
  await fixture(async page => {
    const result = await contactThroughMessagePage(page, job, { greeting: '您好' });
    assert.equal(result.status, 'SUCCEEDED', JSON.stringify(result));
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  }, { companyOutside: true });
});

test('verified active conversation is reusable without any rendered sidebar contacts', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好' });
    await page.locator('.name-box').evaluate(element => element.remove());
    const expected = await selectConversation(page, job);
    assert.equal(expected.recruiterName, job.facts.recruiterName);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  });
});

test('lazy contact lookup scrolls only the contact list and verifies identity before drafting', async () => {
  await fixture(async page => {
    await page.goto('https://www.zhipin.com/web/geek/chat');
    await page.locator('.name-box').evaluate(element => {
      const row = element.parentElement;
      const list = document.createElement('div'); list.id = 'contacts';
      list.style.cssText = 'height:100px;overflow-y:auto';
      row.before(list);
      list.innerHTML = '<div style="height:500px"><span class="name-box"><span class="name-text">其他联系人</span>其他公司</span></div>';
      row.hidden = true; list.append(row);
      list.addEventListener('scroll', () => { row.hidden = false; row.scrollIntoView({ block: 'nearest' }); }, { once: true });
    });
    const expected = await selectConversation(page, job);
    assert.equal(expected.recruiterName, job.facts.recruiterName);
    assert.ok(await page.locator('#contacts').evaluate(element => element.scrollTop) > 0);
    assert.equal(await page.locator('#chat-input').innerText(), '');
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  });
});

test('duplicate recruiter names without unique company evidence block before editing', async () => {
  await fixture(async page => {
    await page.goto('https://www.zhipin.com/web/geek/chat');
    await page.locator('.name-box').evaluate(element => element.after(element.cloneNode(true)));
    await assert.rejects(selectConversation(page, job), /AMBIGUOUS_CONVERSATION/);
    assert.equal(await page.locator('#chat-input').textContent(), '');
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  }, { companyOutside: true });
});

test('unique recruiter with mismatched conversation company never receives a draft', async () => {
  await fixture(async page => {
    await page.goto('https://www.zhipin.com/web/geek/chat');
    await assert.rejects(selectConversation(page, { ...job, company: '另一家公司' }), /CONVERSATION_RECIPIENT_MISMATCH/);
    assert.equal(await page.locator('#chat-input').innerText(), '');
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  }, { companyOutside: true });
});

test('disabled send control fails before submission and can resume the verified draft', async () => {
  await fixture(async (page, visits) => {
    const first = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true });
    assert.equal(first.reason, 'CHAT_SEND_ACTION_UNAVAILABLE');
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
    const second = await contactThroughMessagePage(page, job, { greeting: '您好' });
    assert.equal(second.status, 'SUCCEEDED', JSON.stringify(second));
    assert.equal(visits.filter(url => url.includes('/job_detail/')).length, 1);
  }, { disabled: true });
});

test('existing receipt cannot prove a new send and mismatched draft cannot be submitted', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好' });
    const expected = { ...job, recruiterName: '测试联系人' };
    await assert.rejects(sendConversationGreeting(page, expected, '不同正文'), /DRAFT_VERIFICATION_FAILED/);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
    await page.locator('.chat-conversation').evaluate(element => {
      const bubble = document.createElement('div'); bubble.innerHTML = '<span>您好</span>送达'; element.append(bubble);
    });
    await assert.rejects(sendConversationGreeting(page, expected, '您好', { receiptTimeoutMs: 300 }),
      /TEXT_SEND_UNCERTAIN_VERIFY_PLATFORM/);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), '1');
  }, { noReceipt: true });
});

test('recipient change while reserving submission prevents any send action', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好' });
    await assert.rejects(sendConversationGreeting(page, { ...job, recruiterName: '测试联系人' }, '您好', {
      beforeSubmit: async () => {
        await page.getByText('测试公司', { exact: true }).last().evaluate(element => { element.textContent = '另一家公司'; });
      },
    }), /CONVERSATION_RECIPIENT_MISMATCH/);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  });
});

test('button disabled during submission reservation is rechecked before clicking', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好' });
    await assert.rejects(sendConversationGreeting(page, { ...job, recruiterName: '测试联系人' }, '您好', {
      beforeSubmit: async () => {
        await page.locator('.btn-send').evaluate(element => { element.classList.add('is-disabled'); });
      },
    }), /CHAT_SEND_ACTION_UNAVAILABLE/);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
    assert.equal(await page.locator('body').getAttribute('data-enter-presses'), null);
  });
});

test('multiple enabled send controls do not pick an arbitrary recipient action', async () => {
  await fixture(async page => {
    await contactThroughMessagePage(page, job, { greeting: '您好' });
    await page.locator('.btn-send').evaluate(element => { element.parentElement.append(element.cloneNode(true)); });
    await assert.rejects(sendConversationGreeting(page, { ...job, recruiterName: '测试联系人' }, '您好'),
      /CHAT_SEND_ACTION_AMBIGUOUS/);
    assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
  });
});

test('failed receipt text and missing editor cannot be mistaken for delivery', async () => {
  for (const options of [{ receiptText: '未送达' }, { removeEditor: true }]) {
    await fixture(async page => {
      await contactThroughMessagePage(page, job, { greeting: '您好' });
      await assert.rejects(sendConversationGreeting(page, { ...job, recruiterName: '测试联系人' }, '您好', {
        receiptTimeoutMs: 300,
      }), /TEXT_SEND_UNCERTAIN_VERIFY_PLATFORM/);
      assert.equal(await page.locator('body').getAttribute('data-submissions'), '1');
    }, options);
  }
});

test('failed draft verification persists a safe stage and resumes chat instead of repeating contact', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'boss-safe-draft-test-'));
  const state = { contactJournalDirectory: directory };
  try {
    await fixture(async page => {
      const result = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true }, state);
      assert.equal(result.reason, 'DRAFT_VERIFICATION_FAILED');
      assert.equal(await page.locator('body').getAttribute('data-submissions'), null);
    }, { corruptDraft: true });
    const path = join(directory, (await readdir(directory)).find(name => name.endsWith('.json')));
    const record = JSON.parse(await readFile(path, 'utf8'));
    assert.equal(record.conversationEstablished, true);
    assert.equal(record.textAttempted, false);
    await fixture(async (page, visits) => {
      const result = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true }, state);
      assert.equal(result.textSent, true, JSON.stringify(result));
      assert.equal(visits.some(url => url.includes('/job_detail/')), false);
    });
    await fixture(async (page, visits) => {
      const result = await contactThroughMessagePage(page, job, { greeting: '您好', confirmContact: true }, state);
      assert.equal(result.reason, 'CONTACT_ALREADY_ATTEMPTED_VERIFY_PLATFORM');
      assert.equal(visits.length, 0);
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
