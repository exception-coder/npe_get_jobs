import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'resume-optimizer', order: 30,
  routes: [{ path: '/resume-optimizer', redirect: '/workspace?view=assets&capability=resume' }],
  navigation: [],
};
export default manifest;
