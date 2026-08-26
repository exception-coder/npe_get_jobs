import test from 'node:test';
import assert from 'node:assert/strict';
import { PlatformRegistry } from '../src/platforms/registry.js';
import { platformRegistry } from '../src/platforms/index.js';
import boss, { decodeBossText, mapBossApiJob } from '../src/platforms/boss/index.js';

test('rejects duplicate platform identifiers', () => {
  assert.throws(
    () => new PlatformRegistry([{ id: 'boss', hosts: [] }, { id: 'boss', hosts: [] }]),
    /Duplicate platform definition/,
  );
});

test('allows only HTTPS URLs owned by the selected platform', () => {
  const registry = new PlatformRegistry([{ id: 'boss', hosts: ['zhipin.com'] }]);
  assert.equal(registry.validateUrl('boss', 'https://www.zhipin.com/web/user/'), 'https://www.zhipin.com/web/user/');
  assert.throws(() => registry.validateUrl('boss', 'https://example.com/'), /not allowed/);
  assert.throws(() => registry.validateUrl('boss', 'http://www.zhipin.com/'), /not allowed/);
});

test('discovers every built-in platform plugin directory', () => {
  for (const id of ['boss', 'job51', 'liepin', 'zhilian']) {
    assert.equal(platformRegistry.require(id).id, id);
  }
});

test('every built-in platform exposes independently callable recruitment actions', () => {
  for (const id of ['boss', 'job51', 'liepin', 'zhilian']) {
    const platform = platformRegistry.require(id);
    assert.equal(typeof platform.actions.searchJobs, 'function');
    assert.equal(typeof platform.actions.collectVisibleJobs, 'function');
    assert.equal(typeof platform.actions.scrollJobList, 'function');
    assert.equal(typeof platform.actions.inspectVisibleJobs, 'function');
    assert.equal(typeof platform.actions.prepareContact, 'function');
    assert.equal(typeof platform.actions.sendContact, 'function');
    assert.equal(typeof platform.actions.discover, 'function');
    assert.equal(typeof platform.actions.contact, 'function');
    assert.equal(typeof platform.actions.sessionStatus, 'function');
  }
});

test('BOSS prepareContact inspects the chat context without clicking or typing', async () => {
  const calls = [];
  const visible = new Set(['a.btn.btn-startchat']);
  const page = {
    goto: async (url) => calls.push(['goto', url]),
    url: () => 'https://www.zhipin.com/job_detail/boss-1.html',
    locator: (selector) => ({
      first() { return this; },
      isVisible: async () => visible.has(selector),
      click: async () => calls.push(['click', selector]),
      fill: async (value) => calls.push(['fill', value]),
    }),
  };

  const result = await boss.actions.prepareContact({ page }, {
    jobs: [{ platformJobId: 'boss-1', href: 'https://www.zhipin.com/job_detail/boss-1.html' }],
  });

  assert.equal(result.sideEffect, false);
  assert.equal(result.prepared, 1);
  assert.deepEqual(calls, [['goto', 'https://www.zhipin.com/job_detail/boss-1.html']]);
});

test('contact action is side-effect free until explicitly confirmed', async () => {
  const result = await boss.actions.contact({}, {
    jobs: [{ platformJobId: 'boss-1', href: 'https://www.zhipin.com/job_detail/boss-1.html' }],
    confirmContact: false,
  });

  assert.equal(result.sideEffect, false);
  assert.equal(result.contacted, 0);
  assert.deepEqual(result.results, [{
    platformJobId: 'boss-1',
    status: 'SKIPPED',
    reason: 'CONTACT_CONFIRMATION_REQUIRED',
  }]);
});

test('BOSS session remains blocked when the login entry is visible', async () => {
  const visibleSelectors = new Set([
    'a.header-login-btn, a[href="/web/user/"], a[href*="/web/user/?intent=0"]',
  ]);
  const page = {
    url: () => 'https://www.zhipin.com/',
    locator: (selector) => ({
      first() { return this; },
      isVisible: async () => visibleSelectors.has(selector),
    }),
  };

  const result = await boss.actions.sessionStatus({ page });

  assert.equal(result.authenticated, false);
  assert.equal(result.recoveryAction, 'OPEN_LOGIN_SESSION');
});

test('BOSS search refuses to navigate before authentication', async () => {
  let navigated = false;
  const page = {
    url: () => 'https://www.zhipin.com/guangzhou/',
    goto: async () => { navigated = true; },
    locator: (selector) => ({
      first() { return this; },
      isVisible: async () => selector.includes('header-login-btn'),
    }),
  };

  await assert.rejects(
    boss.actions.searchJobs({ page }, { search: { keyword: 'Java', cityCode: '101280100' } }),
    /AUTHENTICATION_REQUIRED/,
  );
  assert.equal(navigated, false);
});

test('BOSS private-use salary digits are normalized before filtering', () => {
  assert.equal(decodeBossText('\uE033\uE031-\uE034\uE031K·\uE032\uE035薪'), '20-30K·14薪');
});

test('BOSS search API jobs retain normalized facts without DOM parsing', () => {
  const job = mapBossApiJob({
    encryptJobId: 'boss-1', jobName: 'Java高级工程师', salaryDesc: '25-40K',
    brandName: '示例科技', cityName: '广州', areaDistrict: '天河区', businessDistrict: '棠下',
    jobExperience: '5-10年', jobDegree: '本科', brandIndustry: '互联网',
    brandStageName: '已上市', brandScaleName: '1000-9999人', bossName: '张经理',
    bossTitle: '招聘经理', bossOnline: true, bossActiveTimeDesc: '刚刚活跃',
    skills: ['Java', 'Spring'], jobLabels: ['五险一金'], welfareList: ['年终奖'],
  });

  assert.equal(job.city, '广州·天河区·棠下');
  assert.equal(job.salary, '25-40K');
  assert.deepEqual(job.facts.skills, ['Java', 'Spring']);
  assert.equal(job.facts.companyScale, '1000-9999人');
  assert.equal(job.facts.recruiterOnline, true);
  assert.equal(job.facts.recruiterActiveText, '刚刚活跃');
});
