import { clickFirst, createRecruitmentActions, idFromUrl, queryString } from '../shared/recruitment-actions.js';

const definition = {
  card: '.joblist-box__item, .joblist .joblist-item, .positionlist__item',
  fields: {
    id: ['[data-positionid]', '[data-job-id]'], href: ['a[href*="/jobdetail/"]', 'a[href*="jobs.zhaopin.com"]'],
    title: ['.jobinfo__name', '.job-name'], company: ['.companyinfo__name', '.company-name'],
    city: ['.jobinfo__other', '.job-area'], salary: ['.jobinfo__salary', '.salary'],
    description: ['.jobinfo__tag', '.job-tags'],
  },
  jobId: idFromUrl,
  buildSearchUrl: ({ keyword, cityCode }, filters) => queryString('https://www.zhaopin.com/sou', {
    kw: keyword, jl: cityCode, el: filters.degree, et: filters.jobType, cs: filters.scale,
    sl: filters.salary, we: filters.experience, in: filters.industry,
  }),
  authenticated: async (page) => !(await page.locator('a:has-text("登录/注册")').isVisible().catch(() => true)),
  contact: async (page, job) => {
    await page.goto(job.href, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    const clicked = await clickFirst(page, ['button:has-text("立即投递")', 'a:has-text("立即投递")']);
    return clicked ? { platformJobId: job.platformJobId, status: 'SUCCEEDED', reason: null }
      : { platformJobId: job.platformJobId, status: 'SKIPPED', reason: 'APPLICATION_ACTION_UNAVAILABLE' };
  },
};

export default { id: 'zhilian', hosts: ['zhaopin.com'], capabilities: ['session', 'discover', 'contact'], actions: createRecruitmentActions(definition) };
