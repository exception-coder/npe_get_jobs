import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'run-workspace',
  order: 5,
  routes: [{
    path: '/runs',
    name: 'recruitment-runs',
    component: () => import('./ui/RecruitmentRunPage.vue'),
    meta: { public: true, title: '运行中心', subtitle: '发现、筛选、匹配后再确认联系' },
  }],
  navigation: [{ title: '运行中心', icon: 'mdi mdi-play-circle-outline', to: '/runs', group: 'workspace' }],
};

export default manifest;
