import { CommandType } from '@univerjs/core';
import type { IWorkbookData, Univer } from '@univerjs/core';
import type { FUniver } from '@univerjs/core/lib/facade';
import type { FWorkbook } from '@univerjs/sheets/facade';
import type { HttpError } from '@/api/http';
import { useSnackbarStore } from '@/stores/snackbar';
import type {
  TeamSpreadsheetDocumentPayload,
  TeamSpreadsheetDocumentResponse,
} from '../api/teamSpreadsheetApi';
import {
  fetchTeamSpreadsheetDocument,
  updateTeamSpreadsheetDocument,
} from '../api/teamSpreadsheetApi';
import type { TeamSpreadsheetState } from '../state/teamSpreadsheetState';
import { useTeamSpreadsheetState } from '../state/teamSpreadsheetState';

/**
 * 团队在线表格的生命周期管理器。
 *
 * 核心职责：
 * - 懒加载并初始化 Univer，挂载/卸载工作簿以及回收资源
 * - 让前端状态（`TeamSpreadsheetState`）始终与最新文档元信息同步
 * - 结合自动保存与变更去抖策略，持续写入工作簿快照
 * - 向视图层暴露 mount/flush/dispose 等命令式操作
 */

/**
 * 根据不同 HTTP 异常结构提取最友好的提示文案。
 */
const resolveHttpErrorMessage = (error: unknown, fallback: string): string => {
  if (error && typeof error === 'object') {
    const httpError = error as Partial<HttpError> & { message?: string };
    const payload = httpError.payload;
    if (payload && typeof payload === 'object' && 'message' in payload) {
      const message = (payload as { message?: unknown }).message;
      if (typeof message === 'string' && message.trim().length > 0) {
        return message;
      }
    }
    if (typeof httpError.message === 'string' && httpError.message.trim().length > 0) {
      return httpError.message;
    }
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return fallback;
};

/**
 * 判断是否为“文档不存在”相关的错误（404 或包含特定提示）。
 */
const isDocumentMissingError = (error: unknown): boolean => {
  if (!error || typeof error !== 'object') {
    return false;
  }

  const httpError = error as Partial<HttpError> & { payload?: unknown };
  if (typeof httpError.status === 'number' && httpError.status === 404) {
    return true;
  }

  if (typeof httpError.status === 'number' && httpError.status === 400) {
    const payload = httpError.payload;
    if (payload && typeof payload === 'object' && 'message' in payload) {
      const message = (payload as { message?: unknown }).message;
      if (typeof message === 'string' && message.includes('文档不存在')) {
        return true;
      }
    }
  }

  return false;
};

/**
 * 安全解析后端返回的工作簿 JSON 快照。
 */
const parseWorkbookSnapshot = (content: string | null | undefined): Partial<IWorkbookData> | null => {
  if (!content || content.trim().length === 0) {
    return null;
  }
  try {
    const snapshot = JSON.parse(content) as Partial<IWorkbookData>;
    if (snapshot && typeof snapshot === 'object') {
      return snapshot;
    }
  } catch (error) {
    console.warn('解析工作簿快照失败', error);
  }
  return null;
};

const updateSnapshotCache = (snapshot: string | null) => {
  lastPersistedSnapshot = snapshot;
  lastParsedSnapshot = snapshot ? parseWorkbookSnapshot(snapshot) : null;
};

/**
 * service 级别共享的 Univer / workbook 缓存。
 * 放在 `useTeamSpreadsheetService` 之外，可确保无论 composable 被创建多少次都只维护一份实例。
 */
let univerInstance: Univer | null = null;
let univerAPI: FUniver | null = null;
let workbook: FWorkbook | null = null;
let lastPersistedSnapshot: string | null = null;
let lastParsedSnapshot: Partial<IWorkbookData> | null = null;
let autoSaveTimer: ReturnType<typeof setInterval> | null = null;
let savingInFlight = false;
let currentDocumentId: number | null = null;
let currentDocumentMeta: Pick<TeamSpreadsheetDocumentResponse, 'title' | 'description' | 'remark'> | null = null;
type DisposableLike = { dispose: () => void };

let workbookChangeDisposable: DisposableLike | null = null;
let changeDebounceTimer: ReturnType<typeof setTimeout> | null = null;
let pendingMutations = false;
let workbookIdSeed = 0;

type CommandExecutedEvent = { type?: CommandType | null };

const AUTO_SAVE_INTERVAL_MS = 30_000;
const CHANGE_DEBOUNCE_MS = 5_000;

type LanguageValue = string | string[] | boolean | LocaleMessages | LocaleMessages[];
interface LocaleMessages {
  [key: string]: LanguageValue;
}
type LocaleModule = { default?: LocaleMessages };
type PresetModule = Record<string, any>;
type PresetDescriptor = {
  importPreset: () => Promise<PresetModule>;
  importLocale: () => Promise<LocaleModule>;
  resolvePreset: (module: PresetModule) => unknown | null | undefined;
};
type LocaleLoader = () => Promise<LocaleModule>;
type CreateUniverFn = typeof import('@univerjs/presets')['createUniver'];
type CreateUniverOptions = Parameters<CreateUniverFn>[0];
type UniverPresetCollection = CreateUniverOptions['presets'];
type UniverLocales = NonNullable<CreateUniverOptions['locales']>;

const getNormalizedEnvString = (value: unknown): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return Object.prototype.toString.call(value) === '[object Object]';
};

