import { clickFirst, createRecruitmentActions, idFromUrl, queryString } from '../shared/recruitment-actions.js';

const LOGIN_SELECTOR = 'a:has-text("登录/注册"), a[href*="passport.zhaopin.com"], a.home-header__c-no-login';
const AUTHENTICATED_SELECTOR = 'a.home-header__b-login, div.user-info, div.zp-welcome__username, a#logout';

const isLoginPage = (page) => {
  try {
    const url = new URL(page.url());
    return url.hostname === 'passport.zhaopin.com' || url.pathname.includes('/login');
  } catch {
    return true;
  }
};

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
  authenticated: async (page) => {
    if (isLoginPage(page)) return false;
    if (await page.locator(LOGIN_SELECTOR).first().isVisible().catch(() => false)) return false;
    return page.locator(AUTHENTICATED_SELECTOR).first().isVisible().catch(() => false);
  },
  contact: async (page, job) => {
    await page.goto(job.href, { waitUntil: 'domcontentloaded', timeout: 45_000 });
    if (!(await definition.authenticated(page))) throw new Error('AUTHENTICATION_REQUIRED');
    const clicked = await clickFirst(page, ['button:has-text("立即投递")', 'a:has-text("立即投递")']);
    return clicked ? { platformJobId: job.platformJobId, status: 'SUCCEEDED', reason: null }
      : { platformJobId: job.platformJobId, status: 'SKIPPED', reason: 'APPLICATION_ACTION_UNAVAILABLE' };
  },
};

export default { id: 'zhilian', hosts: ['zhaopin.com'], capabilities: ['session', 'discover', 'contact'], actions: createRecruitmentActions(definition) };
