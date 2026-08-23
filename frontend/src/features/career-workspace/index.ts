import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'career-workspace',
  order: 10,
  routes: [
    { path: '/workspace', name: 'career-workspace', component: () => import('./ui/CareerWorkspacePage.vue'), meta: { public: true, title: '求职工作台', subtitle: '掌握平台状态与下一步行动' } },
    { path: '/common', name: 'career-settings', component: () => import('@/modules/intelligent-job-search/views/CommonConfigView.vue'), meta: { public: true, title: '求职设置', subtitle: '统一管理筛选、匹配与 AI 参数' } },
  ],
  navigation: [
    { title: '工作台', icon: 'mdi mdi-view-dashboard-outline', to: '/workspace', group: 'workspace' },
    { title: '求职设置', icon: 'mdi mdi-tune', to: '/common', group: 'tools' },
  ],
};

export default manifest;
