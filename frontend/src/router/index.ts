import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { checkAuthStatus } from '@/common/infrastructure/auth/auth';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/common',
  },
  {
    path: '/common',
    component: () => import('@/modules/intelligent-job-search/views/CommonConfigView.vue'),
    meta: { public: true },
  },
  {
    path: '/platform/:platform/config',
    name: 'platform-config',
    component: () => import('@/modules/intelligent-job-search/views/PlatformConfigView.vue'),
    props: true,
    meta: { public: true },
  },
  {
    path: '/platform/:platform/records',
    name: 'platform-records',
    component: () => import('@/modules/intelligent-job-search/views/PlatformRecordsView.vue'),
    props: true,
    meta: { public: true },
  },
  {
    path: '/resume-optimizer',
    name: 'resume-optimizer',
    component: () => import('@/modules/vitaPolish/views/ResumeOptimizer.vue'),
    meta: { public: true }, 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/modules/login/views/LoginPage.vue'),
    meta: { public: true }, 
  },
  {
    path: '/:pathMatch(.*)*',
    // 保留原始路径，不进行重定向
    // 如果路径已定义，会正常匹配；如果未定义，会显示404页面但保留URL
    component: () => import('@/views/NotFound.vue'),
    meta: { public: true }, // 404页面为公开页面
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫：默认所有路由都需要认证，只有标记为 public 的路由才不需要认证
router.beforeEach(async (to, from, next) => {
  // 检查是否是公开路由（不需要认证）
  const isPublicRoute = to.meta.public === true;
  
  // 如果是登录页，特殊处理
  if (to.path === '/login') {
    // 如果已登录，重定向到首页或之前想访问的页面
    const isAuthenticated = await checkAuthStatus();
    if (isAuthenticated) {
      const redirect = to.query.redirect as string;
      next(redirect || '/');
      return;
    }
    // 未登录，允许访问登录页
    next();
    return;
  }
  
  // 如果是公开路由，直接放行
  if (isPublicRoute) {
    next();
    return;
  }
  
  // 其他路由都需要认证
  const isAuthenticated = await checkAuthStatus();
  
  if (!isAuthenticated) {
    // 未登录，跳转到登录页，并保存当前路由作为重定向目标
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    // 已登录，继续访问
    next();
  }
});
