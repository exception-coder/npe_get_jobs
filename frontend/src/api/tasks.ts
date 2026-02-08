import { http, httpJson } from './http';
import type { PlatformCode } from './platformConfig';

export type TaskAction = 'login' | 'collect' | 'filter' | 'deliver';

export interface TaskStatus {
  status: string;
  message?: string;
  updatedAt?: string;
}

export interface PlatformTaskStatus {
  login?: TaskStatus;
  collect?: TaskStatus;
  filter?: TaskStatus;
  deliver?: TaskStatus;
}

export type TaskStatusResponse = Record<string, PlatformTaskStatus>;

const PLATFORM_ACTION_ENDPOINTS: Record<PlatformCode, string> = {
  boss: '/api/boss',
  zhilian: '/api/zhilian',
  job51: '/api/job51',
  liepin: '/api/liepin',
};

export interface DeliverRequest {
  filterTaskId?: string | null;
  config: Record<string, unknown>;
  enableActualDelivery?: boolean;
}

export async function triggerTask(
  platform: PlatformCode,
  action: TaskAction,
  body: unknown,
) {
  const prefix = PLATFORM_ACTION_ENDPOINTS[platform];
  const endpoint = action === 'deliver' ? 'task/deliver' : `task/${action}`;
  return httpJson<{ success: boolean; taskId?: string; message?: string }>(`${prefix}/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function fetchTaskStatuses() {
  return http<TaskStatusResponse>('/api/tasks/status');
}

export async function checkLogin(platform: PlatformCode) {
  const prefix = PLATFORM_ACTION_ENDPOINTS[platform];
  return http<{ loggedIn: boolean }>(`${prefix}/task/login-status`);
}

export async function submitQuickDelivery(platform: PlatformCode) {
  return http(`/api/task/quick-delivery/submit/${platform}`, {
    method: 'POST',
  });
}
