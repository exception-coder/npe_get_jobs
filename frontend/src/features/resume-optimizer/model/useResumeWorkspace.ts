import { reactive, ref, watch } from 'vue';
import { getResume, listResumes, saveResume } from '../infrastructure/resumeRepository';
import type { ResumeDraft } from './resumeTypes';

const STORAGE_KEY = 'career-flow:resume-draft';

export function createEmptyResume(): ResumeDraft {
  return {
    personalInfo: { name: '', title: '', phone: '', email: '', location: '', experience: '', coreSkills: [], linkedin: '' },
    strengths: [],
    desiredRole: { title: '', salary: '', location: '', industries: [] },
    workExperiences: [],
    projects: [],
    education: [],
  };
}

function normalize(value: Partial<ResumeDraft> | null | undefined): ResumeDraft {
  const empty = createEmptyResume();
  return {
    ...empty,
    ...value,
    personalInfo: { ...empty.personalInfo, ...value?.personalInfo, coreSkills: value?.personalInfo?.coreSkills || [] },
    strengths: value?.strengths || [],
    desiredRole: { ...empty.desiredRole, ...value?.desiredRole, industries: value?.desiredRole?.industries || [] },
    workExperiences: value?.workExperiences || [],
    projects: value?.projects || [],
    education: value?.education || [],
  };
}

function replaceDraft(target: ResumeDraft, source: ResumeDraft): void {
  Object.keys(target).forEach((key) => delete (target as Record<string, unknown>)[key]);
  Object.assign(target, structuredClone(source));
}

export function useResumeWorkspace() {
  const draft = reactive<ResumeDraft>(createEmptyResume());
  const resumes = ref<ResumeDraft[]>([]);
  const loading = ref(false);
  const saving = ref(false);
  const error = ref('');
  const savedAt = ref('');

  function restoreLocal(): void {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) replaceDraft(draft, normalize(JSON.parse(cached)));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  async function load(): Promise<void> {
    loading.value = true;
    error.value = '';
    try {
      resumes.value = await listResumes();
      if (resumes.value[0]?.id) replaceDraft(draft, normalize(await getResume(resumes.value[0].id)));
    } catch (cause) {
      error.value = cause instanceof Error ? cause.message : '简历加载失败，请稍后重试。';
    } finally {
      loading.value = false;
    }
  }

  async function persist(): Promise<void> {
    if (saving.value) return;
    saving.value = true;
    error.value = '';
    try {
      const result = await saveResume(structuredClone(draft));
      replaceDraft(draft, normalize(result));
      resumes.value = await listResumes();
      savedAt.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    } catch (cause) {
      error.value = cause instanceof Error ? cause.message : '保存失败，请稍后重试。';
    } finally {
      saving.value = false;
    }
  }

  restoreLocal();
  watch(draft, (value) => localStorage.setItem(STORAGE_KEY, JSON.stringify(value)), { deep: true });
  return { draft, resumes, loading, saving, error, savedAt, load, persist };
}
