<template>
  <v-app>
    <GlobalSnackbar />
    <v-navigation-drawer
      v-if="showDrawer"
      v-model="drawer"
      expand-on-hover
      rail
      app
    >
      <v-list density="compact" nav>
        <v-list-group value="ai-job-search" color="primary">
          <template #activator="{ props: groupProps }">
            <v-list-item
              v-bind="groupProps"
              prepend-icon="mdi-robot"
              title="AI智能求职"
            />
          </template>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="公共配置"
            to="/common"
            class="pl-8"
          />
          <v-list-subheader class="pl-8 text-caption">平台配置</v-list-subheader>
          <v-list-item
            v-for="item in platformItems"
            :key="item.platform"
            :title="item.title"
            :prepend-icon="item.icon"
            :to="`/platform/${item.platform}/config`"
            class="pl-8"
          />
          <v-list-subheader class="pl-8 text-caption">岗位明细</v-list-subheader>
          <v-list-item
            v-for="item in platformItems"
            :key="`${item.platform}-records`"
            :title="`${item.title}岗位`"
            prepend-icon="mdi-table"
            :to="`/platform/${item.platform}/records`"
            class="pl-8"
          />
        </v-list-group>
        <v-list-item
          prepend-icon="mdi-file-account"
          title="简历优化"
          to="/resume-optimizer"
        />
        <v-list-group value="sasl" color="primary">
          <template #activator="{ props: groupProps }">
            <v-list-item
              v-bind="groupProps"
              prepend-icon="mdi-form-select"
              title="SASL"
            />
          </template>
          <v-list-item
            prepend-icon="mdi-form-select"
            title="SASL 表单"
            to="/sasl/form"
            class="pl-8"
          />
          <v-list-item
            prepend-icon="mdi-cog-outline"
            title="SASL 配置"
            to="/sasl/config"
            class="pl-8"
          />
        </v-list-group>
        <v-list-item
          prepend-icon="mdi-file-table-box-multiple"
          title="在线表格协作"
          to="/web-docs"
        />
        <v-list-group value="utility-tools" color="primary">
          <template #activator="{ props: groupProps }">
            <v-list-item
              v-bind="groupProps"
              prepend-icon="mdi-tools"
              title="实用工具"
            />
          </template>
          <v-list-item
            prepend-icon="mdi-link-variant"
            title="媒体链接解析"
            to="/media-parser"
            class="pl-8"
          />
          <v-list-item
            prepend-icon="mdi-card-text"
            title="小红书卡片生成"
            to="/xiaohongshu-card"
            class="pl-8"
          />
        </v-list-group>
        <v-list-group value="knowledge-base" color="primary">
          <template #activator="{ props: groupProps }">
            <v-list-item
              v-bind="groupProps"
              prepend-icon="mdi-book-open-variant"
              title="知识库"
            />
          </template>
          <v-list-item
            prepend-icon="mdi-database"
            title="MySQL MVCC"
            to="/knowledge-base/mysql-mvcc"
            class="pl-8"
          />
          <v-list-group value="spring" color="primary">
            <template #activator="{ props: springGroupProps }">
              <v-list-item
                v-bind="springGroupProps"
                prepend-icon="mdi-leaf"
                title="Spring"
                class="pl-8"
              />
            </template>
            <v-list-item
              prepend-icon="mdi-cog"
              title="Bean 创建"
              to="/knowledge-base/spring-bean-creation"
              class="pl-16"
            />
            <v-list-item
              prepend-icon="mdi-shield-star"
              title="AOP"
              to="/knowledge-base/spring-aop"
              class="pl-16"
            />
            <v-list-item
              prepend-icon="mdi-tag-multiple"
              title="注解"
              to="/knowledge-base/spring-annotation"
              class="pl-16"
            />
            <v-list-item
              prepend-icon="mdi-lightning-bolt"
              title="异步与事件"
              to="/knowledge-base/spring-async-event"
              class="pl-16"
            />
            <v-list-item
              prepend-icon="mdi-database-check"
              title="事务"
              to="/knowledge-base/spring-transaction"
              class="pl-16"
            />
            <v-list-item
              prepend-icon="mdi-puzzle"
              title="设计模式"
              to="/knowledge-base/spring-design-pattern"
              class="pl-16"
            />
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      v-if="showAppBar"
      app
      color="primary"
      density="comfortable"
      elevation="1"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="app-toolbar-title">智能求职助手</v-toolbar-title>
      <v-spacer />
      <v-chip
        class="mr-3"
        color="primary-darken-1"
        variant="tonal"
        prepend-icon="mdi-robot"
      >
        Deepseek AI 集成
      </v-chip>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import GlobalSnackbar from '@/components/GlobalSnackbar.vue';

const drawer = ref(true);
const route = useRoute();
// 白名单：只有求职模块的路由才显示顶部栏
const showAppBar = computed(() => {
  const routeName = route.name as string;
  const routePath = route.path;
  // 求职模块路由：公共配置、平台配置、岗位明细、简历优化
  return routePath === '/common' || 
         ['platform-config', 'platform-records', 'resume-optimizer'].includes(routeName);
});
const showDrawer = computed(() => !['sasl-form', 'sasl-config', 'login'].includes(route.name as string));

const platformItems = [
  { platform: 'boss', title: 'BOSS直聘', icon: 'mdi-briefcase-account' },
  { platform: 'zhilian', title: '智联招聘', icon: 'mdi-city' },
  { platform: 'job51', title: '前程无忧', icon: 'mdi-account-tie' },
  { platform: 'liepin', title: '猎聘', icon: 'mdi-target-account' },
];
</script>
