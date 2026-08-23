import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'job-workspace',
  order: 11,
  routes: [{
    path: '/platform/:platform/records',
    name: 'platform-records',
    component: () => import('./ui/JobRecordsPage.vue'),
    props: true,
    meta: { public: true, title: '岗位工作台', subtitle: '筛选、匹配并推进候选岗位' },
  }, {
    path: '/platform/:platform/records/legacy',
    name: 'platform-records-legacy',
    component: () => import('./ui/JobWorkspacePage.vue'),
    props: true,
    meta: { public: true, title: '旧版岗位明细', subtitle: '迁移期兼容入口' },
  }],
  navigation: [{ title: '岗位记录', icon: 'mdi mdi-format-list-checks', platformLinks: 'records', group: 'platforms' }],
};

export default manifest;
