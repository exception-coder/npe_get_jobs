import test from 'node:test';
import assert from 'node:assert/strict';
import { fillBossDraft } from '../src/platforms/boss/index.js';
import { normalizeBossDraft } from '../src/platforms/boss/conversation-draft.js';

function editableDraft(initial = '', ignoreTyping = false) {
  let value = initial;
  let selected = false;
  let typings = 0;
  const keyboard = {
    type: async text => {
      assert.doesNotMatch(text, /[\n\t]/);
      typings++;
      if (!ignoreTyping) value = selected ? text : value + text;
      selected = false;
    },
    insertText: async text => {
      assert.match(text, /^[\n\t]$/);
      if (!ignoreTyping) value += text;
    },
    press: async key => {
      assert.equal(key, 'Backspace');
      value = value.slice(0, -1);
    },
  };
  const editor = {
    waitFor: async () => {},
    click: async () => {},
    fill: async () => { throw new Error('Bulk fill is forbidden'); },
    evaluate: async read => read({ value }),
    page: () => ({ keyboard }),
    press: async key => { assert.equal(key, 'ControlOrMeta+A'); selected = true; },
  };
  return { editor, text: () => value, typings: () => typings };
}

test('fills a draft without treating it as sent', async () => {
  const draft = editableDraft();
  const result = await fillBossDraft(draft.editor, 'job-1', '您好，我想了解这个岗位');
  assert.equal(draft.text(), '您好，我想了解这个岗位');
  assert.equal(result.status, 'SKIPPED');
  assert.equal(result.reason, 'DRAFT_FILLED_NOT_SENT');
});

test('missing editor never reports success', async () => {
  const result = await fillBossDraft({ waitFor: async () => { throw new Error('timeout'); } }, 'job-1', '您好');
  assert.equal(result.status, 'FAILED');
});

test('rejects empty greeting and failed readback', async () => {
  assert.equal((await fillBossDraft({}, 'job-1', ' ')).status, 'BLOCKED');
  const draft = editableDraft('', true);
  assert.equal((await fillBossDraft(draft.editor, 'job-1', '您好')).reason, 'DRAFT_VERIFICATION_FAILED');
});

test('normalization ignores editor placeholders but retains meaningful spaces and paragraph breaks', () => {
  assert.equal(normalizeBossDraft('您好\r\n期待\u00a0沟通\u200b\n\n'), '您好\n期待 沟通');
  assert.notEqual(normalizeBossDraft('Java  开发'), normalizeBossDraft('Java 开发'));
  assert.notEqual(normalizeBossDraft('您好\n期待沟通'), normalizeBossDraft('您好期待沟通'));
});

test('an identical draft is reused and a different draft is never overwritten', async () => {
  const draft = editableDraft('用户已有的草稿');
  assert.equal((await fillBossDraft(draft.editor, 'job-1', '用户已有的草稿')).reason, 'DRAFT_FILLED_NOT_SENT');
  assert.equal((await fillBossDraft(draft.editor, 'job-1', '另一个正文')).reason, 'EXISTING_DRAFT_NOT_OVERWRITTEN');
  assert.equal(draft.typings(), 0);
});

test('multiline typing never sends Enter or Tab keys and rejects other control characters', async () => {
  const draft = editableDraft();
  assert.equal((await fillBossDraft(draft.editor, 'job-1', '您好\r\nJava\t开发')).reason, 'DRAFT_FILLED_NOT_SENT');
  assert.equal(draft.text(), '您好\nJava\t开发');
  assert.equal((await fillBossDraft(draft.editor, 'job-1', '您好\u0008')).reason, 'INVALID_GREETING');
});
