import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'patchright';

test('auto delivery requires edited text and consent, then supports stop', { skip: !process.env.NPE_UI_TEST_URL }, async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    let status = 'IDLE';
    let sends = 0;
    const outcomes = [
      ...Array.from({ length: 45 }, (_, index) => ({ platformJobId: `rejected-${index}`, title: `不匹配岗位 ${index}`, company: '测试公司',
        href: `https://www.zhipin.com/job_detail/rejected-${index}.html`, status: 'SKIPPED', decision: 'REJECTED', confidence: 'high', reason: '存在明确经验冲突' })),
      ...Array.from({ length: 35 }, (_, index) => ({ platformJobId: `uncertain-${index}`, title: `待判断岗位 ${index}`, company: '测试公司',
        href: `https://www.zhipin.com/job_detail/uncertain-${index}.html`, status: 'SKIPPED', decision: 'UNCERTAIN', confidence: 'low', reason: '关键信息不足，请先核实' })),
    ];
    await page.route('**/api/recruitment/goals/active', route => route.fulfill({ contentType: 'application/json', body: JSON.stringify({ id: 1, summary: 'Java开发', confirmed: true }) }));
    await page.route('**/api/recruitment/auto-delivery**', async route => {
      if (route.request().method() === 'POST') {
        if (route.request().url().endsWith('/stop')) status = 'STOPPED';
        else {
          const body = route.request().postDataJSON();
          assert.equal(body.greeting, '您好，希望了解岗位。');
          assert.equal(body.decisionGuidance, 'JD 未写年限时不限制');
          assert.equal(body.confirmSend, true);
          status = 'RUNNING'; sends++;
        }
      }
      await route.fulfill({ contentType: 'application/json', body: JSON.stringify({ id: 'test', status, total: 10, checked: 1, sent: 0,
        message: '模拟任务', outcomes }) });
    });
    await page.route('**/__auto_preview', route => route.fulfill({ contentType: 'text/html', body: `<div id="app" style="max-width:800px;margin:auto"></div><script type="module">
      import {createApp,h} from '/node_modules/.vite/deps/vue.js';
      import Panel from '/src/features/run-workspace/ui/TodayAutoDelivery.vue';
      import '/src/styles/main.scss';
      createApp({render:()=>h(Panel,{platform:'boss'})}).mount('#app');</script>` }));
    await page.goto(process.env.NPE_UI_TEST_URL + '/__auto_preview');
    assert.equal(await page.getByRole('button', { name: '开始自动投递' }).isDisabled(), true);
    await page.getByLabel('自动打招呼文字').fill('您好，希望了解岗位。');
    await page.getByLabel('补充判定规则（可选）').fill('JD 未写年限时不限制');
    await page.reload();
    assert.equal(await page.getByLabel('自动打招呼文字').inputValue(), '您好，希望了解岗位。');
    assert.equal(await page.getByLabel('补充判定规则（可选）').inputValue(), 'JD 未写年限时不限制');
    assert.equal(await page.getByLabel('我已核对文字及当前意向，确认向匹配岗位真实发送').isChecked(), false);
    await page.getByLabel('我已核对文字及当前意向，确认向匹配岗位真实发送').check();
    await page.getByRole('button', { name: '开始自动投递' }).click();
    await page.getByRole('button', { name: '停止后续投递' }).waitFor();
    assert.equal(await page.locator('.outcome-group.negative article').count(), 20);
    assert.equal(await page.locator('.outcome-group.warning article').count(), 20);
    assert.match(await page.locator('.delivery-results').innerText(), /明确不符合[\s\S]*无法判定/);
    assert.equal(await page.getByRole('link', { name: '查看原岗位 JD' }).first().getAttribute('href'),
      'https://www.zhipin.com/job_detail/rejected-0.html');
    await page.locator('.outcome-group.negative').getByRole('button', { name: /再显示/ }).click();
    assert.equal(await page.locator('.outcome-group.negative article').count(), 40);
    assert.equal(sends, 1);
    await page.getByRole('button', { name: '停止后续投递' }).click();
    await page.screenshot({ path: process.env.TEMP + '/npe-auto-desktop.png' });
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ path: process.env.TEMP + '/npe-auto-mobile.png', fullPage: true });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  } finally { await browser.close(); }
});
