import type { useCommonConfigState } from '../state/commonConfigState';
import { fetchCommonConfig, saveCommonConfig, type CommonConfig, type AiPlatformOption } from '../api/commonConfigApi';
import type { useSnackbarStore } from '@/stores/snackbar';

type CommonConfigState = ReturnType<typeof useCommonConfigState>;
type SnackbarStore = ReturnType<typeof useSnackbarStore>;

const toArray = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === 'string' ? item.trim() : ''))
      .filter((item) => item.length > 0);
  }
  if (!value) return [];
  return value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
};

const toStringValue = (value: string[]) => value.join(',');

const flattenToStrings = (input: unknown): string[] => {
  if (Array.isArray(input)) {
    return input.reduce<string[]>((acc, item) => acc.concat(flattenToStrings(item)), []);
  }
  if (typeof input === 'string') {
    const trimmed = input.trim();
    return trimmed ? [trimmed] : [];
  }
  return [];
};

const parseDomainExperience = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return flattenToStrings(value);
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return [];
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return flattenToStrings(parsed);
      }
    } catch {
      // 非 JSON 字符串时走降级逻辑
    }
    return toArray(trimmed);
  }
  return [];
};

const normalizeAiPlatforms = (platforms?: Array<AiPlatformOption | string> | unknown): AiPlatformOption[] => {
  if (!platforms) return [];
  if (!Array.isArray(platforms)) return [];
  return platforms
    .map((item) => {
      if (typeof item === 'string') {
        const trimmed = item.trim();
        return trimmed ? { label: trimmed, value: trimmed } : null;
      }
      if (item && typeof item === 'object' && 'label' in item && 'value' in item) {
        const platformItem = item as AiPlatformOption;
        if (typeof platformItem.label === 'string' && typeof platformItem.value === 'string') {
          return { label: platformItem.label, value: platformItem.value };
        }
      }
      return null;
    })
    .filter((item): item is AiPlatformOption => item !== null);
};

