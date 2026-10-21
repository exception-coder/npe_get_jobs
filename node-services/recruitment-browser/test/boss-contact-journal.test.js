import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, readdir, rm, mkdir, rename } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { reserveContactAttempt } from '../src/platforms/boss/contact-journal.js';

const job = { platformJobId: 'fixture-job' };

async function fixture(run) {
  const directory = await mkdtemp(join(tmpdir(), 'boss-stage-journal-'));
  const state = { contactJournalDirectory: directory };
  const path = join(directory, createHash('sha256').update(job.platformJobId).digest('hex') + '.json');
  try { await run(state, path); } finally { await rm(directory, { recursive: true }); }
}

test('same page and independent sessions cannot race a journal reservation', async () => {
  await fixture(async (state, path) => {
    const page = {};
    const first = await reserveContactAttempt(page, job, state);
    try {
      await assert.rejects(reserveContactAttempt(page, job, state), /CONTACT_ATTEMPT_IN_PROGRESS/);
      await assert.rejects(reserveContactAttempt({}, job, state), /CONTACT_ATTEMPT_IN_PROGRESS/);
      assert.equal(JSON.parse(await readFile(path, 'utf8')).stage, 'RESERVED');
    } finally { await first.release(); }
    const next = await reserveContactAttempt({}, job, state);
    assert.equal(next.resumeConversation, false);
    await next.release();
    assert.equal((await readdir(state.contactJournalDirectory)).some(name => name.endsWith('.lock')), false);
  });
});

test('persisted submitted stages never become retryable just because delivery flags are false', async () => {
  await fixture(async (state, path) => {
    const lease = await reserveContactAttempt({}, job, state);
    await lease.update({ stage: 'TEXT_SUBMITTING', conversationEstablished: true, textAttempted: true });
    assert.equal(JSON.parse(await readFile(path, 'utf8')).textAttempted, true);
    await lease.release();
    await assert.rejects(reserveContactAttempt({}, job, state), /ALREADY_ATTEMPTED_VERIFY_PLATFORM/);
    const contradictory = { ...JSON.parse(await readFile(path, 'utf8')), textAttempted: false };
    await writeFile(path, JSON.stringify(contradictory));
    await assert.rejects(reserveContactAttempt({}, job, state), /ALREADY_ATTEMPTED_VERIFY_PLATFORM/);
  });
});

test('unknown contact-entry and image submission remain blocked after restart', async () => {
  for (const change of [{ stage: 'CONTACT_OPENING', entryAttempted: true },
    { stage: 'IMAGE_SUBMITTING', conversationEstablished: true, imageAttempted: true }]) {
    await fixture(async state => {
      const lease = await reserveContactAttempt({}, job, state);
      await lease.update(change);
      await lease.release();
      await assert.rejects(reserveContactAttempt({}, job, state), /ALREADY_ATTEMPTED_VERIFY_PLATFORM/);
    });
  }
});

test('only explicit legacy draft failures can migrate to conversation-only recovery', async () => {
  await fixture(async (state, path) => {
    await writeFile(path, JSON.stringify({ platformJobId: job.platformJobId, status: 'FAILED',
      reason: 'DRAFT_VERIFICATION_FAILED', conversationEstablished: true, textSent: false, imageDelivered: false }));
    const lease = await reserveContactAttempt({}, job, state);
    assert.equal(lease.resumeConversation, true);
    assert.equal(JSON.parse(await readFile(path, 'utf8')).schemaVersion, 2);
    await lease.release();
  });
  for (const record of [{ platformJobId: job.platformJobId, startedAt: '2026-09-23' },
    { platformJobId: job.platformJobId, status: 'FAILED', reason: 'TEXT_SEND_UNCERTAIN_VERIFY_PLATFORM',
      conversationEstablished: true, textSent: false, imageDelivered: false },
    { schemaVersion: 3, platformJobId: job.platformJobId, reason: 'DRAFT_VERIFICATION_FAILED',
      conversationEstablished: true, textSent: false, imageDelivered: false }, null]) {
    await fixture(async (state, path) => {
      await writeFile(path, JSON.stringify(record));
      await assert.rejects(reserveContactAttempt({}, job, state), /ALREADY_ATTEMPTED_VERIFY_PLATFORM/);
      assert.equal((await readdir(state.contactJournalDirectory)).some(name => name.endsWith('.lock')), false);
    });
  }
});

test('legacy draft-only reason cannot override submission flags', async () => {
  for (const flags of [{ textAttempted: true }, { imageAttempted: true },
    { textAttempted: 'true' }, { stage: 'TEXT_SUBMITTING' }]) {
    await fixture(async (state, path) => {
      await writeFile(path, JSON.stringify({ platformJobId: job.platformJobId,
        reason: 'DRAFT_VERIFICATION_FAILED', conversationEstablished: true,
        textSent: false, imageDelivered: false, ...flags }));
      await assert.rejects(reserveContactAttempt({}, job, state), /ALREADY_ATTEMPTED_VERIFY_PLATFORM/);
    });
  }
});

test('legacy unavailable send control requires explicit proof of no submission before recovery', async () => {
  await fixture(async (state, path) => {
    await writeFile(path, JSON.stringify({ platformJobId: job.platformJobId,
      reason: 'CONTACT_ACTION_UNAVAILABLE', conversationEstablished: true,
      textSent: false, imageDelivered: false }));
    await assert.rejects(reserveContactAttempt({}, job, state), /ALREADY_ATTEMPTED_VERIFY_PLATFORM/);
    const record = JSON.parse(await readFile(path, 'utf8'));
    await writeFile(path, JSON.stringify({ ...record, textAttempted: false, imageAttempted: false }));
    const lease = await reserveContactAttempt({}, job, state);
    try { assert.equal(lease.resumeConversation, true); } finally { await lease.release(); }
  });
});

test('pre-submit editor failures stay retryable across repeated sessions without clearing journal', async () => {
  await fixture(async state => {
    for (const reason of ['DRAFT_VERIFICATION_FAILED', 'CHAT_SEND_ACTION_UNAVAILABLE', 'CHAT_SEND_ACTION_UNAVAILABLE']) {
      const lease = await reserveContactAttempt({}, job, state);
      try {
        await lease.update({ stage: 'DRAFT_READY', conversationEstablished: true,
          status: 'FAILED', reason, textAttempted: false, imageAttempted: false });
      } finally { await lease.release(); }
    }
    const recovered = await reserveContactAttempt({}, job, state);
    try { assert.equal(recovered.resumeConversation, true); } finally { await recovered.release(); }
  });
});

test('failed durable cancellation cannot leak draft-ready state into a later result write', async () => {
  await fixture(async (state, path) => {
    const lease = await reserveContactAttempt({}, job, state);
    try {
      await lease.update({ stage: 'TEXT_SUBMITTING', conversationEstablished: true, textAttempted: true });
      await rename(path, path + '.previous');
      await mkdir(path);
      try {
        await assert.rejects(lease.update({ stage: 'DRAFT_READY', textAttempted: false }));
      } finally {
        await rm(path, { recursive: true });
        await rename(path + '.previous', path);
      }
      await lease.update({ status: 'FAILED', reason: 'CONTACT_JOURNAL_WRITE_FAILED_VERIFY_PLATFORM' });
      const record = JSON.parse(await readFile(path, 'utf8'));
      assert.equal(record.stage, 'TEXT_SUBMITTING');
      assert.equal(record.textAttempted, true);
    } finally { await lease.release(); }
    await assert.rejects(reserveContactAttempt({}, job, state), /ALREADY_ATTEMPTED_VERIFY_PLATFORM/);
  });
});
