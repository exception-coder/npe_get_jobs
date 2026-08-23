import { clickFirst, createRecruitmentActions, idFromUrl, queryString } from '../shared/recruitment-actions.js';

const definition = {
  card: 'ul.rec-job-list li.job-card-box, .job-list-container li.job-card-box',
  fields: {
    id: ['[data-job-id]'],
    href: ['a.job-card-left', 'a[href*="/job_detail/"]'],
    title: ['.job-name', '.job-title'],
    company: ['.company-name', '.boss-name'],
    city: ['.job-area', '.job-area-wrapper'],
    salary: ['.salary'],
    description: ['.job-card-footer', '.tag-list'],
  },
  jobId: idFromUrl,
  buildSearchUrl: ({ keyword, cityCode }, filters) => queryString('https://www.zhipin.com/web/geek/job', {
    city: cityCode, query: keyword, jobType: filters.jobType, salary: filters.salary,
    experience: filters.experience, degree: filters.degree, scale: filters.scale,
    industry: filters.industry, stage: filters.stage,
  }),
  authenticated: async (page) => {
    if (await page.locator('a.header-login-btn').isVisible().catch(() => false)) return false;
    return page.locator('a[ka="header-message"], a[ka="header-resume"], li.nav-figure').first().isVisible().catch(() => false);
  },
  contact: async (page, job, input) => {
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
