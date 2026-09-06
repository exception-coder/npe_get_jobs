import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium } from 'patchright';

test('intent card edits natural-language requirements and confirms without platform codes',
  { skip: !process.env.NPE_UI_TEST_URL }, async () => {
    const card = JSON.parse(await readFile(new URL('../../../src/test/resources/intent-card.json', import.meta.url), 'utf8'));
    const browser = await chromium.launch({ channel: 'chrome', headless: true });
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.route('**/__intent_preview', route => route.fulfill({
        contentType: 'text/html; charset=utf-8', body: `<div id="app" style="max-width:1000px;margin:auto"></div><script type="module">
        import {createApp,h} from '/node_modules/.vite/deps/vue.js';
        import Card from '/src/features/run-workspace/ui/RecruitmentIntentCard.vue';
        import '/src/styles/main.scss';
        createApp({setup(){return ()=>h(Card,{goal:{id:1,confirmed:false,card:${JSON.stringify(card)}},saving:false,
          onConfirm:value=>document.body.dataset.confirmed=JSON.stringify(value)});}}).mount('#app');
        </script>`,
      }));
      await page.goto(process.env.NPE_UI_TEST_URL + '/__intent_preview');
      await page.getByLabel('区域状态').selectOption('specified');
      await page.getByLabel('区域内容').fill('广州、深圳');
      await page.getByLabel('区域强度').selectOption('must');
      await page.getByRole('button', { name: '确认意向并开始寻找' }).click();
      const saved = JSON.parse(await page.locator('body').getAttribute('data-confirmed'));
      assert.deepEqual(saved.requirements.regions.value, ['广州', '深圳']);
      assert.equal(saved.requirements.regions.strength, 'must');
      assert.equal(saved.requirements.educationRequirements.state, 'unspecified');
      assert.equal(saved.candidateContext.educationStatus, '在读');
      await page.screenshot({ path: process.env.TEMP + '/npe-intent-desktop.png', fullPage: true });
      await page.setViewportSize({ width: 375, height: 812 });
      await page.screenshot({ path: process.env.TEMP + '/npe-intent-mobile.png', fullPage: true });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      await page.getByRole('button', { name: '删除职位疾病生物学' }).click();
      await page.getByRole('button', { name: '确认意向并开始寻找' }).click();
      assert.equal(await page.getByRole('alert').innerText(), '请至少保留一个目标职位');
      assert.deepEqual(errors, []);
    } finally { await browser.close(); }
  });

test('workspace parses first, requires confirmation, then starts with confirmed version',
  { skip: !process.env.NPE_UI_TEST_URL }, async () => {
    const card = JSON.parse(await readFile(new URL('../../../src/test/resources/intent-card.json', import.meta.url), 'utf8'));
    const browser = await chromium.launch({ channel: 'chrome', headless: true });
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
      const calls = [];
      page.on('pageerror', error => console.error(error.message));
      let rawGoal = '';
      const result = confirmed => ({ id: confirmed ? 2 : 1, rawGoal, summary: card.summary, card, confirmed });
      await page.route('**/api/**', async route => {
        const path = new URL(route.request().url()).pathname;
        if (!path.startsWith('/api/')) return route.continue();
        calls.push(path);
        let body = {};
        if (path.endsWith('/platforms')) body = [{ id: 'boss', displayName: 'BOSS直聘', icon: 'mdi-briefcase' }];
        else if (path.endsWith('/profile')) body = { selfIntroduction: '', introductionRequired: false };
        else if (path.endsWith('/active')) body = null;
        else if (path.endsWith('/interpret')) { rawGoal = route.request().postDataJSON().goal; body = result(false); }
        else if (path.endsWith('/confirm')) { assert.equal(route.request().postDataJSON().sourceId, 1); body = result(true); }
        else if (path.endsWith('/sessions/open')) body = { sessionId: 'test-session', platformId: 'boss' };
        else if (path.endsWith('/status')) body = { authenticated: true };
        else if (path.endsWith('/workflows')) {
          assert.equal(route.request().postDataJSON().goalId, 2);
          body = { taskId: 'test', status: 'COMPLETED', jobs: [], contactResults: [], discovered: 0, filtered: 0, matched: 0, contacted: 0 };
        }
        await route.fulfill({ contentType: 'application/json', body: JSON.stringify(body) });
      });
      await page.goto(process.env.NPE_UI_TEST_URL + '/workspace?view=operate&platform=boss');
      await page.getByLabel('目标岗位', { exact: true }).fill('我是博士在读，寻找疾病生物学');
      await page.locator('.find-button').click();
      await page.getByRole('heading', { name: '先确认，我们是否理解准确' }).waitFor();
      assert.equal(calls.some(path => path.endsWith('/workflows') || path.endsWith('/sessions/open')), false);
      await page.getByRole('button', { name: '确认意向并开始寻找' }).click();
      await page.getByRole('heading', { name: '暂时没有找到岗位' }).waitFor();
      assert.equal(calls.filter(path => path.endsWith('/workflows')).length, 1);
      await page.screenshot({ path: process.env.TEMP + '/npe-intent-workspace.png', fullPage: true });
    } finally { await browser.close(); }
  });
