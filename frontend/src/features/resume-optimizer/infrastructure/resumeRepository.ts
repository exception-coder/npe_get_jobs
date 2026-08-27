import type { ResumeDraft } from '../model/resumeTypes';

const API_BASE_URL = '/api/resume';

async function readError(response: Response): Promise<string> {
  try {
    const data = await response.json() as { message?: string; error?: string };
    return data.message || data.error || '';
  } catch {
    return '';
  }
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);
  if (!response.ok) {
    const detail = await readError(response);
    throw new Error(detail || `请求失败（${response.status}）`);
  }
  return response.json() as Promise<T>;
}

export function listResumes(): Promise<ResumeDraft[]> {
  return request<ResumeDraft[]>(`${API_BASE_URL}/list`);
}

export function getResume(id: number): Promise<ResumeDraft> {
  return request<ResumeDraft>(`${API_BASE_URL}/${id}`);
}

export function saveResume(draft: ResumeDraft): Promise<ResumeDraft> {
  return request<ResumeDraft>(`${API_BASE_URL}/save`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(draft),
  });
}
