import { clickFirst, createRecruitmentActions, idFromUrl, queryString, readCard } from '../shared/recruitment-actions.js';

const RESULT_TIMEOUT = 15_000;
const SCROLL_SETTLE_MS = 1_500;
const LOGIN_SELECTOR = [
  'a.header-login-btn',
  'a[href="/web/user/"]',
  'a[href*="/web/user/?intent=0"]',
].join(', ');
const AUTHENTICATED_SELECTOR = [
  'a[ka="header-message"]',
  'a[ka="header-resume"]',
  'a[href*="/web/geek/chat"]',
  'li.nav-figure',
].join(', ');

export const decodeBossText = (value = '') => value.replace(/[\uE031-\uE03A]/g,
  (character) => String(character.codePointAt(0) - 0xE031));

const BOSS_JOB_API_PATHS = [
  '/wapi/zpgeek/search/joblist.json',
  '/wapi/zpgeek/pc/recommend/job/list.json',
];

const list = (value) => Array.isArray(value)
  ? value.map((item) => typeof item === 'string' ? item : item?.name || item?.text)
    .filter(Boolean)
  : [];

export const mapBossApiJob = (item) => ({
  platformJobId: item.encryptJobId || '',
  title: item.jobName || '',
  company: item.brandName || '',
  city: [item.cityName, item.areaDistrict, item.businessDistrict].filter(Boolean).join('·'),
  salary: decodeBossText(item.salaryDesc || ''),
  description: [item.jobExperience, item.jobDegree, ...list(item.skills), ...list(item.jobLabels)]
    .filter(Boolean).join(' '),
  href: item.encryptJobId ? `https://www.zhipin.com/job_detail/${item.encryptJobId}.html` : '',
  facts: {
    experience: item.jobExperience || null,
    degree: item.jobDegree || null,
    companyIndustry: item.brandIndustry || null,
    companyStage: item.brandStageName || null,
    companyScale: item.brandScaleName || null,
    recruiterName: item.bossName || null,
    recruiterTitle: item.bossTitle || null,
    recruiterOnline: typeof item.bossOnline === 'boolean' ? item.bossOnline : null,
    recruiterActiveText: item.bossActiveTimeDesc || item.activeTimeDesc || null,
    recruiterId: item.encryptBossId || null,
    companyId: item.encryptBrandId || null,
    securityId: item.securityId || null,
    labels: list(item.jobLabels),
    skills: list(item.skills),
    benefits: list(item.welfareList),
  },
});

const ensureResponseMonitor = (page, state) => {
  if (state.bossJobMonitor) return state.bossJobMonitor;
  const monitor = { batches: [], cache: new Map(), pending: new Set(), responses: 0, hasMore: null, searchUrl: null };
  page.on('response', (response) => {
    if (!BOSS_JOB_API_PATHS.some((path) => response.url().includes(path))) return;
    const capture = (async () => {
      if (response.status() < 200 || response.status() >= 300) return;
      const payload = await response.json();
      const items = payload?.code === 0 ? payload?.zpData?.jobList : null;
      if (!Array.isArray(items)) return;
      const jobs = items.map(mapBossApiJob).filter((job) => job.platformJobId);
      if (jobs.length) {
        monitor.batches.push(jobs);
        jobs.forEach((job) => monitor.cache.set(job.platformJobId, job));
      }
      monitor.responses += 1;
      monitor.hasMore = payload.zpData?.hasMore ?? monitor.hasMore;
    })().catch(() => null);
    monitor.pending.add(capture);
    capture.finally(() => monitor.pending.delete(capture));
  });
  state.bossJobMonitor = monitor;
  return monitor;
};

const drainApiJobs = async (page, monitor, limit) => {
  await page.waitForTimeout(250);
  await Promise.all([...monitor.pending]);
  const batches = monitor.batches.splice(0);
  const captured = batches.length ? batches.flat() : [...monitor.cache.values()];
  const jobs = [...new Map(captured
    .filter((job) => job.platformJobId)
    .map((job) => [job.platformJobId, job])).values()];
  return jobs.slice(0, limit);
};