type LoopProfilingMeta = Record<string, string | number | boolean | undefined>;
const shouldProfileLoops =
  import.meta.env.DEV ||
  String(import.meta.env.VITE_ENABLE_SPREADSHEET_PROFILING ?? '').toLowerCase() === 'true';
const getLoopProfilingTimestamp = (): number => {
  return typeof performance !== 'undefined' && typeof performance.now === 'function'
    ? performance.now()
    : Date.now();
};
const logLoopProfiling = (
  label: string,
  iterations: number,
  durationMs: number,
  meta: LoopProfilingMeta = {},
) => {
  if (!shouldProfileLoops) {
    return;
  }
  const normalizedDuration = Number.isFinite(durationMs) ? durationMs.toFixed(2) : durationMs;
  const metaText = Object.entries(meta)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join(' ');
  const suffix = metaText ? ` ${metaText}` : '';
  console.info(`[TeamSpreadsheet][Loop] ${label}: iterations=${iterations} duration=${normalizedDuration}ms${suffix}`);
};

const mergeLocaleMessages = (target: LocaleMessages, source: LocaleMessages): LocaleMessages => {
  const result = target;
  const entries = Object.entries(source);
  const start = getLoopProfilingTimestamp();
  entries.forEach(([key, value]) => {
    if (isPlainObject(value)) {
      const existing = isPlainObject(result[key]) ? (result[key] as LocaleMessages) : {};
      result[key] = mergeLocaleMessages(existing, value as LocaleMessages);
      return;
    }
    result[key] = value as LanguageValue;
  });
  logLoopProfiling('mergeLocaleMessages', entries.length, getLoopProfilingTimestamp() - start, {
    targetKeys: Object.keys(result).length,
  });
  return result;
};

