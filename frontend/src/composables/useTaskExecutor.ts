import { computed, onBeforeUnmount, reactive, ref } from 'vue';
import { triggerTask, fetchTaskStatuses, checkLogin } from '@/api/tasks';
import type { PlatformCode } from '@/modules/intelligent-job-search/api/platformConfigApi';
import { useSnackbarStore } from '@/stores/snackbar';

export interface TaskState {
  status: 'idle' | 'running' | 'success' | 'error';
  message: string;
  color: 'info' | 'warning' | 'success' | 'error';
  taskId: string | null;
}

export type TaskKey = 'login' | 'collect' | 'filter' | 'deliver';

export interface TaskExecutorOptions {
  platform: PlatformCode;
  platformName: string;
  configProvider: () => Record<string, unknown>;
}

const TASK_LABELS: Record<TaskKey, string> = {
  login: '登录',
  collect: '采集',
  filter: '过滤',
  deliver: '投递',
};

const STATUS_KEY_MAP: Record<PlatformCode, Record<TaskKey, string>> = {
  boss: {
    login: 'BOSS_ZHIPIN_LOGIN',
    collect: 'BOSS_ZHIPIN_COLLECT',
    filter: 'BOSS_ZHIPIN_FILTER',
    deliver: 'BOSS_ZHIPIN_DELIVER',
  },
  zhilian: {
    login: 'ZHILIAN_ZHAOPIN_LOGIN',
    collect: 'ZHILIAN_ZHAOPIN_COLLECT',
    filter: 'ZHILIAN_ZHAOPIN_FILTER',
    deliver: 'ZHILIAN_ZHAOPIN_DELIVER',
  },
  job51: {
    login: 'JOB_51_LOGIN',
    collect: 'JOB_51_COLLECT',
    filter: 'JOB_51_FILTER',
    deliver: 'JOB_51_DELIVER',
  },
  liepin: {
    login: 'LIEPIN_LOGIN',
    collect: 'LIEPIN_COLLECT',
    filter: 'LIEPIN_FILTER',
    deliver: 'LIEPIN_DELIVER',
  },
};

export function useTaskExecutor(options: TaskExecutorOptions) {
  const { platform, platformName, configProvider } = options;
  const snackbar = useSnackbarStore();

  const states = reactive<Record<TaskKey, TaskState>>({
    login: { status: 'idle', message: '待执行', color: 'info', taskId: null },
    collect: { status: 'idle', message: '待执行', color: 'info', taskId: null },
    filter: { status: 'idle', message: '待执行', color: 'info', taskId: null },
    deliver: { status: 'idle', message: '待执行', color: 'info', taskId: null },
  });

  const pollingInterval = ref<ReturnType<typeof setInterval> | null>(null);

  const isAnyRunning = computed(() =>
    (Object.values(states) as TaskState[]).some((state) => state.status === 'running'),
  );

  const updateState = (key: TaskKey, partial: Partial<TaskState>) => {
    states[key] = { ...states[key], ...partial };
  };

  const ensureLoggedIn = async () => {
    const result = await checkLogin(platform);
    return result.loggedIn;
  };

  const startPolling = () => {
    if (pollingInterval.value) return;
    pollingInterval.value = setInterval(async () => {
      try {
        const snapshot = await fetchTaskStatuses();
        const keyMap = STATUS_KEY_MAP[platform];
        if (!keyMap) return;

        const flatSnapshot = snapshot as Record<string, { status?: string; message?: string }>;

        (['login', 'collect', 'filter', 'deliver'] as TaskKey[]).forEach((key) => {
          const statusKey = keyMap[key];
          const taskStatus = flatSnapshot?.[statusKey];
          if (!taskStatus) return;

          const normalizedStatus = taskStatus.status?.toUpperCase?.() ?? '';

          if (normalizedStatus.includes('SUCCESS')) {
            updateState(key, {
              status: 'success',
              color: 'success',
              message: taskStatus.message ?? `${TASK_LABELS[key]}完成`,
            });
          } else if (
            normalizedStatus.includes('FAIL') ||
            normalizedStatus.includes('ERROR') ||
            normalizedStatus.includes('CANCEL')
          ) {
            updateState(key, {
              status: 'error',
              color: 'error',
              message: taskStatus.message ?? `${TASK_LABELS[key]}失败`,
            });
          } else if (
            normalizedStatus.includes('RUNNING') ||
            normalizedStatus.includes('STARTED') ||
            normalizedStatus.includes('PENDING')
          ) {
            updateState(key, {
              status: 'running',
              color: 'warning',
              message: taskStatus.message ?? `${TASK_LABELS[key]}执行中...`,
            });
          }
        });
      } catch (error) {
        console.warn('任务状态轮询失败', error);
      }
    }, 2000);
  };

  const stopPolling = () => {
    if (pollingInterval.value) {
      clearInterval(pollingInterval.value);
      pollingInterval.value = null;
    }
  };

  const runTask = async (key: TaskKey, payload: Record<string, unknown>) => {
    if (states[key].status === 'running') {
      snackbar.show({ message: `${TASK_LABELS[key]}正在执行中`, color: 'warning' });
      return;
    }

    updateState(key, {
      status: 'running',
      color: 'warning',
      message: `${TASK_LABELS[key]}中...`,
    });

    try {
      const response = await triggerTask(platform, key === 'deliver' ? 'deliver' : key, payload);
      if (response.success) {
        updateState(key, {
          taskId: response.taskId ?? null,
          message: `${TASK_LABELS[key]}任务已提交`,
          color: 'info',
          status: 'running',
        });
        snackbar.show({ message: `${platformName}${TASK_LABELS[key]}任务已提交`, color: 'success' });
        startPolling();
      } else {
        updateState(key, {
          status: 'error',
          color: 'error',
          message: response.message ?? `${TASK_LABELS[key]}失败`,
        });
        snackbar.show({ message: response.message ?? `${platformName}${TASK_LABELS[key]}失败`, color: 'error' });
      }
    } catch (error) {
      console.error(`${platformName}${TASK_LABELS[key]}执行异常`, error);
      updateState(key, {
        status: 'error',
        color: 'error',
        message: `${TASK_LABELS[key]}失败`,
      });
      snackbar.show({ message: `${platformName}${TASK_LABELS[key]}接口调用失败`, color: 'error' });
    }
  };

  const executeLogin = async () => {
    await runTask('login', configProvider());
  };

  const executeCollect = async () => {
    if (!(await ensureLoggedIn())) {
      snackbar.show({ message: '请先完成登录步骤', color: 'warning' });
      return;
    }
    await runTask('collect', configProvider());
  };

  const executeFilter = async () => {
    if (!(await ensureLoggedIn())) {
      snackbar.show({ message: '请先完成登录步骤', color: 'warning' });
      return;
    }
    await runTask('filter', {
      collectTaskId: states.collect.taskId,
      config: configProvider(),
    });
  };

  const executeDeliver = async (enableActualDelivery: boolean) => {
    if (!(await ensureLoggedIn())) {
      snackbar.show({ message: '请先完成登录步骤', color: 'warning' });
      return;
    }
    await runTask('deliver', {
      filterTaskId: states.filter.taskId,
      config: configProvider(),
      enableActualDelivery,
    });
  };

  onBeforeUnmount(stopPolling);

  return {
    states,
    isAnyRunning,
    executeLogin,
    executeCollect,
    executeFilter,
    executeDeliver,
    stopPolling,
  };
}
