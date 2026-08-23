import type { RouteRecordRaw } from 'vue-router';

export interface FeatureNavigationItem {
  title: string;
  icon: string;
  to?: string;
  children?: FeatureNavigationItem[];
  platformLinks?: 'config' | 'records';
  group?: 'workspace' | 'platforms' | 'tools';
}

export interface FeatureManifest {
  id: string;
  order: number;
  routes: RouteRecordRaw[];
  navigation: FeatureNavigationItem[];
}
