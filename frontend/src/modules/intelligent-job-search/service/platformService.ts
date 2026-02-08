import { type MaybeRef, type Ref, unref } from 'vue';
import type { usePlatformState } from '../state/platformState';
import { fetchPlatformConfig, savePlatformConfig, fetchPlatformDicts } from '../api/platformConfigApi';
import type { PlatformCode } from '../api/platformConfigApi';
import { submitQuickDelivery } from '@/api/tasks';
import type { useSnackbarStore } from '@/stores/snackbar';
import { fetchTaskStatus, terminateTask, clearTaskStatus } from '../api/taskExecutionApi';

type PlatformState = ReturnType<typeof usePlatformState>;
type SnackbarStore = ReturnType<typeof useSnackbarStore>;

export const usePlatformService = (state: PlatformState, snackbar: SnackbarStore, platformCode: MaybeRef<PlatformCode>) => {
  // 获取响应式的 platformCode 值
  const getPlatformCode = () => unref(platformCode);
  const loadDicts = async () => {
    if (!state.meta.value) {
      state.loadingDicts.value = false;
      return;
    }
    state.loadingDicts.value = true;
    try {
      state.resetDictOptions();
      const dictResponse = await fetchPlatformDicts(getPlatformCode() as any);
      if (!dictResponse || !dictResponse.groups) {
        console.warn('字典响应格式异常', dictResponse);
        return;
      }
      const groupMap = Object.fromEntries(
        (dictResponse.groups ?? []).map((group) => [group.key, group.items ?? []]),
      );
      state.meta.value.fields
        .filter((field) => field.dictKey)
        .forEach((field) => {
          const options = state.flattenOptions(groupMap[field.dictKey as string] || []);
          state.dictOptions[field.key] = options;
        });
    } catch (error) {
      console.error('加载字典失败', error);
      snackbar.show({ message: '加载字典数据失败', color: 'error' });
      // 确保即使出错也重置加载状态
      state.loadingDicts.value = false;
    } finally {
      state.loadingDicts.value = false;
    }
  };

  const loadConfig = async () => {
    if (!state.meta.value) {
      state.loadingConfig.value = false;
      return;
    }
    state.loadingConfig.value = true;
    try {
      const config = await fetchPlatformConfig(getPlatformCode() as any);
      if (config && typeof config === 'object') {
        state.applyConfig(config);
      } else {
        // 如果没有配置数据，使用默认值
        console.info('未找到平台配置，使用默认值');
      }
      state.snapshotForm();
    } catch (error) {
      console.error('加载配置失败', error);
      snackbar.show({ message: '加载平台配置失败', color: 'error' });
      // 确保即使出错也重置加载状态
      state.loadingConfig.value = false;
    } finally {
      state.loadingConfig.value = false;
    }
  };

  const validateForm = async () => {
    const result = await state.formRef.value?.validate?.();
    return result?.valid ?? true;
  };

  const handleSave = async () => {
    if (!state.meta.value) return;
    if (!(await validateForm())) {
      snackbar.show({ message: '请先修正表单校验错误', color: 'warning' });
      return;
    }
    state.saving.value = true;
    try {
      const payload = state.buildPayload();
      await savePlatformConfig(getPlatformCode() as any, payload);
      state.snapshotForm();
      snackbar.show({ message: `${state.meta.value.displayName} 配置已保存`, color: 'success' });
    } catch (error) {
      console.error('保存配置失败', error);
      snackbar.show({ message: '保存失败，请稍后再试', color: 'error' });
    } finally {
      state.saving.value = false;
    }
  };

  const handleQuickDelivery = async () => {
    if (!state.meta.value) return;
    if (!(await validateForm())) {
      snackbar.show({ message: '请先修正表单校验错误', color: 'warning' });
      return;
    }
    state.quickDeliveryLoading.value = true;
    try {
      await submitQuickDelivery(getPlatformCode() as any);
      snackbar.show({ message: `${state.meta.value.displayName} 一键投递任务已提交`, color: 'success' });
      // 提交成功后立即刷新任务状态
      setTimeout(() => {
        loadTaskStatus();
      }, 1000);
    } catch (error) {
      console.error('提交一键投递任务失败', error);
      snackbar.show({ message: '一键投递失败，请稍后再试', color: 'error' });
    } finally {
      state.quickDeliveryLoading.value = false;
    }
  };

  const loadTaskStatus = async () => {
    try {
      console.log('[PlatformService] 开始加载任务状态，平台:', getPlatformCode());
      const response = await fetchTaskStatus(getPlatformCode() as any);
      console.log('[PlatformService] 任务状态响应:', response);
      if (response.success && response.data) {
        state.taskStatus.value = response.data;
        console.log('[PlatformService] 任务状态已更新:', state.taskStatus.value);
      } else {
        state.taskStatus.value = null;
        console.log('[PlatformService] 无任务状态');
      }
    } catch (error) {
      console.error('[PlatformService] 加载任务状态失败', error);
      state.taskStatus.value = null;
    }
  };

  const refreshTaskStatus = async () => {
    await loadTaskStatus();
  };

  const handleTerminateTask = async () => {
    if (!state.meta.value) return;
    state.terminatingTask.value = true;
    try {
      const response = await terminateTask(getPlatformCode() as any);
      if (response.success) {
        snackbar.show({ message: response.message || '终止请求已发送', color: 'success' });
        // 终止后刷新状态
        setTimeout(() => {
          loadTaskStatus();
        }, 500);
      } else {
        snackbar.show({ message: response.message || '终止失败', color: 'warning' });
      }
    } catch (error) {
      console.error('终止任务失败', error);
      snackbar.show({ message: '终止任务失败，请稍后再试', color: 'error' });
    } finally {
      state.terminatingTask.value = false;
    }
  };

  const handleClearTask = async () => {
    if (!state.meta.value) return;
    state.clearingTask.value = true;
    try {
      const response = await clearTaskStatus(getPlatformCode() as any);
      if (response.success) {
        snackbar.show({ message: response.message || '任务状态已清除', color: 'success' });
        state.taskStatus.value = null;
      } else {
        snackbar.show({ message: response.message || '清除失败', color: 'warning' });
      }
    } catch (error) {
      console.error('清除任务状态失败', error);
      snackbar.show({ message: '清除任务状态失败，请稍后再试', color: 'error' });
    } finally {
      state.clearingTask.value = false;
    }
  };

  const resetForm = () => {
    state.resetForm();
    snackbar.show({ message: '已恢复至上次加载的配置', color: 'info' });
  };

  return {
    loadDicts,
    loadConfig,
    handleSave,
    handleQuickDelivery,
    loadTaskStatus,
    refreshTaskStatus,
    handleTerminateTask,
    handleClearTask,
    resetForm,
  };
};

