<template>
  <v-app :style="themeStyles">
    <GlobalSnackbar />

    <!-- 侧边栏：vue-sidebar-menu，折叠时点击父项会弹出子菜单 -->
    <sidebar-menu
      v-if="showDrawer"
      v-model:collapsed="sidebarCollapsed"
      :menu="navMenu"
      :width="sidebarWidth"
      :width-collapsed="sidebarWidthCollapsed"
      :hide-toggle="true"
      class="app-sidebar"
      theme="white-theme"
      @update:collapsed="onSidebarCollapsed"
    >
      <template #header>
        <div class="sidebar-header" :class="{ 'sidebar-header--collapsed': sidebarCollapsed }">
          <div class="logo-wrapper">
            <i class="mdi mdi-briefcase-search logo-icon" />
          </div>
          <template v-if="!sidebarCollapsed">
            <div class="brand-title">智能求职</div>
            <div class="brand-subtitle">AI Career Assistant</div>
          </template>
        </div>
      </template>
      <template #footer>
        <div class="sidebar-footer">
          <button type="button" class="sidebar-toggle" @click="sidebarCollapsed = !sidebarCollapsed">
            <i :class="sidebarCollapsed ? 'mdi mdi-chevron-right' : 'mdi mdi-chevron-left'" />
            <span v-if="!sidebarCollapsed">收起菜单</span>
          </button>
        </div>
      </template>
    </sidebar-menu>

    <!-- 主内容区：根据侧边栏宽度留出 margin -->
    <div v-if="showDrawer" class="app-body" :style="appBodyStyle">
    <!-- 顶部应用栏 -->
    <v-app-bar
      v-if="showAppBar"
      app
      elevation="0"
      class="app-bar"
      :color="currentTheme.appBarBg"
    >
      <div class="app-bar-content">
        <!-- 左侧：标题 -->
        <div class="app-bar-left">
          <v-icon :color="currentTheme.primary" size="28" class="mr-3">
            mdi-briefcase-search-outline
          </v-icon>
          <div class="page-title-wrapper">
            <h1 class="page-title">{{ pageTitle }}</h1>
            <p class="page-subtitle">{{ pageSubtitle }}</p>
          </div>
        </div>

        <v-spacer />

        <!-- 右侧：功能区 -->
        <div class="app-bar-right">
          <!-- AI 状态指示 -->
          <v-chip
            class="ai-chip"
            :color="currentTheme.primary"
            variant="flat"
            size="small"
          >
            <v-icon start size="18">mdi-robot</v-icon>
            <span class="ai-text">Deepseek AI</span>
            <v-icon end size="14" color="success">mdi-circle</v-icon>
          </v-chip>

          <!-- 主题切换器 -->
          <v-menu offset-y>
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon
                variant="text"
                class="theme-btn"
              >
                <v-icon>mdi-palette-outline</v-icon>
              </v-btn>
            </template>
            <v-list class="theme-menu">
              <v-list-subheader>选择主题配色</v-list-subheader>
              <v-list-item
                v-for="theme in themes"
                :key="theme.name"
                @click="currentThemeName = theme.name"
                :class="{ 'active-theme': currentThemeName === theme.name }"
              >
                <template #prepend>
                  <div class="theme-preview" :style="{ background: theme.primary }" />
                </template>
                <v-list-item-title>{{ theme.label }}</v-list-item-title>
                <template #append>
                  <v-icon v-if="currentThemeName === theme.name" color="success">
                    mdi-check-circle
                  </v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-app-bar>

    <!-- 主内容区 -->
    <v-main class="main-content">
      <div class="content-wrapper">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </v-main>
    </div>

    <!-- 无侧边栏时（如登录页）直接渲染主内容 -->
    <template v-if="!showDrawer">
      <v-main class="main-content">
        <div class="content-wrapper">
          <router-view v-slot="{ Component }">
            <transition name="page" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </v-main>
    </template>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import GlobalSnackbar from '@/components/GlobalSnackbar.vue';

const route = useRoute();
const sidebarCollapsed = ref(false);

const sidebarWidth = '280px';
const sidebarWidthCollapsed = '80px';

function onSidebarCollapsed(collapsed: boolean) {
  sidebarCollapsed.value = collapsed;
}

