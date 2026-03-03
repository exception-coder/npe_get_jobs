<template>
  <v-app :style="themeStyles">
    <GlobalSnackbar />
    
    <!-- 侧边导航栏 -->
    <v-navigation-drawer
      v-if="showDrawer"
      v-model="drawer"
      :rail="rail"
      permanent
      app
      class="nav-drawer"
      :color="currentTheme.drawerBg"
    >
      <!-- 导航栏头部 -->
      <div class="drawer-header">
        <transition name="fade" mode="out-in">
          <div v-if="!rail" class="header-content">
            <div class="logo-wrapper">
              <v-icon :color="currentTheme.primary" size="32">mdi-briefcase-search</v-icon>
            </div>
            <div class="brand-text">
              <div class="brand-title">智能求职</div>
              <div class="brand-subtitle">AI Career Assistant</div>
            </div>
          </div>
          <div v-else class="header-content-mini">
            <v-icon :color="currentTheme.primary" size="28">mdi-briefcase-search</v-icon>
          </div>
        </transition>
      </div>

      <v-divider class="my-2" :color="currentTheme.divider" />

      <!-- 导航菜单 -->
      <v-list density="compact" nav class="nav-list">
        <v-list-group value="ai-job-search">
          <template #activator="{ props: groupProps }">
            <v-list-item
              v-bind="groupProps"
              class="nav-item-main"
              :class="{ 'rail-mode': rail }"
            >
              <template #prepend>
                <div class="nav-icon-wrapper">
                  <v-icon :color="currentTheme.primary">mdi-robot-outline</v-icon>
                </div>
              </template>
              <v-list-item-title class="nav-title">AI智能求职</v-list-item-title>
            </v-list-item>
          </template>

          <!-- 公共配置 -->
          <v-list-item
            to="/common"
            class="nav-item-sub"
            :class="{ 'rail-mode': rail }"
          >
            <template #prepend>
              <v-icon size="20" :color="currentTheme.iconColor">mdi-cog-outline</v-icon>
            </template>
            <v-list-item-title>公共配置</v-list-item-title>
          </v-list-item>

          <!-- 平台配置分组 -->
          <div class="nav-section">
            <v-list-subheader v-if="!rail" class="section-header">
              <v-icon size="14" class="mr-1">mdi-circle-small</v-icon>
              平台配置
            </v-list-subheader>
            <v-list-item
              v-for="item in platformItems"
              :key="item.platform"
              :to="`/platform/${item.platform}/config`"
              class="nav-item-sub"
              :class="{ 'rail-mode': rail }"
            >
              <template #prepend>
                <v-icon size="20" :color="item.color">{{ item.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </div>

          <!-- 岗位明细分组 -->
          <div class="nav-section">
            <v-list-subheader v-if="!rail" class="section-header">
              <v-icon size="14" class="mr-1">mdi-circle-small</v-icon>
              岗位明细
            </v-list-subheader>
            <v-list-item
              v-for="item in platformItems"
              :key="`${item.platform}-records`"
              :to="`/platform/${item.platform}/records`"
              class="nav-item-sub"
              :class="{ 'rail-mode': rail }"
            >
              <template #prepend>
                <v-icon size="20" :color="currentTheme.iconColor">mdi-table-large</v-icon>
              </template>
              <v-list-item-title>{{ item.title }}岗位</v-list-item-title>
            </v-list-item>
          </div>
        </v-list-group>

        <!-- 简历优化 -->
        <v-list-item
          to="/resume-optimizer"
          class="nav-item-main"
          :class="{ 'rail-mode': rail }"
        >
          <template #prepend>
            <div class="nav-icon-wrapper">
              <v-icon :color="currentTheme.accent">mdi-file-document-edit-outline</v-icon>
            </div>
          </template>
          <v-list-item-title class="nav-title">简历优化</v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- 导航栏底部 -->
      <template #append>
        <div class="drawer-footer">
          <v-divider class="mb-2" :color="currentTheme.divider" />
          <v-btn
            :icon="rail"
            :block="!rail"
            variant="text"
            @click="rail = !rail"
            class="toggle-btn"
          >
            <v-icon>{{ rail ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
            <span v-if="!rail" class="ml-2">收起菜单</span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

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
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import GlobalSnackbar from '@/components/GlobalSnackbar.vue';

const drawer = ref(true);
const rail = ref(false);
const route = useRoute();

// 白名单：只有求职模块的路由才显示顶部栏
const showAppBar = computed(() => {
  const routeName = route.name as string;
  const routePath = route.path;
  return routePath === '/common' || 
         ['platform-config', 'platform-records', 'resume-optimizer'].includes(routeName);
});

const showDrawer = computed(() => route.name !== 'login');

// 页面标题
const pageTitle = computed(() => {
  const path = route.path;
  if (path === '/common') return '公共配置';
  if (path.includes('/config')) return '平台配置';
  if (path.includes('/records')) return '岗位明细';
  if (path.includes('/resume-optimizer')) return '简历优化';
  return '智能求职助手';
});

const pageSubtitle = computed(() => {
  const path = route.path;
  if (path === '/common') return '管理全局配置和AI设置';
  if (path.includes('/config')) return '配置招聘平台参数';
  if (path.includes('/records')) return '查看和管理岗位信息';
  if (path.includes('/resume-optimizer')) return '优化简历内容和格式';
  return 'AI驱动的智能求职解决方案';
});

// 平台配置
const platformItems = [
  { platform: 'boss', title: 'BOSS直聘', icon: 'mdi-briefcase-account', color: '#00B96B' },
  { platform: 'zhilian', title: '智联招聘', icon: 'mdi-city', color: '#1677FF' },
  { platform: 'job51', title: '前程无忧', icon: 'mdi-account-tie', color: '#FF6B00' },
  { platform: 'liepin', title: '猎聘', icon: 'mdi-target-account', color: '#722ED1' },
];

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

/* 导航栏样式 */
.nav-drawer {
  border-right: 1px solid v-bind('currentTheme.divider') !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-header {
  padding: 20px 16px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.header-content-mini {
  display: flex;
  justify-content: center;
  width: 100%;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, v-bind('currentTheme.primary') 0%, v-bind('currentTheme.accent') 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.brand-text {
  flex: 1;
}

.brand-title {
  font-size: 18px;
  font-weight: 700;
  color: v-bind('currentTheme.textPrimary');
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.brand-subtitle {
  font-size: 11px;
  font-weight: 500;
  color: v-bind('currentTheme.textSecondary');
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 2px;
}

/* 导航列表 */
.nav-list {
  padding: 8px;
}

.nav-item-main {
  margin-bottom: 4px;
  border-radius: 10px !important;
  transition: all 0.2s ease;
}

.nav-item-main:hover {
  background: rgba(0, 0, 0, 0.04) !important;
  transform: translateX(2px);
}

.nav-item-main.rail-mode {
  justify-content: center;
}

.nav-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
}

.nav-item-main:hover .nav-icon-wrapper {
  background: v-bind('currentTheme.primary');
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.nav-item-main:hover .nav-icon-wrapper :deep(.v-icon) {
  color: white !important;
}

.nav-title {
  font-weight: 600;
  font-size: 14px;
  color: v-bind('currentTheme.textPrimary');
}

.nav-section {
  margin: 8px 0;
}

.section-header {
  font-size: 11px;
  font-weight: 600;
  color: v-bind('currentTheme.textSecondary');
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 8px 16px 4px;
  opacity: 0.8;
}

.nav-item-sub {
  margin: 2px 0;
  border-radius: 8px !important;
  padding-left: 16px !important;
  transition: all 0.2s ease;
}

.nav-item-sub:hover {
  background: rgba(0, 0, 0, 0.03) !important;
  padding-left: 20px !important;
}

.nav-item-sub.rail-mode {
  padding-left: 16px !important;
}

.nav-item-sub :deep(.v-list-item-title) {
  font-size: 13px;
  font-weight: 500;
  color: v-bind('currentTheme.textSecondary');
}

.nav-item-sub:hover :deep(.v-list-item-title) {
  color: v-bind('currentTheme.textPrimary');
}

/* 导航栏底部 */
.drawer-footer {
  padding: 12px;
}

.toggle-btn {
  color: v-bind('currentTheme.textSecondary') !important;
  font-size: 13px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
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
