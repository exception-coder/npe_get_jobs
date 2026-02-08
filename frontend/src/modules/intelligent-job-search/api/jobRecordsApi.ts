import { http, httpJson } from '@/api/http';
import type { PlatformCode } from './platformConfigApi';

export interface JobRecord {
  id: string;
  jobTitle?: string;
  jobUrl?: string;
  companyName?: string;
  workCity?: string;
  jobType?: number;
  salaryRange?: string;
  description?: string;
  publishTime?: string;
  status?: number;
  isFavorite?: boolean;
  companyLogo?: string;
  companyIndustry?: string;
  companyScale?: string;
  companyStage?: string;
  brandIntroduce?: string;
  brandLabels?: string | string[];
  hrName?: string;
  // AI匹配相关字段
  aiMatched?: boolean | null;
  aiMatchScore?: string;
  aiMatchReason?: string;
  filterReason?: string;
  [key: string]: unknown;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface JobQueryParams {
  platform: PlatformCode | string;
  keyword?: string;
  page?: number;
  size?: number;
}

export async function fetchJobRecords(params: JobQueryParams) {
  const url = new URL('/api/jobs', window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, String(value));
    }
  });
  return http<PageResponse<JobRecord>>(url.toString());
}

export async function toggleFavorite(jobId: string, isFavorite: boolean) {
  return httpJson<{ success: boolean }>(`/api/jobs/${jobId}/favorite`, {
    method: 'PUT',
    body: JSON.stringify({ isFavorite }),
  });
}

export async function resetJobFilter(platformName: string) {
  const body = new URLSearchParams({ platform: platformName });
  return http<{ count: number }>('/api/jobs/reset-filter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });
}

export async function deleteAllJobs(platformName: string) {
  const body = new URLSearchParams({ platform: platformName });
  return http('/api/jobs', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });
}