const jobCards = async (page) => {
  const wrappers = page.locator('li.job-card-wrapper');
  if (await wrappers.count() > 0) return wrappers;
  return page.locator('ul.rec-job-list li.job-card-box, .job-list-container li.job-card-box');
};

const definition = {
  card: 'li.job-card-wrapper, ul.rec-job-list li.job-card-box, .job-list-container li.job-card-box',
  fields: {
    id: ['[data-job-id]'],
    href: ['a.job-card-left', 'a[href*="/job_detail/"]'],
    title: ['.job-name', '.job-title'],
    company: ['.company-name', '.boss-name'],
    city: ['.job-area', '.job-area-wrapper'],
    salary: ['.job-salary', '.salary'],
    description: ['.job-card-footer', '.tag-list'],
  },
  jobId: idFromUrl,
  scrollContainers: ['.job-list-container', '.job-list-box'],
  buildSearchUrl: ({ keyword, cityCode }, filters) => queryString('https://www.zhipin.com/web/geek/jobs', {
    city: cityCode, query: keyword, jobType: filters.jobType, salary: filters.salary,
    experience: filters.experience, degree: filters.degree, scale: filters.scale,
    industry: filters.industry, stage: filters.stage,
  }),
  authenticated: async (page) => {
    if (page.url().includes('/web/user')) return false;
    const loginEntry = page.locator(LOGIN_SELECTOR).first();
    if (await loginEntry.isVisible().catch(() => false)) return false;
    return page.locator(AUTHENTICATED_SELECTOR).first().isVisible().catch(() => false);
  },
  searchJobs: async (page, input, { state }) => {
    if (!(await definition.authenticated(page))) throw new Error('AUTHENTICATION_REQUIRED');
    const monitor = ensureResponseMonitor(page, state);
    monitor.batches.length = 0;
    const search = input.search || { keyword: '', cityCode: '' };
    const searchUrl = definition.buildSearchUrl(search, input.filters || {});
    if (monitor.searchUrl !== searchUrl) monitor.cache.clear();
    monitor.searchUrl = searchUrl;
    if (page.url() !== searchUrl) {
      await page.goto(searchUrl, { waitUntil: 'commit', timeout: 45_000 });
    }
    await page.locator(AUTHENTICATED_SELECTOR).first()
      .waitFor({ state: 'visible', timeout: RESULT_TIMEOUT })
      .catch(() => null);
    if (!(await definition.authenticated(page))) throw new Error('AUTHENTICATION_REQUIRED');
    await page.locator('.job-list-container').first()
      .waitFor({ state: 'visible', timeout: RESULT_TIMEOUT })
      .catch(() => null);
    await page.locator(definition.card).first()
      .waitFor({ state: 'visible', timeout: RESULT_TIMEOUT })
      .catch(() => null);
    return { searchUrl, currentUrl: page.url(), responseCapture: true, sideEffect: false };
  },
  collectVisibleJobs: async (page, input = {}, { state }) => {
    const monitor = ensureResponseMonitor(page, state);
    const apiJobs = await drainApiJobs(page, monitor, input.limit ?? 100);
    if (apiJobs.length) {
      return {
        jobs: apiJobs,
        discovered: apiJobs.length,
        source: 'network-response',
        responses: monitor.responses,
        hasMore: monitor.hasMore,
        sideEffect: false,
      };
    }
    const cards = await jobCards(page);
    const count = Math.min(await cards.count(), input.limit ?? 100);
    const jobs = [];
    for (let index = 0; index < count; index += 1) {
      const job = await readCard(cards.nth(index), definition, page.url());
      job.salary = decodeBossText(job.salary);
      if (!job.city && job.description) {
        job.city = job.description.startsWith(job.company)
          ? job.description.slice(job.company.length).trim()
          : job.description;
      }
      jobs.push(job);
    }
    const uniqueJobs = [...new Map(jobs
      .filter((job) => job.platformJobId || job.href)
      .map((job) => [job.platformJobId || job.href, job])).values()];
    return { jobs: uniqueJobs, discovered: uniqueJobs.length, source: 'dom-fallback', sideEffect: false };
  },
  scrollJobList: async (page, input = {}, { state }) => {
    const monitor = ensureResponseMonitor(page, state);
    const responseCountBefore = monitor.responses;
    const cards = await jobCards(page);
    const before = await cards.count();
    const cursorBefore = before > 0
      ? await cards.nth(before - 1).locator('a[href*="/job_detail/"]').first().getAttribute('href').catch(() => null)
      : null;
    if (before > 0) await cards.nth(before - 1).scrollIntoViewIfNeeded().catch(() => null);
    await page.evaluate((distance) => window.scrollBy({ top: distance, behavior: 'auto' }),
      Math.min(Math.max(Number(input.distance ?? 640), 240), 1_000));
    await page.waitForTimeout(input.waitMs ?? SCROLL_SETTLE_MS);
    const after = await cards.count();
    const cursorAfter = after > 0
      ? await cards.nth(after - 1).locator('a[href*="/job_detail/"]').first().getAttribute('href').catch(() => null)
      : null;
    return {
      before,
      after,
      loaded: Math.max(after - before, 0),
      cursorBefore,
      cursorAfter,
      changed: after > before || cursorAfter !== cursorBefore,
      apiResponses: monitor.responses - responseCountBefore,
      hasMore: monitor.hasMore,
      sideEffect: false,
    };
  },
  inspectVisibleJobs: async (page) => {
    const rootSelectors = [
      'li.job-card-wrapper',
      'li.job-card-box',
      '.job-list-container li',
    ];
    const fieldSelectors = [
      '.job-name', '.company-name', '.job-area', '.job-area-wrapper',
      '.salary', '.job-salary', '.job-card-footer', '.job-card-body',
    ];
    const roots = [];
    for (const selector of rootSelectors) {
      const cards = page.locator(selector);
      roots.push({ selector, count: await cards.count() });
    }
    const sample = await jobCards(page);
    const fields = [];
    for (const selector of fieldSelectors) {
      const targets = sample.first().locator(selector);
      const count = await targets.count();
      fields.push({
        selector,
        count,
        text: count > 0 ? await targets.first().textContent().catch(() => null) : null,
      });
    }
    return { available: true, roots, fields, sideEffect: false };
  },
  prepareContact: async (page, job) => {
    await page.goto(job.href, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    const contactActionVisible = await page.locator('a.btn.btn-startchat').first().isVisible().catch(() => false);
    const editorVisible = await page.locator('#chat-input').first().isVisible().catch(() => false);
    return {
      platformJobId: job.platformJobId,
      status: contactActionVisible || editorVisible ? 'READY' : 'UNAVAILABLE',
      currentUrl: page.url(),
      contactActionVisible,
      editorVisible,
      reason: contactActionVisible || editorVisible ? null : 'CONTACT_ACTION_UNAVAILABLE',
    };
  },
  sendContact: async (page, job, input) => {
    await page.goto(job.href, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    const clicked = await clickFirst(page, ['a.btn.btn-startchat']);
    if (!clicked) return { platformJobId: job.platformJobId, status: 'SKIPPED', reason: 'CONTACT_ACTION_UNAVAILABLE' };
    if (input.greeting) {
      const editor = page.locator('#chat-input').first();
      if (await editor.isVisible().catch(() => false)) {
        await editor.fill(input.greeting);
        await clickFirst(page, ['button[type="send"]']);
      }
    }
    return { platformJobId: job.platformJobId, status: 'SUCCEEDED', reason: null };
  },
};

export default { id: 'boss', hosts: ['zhipin.com'], capabilities: ['session', 'discover', 'contact'], actions: createRecruitmentActions(definition) };