const createSheetsPresetDescriptors = (container: HTMLElement): PresetDescriptor[] => {
  const licenseKey = getNormalizedEnvString(import.meta.env.VITE_UNIVER_LICENSE);
  const universerEndpoint = getNormalizedEnvString(import.meta.env.VITE_UNIVER_ENDPOINT);
  const collaborationEndpoint =
    getNormalizedEnvString(import.meta.env.VITE_UNIVER_COLLAB_ENDPOINT) ?? universerEndpoint;
  const start = getLoopProfilingTimestamp();
  const descriptors: PresetDescriptor[] = [
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-core'),
      importLocale: () => import('@univerjs/presets/preset-sheets-core/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsCorePreset({ container }),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-conditional-formatting'),
      importLocale: () =>
        import('@univerjs/presets/preset-sheets-conditional-formatting/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsConditionalFormattingPreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-data-validation'),
      importLocale: () => import('@univerjs/presets/preset-sheets-data-validation/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsDataValidationPreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-filter'),
      importLocale: () => import('@univerjs/presets/preset-sheets-filter/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsFilterPreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-sort'),
      importLocale: () => import('@univerjs/presets/preset-sheets-sort/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsSortPreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-table'),
      importLocale: () => import('@univerjs/presets/preset-sheets-table/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsTablePreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-note'),
      importLocale: () => import('@univerjs/presets/preset-sheets-note/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsNotePreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-thread-comment'),
      importLocale: () => import('@univerjs/presets/preset-sheets-thread-comment/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsThreadCommentPreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-hyper-link'),
      importLocale: () => import('@univerjs/presets/preset-sheets-hyper-link/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsHyperLinkPreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-find-replace'),
      importLocale: () => import('@univerjs/presets/preset-sheets-find-replace/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsFindReplacePreset?.(),
    },
    {
      importPreset: () => import('@univerjs/presets/preset-sheets-drawing'),
      importLocale: () => import('@univerjs/presets/preset-sheets-drawing/locales/zh-CN'),
      resolvePreset: (module) => module.UniverSheetsDrawingPreset?.(),
    },
  ];

  if (licenseKey && universerEndpoint) {
    descriptors.push({
      importPreset: () => import('@univerjs/presets/preset-sheets-advanced'),
      importLocale: () => import('@univerjs/presets/preset-sheets-advanced/locales/zh-CN'),
      resolvePreset: (module) =>
        module.UniverSheetsAdvancedPreset?.({
          license: licenseKey,
          universerEndpoint,
          useWorker: true,
        }),
    });
  }

  if (licenseKey && collaborationEndpoint) {
    descriptors.push({
      importPreset: () => import('@univerjs/presets/preset-sheets-collaboration'),
      importLocale: () => import('@univerjs/presets/preset-sheets-collaboration/locales/zh-CN'),
      resolvePreset: (module) =>
        module.UniverSheetsCollaborationPreset?.({
          universerEndpoint: collaborationEndpoint,
          univerContainerId: container.id,
        }),
    });
  }

  logLoopProfiling(
    'createSheetsPresetDescriptors',
    descriptors.length,
    getLoopProfilingTimestamp() - start,
    {
      hasLicenseKey: Boolean(licenseKey),
      hasCollabEndpoint: Boolean(collaborationEndpoint),
    },
  );
  return descriptors;
};

const baseLocaleLoaders: LocaleLoader[] = [
  () => import('@univerjs/ui/locale/zh-CN'),
  () => import('@univerjs/design/locale/zh-CN'),
  () => import('@univerjs/sheets-ui/locale/zh-CN'),
  () => import('@univerjs/docs-ui/locale/zh-CN'),
];

/**
 * 初始化 Univer 运行时与表格 preset，保证挂载文档前环境就绪。
 */
const ensureUniver = async (container: HTMLElement, snackbar: ReturnType<typeof useSnackbarStore>): Promise<boolean> => {
  if (univerInstance && univerAPI) {
    return true;
  }

  try {
    if (!container.id) {
      container.id = 'team-spreadsheet-host';
    }

    const presetDescriptors = createSheetsPresetDescriptors(container);
    const [{ createUniver, LocaleType, defaultTheme }, presetModules, localeModules] = await Promise.all([
      import('@univerjs/presets'),
      Promise.all(presetDescriptors.map((descriptor) => descriptor.importPreset())),
      Promise.all([
        ...baseLocaleLoaders.map((loader) => loader()),
        ...presetDescriptors.map((descriptor) => descriptor.importLocale()),
      ]),
    ]);

    const zhCNLocale = localeModules.reduce<LocaleMessages>((acc, module) => {
      if (module?.default && typeof module.default === 'object') {
        return mergeLocaleMessages(acc, module.default as LocaleMessages);
      }
      return acc;
    }, {});

    const presetInstances = presetModules
      .map((module, index) => presetDescriptors[index].resolvePreset(module) ?? null)
      .filter((preset): preset is NonNullable<typeof preset> => preset !== null) as UniverPresetCollection;
    const localizedMessages: UniverLocales = {
      [LocaleType.ZH_CN]: zhCNLocale,
    } as UniverLocales;

    const { univer, univerAPI: api } = createUniver({
      locale: LocaleType.ZH_CN,
      locales: localizedMessages,
      theme: defaultTheme,
      presets: presetInstances,
    });

    univerInstance = univer;
    univerAPI = api;
    return true;
  } catch (error) {
    console.error('初始化 Univer 失败', error);
    snackbar.show({ message: '加载表格组件失败，请刷新后重试', color: 'error' });
    return false;
  }
};

