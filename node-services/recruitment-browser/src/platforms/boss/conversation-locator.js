import { setTimeout as pause } from 'node:timers/promises';
import { openMessagePage, verifyConversation } from './message-page.js';
import { BOSS_EDITOR_SELECTOR } from './conversation-draft.js';

const MAX_LIST_SCROLLS = 8;
const LOOKUP_TIMEOUT_MS = 5000;

async function matchingContact(page, job) {
  const recruiterName = job.facts?.recruiterName?.trim();
  const matches = [];
  for (const contact of await page.locator('.name-box:visible').all()) {
    const name = contact.locator('.name-text');
    if (await name.count() !== 1) continue;
    const recruiter = (await name.innerText()).trim();
    if (recruiterName && recruiter !== recruiterName) continue;
    const companyMatches = (await contact.innerText()).includes(job.company.trim());
    if (recruiterName || companyMatches) matches.push({ contact, recruiter, companyMatches });
  }
  const companyMatches = matches.filter(match => match.companyMatches);
  const candidates = companyMatches.length ? companyMatches : matches;
  if (candidates.length > 1) throw new Error('AMBIGUOUS_CONVERSATION');
  return candidates[0];
}

async function scrollContactList(page) {
  const rows = page.locator('.name-box:visible');
  if (!(await rows.count())) return false;
  return rows.first().evaluate(row => {
    for (let parent = row.parentElement; parent && parent !== document.body
        && parent !== document.documentElement; parent = parent.parentElement) {
      if (parent.matches('.chat-conversation') || parent.closest('.chat-conversation')) return false;
      if (!/(auto|scroll)/.test(getComputedStyle(parent).overflowY)
          || parent.scrollHeight <= parent.clientHeight) continue;
      const before = parent.scrollTop;
      parent.scrollTop += Math.max(100, parent.clientHeight * 0.8);
      return parent.scrollTop > before;
    }
    return false;
  });
}

async function findContact(page, job) {
  const deadline = Date.now() + LOOKUP_TIMEOUT_MS;
  let scrolls = 0;
  do {
    const match = await matchingContact(page, job);
    if (match) return match;
    if (scrolls < MAX_LIST_SCROLLS && await scrollContactList(page)) scrolls++;
    await pause(250);
  } while (Date.now() < deadline);
  throw new Error('CONVERSATION_NOT_FOUND');
}

/** 优先复用完整身份已匹配的会话；否则有限查找侧栏，选中后再核验身份。 */
export async function selectBossConversation(page, job) {
  if (!job.company?.trim() || !job.title?.trim()) throw new Error('RECIPIENT_IDENTITY_REQUIRED');
  await openMessagePage(page);
  const current = { ...job, recruiterName: job.facts?.recruiterName?.trim() };
  if (current.recruiterName) {
    try {
      await verifyConversation(page, current);
      return current;
    } catch (error) {
      if (!['CONVERSATION_RECIPIENT_MISMATCH', 'CHAT_CONVERSATION_UNAVAILABLE'].includes(error.message)) throw error;
    }
  }
  const match = await findContact(page, job);
  await match.contact.click({ timeout: LOOKUP_TIMEOUT_MS });
  await page.locator(BOSS_EDITOR_SELECTOR + ':visible').waitFor({ state: 'visible', timeout: LOOKUP_TIMEOUT_MS });
  const expected = { ...job, recruiterName: match.recruiter };
  const deadline = Date.now() + LOOKUP_TIMEOUT_MS;
  do {
    try {
      await verifyConversation(page, expected);
      return expected;
    } catch (error) {
      if (!['CONVERSATION_RECIPIENT_MISMATCH', 'CHAT_CONVERSATION_UNAVAILABLE'].includes(error.message)) throw error;
    }
    await pause(100);
  } while (Date.now() < deadline);
  throw new Error('CONVERSATION_RECIPIENT_MISMATCH');
}
