import test from 'node:test';
import assert from 'node:assert/strict';
import { fillBossDraft } from '../src/platforms/boss/index.js';

test('fills a draft without treating it as sent', async () => {
  let value = '';
  const editor = {
    waitFor: async () => {},
    fill: async text => { value = text; },
    evaluate: async read => read({ value }),
    click: async () => { throw new Error('Must not click send'); },
    press: async () => { throw new Error('Must not press enter'); },
  };
  const result = await fillBossDraft(editor, 'job-1', '您好，我想了解这个岗位');
  assert.equal(value, '您好，我想了解这个岗位');
  assert.equal(result.status, 'SKIPPED');
  assert.equal(result.reason, 'DRAFT_FILLED_NOT_SENT');
});

test('missing editor never reports success', async () => {
  const result = await fillBossDraft({ waitFor: async () => { throw new Error('timeout'); } }, 'job-1', '您好');
  assert.equal(result.status, 'FAILED');
});

test('rejects empty greeting and failed readback', async () => {
  assert.equal((await fillBossDraft({}, 'job-1', ' ')).status, 'BLOCKED');
  const editor = { waitFor: async () => {}, fill: async () => {}, evaluate: async () => '' };
  assert.equal((await fillBossDraft(editor, 'job-1', '您好')).reason, 'DRAFT_VERIFICATION_FAILED');
});