const appBodyStyle = computed(() => ({
  marginLeft: sidebarCollapsed.value ? sidebarWidthCollapsed : sidebarWidth,
}));

// 侧边栏宽度：展开 280px，收起 80px（保证图标完整不裁切）
const drawerWidth = 280;
const railWidth = 80;

// 白名单：只有求职模块的路由才显示顶部栏
const showAppBar = computed(() => {
  const routeName = route.name as string;
  const routePath = route.path;
  return routePath === '/common' || 
         ['platform-config', 'platform-records', 'resume-optimizer', 'company-evaluation'].includes(routeName);
});

const showDrawer = computed(() => route.name !== 'login');

// 页面标题
const pageTitle = computed(() => {
  const path = route.path;
  if (path === '/common') return '公共配置';
  if (path.includes('/config')) return '平台配置';
  if (path.includes('/records')) return '岗位明细';
  if (path.includes('/resume-optimizer')) return '简历优化';
  if (path === '/company-evaluation') return '企业评估';
  return '智能求职助手';
});

const pageSubtitle = computed(() => {
  const path = route.path;
  if (path === '/common') return '管理全局配置和AI设置';
  if (path.includes('/config')) return '配置招聘平台参数';
  if (path.includes('/records')) return '查看和管理岗位信息';
  if (path.includes('/resume-optimizer')) return '优化简历内容和格式';
  if (path === '/company-evaluation') return 'AI 多维度评估企业是否值得投递';
  return 'AI驱动的智能求职解决方案';
});

// 平台配置
const platformItems = [
  { platform: 'boss', title: 'BOSS直聘', icon: 'mdi mdi-briefcase-account', color: '#00B96B' },
  { platform: 'zhilian', title: '智联招聘', icon: 'mdi mdi-city', color: '#1677FF' },
  { platform: 'job51', title: '前程无忧', icon: 'mdi mdi-account-tie', color: '#FF6B00' },
  { platform: 'liepin', title: '猎聘', icon: 'mdi mdi-target-account', color: '#722ED1' },
];

// vue-sidebar-menu 菜单数据（折叠时点击父项会弹出子菜单）
const navMenu = computed(() => [
  {
    title: 'AI智能求职',
    icon: 'mdi mdi-robot-outline',
    child: [
      { href: '/common', title: '公共配置', icon: 'mdi mdi-cog-outline' },
      {
        title: '平台配置',
        icon: 'mdi mdi-tune-variant',
        child: platformItems.map((p) => ({
          href: `/platform/${p.platform}/config`,
          title: p.title,
          icon: p.icon,
        })),
      },
      {
        title: '岗位明细',
        icon: 'mdi mdi-table-large',
        child: platformItems.map((p) => ({
          href: `/platform/${p.platform}/records`,
          title: `${p.title}岗位`,
          icon: p.icon,
        })),
      },
      { href: '/company-evaluation', title: '企业评估', icon: 'mdi mdi-office-building-cog-outline' },
    ],
  },
  {
    href: '/resume-optimizer',
    title: '简历优化',
    icon: 'mdi mdi-file-document-edit-outline',
  },
]);

// 主题配置
const themes = [
  {
    name: 'professional',
    label: '专业蓝调',
    primary: '#1677FF',
    accent: '#00B96B',
    appBarBg: '#FFFFFF',
    drawerBg: '#F8FAFC',
    iconColor: '#64748B',
    divider: '#E2E8F0',
    textPrimary: '#0F172A',
    textSecondary: '#64748B',
  },
  {
    name: 'business',
    label: '商务灰度',
    primary: '#475569',
    accent: '#F59E0B',
    appBarBg: '#FFFFFF',
    drawerBg: '#F1F5F9',
    iconColor: '#64748B',
    divider: '#CBD5E1',
    textPrimary: '#1E293B',
    textSecondary: '#64748B',
  },
  {
    name: 'energetic',
    label: '活力橙红',
    primary: '#FF6B00',
    accent: '#FF4D4F',
    appBarBg: '#FFFFFF',
    drawerBg: '#FFF7ED',
    iconColor: '#FB923C',
    divider: '#FFEDD5',
    textPrimary: '#7C2D12',
    textSecondary: '#C2410C',
  },
  {
    name: 'fresh',
    label: '清新绿意',
    primary: '#00B96B',
    accent: '#52C41A',
    appBarBg: '#FFFFFF',
    drawerBg: '#F0FDF4',
    iconColor: '#4ADE80',
    divider: '#DCFCE7',
    textPrimary: '#14532D',
    textSecondary: '#15803D',
  },
];

