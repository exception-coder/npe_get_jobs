import test from 'node:test';
import assert from 'node:assert/strict';
import boss from '../src/platforms/boss/index.js';
import { resolveBossRegion, resolveBossSearch } from '../src/platforms/boss/regions.js';

const tree = [{ name: '福建', subLevelModelList: [
  { name: '福州', code: 101230100 },
  { name: '泉州', code: 101230500, subLevelModelList: [
    { name: '晋江市', code: 350582 }, { name: '安溪县', code: 350524 },
  ] },
  { name: '南平', code: 101230900, subLevelModelList: [{ name: '武夷山市', code: 350782 }] },
] }];

test('preferred cities and counties use city-level BOSS filters only', async () => {
  let currentUrl = 'https://www.zhipin.com/web/geek/jobs?city=101230400';
  let requests = 0;
  const page = {
    request: { get: async () => {
      requests++;
      return { ok: () => true, json: async () => ({ code: 0, zpData: { cityList: tree } }) };
    } },
    on: () => {},
    url: () => currentUrl,
    goto: async url => { currentUrl = url; },
    locator: selector => ({ first: () => ({
      waitFor: async () => {},
      isVisible: async () => !selector.includes('header-login-btn'),
    }) }),
  };
  const state = {};
  for (const [regionName, city] of [
    ['武夷山', '101230900'], ['福州市', '101230100'],
    ['泉州', '101230500'], ['晋江', '101230500'], ['安溪', '101230500'],
  ]) {
    await boss.actions.searchJobs({ page, state }, { search: { keyword: '茶行业', regionName } });
    const url = new URL(currentUrl);
    assert.equal(url.searchParams.get('city'), city);
    assert.equal(url.searchParams.get('areaBusiness'), null);
    assert.equal(url.searchParams.get('query'), '茶行业');
  }
  assert.equal(requests, 1);
  await boss.actions.searchJobs({ page, state }, {
    search: { keyword: '茶行业', cityCode: '101230500', areaBusiness: '350524' },
  });
  assert.equal(new URL(currentUrl).searchParams.get('areaBusiness'), null);
  const before = currentUrl;
  await assert.rejects(boss.actions.searchJobs({ page, state }, {
    search: { keyword: '茶行业', regionName: '未知城市' },
  }), /无法唯一识别/);
  assert.equal(currentUrl, before);
});

test('unknown or ambiguous regions never silently use the account default', () => {
  assert.throws(() => resolveBossRegion(tree, '未知'), /无法唯一识别/);
  const ambiguous = [{ subLevelModelList: [
    { code: 1, name: '甲', subLevelModelList: [{ name: '鼓楼区', code: 11 }] },
    { code: 2, name: '乙', subLevelModelList: [{ name: '鼓楼区', code: 22 }] },
  ] }];
  assert.throws(() => resolveBossRegion(ambiguous, '鼓楼区'), /无法唯一识别/);
});

test('dictionary failure is surfaced and is not cached', async () => {
  const state = {};
  const page = { request: { get: async () => ({ ok: () => true, json: async () => ({ code: 1 }) }) } };
  await assert.rejects(resolveBossSearch(page, state, { regionName: '福州' }), /无法加载/);
  assert.equal(state.bossRegionTree, undefined);
});

test('legacy coded searches and searches without positive regions remain supported', async () => {
  const search = { keyword: 'Java', cityCode: '101230100' };
  assert.deepEqual(await resolveBossSearch({}, {}, search), search);
});
