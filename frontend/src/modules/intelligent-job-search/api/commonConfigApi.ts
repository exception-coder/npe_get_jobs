import { http, httpJson } from '@/api/http';

export interface AiPlatformOption {
  label: string;
  value: string;
}

export interface CommonConfigResponse {
  data?: CommonConfig;
  aiPlatforms?: Array<AiPlatformOption | string>;
}

export interface CommonConfig {
  jobBlacklistKeywords?: string | string[];
  companyBlacklistKeywords?: string | string[];
  jobTitle?: string;
  skills?: string[];
  yearsOfExperience?: string;
  careerIntent?: string;
  domainExperience?: string[] | string;
  location?: string;
  tone?: string;
  language?: string;
  highlights?: string[];
  maxChars?: number;
  dedupeKeywords?: string[];
  resumeImagePath?: string;
  sayHiContent?: string;
  sayHi?: string;
  aiGreetingMessage?: string;
  minSalary?: string | number;
  maxSalary?: string | number;
  aiPlatform?: string;
  aiPlatformConfigs?: Record<string, string>;
  enableAIJobMatch?: boolean;
  enableAIJobMatchDetection?: boolean;
  enableAIGreeting?: boolean;
  filterDeadHR?: boolean;
  sendImgResume?: boolean;
  recommendJobs?: boolean;
  hrStatusKeywords?: string | string[];
}

export async function fetchCommonConfig() {
  return http<CommonConfigResponse>('/api/common/config/get');
}

export async function saveCommonConfig(payload: CommonConfig) {
  return httpJson<{ success: boolean; message?: string }>(
    '/api/common/config/save',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  );
}

