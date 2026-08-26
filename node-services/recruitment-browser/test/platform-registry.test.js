import test from 'node:test';
import assert from 'node:assert/strict';
import { PlatformRegistry } from '../src/platforms/registry.js';
import { platformRegistry } from '../src/platforms/index.js';
import boss from '../src/platforms/boss/index.js';

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

test('every built-in platform exposes discovery and contact actions', () => {
  for (const id of ['boss', 'job51', 'liepin', 'zhilian']) {
    const platform = platformRegistry.require(id);
    assert.equal(typeof platform.actions.discover, 'function');
    assert.equal(typeof platform.actions.contact, 'function');
    assert.equal(typeof platform.actions.sessionStatus, 'function');
  }
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
