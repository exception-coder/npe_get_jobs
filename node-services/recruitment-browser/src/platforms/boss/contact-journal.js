import { readFile, mkdir, open, rename, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';

const recordsByPage = new WeakMap();
const activePages = new WeakSet();
const BLOCKED = 'CONTACT_ALREADY_ATTEMPTED_VERIFY_PLATFORM';
const LEGACY_DRAFT_REASONS = new Set([
  'DRAFT_VERIFICATION_FAILED', 'EXISTING_DRAFT_NOT_OVERWRITTEN',
  'CONVERSATION_ESTABLISHED_TEXT_DRAFT_ONLY',
]);

function canResume(record) {
  if (!record) return true;
  if (record.textSent === true || record.imageDelivered === true) return false;
  if (record.schemaVersion === 2) {
    return ['RESERVED', 'CONVERSATION_READY', 'DRAFT_READY'].includes(record.stage)
      && record.textAttempted === false && record.imageAttempted === false
      && (record.entryAttempted === false || record.conversationEstablished === true);
  }
  if (record.schemaVersion !== undefined) return false;
  return record.conversationEstablished === true && record.textSent === false
    && record.imageDelivered === false && LEGACY_DRAFT_REASONS.has(record.reason);
}

async function readRecord(path) {
  try {
    const record = JSON.parse(await readFile(path, 'utf8'));
    if (!record || typeof record !== 'object' || Array.isArray(record)) throw new Error(BLOCKED);
    return record;
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw new Error(BLOCKED, { cause: error });
  }
}

async function writeRecord(path, record) {
  const temporary = path + '.' + randomUUID() + '.tmp';
  let handle;
  try {
    handle = await open(temporary, 'wx');
    await handle.writeFile(JSON.stringify(record));
    await handle.sync();
    await handle.close();
    handle = undefined;
    await rename(temporary, path);
  } finally {
    await handle?.close();
    await unlink(temporary).catch(error => { if (error.code !== 'ENOENT') throw error; });
  }
}

/** 预占只保护执行；日志阶段区分可恢复草稿与必须核实的提交。 */
export async function reserveContactAttempt(page, job, state) {
  if (!job.platformJobId) throw new Error('JOB_ID_REQUIRED');
  if (activePages.has(page)) throw new Error('CONTACT_ATTEMPT_IN_PROGRESS');
  activePages.add(page);
  const records = recordsByPage.get(page) || new Map();
  recordsByPage.set(page, records);
  let path;
  let lockPath;
  let lock;
  const release = async () => {
    try {
      await lock?.close();
      if (lock) await unlink(lockPath);
    } finally {
      activePages.delete(page);
    }
  };
  try {
    if (state?.contactJournalDirectory) {
      await mkdir(state.contactJournalDirectory, { recursive: true });
      const key = createHash('sha256').update(job.platformJobId).digest('hex');
      path = join(state.contactJournalDirectory, key + '.json');
      lockPath = join(state.contactJournalDirectory, key + '.lock');
      try {
        lock = await open(lockPath, 'wx');
      } catch (error) {
        if (error.code === 'EEXIST') throw new Error('CONTACT_ATTEMPT_IN_PROGRESS');
        throw error;
      }
    }
    const previous = path ? await readRecord(path) : records.get(job.platformJobId);
    if ((previous && previous.platformJobId !== job.platformJobId) || !canResume(previous)) throw new Error(BLOCKED);
    const resumeConversation = previous?.conversationEstablished === true;
    let record = { schemaVersion: 2, platformJobId: job.platformJobId, stage: 'RESERVED',
      entryAttempted: resumeConversation, conversationEstablished: resumeConversation,
      textAttempted: false, imageAttempted: false, textSent: false, imageDelivered: false };
    const update = async patch => {
      record = { ...record, ...patch, recordedAt: new Date().toISOString() };
      records.set(job.platformJobId, record);
      if (path) await writeRecord(path, record);
    };
    await update({});
    return { resumeConversation, update, release };
  } catch (error) {
    await release();
    throw error;
  }
}
