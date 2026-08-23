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
}

export interface ContactResult {
  platformJobId: string;
  status: 'SUCCEEDED' | 'FAILED' | 'SKIPPED' | 'BLOCKED';
  reason: string | null;
}

export interface WorkflowSnapshot {
  taskId: string;
  platform: string;
  status: WorkflowStatus;
  stage: WorkflowStage;
  discovered: number;
  filtered: number;
  matched: number;
  contacted: number;
  error: string | null;
  recoveryAction: string | null;
  contactConfirmationRequired: boolean;
  jobs: RecruitmentJob[];
  contactResults: ContactResult[];
  updatedAt: string;
}

export interface BrowserSession {
  sessionId: string;
  platformId: string;
  profile?: string;
  currentUrl: string;
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

export function startWorkflow(platform: string): Promise<WorkflowSnapshot> {
  return request('/api/recruitment/workflows', {
    method: 'POST',
    body: JSON.stringify({ platform }),
  });
}

export function loadWorkflow(taskId: string): Promise<WorkflowSnapshot> {
  return request(`/api/recruitment/workflows/${encodeURIComponent(taskId)}`);
}

export function confirmWorkflowContact(taskId: string): Promise<WorkflowSnapshot> {
  return request(`/api/recruitment/workflows/${encodeURIComponent(taskId)}/contact`, { method: 'POST' });
}

export function openPlatformSession(platform: string): Promise<BrowserSession> {
  return request(`/api/recruitment/platforms/${encodeURIComponent(platform)}/sessions/open`, {
    method: 'POST',
    body: JSON.stringify({ profile: 'default', headless: false }),
  });
}
