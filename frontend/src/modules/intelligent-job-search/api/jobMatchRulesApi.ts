const STORAGE_KEY = 'ai_job_extra_rules';

export async function fetchExtraRules(): Promise<string[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function saveExtraRules(rules: string[]): Promise<{ success: boolean; count: number }> {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rules));
  const res = await fetch('/api/ai/job/extra-rules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rules),
  });
  return res.json();
}