const currentThemeName = ref('professional');
const currentTheme = computed(() => 
  themes.find(t => t.name === currentThemeName.value) || themes[0]
);

const themeStyles = computed(() => ({
  '--theme-primary': currentTheme.value.primary,
  '--theme-accent': currentTheme.value.accent,
  '--theme-text-primary': currentTheme.value.textPrimary,
  '--theme-text-secondary': currentTheme.value.textSecondary,
}));
</script>

<style scoped>
/* CSS 变量 */
:deep(.v-application) {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* vue-sidebar-menu 覆盖：与当前主题一致 */
.app-sidebar {
  --vsm-primary-color: v-bind('currentTheme.primary');
  --vsm-base-bg: v-bind('currentTheme.drawerBg');
  --vsm-item-color: v-bind('currentTheme.textPrimary');
  --vsm-item-active-bg: rgba(0, 0, 0, 0.06);
  --vsm-item-active-line-color: v-bind('currentTheme.primary');
  --vsm-item-hover-bg: rgba(0, 0, 0, 0.04);
  --vsm-icon-color: v-bind('currentTheme.primary');
  --vsm-dropdown-bg: v-bind('currentTheme.drawerBg');
  --vsm-toggle-btn-color: v-bind('currentTheme.textSecondary');
  border-right: 1px solid v-bind('currentTheme.divider');
}

.sidebar-header {
  padding: 20px 16px;
  min-height: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
}

.sidebar-header--collapsed {
  align-items: center;
  padding: 16px 8px;
}

.sidebar-header .logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, v-bind('currentTheme.primary') 0%, v-bind('currentTheme.accent') 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.sidebar-header--collapsed .logo-wrapper {
  width: 40px;
  height: 40px;
}

.sidebar-header .logo-icon {
  font-size: 28px;
  color: #fff;
}

.sidebar-header .brand-title {
  font-size: 18px;
  font-weight: 700;
  color: v-bind('currentTheme.textPrimary');
  letter-spacing: -0.02em;
}

.sidebar-header .brand-subtitle {
  font-size: 11px;
  font-weight: 500;
  color: v-bind('currentTheme.textSecondary');
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.app-body {
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.sidebar-footer {
  padding: 12px;
  border-top: 1px solid v-bind('currentTheme.divider');
}

.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 12px;
  background: none;
  border: none;
  border-radius: 8px;
  color: v-bind('currentTheme.textSecondary');
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.sidebar-toggle:hover {
  background: rgba(0, 0, 0, 0.04);
}

.sidebar-toggle .mdi {
  font-size: 20px;
}

.sidebar-toggle span {
  margin-left: 8px;
}

/* 顶部应用栏 */
.app-bar {
  border-bottom: 1px solid v-bind('currentTheme.divider') !important;
  backdrop-filter: blur(8px);
}

.app-bar-content {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px;
}

.app-bar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.page-title {
  font-size: 20px;
  font-weight: 700;
  color: v-bind('currentTheme.textPrimary');
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
}

.page-subtitle {
  font-size: 12px;
  font-weight: 500;
  color: v-bind('currentTheme.textSecondary');
  margin: 0;
  line-height: 1.2;
}

.app-bar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ai-chip {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  padding: 0 12px;
  height: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.ai-text {
  margin: 0 4px;
}

.theme-btn {
  color: v-bind('currentTheme.iconColor') !important;
}

/* 主题菜单 */
.theme-menu {
  min-width: 220px;
}

.theme-preview {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.active-theme {
  background: rgba(0, 0, 0, 0.04);
}

/* 主内容区 */
.main-content {
  background: linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%);
}

.content-wrapper {
  min-height: calc(100vh - 64px);
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-enter-active {
  transition: all 0.3s ease-out;
}

.page-leave-active {
  transition: all 0.2s ease-in;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 响应式设计 */
@media (max-width: 960px) {
  .page-subtitle {
    display: none;
  }
  
  .ai-text {
    display: none;
  }
  
  .brand-subtitle {
    display: none;
  }
}
</style>
