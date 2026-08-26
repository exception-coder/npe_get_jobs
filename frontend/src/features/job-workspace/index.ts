import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'job-workspace',
  order: 11,
  routes: [{
    path: '/platform/:platform/records',
    redirect: (to) => ({ path: '/workspace', query: { platform: String(to.params.platform), view: 'history' } }),
  }, {
    path: '/platform/:platform/records/legacy',
    name: 'platform-records-legacy',
    component: () => import('./ui/JobWorkspacePage.vue'),
    props: true,
    meta: { public: true, title: '旧版岗位明细', subtitle: '迁移期兼容入口' },
  }],
  navigation: [],
};

export default manifest;
