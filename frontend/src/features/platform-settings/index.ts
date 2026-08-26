import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'platform-settings',
  order: 12,
  routes: [{
    path: '/platform/:platform/config',
    redirect: (to) => ({ path: '/workspace', query: { platform: String(to.params.platform), view: 'operate', sources: 'open' } }),
  }, {
    path: '/platform/:platform/config/legacy',
    name: 'platform-config-legacy',
    component: () => import('./ui/PlatformSettingsPage.vue'),
    props: true,
    meta: { public: true, title: '高级平台配置', subtitle: '迁移期完整参数入口' },
  }],
  navigation: [],
};

export default manifest;
