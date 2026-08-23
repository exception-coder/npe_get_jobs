import { clickFirst, createRecruitmentActions, idFromUrl, queryString } from '../shared/recruitment-actions.js';

const definition = {
  card: 'div.joblist .joblist-item, .j_joblist .e',
  fields: {
    id: ['[data-jobid]', '[data-job-id]'], href: ['a[href*="jobs.51job.com"]', 'a[href*="/job/"]'],
    title: ['.jname', '.job-name'], company: ['.cname', '.company-name'], city: ['.d', '.job-area'],
    salary: ['.sal', '.salary'], description: ['.tags', '.job-tags'],
  },
  jobId: idFromUrl,
  buildSearchUrl: ({ keyword, cityCode }, filters) => queryString('https://we.51job.com/pc/search', {
    keyword, jobArea: cityCode, salary: filters.salary, workYear: filters.experience,
    degree: filters.degree, companySize: filters.scale, issueDate: filters.publishTime, jobType: filters.jobType,
  }),
  authenticated: async (page) => !(await page.locator('.login, a[href*="login.51job.com"]').first().isVisible().catch(() => true)),
  contact: async (page, job) => {
    await page.goto(job.href, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    const clicked = await clickFirst(page, ['button:has-text("申请职位")', 'a:has-text("申请职位")']);
    return clicked ? { platformJobId: job.platformJobId, status: 'SUCCEEDED', reason: null }
      : { platformJobId: job.platformJobId, status: 'SKIPPED', reason: 'APPLICATION_ACTION_UNAVAILABLE' };
  },
};

export default { id: 'job51', hosts: ['51job.com'], capabilities: ['session', 'discover', 'contact'], actions: createRecruitmentActions(definition) };
