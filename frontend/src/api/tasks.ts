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

/** 一键投递时的流程控制：采集、过滤、投递是否启用 */
export interface DeliveryFlowOptions {
  collect?: boolean;
  filter?: boolean;
  deliver?: boolean;
}

/** 一键投递提交：POST /api/task/quick-delivery/submit/{platformCode}，body 为流程控制 collect/filter/deliver */
export async function submitQuickDelivery(
  platform: PlatformCode,
  options?: DeliveryFlowOptions,
) {
  const url = `/api/task/quick-delivery/submit/${platform}`;
  const body = options ?? { collect: true, filter: true, deliver: true };
  return httpJson<{ id?: string; status?: string; [key: string]: unknown }>(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}
