import { http, httpJson } from '@/api/http';
import type { PlatformCode } from './platformConfigApi';

export interface TaskExecutionStatus {
  platform: string;
  platformCode: string;
  hasTask: boolean;
  currentStep?: string;
  stepDescription?: string;
  stepOrder?: number;
  isTerminated?: boolean;
  terminateRequested?: boolean;
  startTime?: string;
  lastUpdateTime?: string;
  metadata?: Record<string, unknown>;
}

export interface TaskStatusResponse {
  success: boolean;
  message: string;
  data: TaskExecutionStatus;
}

export interface TerminateResponse {
  success: boolean;
  message: string;
}

/**
 * 获取指定平台的任务执行状态
 */
export async function fetchTaskStatus(platform: PlatformCode) {
  return http<TaskStatusResponse>(`/api/task-execution/status/${platform}`);
}

/**
 * 终止指定平台的任务
 */
export async function terminateTask(platform: PlatformCode) {
  return httpJson<TerminateResponse>(`/api/task-execution/terminate/${platform}`, {
    method: 'POST',
  });
}

/**
 * 清理指定平台的任务状态
 */
export async function clearTaskStatus(platform: PlatformCode) {
  return httpJson<TerminateResponse>(`/api/task-execution/status/${platform}`, {
    method: 'DELETE',
  });
}

