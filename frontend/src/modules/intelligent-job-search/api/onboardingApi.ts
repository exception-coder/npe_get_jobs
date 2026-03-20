import { httpJson } from '@/api/http';

export interface OnboardingParseResult {
  jobTitle: string | null;
  yearsOfExperience: string | null;
  minSalary: number | null;
  maxSalary: number | null;
  skills: string[];
  careerIntent: string | null;
  domainExperience: string[];
  highlights: string[];
  jobBlacklist: string[];
  companyBlacklist: string[];
}

export async function parseOnboarding(description: string): Promise<OnboardingParseResult> {
  return httpJson<OnboardingParseResult>('/api/ai/onboarding/parse', {
    method: 'POST',
    body: JSON.stringify({ description }),
  });
}

export async function saveOnboardingProfile(data: OnboardingParseResult): Promise<{ success: boolean; message: string }> {
  return httpJson('/api/ai/onboarding/save-profile', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
