import test from 'node:test';
import assert from 'node:assert/strict';
import { fillBossDraft } from '../src/platforms/boss/index.js';
import { normalizeBossDraft } from '../src/platforms/boss/conversation-draft.js';

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

test('normalization ignores editor placeholders but retains meaningful spaces and paragraph breaks', () => {
  assert.equal(normalizeBossDraft('您好\r\n期待\u00a0沟通\u200b\n\n'), '您好\n期待 沟通');
  assert.notEqual(normalizeBossDraft('Java  开发'), normalizeBossDraft('Java 开发'));
  assert.notEqual(normalizeBossDraft('您好\n期待沟通'), normalizeBossDraft('您好期待沟通'));
});

test('an identical draft is reused and a different draft is never overwritten', async () => {
  let fills = 0;
  const editor = { waitFor: async () => {}, fill: async () => { fills++; },
    evaluate: async read => read({ value: '用户已有的草稿' }) };
  assert.equal((await fillBossDraft(editor, 'job-1', '用户已有的草稿')).reason, 'DRAFT_FILLED_NOT_SENT');
  assert.equal((await fillBossDraft(editor, 'job-1', '另一个正文')).reason, 'EXISTING_DRAFT_NOT_OVERWRITTEN');
  assert.equal(fills, 0);
});
