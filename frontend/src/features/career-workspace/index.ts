import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'career-workspace',
  order: 10,
  routes: [
    { path: '/common', redirect: '/workspace?view=assets&capability=settings' },
  ],
  navigation: [],
};

export default manifest;
