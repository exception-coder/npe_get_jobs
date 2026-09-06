import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'run-workspace',
  order: 5,
  routes: [{
    path: '/workspace',
    name: 'recruitment-workspace',
    component: () => import('./ui/RecruitmentRunPage.vue'),
    meta: { public: true, title: '今天', subtitle: '说出目标，找到值得投递的岗位' },
  }],
  navigation: [{ title: '今天', icon: 'mdi mdi-sparkles', to: '/workspace', group: 'workspace' }],
};

export default manifest;