export const useCommonConfigService = (state: CommonConfigState, snackbar: SnackbarStore) => {
  const snapshotForm = () => {
    state.initialSnapshot = JSON.parse(JSON.stringify(state.form));
    state.initialAIGreeting = state.aiGreetingMessage;
  };

  const resetForm = () => {
    if (!state.initialSnapshot) return;
    Object.assign(state.form, JSON.parse(JSON.stringify(state.initialSnapshot)));
    state.aiGreetingMessage = state.initialAIGreeting;
    snackbar.show({ message: '已恢复至上次加载的配置', color: 'info' });
  };

  const loadConfig = async () => {
    state.loading = true;
    try {
      console.log('[CommonConfig] 开始加载配置...');
      const response = await fetchCommonConfig();
      console.log('[CommonConfig] 收到响应:', response);
      
      const config: CommonConfig = response?.data ?? {};
      console.log('[CommonConfig] 解析配置数据:', config);

      const normalizedPlatforms = normalizeAiPlatforms(response?.aiPlatforms);
      console.log('[CommonConfig] 标准化平台列表:', normalizedPlatforms);
      
      // 确保 aiPlatforms 始终是数组
      if (Array.isArray(normalizedPlatforms) && normalizedPlatforms.length > 0) {
        state.aiPlatforms = normalizedPlatforms;
      } else {
        // 如果没有平台数据，至少保持默认值
        if (!Array.isArray(state.aiPlatforms) || state.aiPlatforms.length === 0) {
          state.aiPlatforms = [{ label: 'Deepseek', value: 'deepseek' }];
        }
      }

      state.aiConfigsCache = config.aiPlatformConfigs ?? {};

      let resolvedPlatform = config.aiPlatform ?? state.form.aiPlatform;
      if (state.aiPlatforms.length > 0) {
        if (!state.aiPlatforms.some((item) => item.value === resolvedPlatform)) {
          resolvedPlatform = state.aiPlatforms[0].value;
        }
      }

      // 确保数组字段始终是数组
      const ensureArray = (value: unknown): string[] => {
        if (Array.isArray(value)) {
          return value.map((item) => String(item ?? '')).filter((item) => item.length > 0);
        }
        if (typeof value === 'string' && value.trim()) {
          return toArray(value);
        }
        return [];
      };

      Object.assign(state.form, {
        jobBlacklist: toArray(config.jobBlacklistKeywords),
        companyBlacklist: toArray(config.companyBlacklistKeywords),
        jobTitle: config.jobTitle ?? '',
        skills: ensureArray(config.skills),
        yearsOfExperience: config.yearsOfExperience ?? '',
        careerIntent: config.careerIntent ?? '',
        domainExperience: parseDomainExperience(config.domainExperience),
        highlights: ensureArray(config.highlights),
        resumeImagePath: config.resumeImagePath ?? '',
        sayHiContent: config.sayHi ?? config.sayHiContent ?? '',
        aiPlatform: resolvedPlatform,
        minSalary: config.minSalary != null ? String(config.minSalary) : '',
        maxSalary: config.maxSalary != null ? String(config.maxSalary) : '',
        aiPlatformKey: state.aiConfigsCache[resolvedPlatform] ?? '',
        enableAIJobMatch:
          (config.enableAIJobMatchDetection as boolean | undefined) ??
          config.enableAIJobMatch ??
          false,
        enableAIGreeting: config.enableAIGreeting ?? false,
        sendImgResume: config.sendImgResume ?? false,
        recommendJobs: config.recommendJobs ?? false,
        hrStatusKeywords: toArray(config.hrStatusKeywords),
      });
      state.aiGreetingMessage = config.aiGreetingMessage ?? '';

      console.log('[CommonConfig] 表单数据已更新:', state.form);
      snapshotForm();
      console.log('[CommonConfig] 配置加载完成');
    } catch (error) {
      console.error('[CommonConfig] 加载公共配置失败', error);
      snackbar.show({ message: '加载公共配置失败', color: 'error' });
    } finally {
      console.log('[CommonConfig] 设置 loading = false');
      state.loading = false;
    }
  };

  const validateForms = async () => {
    const results = await Promise.all([
      state.blacklistForm?.validate?.(),
      state.profileForm?.validate?.(),
    ]);
    return results.every((result: { valid: boolean } | undefined) => result?.valid !== false);
  };

  const buildPayload = (): CommonConfig => {
    const aiConfig = { ...state.aiConfigsCache };
    if (state.form.aiPlatformKey) {
      aiConfig[state.form.aiPlatform] = state.form.aiPlatformKey;
    }

    return {
      jobBlacklistKeywords: toStringValue(state.form.jobBlacklist),
      companyBlacklistKeywords: toStringValue(state.form.companyBlacklist),
      jobTitle: state.form.jobTitle,
      skills: state.form.skills,
      yearsOfExperience: state.form.yearsOfExperience,
      careerIntent: state.form.careerIntent,
      domainExperience: state.form.domainExperience,
      highlights: state.form.highlights,
      resumeImagePath: state.form.resumeImagePath,
      sayHiContent: state.form.sayHiContent,
      sayHi: state.form.sayHiContent,
      minSalary: state.form.minSalary ? Number(state.form.minSalary) : undefined,
      maxSalary: state.form.maxSalary ? Number(state.form.maxSalary) : undefined,
      aiPlatform: state.form.aiPlatform,
      aiPlatformConfigs: aiConfig,
      enableAIJobMatch: state.form.enableAIJobMatch,
      enableAIJobMatchDetection: state.form.enableAIJobMatch,
      enableAIGreeting: state.form.enableAIGreeting,
      sendImgResume: state.form.sendImgResume,
      recommendJobs: state.form.recommendJobs,
      hrStatusKeywords: toStringValue(state.form.hrStatusKeywords),
    };
  };

  const copyAIGreeting = async () => {
    if (!state.aiGreetingMessage) {
      snackbar.show({ message: '暂无可复制的 AI 建议内容', color: 'warning' });
      return;
    }
    try {
      await navigator.clipboard.writeText(state.aiGreetingMessage);
      snackbar.show({ message: 'AI 建议打招呼内容已复制', color: 'success' });
    } catch (error) {
      console.error('复制 AI 建议打招呼内容失败', error);
      snackbar.show({ message: '复制失败，请手动复制', color: 'error' });
    }
  };

  const handleSave = async () => {
    if (!(await validateForms())) {
      snackbar.show({ message: '请先修正表单校验错误', color: 'warning' });
      return;
    }

    state.saving = true;
    try {
      const payload = buildPayload();
      await saveCommonConfig(payload);
      snackbar.show({ message: '公共配置已保存', color: 'success' });
      snapshotForm();
      localStorage.setItem('candidateProfile', JSON.stringify(payload));
    } catch (error) {
      console.error('保存公共配置失败', error);
      snackbar.show({ message: '保存失败，请稍后再试', color: 'error' });
    } finally {
      state.saving = false;
    }
  };

  return {
    loadConfig,
    resetForm,
    handleSave,
    copyAIGreeting,
  };
};

