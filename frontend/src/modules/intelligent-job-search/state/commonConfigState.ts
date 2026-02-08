import { reactive, ref, toRefs } from 'vue';
import type { CommonConfig, AiPlatformOption } from '../api/commonConfigApi';

export interface FormModel {
  jobBlacklist: string[];
  companyBlacklist: string[];
  jobTitle: string;
  skills: string[];
  yearsOfExperience: string;
  careerIntent: string;
  domainExperience: string[];
  highlights: string[];
  resumeImagePath: string;
  sayHiContent: string;
  minSalary: string;
  maxSalary: string;
  aiPlatform: string;
  aiPlatformKey: string;
  enableAIJobMatch: boolean;
  enableAIGreeting: boolean;
  sendImgResume: boolean;
  recommendJobs: boolean;
  hrStatusKeywords: string[];
}

export const useCommonConfigState = () => {
  const state = reactive({
    loading: false,
    saving: false,
    showSecret: false,
    aiPlatforms: [{ label: 'Deepseek', value: 'deepseek' }] as AiPlatformOption[],
    aiConfigsCache: {} as Record<string, string>,
    aiGreetingMessage: '',
    form: {
      jobBlacklist: [],
      companyBlacklist: [],
      jobTitle: '',
      skills: [],
      yearsOfExperience: '',
      careerIntent: '',
      domainExperience: [],
      highlights: [],
      resumeImagePath: '',
      sayHiContent: '',
      minSalary: '',
      maxSalary: '',
      aiPlatform: 'deepseek',
      aiPlatformKey: '',
      enableAIJobMatch: false,
      enableAIGreeting: false,
      sendImgResume: false,
      recommendJobs: false,
      hrStatusKeywords: [],
    } as FormModel,
    blacklistForm: null as any,
    profileForm: null as any,
    initialSnapshot: null as FormModel | null,
    initialAIGreeting: '',
    rules: {
      required: (value: string) => (!!value && value.trim().length > 0) || '该项为必填',
      minSkill: (value: string[]) => (value && value.length > 0) || '请至少添加一项技能',
      maxHighlights: (value: string[]) => (!value || value.length <= 5) || '个人亮点最多 5 项',
      careerIntent: (value: string) => {
        if (!value || value.trim().length === 0) {
          return '职业意向不能为空';
        }
        const len = value.trim().length;
        return (len >= 10 && len <= 40) || '建议控制在 10-40 个字';
      },
    },
  });

  return state;
};

