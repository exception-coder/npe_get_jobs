import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { featureRoutes } from '@/app/featureRegistry';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/workspace',
  },
  ...featureRoutes,
  {
    path: '/login',
    redirect: '/workspace',
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
