import test from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'patchright';

test('homepage model setup retains input on failure and clears key after saving',
  { skip: !process.env.NPE_UI_TEST_URL }, async () => {
    const browser = await chromium.launch({ channel: 'chrome', headless: true });
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
      let fail = true;
      await page.route('**/api/recruitment/profile', route => route.fulfill({ contentType: 'application/json',
        body: JSON.stringify({ selfIntroduction: '', introductionRequired: false }) }));
      await page.route('**/api/recruitment/model-settings', async route => {
        if (route.request().method() === 'PUT') {
          const body = route.request().postDataJSON();
          assert.equal(body.model, 'deepseek-v4-flash');
          assert.equal(body.apiKey, 'test-only-key');
          if (fail) { fail = false; return route.fulfill({ status: 503, body: '{}' }); }
        }
        await route.fulfill({ contentType: 'application/json', body: JSON.stringify({
          configured: route.request().method() === 'PUT', model: 'deepseek-v4-flash',
          models: ['deepseek-v4-flash', 'deepseek-v4-pro'],
        }) });
      });
      await page.goto(process.env.NPE_UI_TEST_URL + '/workspace?view=operate');
      await page.getByLabel('API Key', { exact: true }).fill('test-only-key');
      await page.getByRole('button', { name: '保存模型配置' }).click();
      await page.locator('.model-settings [role=alert]').waitFor();
      assert.equal(await page.getByLabel('API Key', { exact: true }).inputValue(), 'test-only-key');
      await page.getByRole('button', { name: '保存模型配置' }).click();
      await page.locator('.model-settings [role=status]').waitFor();
      assert.equal(await page.getByLabel('API Key', { exact: true }).inputValue(), '');
      await page.screenshot({ path: process.env.TEMP + '/npe-model-desktop.png', fullPage: true });
      await page.setViewportSize({ width: 375, height: 812 });
      await page.screenshot({ path: process.env.TEMP + '/npe-model-mobile.png', fullPage: true });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    } finally { await browser.close(); }
  });

test('custom provider uses its own URL key and model and does not activate on selection',
  { skip: !process.env.NPE_UI_TEST_URL }, async () => {
    const browser = await chromium.launch({ channel: 'chrome', headless: true });
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
      let activeProvider = 'deepseek';
      let writes = 0;
      await page.route('**/api/recruitment/profile', route => route.fulfill({ contentType: 'application/json',
        body: JSON.stringify({ selfIntroduction: '', introductionRequired: false }) }));
      await page.route('**/api/recruitment/model-settings*', async route => {
        const query = new URL(route.request().url()).searchParams;
        let provider = query.get('provider') ?? activeProvider;
        if (route.request().method() === 'PUT') {
          const payload = route.request().postDataJSON();
          assert.deepEqual(payload, { apiKey: 'custom-test', model: 'org/model', provider: 'custom', baseUrl: 'https://example.com/v1' });
          activeProvider = provider = payload.provider; writes++;
        }
        await route.fulfill({ contentType: 'application/json', body: JSON.stringify({ provider, activeProvider,
          configured: provider === 'deepseek' || writes > 0, model: provider === 'deepseek' ? 'deepseek-chat' : 'org/model',
          baseUrl: provider === 'deepseek' ? 'https://api.deepseek.com' : '', models: ['deepseek-chat'] }) });
      });
      await page.goto(process.env.NPE_UI_TEST_URL + '/workspace?view=operate');
      await page.getByRole('button', { name: '配置模型', exact: true }).click();
      await page.getByLabel('服务类型', { exact: true }).selectOption('custom');
      await page.getByLabel('Base URL', { exact: false }).fill('https://example.com/v1');
      const providerBox = await page.getByLabel('服务类型', { exact: true }).boundingBox();
      const urlBox = await page.getByLabel('Base URL', { exact: false }).boundingBox();
      assert.ok(Math.abs(providerBox.y - urlBox.y) <= 1, 'custom provider controls align at the top');
      assert.ok(Math.abs(providerBox.height - urlBox.height) <= 2, 'help text does not stretch the provider control');
      assert.equal(writes, 0);
      assert.equal(await page.getByLabel('API Key', { exact: true }).inputValue(), '');
      await page.getByLabel('API Key', { exact: true }).fill('custom-test');
      await page.getByLabel('模型 ID', { exact: true }).fill('org/model');
      await page.getByRole('button', { name: '保存模型配置' }).click();
      await page.locator('.model-settings [role=status]').waitFor();
      assert.equal(writes, 1);
      await page.screenshot({ path: process.env.TEMP + '/npe-custom-model.png', fullPage: true });
    } finally { await browser.close(); }
  });