/**
 * 根据最新快照创建 Univer 工作簿实例。
 */
const createWorkbookFromDocument = (document: TeamSpreadsheetDocumentResponse): FWorkbook => {
  if (!univerAPI) {
    throw new Error('Univer API 未初始化');
  }
  const snapshot = parseWorkbookSnapshot(document.content);
  const workbookConfig: Partial<IWorkbookData> = snapshot ? { ...snapshot } : {};

  workbookConfig.id = `team-spreadsheet-${document.id}-${Date.now()}-${workbookIdSeed++}`;
  if (!workbookConfig.name || typeof workbookConfig.name !== 'string') {
    workbookConfig.name = document.title;
  }

  return univerAPI.createWorkbook(workbookConfig, { makeCurrent: true });
};

export interface TeamSpreadsheetService {
  mountDocument: (documentId: number) => Promise<boolean>;
  flushAutoSave: () => Promise<void>;
  disposeWorkbook: () => void;
  disposeUniver: () => void;
  getWorkbookSnapshot: () => IWorkbookData | null;
}

/**
 * 面向 Vue 组件暴露服务契约的核心 composable。
 * 负责把 Univer 状态机与应用状态、持久化 API 串联起来。
 */
export const useTeamSpreadsheetService = (
  state: TeamSpreadsheetState = useTeamSpreadsheetState(),
): TeamSpreadsheetService => {
  const snackbar = useSnackbarStore();

  /**
   * --- 计时器相关工具 ------------------------------------------------------
   */
  const clearAutoSaveTimer = () => {
    if (autoSaveTimer) {
      clearInterval(autoSaveTimer);
      autoSaveTimer = null;
    }
  };

  /**
   * --- Univer / 命令监听工具 ----------------------------------------------
   */
  const clearWorkbookChangeListener = () => {
    workbookChangeDisposable?.dispose();
    workbookChangeDisposable = null;
  };

  const clearChangeDebounceTimer = () => {
    if (changeDebounceTimer) {
      clearTimeout(changeDebounceTimer);
      changeDebounceTimer = null;
    }
  };

  /**
   * --- 变更去抖 ------------------------------------------------------------
   * 在短时间内合并多次编辑，仅触发一次保存。
   */
  const scheduleBufferedSaveFromChanges = () => {
    if (!pendingMutations) {
      return;
    }
    clearChangeDebounceTimer();
    changeDebounceTimer = setTimeout(() => {
      changeDebounceTimer = null;
      void persistDocument();
    }, CHANGE_DEBOUNCE_MS);
  };

  /**
   * 捕获 Univer 层的 MUTATION 事件并启动去抖保存。
   */
  const handleWorkbookMutation = () => {
    if (!workbook || currentDocumentId == null) {
      return;
    }
    pendingMutations = true;
    scheduleBufferedSaveFromChanges();
  };

  /**
   * 订阅 Univer 的命令流，仅响应该写入快照的 MUTATION。
   */
  const registerWorkbookChangeListener = () => {
    clearWorkbookChangeListener();
    if (!univerAPI) {
      return;
    }
    workbookChangeDisposable = univerAPI.addEvent(univerAPI.Event.CommandExecuted, (event: CommandExecutedEvent) => {
      if (event.type !== CommandType.MUTATION) {
        return;
      }
      handleWorkbookMutation();
    });
  };

  /**
   * --- 持久化 --------------------------------------------------------------
   * 自动保存与变更去抖共用的核心写入逻辑。
   */
  const persistDocument = async (options?: { force?: boolean }) => {
    if (!workbook || currentDocumentId == null) {
      return;
    }

    const snapshot = JSON.stringify(workbook.save());
    if (!options?.force && snapshot === lastPersistedSnapshot) {
      pendingMutations = false;
      return;
    }

    if (savingInFlight) {
      scheduleBufferedSaveFromChanges();
      return;
    }

    const payload: TeamSpreadsheetDocumentPayload = {
      title: currentDocumentMeta?.title ?? state.currentDocumentTitle.value ?? '未命名文档',
      description: currentDocumentMeta?.description ?? '',
      content: snapshot,
      remark: currentDocumentMeta?.remark ?? '',
    };

    savingInFlight = true;
    state.autoSaving.value = true;

    try {
      const response = await updateTeamSpreadsheetDocument(currentDocumentId, payload);
      currentDocumentMeta = {
        title: response.title,
        description: response.description ?? '',
        remark: response.remark ?? '',
      };
      state.currentDocumentTitle.value = response.title;
      updateSnapshotCache(snapshot);
      pendingMutations = false;
      state.lastSavedAt.value = new Date();
    } catch (error) {
      console.error('自动保存失败', error);
      const message = resolveHttpErrorMessage(error, '自动保存失败，请稍后再试');
      snackbar.show({ message, color: 'error' });
    } finally {
      savingInFlight = false;
      state.autoSaving.value = false;
    }
  };

  /**
   * --- 自动保存周期 --------------------------------------------------------
   */
  const scheduleAutoSave = () => {
    clearAutoSaveTimer();
    autoSaveTimer = setInterval(() => {
      void persistDocument();
    }, AUTO_SAVE_INTERVAL_MS);
  };

  /**
   * --- 公共 API：mountDocument -------------------------------------------
   */
  const mountDocument = async (documentId: number): Promise<boolean> => {
    if (!documentId) {
      return false;
    }

    state.initializing.value = true;
    state.currentDocumentTitle.value = null;
    let succeeded = false;

    try {
      const container = state.containerRef.value;
      // 表格的可见区域尺寸 = Vue 模板里 `.fortune-sheet-host` 容器的 CSS 高度，
      // 目前在 `TeamSpreadsheet.vue` 中通过 height/min-height (calc(100vh - 320px)) 约束。
      if (!container) {
        throw new Error('容器元素未就绪');
      }

      clearAutoSaveTimer();
      const document = await fetchTeamSpreadsheetDocument(documentId);

      const ready = await ensureUniver(container, snackbar);
      if (!ready || !univerAPI) {
        return false;
      }

      const currentWorkbook = univerAPI.getActiveWorkbook();
      currentWorkbook?.dispose();

      workbook = createWorkbookFromDocument(document);
      currentDocumentId = document.id;
      currentDocumentMeta = {
        title: document.title,
        description: document.description ?? '',
        remark: document.remark ?? '',
      };
      state.currentDocumentTitle.value = document.title;
      updateSnapshotCache(document.content ?? null);
      pendingMutations = false;
      state.lastSavedAt.value = document.updatedAt
        ? new Date(document.updatedAt)
        : new Date(document.createdAt);
      registerWorkbookChangeListener();
      scheduleAutoSave();
      succeeded = true;
    } catch (error) {
      console.error('加载在线表格失败', error);
      const message = resolveHttpErrorMessage(error, '加载文档失败，请刷新后重试');
      snackbar.show({ message, color: 'error' });
      if (isDocumentMissingError(error)) {
        currentDocumentId = null;
        currentDocumentMeta = null;
        state.currentDocumentTitle.value = null;
      }
    } finally {
      state.initializing.value = false;
    }

    return succeeded;
  };

  /**
   * --- 公共 API：flushAutoSave -------------------------------------------
   */
  const flushAutoSave = async () => {
    clearChangeDebounceTimer();
    await persistDocument({ force: true });
  };

  /**
   * --- 公共 API：disposeWorkbook ----------------------------------------
   */
  const disposeWorkbook = () => {
    try {
      workbook?.dispose();
    } catch (error) {
      console.warn('销毁工作簿时出错', error);
    }
    workbook = null;
    currentDocumentId = null;
    currentDocumentMeta = null;
    updateSnapshotCache(null);
    pendingMutations = false;
    clearAutoSaveTimer();
    clearChangeDebounceTimer();
    clearWorkbookChangeListener();
    state.currentDocumentTitle.value = null;
    state.lastSavedAt.value = null;
  };

  /**
   * --- 公共 API：disposeUniver -------------------------------------------
   */
  const disposeUniver = () => {
    disposeWorkbook();
    try {
      univerInstance?.dispose();
    } catch (error) {
      console.warn('卸载 Univer 时出错', error);
    }
    univerInstance = null;
    univerAPI = null;
  };

  return {
    mountDocument,
    flushAutoSave,
    disposeWorkbook,
    disposeUniver,
    getWorkbookSnapshot: () => (lastParsedSnapshot as IWorkbookData | null),
  };
};

