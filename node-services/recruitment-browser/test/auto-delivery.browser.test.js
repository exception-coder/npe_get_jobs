import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'patchright';

test('auto delivery requires edited text and consent, then supports stop', { skip: !process.env.NPE_UI_TEST_URL }, async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    let status = 'IDLE';
    let sends = 0;
    await page.route('**/api/recruitment/goals/active', route => route.fulfill({ contentType: 'application/json', body: JSON.stringify({ id: 1, summary: 'Java开发', confirmed: true }) }));
    await page.route('**/api/recruitment/auto-delivery**', async route => {
      if (route.request().method() === 'POST') {
        if (route.request().url().endsWith('/stop')) status = 'STOPPED';
        else {
          const body = route.request().postDataJSON();
          assert.equal(body.greeting, '您好，希望了解岗位。');
          assert.equal(body.confirmSend, true);
          status = 'RUNNING'; sends++;
        }
      }
      await route.fulfill({ contentType: 'application/json', body: JSON.stringify({ id: 'test', status, total: 10, checked: 0, sent: 0, message: '模拟任务' }) });
    });
    await page.route('**/__auto_preview', route => route.fulfill({ contentType: 'text/html', body: `<div id="app" style="max-width:800px;margin:auto"></div><script type="module">
      import {createApp,h} from '/node_modules/.vite/deps/vue.js';
      import Panel from '/src/features/run-workspace/ui/TodayAutoDelivery.vue';
      import '/src/styles/main.scss';
      createApp({render:()=>h(Panel,{platform:'boss'})}).mount('#app');</script>` }));
    await page.goto(process.env.NPE_UI_TEST_URL + '/__auto_preview');
    assert.equal(await page.getByRole('button', { name: '开始自动投递' }).isDisabled(), true);
    await page.getByLabel('自动打招呼文字').fill('您好，希望了解岗位。');
    await page.getByLabel('我已核对文字及当前意向，确认向匹配岗位真实发送').check();
    await page.getByRole('button', { name: '开始自动投递' }).click();
    await page.getByRole('button', { name: '停止后续投递' }).waitFor();
    assert.equal(sends, 1);
    await page.getByRole('button', { name: '停止后续投递' }).click();
    await page.screenshot({ path: process.env.TEMP + '/npe-auto-desktop.png' });
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ path: process.env.TEMP + '/npe-auto-mobile.png', fullPage: true });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  } finally { await browser.close(); }
});
