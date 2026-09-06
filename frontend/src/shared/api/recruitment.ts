export type WorkflowStatus = 'QUEUED' | 'RUNNING' | 'AWAITING_CONFIRMATION' | 'BLOCKED' | 'COMPLETED' | 'FAILED';
export type WorkflowStage = 'DISCOVER' | 'FILTER' | 'MATCH' | 'CONTACT';

export interface RecruitmentJob {
  platformJobId: string;
  title: string;
  company: string;
  city: string;
  salary: string;
  description: string;
  href: string;
  facts: RecruitmentJobFacts;
  intentMatch?: { intentVersion: number; jdVersion: string; recommendation: 'apply' | 'skip' | 'review'; summary: string;
    checks: { requirementRef: string; result: string; reason: string; jdEvidence: string }[] };
}

export interface RecruitmentJobFacts {
  experience: string | null;
  degree: string | null;
  companyIndustry: string | null;
  companyStage: string | null;
  companyScale: string | null;
  recruiterName: string | null;
  recruiterTitle: string | null;
  recruiterOnline: boolean | null;
  recruiterActiveText: string | null;
  labels: string[];
  skills: string[];
  benefits: string[];
}

export interface ContactResult {
  platformJobId: string;
  status: 'SUCCEEDED' | 'FAILED' | 'SKIPPED' | 'BLOCKED';
  reason: string | null;
}

export interface WorkflowSnapshot {
  taskId: string;
  platform: string;
  goalId: number;
  status: WorkflowStatus;
  stage: WorkflowStage;
  discovered: number;
  filtered: number;
  matched: number;
  contacted: number;
  error: string | null;
  recoveryAction: string | null;
  contactConfirmationRequired: boolean;
  contactGreeting: string | null;
  jobs: RecruitmentJob[];
  contactResults: ContactResult[];
  updatedAt: string;
}

export interface ContactPreparation {
  platformJobId: string;
  status: 'READY' | 'UNAVAILABLE' | 'BLOCKED';
  currentUrl: string;
  contactActionVisible: boolean;
  editorVisible: boolean;
  reason: string | null;
}

export interface ContactPreparationResult {
  results: ContactPreparation[];
  prepared: number;
  sideEffect: false;
}

export interface RecruitmentGoal {
  id: number;
  rawGoal: string;
  summary: string;
  keywords: string[];
  cities: string[];
  minSalaryK: number | null;
  maxSalaryK: number | null;
  minExperienceYears: number | null;
  maxExperienceYears: number | null;
  industries: string[];
  skills: string[];
  excludedKeywords: string[];
  preferredCompanyTypes: string[];
  jobType: string | null;
  additionalConditions: Record<string, string>;
  interpreterVersion: string;
  active: boolean;
  card: IntentCard | null;
  confirmed: boolean;
}

export interface IntentRequirement {
  state: 'specified' | 'unspecified' | 'unrestricted';
  value: string[];
  range: { min: number | null; max: number | null; unit: string } | null;
  strength: 'must' | 'prefer' | 'exclude' | null;
  evidence: string | null;
}

export interface IntentCard {
  schemaVersion: string;
  summary: string;
  candidateContext: Record<string, string>;
  targetPositions: { id: string; name: string; searchTerms: string[]; preference: string }[];
  requirements: Record<string, IntentRequirement>;
  additionalRequirements: { id: string; appliesTo: string[]; description: string; strength: string; evidence: string }[];
}

export function confirmRecruitmentGoal(sourceId: number, card: IntentCard): Promise<RecruitmentGoal> {
  return request('/api/recruitment/goals/confirm', { method: 'POST', body: JSON.stringify({ sourceId, card }) });
}

export interface BrowserSession {
  sessionId: string;
  platformId: string;
  profile?: string;
  currentUrl: string;
}

export interface BrowserSessionStatus {
  authenticated: boolean;
  currentUrl: string;
  recoveryAction: string | null;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  });
  const body = await response.json().catch(() => null) as { message?: string } | null;
  if (!response.ok) throw new Error(body?.message || `请求失败 (${response.status})`);
  return body as T;
}

export function interpretRecruitmentGoal(goal: string): Promise<RecruitmentGoal> {
  return request('/api/recruitment/goals/interpret', {
    method: 'POST',
    body: JSON.stringify({ goal }),
  });
}

export function loadActiveRecruitmentGoal(): Promise<RecruitmentGoal | null> {
  return request('/api/recruitment/goals/active');
}

export function startWorkflow(platform: string, goalId: number): Promise<WorkflowSnapshot> {
  return request('/api/recruitment/workflows', {
    method: 'POST',
    body: JSON.stringify({ platform, goalId }),
  });
}

export function loadWorkflow(taskId: string): Promise<WorkflowSnapshot> {
  return request(`/api/recruitment/workflows/${encodeURIComponent(taskId)}`);
}

export function startJobWorkflow(jobRecordId: string): Promise<WorkflowSnapshot> {
  return request('/api/recruitment/workflows/from-job', {
    method: 'POST',
    body: JSON.stringify({ jobRecordId }),
  });
}

export function prepareWorkflowContact(taskId: string, platformJobId: string): Promise<ContactPreparationResult> {
  return request(`/api/recruitment/workflows/${encodeURIComponent(taskId)}/contact/prepare`, {
    method: 'POST',
    body: JSON.stringify({ platformJobId }),
  });
}

export interface ContactDeliveryOptions {
  sendResumeImage: boolean;
  resumeImagePath: string;
}

export function loadContactDefaults(): Promise<{ data?: { resumeImagePath?: string; sendImgResume?: boolean } }> {
  return request('/api/common/config/get');
}

export function confirmWorkflowContact(taskId: string, platformJobId: string, greeting: string,
  options: ContactDeliveryOptions = { sendResumeImage: false, resumeImagePath: '' }): Promise<WorkflowSnapshot> {
  return request(`/api/recruitment/workflows/${encodeURIComponent(taskId)}/contact`, {
    method: 'POST',
    body: JSON.stringify({ platformJobId, greeting, ...options }),
  });
}

export function openPlatformSession(platform: string): Promise<BrowserSession> {
  return request(`/api/recruitment/platforms/${encodeURIComponent(platform)}/sessions/open`, {
    method: 'POST',
    body: JSON.stringify({ profile: 'default', headless: false }),
  });
}

export function loadPlatformSessionStatus(platform: string, sessionId: string): Promise<BrowserSessionStatus> {
  return request(`/api/recruitment/platforms/${encodeURIComponent(platform)}/sessions/${encodeURIComponent(sessionId)}/status`);
}
