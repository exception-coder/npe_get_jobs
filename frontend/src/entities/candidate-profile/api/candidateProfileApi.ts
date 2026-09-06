import { http, httpJson } from '@/api/http';

export interface CandidateProfile {
  selfIntroduction: string;
  introductionRequired: boolean;
}

export async function fetchCandidateProfile() {
  return http<CandidateProfile>('/api/recruitment/profile');
}

export async function updateCandidateIntroduction(selfIntroduction: string) {
  return httpJson<CandidateProfile>('/api/recruitment/profile/introduction', {
    method: 'PUT',
    body: JSON.stringify({ selfIntroduction }),
  });
}
