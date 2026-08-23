import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'resume-optimizer', order: 30,
  routes: [{ path: '/resume-optimizer', name: 'resume-optimizer', component: () => import('@/modules/vitaPolish/views/ResumeOptimizer.vue'), meta: { public: true, title: '简历优化', subtitle: '围绕目标岗位调整简历表达' } }],
  navigation: [{ title: '简历优化', icon: 'mdi mdi-file-document-edit-outline', to: '/resume-optimizer', group: 'tools' }],
};
export default manifest;
