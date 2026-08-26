const DEFAULT_TIMEOUT = 15_000;
const DEFAULT_SCROLL_DISTANCE = 720;

const text = async (scope, selectors) => {
  for (const selector of selectors) {
    const target = scope.locator(selector).first();
    if (await target.count() === 0) continue;
    const value = await target.textContent().catch(() => null);
    if (value?.trim()) return value.trim();
  }
  return '';
};

const attribute = async (scope, selectors, name) => {
  for (const selector of selectors) {
    const target = scope.locator(selector).first();
    if (await target.count() === 0) continue;
    const value = await target.getAttribute(name).catch(() => null);
    if (value) return value;
  }
  return '';
};

export const queryString = (baseUrl, values) => {
  const url = new URL(baseUrl);
  Object.entries(values).forEach(([key, value]) => {
    const valuesToAppend = Array.isArray(value) ? value : [value];
    valuesToAppend.filter(Boolean).forEach((item) => url.searchParams.append(key, String(item)));
  });
  return url.toString();
};

export const createRecruitmentActions = (definition) => {
  const actions = {
    async sessionStatus({ page }) {
      const authenticated = await definition.authenticated(page);
      return {
        authenticated,
        currentUrl: page.url(),
        recoveryAction: authenticated ? null : 'OPEN_LOGIN_SESSION',
      };
    },

    async searchJobs(context, input) {
      const { page } = context;
      if (definition.searchJobs) return definition.searchJobs(page, input, context);
      const search = input.search || { keyword: '', cityCode: '' };
      const url = definition.buildSearchUrl(search, input.filters || {});
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45_000 });
      await page.locator(definition.card).first()
        .waitFor({ state: 'visible', timeout: DEFAULT_TIMEOUT })
        .catch(() => null);
      return { searchUrl: url, currentUrl: page.url(), sideEffect: false };
    },

    async collectVisibleJobs(context, input = {}) {
      const { page } = context;
      if (definition.collectVisibleJobs) return definition.collectVisibleJobs(page, input, context);
      const cards = page.locator(definition.card);
      const count = Math.min(await cards.count(), input.limit ?? 100);
      const jobs = [];
      for (let index = 0; index < count; index += 1) {
        jobs.push(await readCard(cards.nth(index), definition, page.url()));
      }
      const uniqueJobs = unique(jobs);
      return { jobs: uniqueJobs, discovered: uniqueJobs.length, sideEffect: false };
    },

    async scrollJobList(context, input = {}) {
      const { page } = context;
      if (definition.scrollJobList) return definition.scrollJobList(page, input, context);
      const before = await page.locator(definition.card).count();
      const distance = Math.min(Math.max(Number(input.distance ?? DEFAULT_SCROLL_DISTANCE), 200), 1_200);
      await page.evaluate(({ selectors, delta }) => {
        const container = selectors.map((selector) => document.querySelector(selector))
          .find((element) => element && element.scrollHeight > element.clientHeight);
        if (container) container.scrollBy({ top: delta, behavior: 'auto' });
        else window.scrollBy({ top: delta, behavior: 'auto' });
      }, { selectors: definition.scrollContainers || [], delta: distance });
      await page.waitForTimeout(input.waitMs ?? 1_200);
      const after = await page.locator(definition.card).count();
      return { before, after, loaded: Math.max(after - before, 0), sideEffect: false };
    },

    async inspectVisibleJobs({ page }) {
      if (!definition.inspectVisibleJobs) {
        return { available: false, sideEffect: false };
      }
      return definition.inspectVisibleJobs(page);
    },

    async prepareContact({ page }, input) {
      const results = [];
      for (const job of input.jobs || []) {
        if (definition.prepareContact) {
          results.push(await definition.prepareContact(page, job, input));
        } else {
          results.push({
            platformJobId: job.platformJobId,
            status: 'UNAVAILABLE',
            currentUrl: page.url(),
            contactActionVisible: false,
            editorVisible: false,
            reason: 'PREPARE_CONTACT_NOT_IMPLEMENTED',
          });
        }
      }
      return {
        results,
        prepared: results.filter(({ status }) => status === 'READY').length,
        sideEffect: false,
      };
    },

    async sendContact({ page }, input) {
      if (input.confirmContact !== true) return confirmationRequired(input.jobs || []);
      const results = [];
      for (const job of input.jobs || []) {
        const send = definition.sendContact || definition.contact;
        results.push(await send(page, job, input));
        if (input.delayMs) await page.waitForTimeout(input.delayMs);
      }
      return {
        results,
        contacted: results.filter(({ status }) => status === 'SUCCEEDED').length,
        sideEffect: true,
      };
    },
  };

  actions.discover = async (context, input) => {
    const searches = input.searches?.length ? input.searches : [{ keyword: '', cityCode: '' }];
    const jobs = new Map();
    const batches = [];
    for (const search of searches) {
      await actions.searchJobs(context, { search, filters: input.filters });
      const initial = await actions.collectVisibleJobs(context, { limit: input.limit });
      addBatch(initial.jobs, jobs, batches);
      for (let index = 0; index < (input.maxScrolls ?? 1); index += 1) {
        const scroll = await actions.scrollJobList(context, input.scroll || {});
        const collected = await actions.collectVisibleJobs(context, { limit: input.limit });
        addBatch(collected.jobs, jobs, batches);
        if (scroll.changed === false || (scroll.changed == null && scroll.loaded === 0)) break;
      }
    }
    return { jobs: [...jobs.values()], batches, discovered: jobs.size, sideEffect: false };
  };

  actions.contact = actions.sendContact;
  return actions;
};

const addBatch = (items, jobs, batches) => {
  const incremental = [];
  for (const job of items) {
    const key = job.platformJobId || job.href;
    if (key && !jobs.has(key)) incremental.push(job);
    if (key) jobs.set(key, job);
  }
  if (incremental.length) batches.push(incremental);
};

const unique = (jobs) => [...new Map(jobs
  .filter((job) => job.platformJobId || job.href)
  .map((job) => [job.platformJobId || job.href, job])).values()];

const confirmationRequired = (jobs) => ({
  results: jobs.map((job) => ({
    platformJobId: job.platformJobId,
    status: 'SKIPPED',
    reason: 'CONTACT_CONFIRMATION_REQUIRED',
  })),
  contacted: 0,
  sideEffect: false,
});

export async function readCard(card, definition, sourceUrl) {
  const href = await attribute(card, definition.fields.href, 'href');
  const absoluteHref = href ? new URL(href, sourceUrl).toString() : '';
  return {
    platformJobId: await attribute(card, definition.fields.id, 'data-job-id') || definition.jobId(absoluteHref),
    title: await text(card, definition.fields.title),
    company: await text(card, definition.fields.company),
    city: await text(card, definition.fields.city),
    salary: await text(card, definition.fields.salary),
    description: await text(card, definition.fields.description),
    href: absoluteHref,
  };
}

export const clickFirst = async (page, selectors) => {
  for (const selector of selectors) {
    const target = page.locator(selector).first();
    if (await target.isVisible().catch(() => false)) {
      await target.click();
      return true;
    }
  }
  return false;
};

export const idFromUrl = (href) => {
  if (!href) return '';
  const url = new URL(href);
  return url.searchParams.get('jobId') || url.pathname.split('/').filter(Boolean).at(-1)?.replace(/\.html$/, '') || '';
};
