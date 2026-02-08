import { http, httpJson } from './http';

export type PlatformCode = 'boss' | 'zhilian' | 'job51' | 'liepin';

export interface DictGroup {
  key: string;
  items: Array<Record<string, unknown>>;
}

export interface DictResponse {
  groups: DictGroup[];
}

export interface PlatformConfigPayload {
  [key: string]: string | boolean | number | undefined;
}

const PLATFORM_ENDPOINTS: Record<PlatformCode, string> = {
  boss: '/api/config/boss',
  zhilian: '/api/config/zhilian',
  job51: '/api/config/job51',
  liepin: '/api/config/liepin',
};

const PLATFORM_DICTS: Record<PlatformCode, string> = {
  boss: '/dicts/BOSS_ZHIPIN',
  zhilian: '/dicts/ZHILIAN_ZHAOPIN',
  job51: '/dicts/JOB_51',
  liepin: '/dicts/LIEPIN',
};

export async function fetchPlatformConfig(platform: PlatformCode) {
  return http<Record<string, unknown>>(PLATFORM_ENDPOINTS[platform]);
}

export async function savePlatformConfig(platform: PlatformCode, payload: PlatformConfigPayload) {
  return httpJson<{ success: boolean }>(PLATFORM_ENDPOINTS[platform], {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function fetchPlatformDicts(platform: PlatformCode) {
  return http<DictResponse>(PLATFORM_DICTS[platform]);
}
