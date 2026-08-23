import type { FeatureManifest } from '@/app/feature';

const manifest: FeatureManifest = {
  id: 'platform-settings',
  order: 12,
  routes: [{
    path: '/platform/:platform/config',
    name: 'platform-config',
    component: () => import('./ui/PlatformSessionPage.vue'),
    props: true,
    meta: { public: true, title: '平台配置', subtitle: '管理账号会话与平台专属参数' },
  }, {
    path: '/platform/:platform/config/legacy',
    name: 'platform-config-legacy',
    component: () => import('./ui/PlatformSettingsPage.vue'),
    props: true,
    meta: { public: true, title: '高级平台配置', subtitle: '迁移期完整参数入口' },
  }],
  navigation: [{ title: '平台会话', icon: 'mdi mdi-connection', platformLinks: 'config', group: 'platforms' }],
};

export default manifest;
