import { httpJson } from '@/api/http';

export interface CompanyExtraRules {
  deductions: string[];
  bonuses: string[];
}

const STORAGE_KEY = 'ai_company_extra_rules';

export async function fetchCompanyExtraRules(): Promise<CompanyExtraRules> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { deductions: [], bonuses: [] };
  } catch {
    return { deductions: [], bonuses: [] };
  }
}

export async function saveCompanyExtraRules(rules: CompanyExtraRules): Promise<{ success: boolean }> {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rules));
  return httpJson('/api/ai/company/extra-rules', {
    method: 'POST',
    body: JSON.stringify(rules),
  });
}
