import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'career-insights', order: 20,
  routes: [
    { path: '/company-evaluation', name: 'company-evaluation', component: () => import('@/modules/intelligent-job-search/views/CompanyEvaluationView.vue'), meta: { public: true, title: '企业评估', subtitle: '在投递前识别企业质量与风险' } },
    { path: '/ai/job-match-rules', name: 'job-match-rules', component: () => import('@/modules/intelligent-job-search/views/AiPromptExtensionView.vue'), meta: { public: true, title: '匹配规则', subtitle: '配置岗位匹配与沟通策略' } },
  ],
  navigation: [
    { title: '企业评估', icon: 'mdi mdi-office-building-outline', to: '/company-evaluation', group: 'tools' },
    { title: '匹配规则', icon: 'mdi mdi-filter-cog-outline', to: '/ai/job-match-rules', group: 'tools' },
  ],
};
export default manifest;
