import { clickFirst, createRecruitmentActions, idFromUrl, queryString } from '../shared/recruitment-actions.js';

const definition = {
  card: '[data-selector="job-card"], .job-card-pc-container, .job-list-box .job-card',
  fields: {
    id: ['[data-job-id]'], href: ['a[href*="/job/"]'], title: ['.job-title-box', '.job-title'],
    company: ['.company-name'], city: ['.job-dq-box', '.job-area'], salary: ['.job-salary'],
    description: ['.labels-tag', '.job-labels'],
  },
  jobId: idFromUrl,
  buildSearchUrl: ({ keyword, cityCode }, filters) => queryString('https://www.liepin.com/zhaopin/', {
    key: keyword, dq: cityCode, salary: filters.salary, workYearCode: filters.experience,
    eduLevel: filters.degree, compScale: filters.scale, industry: filters.industry,
  }),
  authenticated: async (page) => page.locator('ul.header-quick-menu-login').isVisible().catch(() => false),
  contact: async (page, job, input) => {
    await page.goto(job.href, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    const clicked = await clickFirst(page, ['a.btn-chat']);
    if (!clicked) return { platformJobId: job.platformJobId, status: 'SKIPPED', reason: 'CONTACT_ACTION_UNAVAILABLE' };
    if (input.greeting) {
      const editor = page.locator('textarea.__im_basic__textarea').first();
      if (await editor.isVisible().catch(() => false)) {
        await editor.fill(input.greeting);
        await clickFirst(page, ['button.__im_basic__basic-send-btn']);
      }
    }
    return { platformJobId: job.platformJobId, status: 'SUCCEEDED', reason: null };
  },
};

export default { id: 'liepin', hosts: ['liepin.com'], capabilities: ['session', 'discover', 'contact'], actions: createRecruitmentActions(definition) };
