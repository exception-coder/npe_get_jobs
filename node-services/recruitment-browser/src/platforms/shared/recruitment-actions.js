const DEFAULT_TIMEOUT = 15_000;

const text = async (scope, selectors) => {
  for (const selector of selectors) {
    const value = await scope.locator(selector).first().textContent().catch(() => null);
    if (value?.trim()) return value.trim();
  }
  return '';
};

const attribute = async (scope, selectors, name) => {
  for (const selector of selectors) {
    const value = await scope.locator(selector).first().getAttribute(name).catch(() => null);
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

export const createRecruitmentActions = (definition) => ({
  async sessionStatus({ page }) {
    const authenticated = await definition.authenticated(page);
    return {
      authenticated,
      currentUrl: page.url(),
      recoveryAction: authenticated ? null : 'OPEN_LOGIN_SESSION',
    };
  },

  async discover({ page }, input) {
    const searches = input.searches?.length ? input.searches : [{ keyword: '', cityCode: '' }];
    const jobs = new Map();
    for (const search of searches) {
      const url = definition.buildSearchUrl(search, input.filters || {});
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45_000 });
      await page.locator(definition.card).first().waitFor({ state: 'visible', timeout: DEFAULT_TIMEOUT }).catch(() => null);
      await loadAll(page, definition.card, input.maxScrolls ?? 6);
      const cards = page.locator(definition.card);
      const count = Math.min(await cards.count(), input.limit ?? 100);
      for (let index = 0; index < count; index += 1) {
        const card = cards.nth(index);
        const job = await readCard(card, definition, page.url());
        const key = job.platformJobId || job.href;
        if (key) jobs.set(key, job);
      }
    }
    return { jobs: [...jobs.values()], discovered: jobs.size, sideEffect: false };
  },

  async contact({ page }, input) {
    if (input.confirmContact !== true) {
      return {
        results: (input.jobs || []).map((job) => ({
          platformJobId: job.platformJobId,
          status: 'SKIPPED',
          reason: 'CONTACT_CONFIRMATION_REQUIRED',
        })),
        contacted: 0,
        sideEffect: false,
      };
    }
    const results = [];
    for (const job of input.jobs || []) {
      results.push(await definition.contact(page, job, input));
      if (input.delayMs) await page.waitForTimeout(input.delayMs);
    }
    return {
      results,
      contacted: results.filter(({ status }) => status === 'SUCCEEDED').length,
      sideEffect: true,
    };
  },
});

async function loadAll(page, cardSelector, maxScrolls) {
  let previous = -1;
  for (let index = 0; index < maxScrolls; index += 1) {
    const current = await page.locator(cardSelector).count();
    if (current === previous) break;
    previous = current;
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(800);
  }
}

async function readCard(card, definition, sourceUrl) {
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
