import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'career-insights', order: 20,
  routes: [
    { path: '/company-evaluation', redirect: '/workspace?view=assets&capability=company' },
    { path: '/ai/job-match-rules', redirect: '/workspace?view=assets&capability=rules' },
  ],
  navigation: [],
};
export default manifest;
