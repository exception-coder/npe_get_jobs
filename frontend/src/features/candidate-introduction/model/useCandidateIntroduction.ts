import { ref } from 'vue';
import { fetchCandidateProfile, updateCandidateIntroduction } from '@/entities/candidate-profile/api/candidateProfileApi';

export function useCandidateIntroduction() {
  const introduction = ref('');
  const dialogOpen = ref(false);
  const saving = ref(false);
  const error = ref('');

  async function load() {
    try {
      const profile = await fetchCandidateProfile();
      introduction.value = profile.selfIntroduction ?? '';
      dialogOpen.value = profile.introductionRequired;
    } catch {
      // Candidate onboarding must not block the core job-search workspace.
    }
  }

  async function save(value: string) {
    const normalized = value.trim();
    if (normalized.length < 20) {
      error.value = '请至少写 20 个字，让系统更准确地理解你的经验。';
      return;
    }
    saving.value = true;
    error.value = '';
    try {
      const profile = await updateCandidateIntroduction(normalized);
      introduction.value = profile.selfIntroduction;
      dialogOpen.value = false;
    } catch {
      error.value = '暂时没有保存成功，请稍后再试。';
    } finally {
      saving.value = false;
    }
  }

  function dismiss() {
    dialogOpen.value = false;
    error.value = '';
  }

  function clearError() {
    error.value = '';
  }

  return { introduction, dialogOpen, saving, error, load, save, dismiss, clearError };
}
