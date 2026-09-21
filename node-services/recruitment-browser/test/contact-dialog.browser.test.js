import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'patchright';

test('contact dialog requires image path and emits per-attempt consent',
  { skip: !process.env.NPE_UI_TEST_URL }, async () => {
    const browser = await chromium.launch({ channel: 'chrome', headless: true });
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
      const origin = process.env.NPE_UI_TEST_URL;
      await page.route('**/api/common/config/get', route => route.fulfill({
        contentType: 'application/json', body: JSON.stringify({ data: { sendImgResume: false } }),
      }));
      await page.route('**/__contact_preview', route => route.fulfill({
        contentType: 'text/html; charset=utf-8', body: `<div id="app"></div><script type="module">
        import {createApp, ref, h} from '/node_modules/.vite/deps/vue.js';
        import Dialog from '/src/features/run-workspace/ui/ContactConfirmationDialog.vue';
        import '/src/styles/main.scss';
        createApp({setup(){const open=ref(false);const greeting=ref(localStorage.getItem('career-flow:last-contact-greeting')||'您好，希望进一步交流。');setTimeout(()=>open.value=true,100);
          return ()=>h(Dialog,{open:open.value,job:{title:'Java开发工程师',company:'测试公司'},
            platformName:'BOSS',greeting:greeting.value,preparation:{status:'READY'},
            'onUpdate:greeting':value=>greeting.value=value,
            submitting:false,draftOnly:true,onConfirm:options=>document.body.dataset.confirmed=JSON.stringify(options)});
          }}).mount('#app');
        </script>`,
      }));
      await page.goto(origin + '/__contact_preview');
      await page.getByLabel('发送内容').fill('这是刷新后仍需保留的发送内容');
      await page.reload();
      assert.equal(await page.getByLabel('发送内容').inputValue(), '这是刷新后仍需保留的发送内容');
      const checkbox = page.getByLabel('同时发送图片简历');
      await checkbox.check();
      const submit = page.getByRole('button', { name: '确认发送文字和图片' });
      assert.equal(await submit.isDisabled(), true);
      await page.getByLabel('图片简历绝对路径').fill('C:\\fixtures\\resume.png');
      assert.equal(await submit.isEnabled(), true);
      await page.screenshot({ path: process.env.TEMP + '/npe-contact-desktop.png', fullPage: true });
      await submit.click();
      assert.deepEqual(JSON.parse(await page.locator('body').getAttribute('data-confirmed')),
        { sendResumeImage: true, resumeImagePath: 'C:\\fixtures\\resume.png', sendGreeting: true });
      await page.setViewportSize({ width: 375, height: 812 });
      await page.screenshot({ path: process.env.TEMP + '/npe-contact-mobile.png', fullPage: true });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      await checkbox.uncheck();
      await page.getByRole('button', { name: '确认发送消息' }).click();
      assert.equal(JSON.parse(await page.locator('body').getAttribute('data-confirmed')).sendResumeImage, false);
      assert.equal(JSON.parse(await page.locator('body').getAttribute('data-confirmed')).sendGreeting, true);
    } finally { await browser.close(); }
  });
