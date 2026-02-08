<script setup lang="ts">
import '@univerjs/presets/lib/styles/preset-sheets-core.css';
import '@univerjs/presets/lib/styles/preset-sheets-advanced.css';
import '@univerjs/presets/lib/styles/preset-sheets-collaboration.css';
import '@univerjs/presets/lib/styles/preset-sheets-conditional-formatting.css';
import '@univerjs/presets/lib/styles/preset-sheets-data-validation.css';
import '@univerjs/presets/lib/styles/preset-sheets-drawing.css';
import '@univerjs/presets/lib/styles/preset-sheets-filter.css';
import '@univerjs/presets/lib/styles/preset-sheets-find-replace.css';
import '@univerjs/presets/lib/styles/preset-sheets-hyper-link.css';
import '@univerjs/presets/lib/styles/preset-sheets-note.css';
import '@univerjs/presets/lib/styles/preset-sheets-sort.css';
import '@univerjs/presets/lib/styles/preset-sheets-table.css';
import '@univerjs/presets/lib/styles/preset-sheets-thread-comment.css';
import '../styles/teamSpreadsheet.scss';
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import { useSnackbarStore } from '@/stores/snackbar';
import type { HttpError } from '@/api/http';
import {
  deleteTeamSpreadsheetDocument,
  fetchTeamSpreadsheetTable,
  importTeamSpreadsheetDocument,
  listTeamSpreadsheetDocuments,
  type TeamSpreadsheetDocumentResponse,
} from '../api/teamSpreadsheetApi';
import { useTeamSpreadsheetState } from '../state/teamSpreadsheetState';
import { useTeamSpreadsheetService } from '../service/teamSpreadsheetService';
import { useTeamSpreadsheetEvents } from '../events/teamSpreadsheetEvents';
import { convertTableResponseToVXESheet, type VXETableSheetView } from '../utils/vxeTableAdapter';
import {
  createTableDataCache,
  getLoadedBatches,
  hasMoreBatches,
  getLoadProgress,
  type TableDataCache,
} from '../utils/tableDataCache';
import type { TeamSpreadsheetTableResponse } from '../api/teamSpreadsheetApi';

const state = useTeamSpreadsheetState();
const service = useTeamSpreadsheetService(state);
const documents = ref<TeamSpreadsheetDocumentResponse[]>([]);
const documentsLoading = ref(false);
const snackbar = useSnackbarStore();

const loadDocuments = async () => {
  documentsLoading.value = true;
  try {
    const result = await listTeamSpreadsheetDocuments();
    documents.value = result;
    if (result.length === 0) {
      state.activeDocumentId.value = null;
      service.disposeWorkbook();
      return;
    }
    const hasActive = result.some((doc) => doc.id === state.activeDocumentId.value);
    if (!hasActive) {
      state.activeDocumentId.value = result[0].id;
    }
  } catch (error) {
    console.error('加载文档列表失败', error);
    snackbar.show({ message: '加载文档列表失败，请刷新后重试', color: 'error' });
  } finally {
    documentsLoading.value = false;
  }
};

onMounted(() => {
  void loadDocuments();
});

useTeamSpreadsheetEvents(state, service);

const { containerRef, activeDocumentId, initializing, autoSaving, lastSavedAt } = state;
const currentDocumentTitle = computed(() => state.currentDocumentTitle.value);

type ViewTabKey = 'editor' | 'table';

const activeViewTab = ref<ViewTabKey>('editor');
const tableSheets = ref<VXETableSheetView[]>([]);
const activeSheetId = ref<string | null>(null);
const tableSyncing = ref(false);
const tableDataStale = ref(true);
const vxeSortConfig = {
  multiple: true,
  trigger: 'cell',
  orders: ['asc', 'desc', null] as const,
};
const vxeFilterConfig = {
  remote: false,
  showIcon: true,
};

// 分批加载相关状态
const tableDataCache = ref<TableDataCache | null>(null);
const cachedTableResponse = ref<TeamSpreadsheetTableResponse | null>(null);
const loadingMoreData = ref(false);

const activeVXESheet = computed(() => {
  if (tableSheets.value.length === 0) {
    return null;
  }
  return tableSheets.value.find((sheet) => sheet.id === activeSheetId.value) ?? tableSheets.value[0];
});

const tableSummaryText = computed(() => {
  const sheet = activeVXESheet.value;
  if (!sheet) {
    return '暂无可用工作表';
  }
  const rowsLabel = sheet.limitedByRowCap
    ? `行：${sheet.rows.length} / ${sheet.totalRows}`
    : `行：${sheet.rows.length}`;
  const columnsLabel = sheet.limitedByColumnCap
    ? `列：${sheet.columns.length} / ${sheet.totalColumns}`
    : `列：${sheet.columns.length}`;
  return `${rowsLabel} · ${columnsLabel}`;
});

const loadProgress = computed(() => {
  if (!tableDataCache.value) {
    return { loaded: 0, total: 0, percentage: 0 };
  }
  return getLoadProgress(tableDataCache.value);
});

const showLoadMoreButton = computed(() => {
  return tableDataCache.value && hasMoreBatches(tableDataCache.value);
});

const showTableLimitAlert = computed(
  () => !!activeVXESheet.value && (activeVXESheet.value.limitedByRowCap || activeVXESheet.value.limitedByColumnCap),
);

const tableMaxHeight = computed(() => (isFullscreen.value ? 720 : 520));

const syncVXETableData = async (options?: { force?: boolean }) => {
  if (tableSyncing.value) {
    return;
  }
  if (state.initializing.value) {
    return;
  }
  if (!options?.force && !tableDataStale.value && tableSheets.value.length > 0) {
    return;
  }
  const documentId = state.activeDocumentId.value;
  if (!documentId) {
    tableSheets.value = [];
    activeSheetId.value = null;
    tableDataStale.value = false;
    tableDataCache.value = null;
    cachedTableResponse.value = null;
    return;
  }

  tableSyncing.value = true;
  try {
    const tableResponse = await fetchTeamSpreadsheetTable(documentId);
    cachedTableResponse.value = tableResponse;
    
    // 创建分批缓存
    const cache = createTableDataCache(tableResponse, 500);
    tableDataCache.value = cache;
    
    // 只加载第一批数据
    const firstBatchRows = getLoadedBatches(cache, 0);
    const sheet = convertTableResponseToVXESheet(tableResponse, firstBatchRows);
    
    if (sheet.columns.length === 0 && sheet.rows.length === 0) {
      tableSheets.value = [];
      activeSheetId.value = null;
    } else {
      tableSheets.value = [sheet];
      activeSheetId.value = sheet.id;
    }
    tableDataStale.value = false;
  } catch (error) {
    console.error('同步 VXETable 数据失败', error);
    snackbar.show({ message: '同步表格视图失败，请稍后再试', color: 'error' });
  } finally {
    tableSyncing.value = false;
  }
};

// 加载更多数据
const loadMoreTableData = async () => {
  if (!tableDataCache.value || !cachedTableResponse.value) {
    return;
  }
  if (loadingMoreData.value) {
    return;
  }
  if (!hasMoreBatches(tableDataCache.value)) {
    return;
  }

  loadingMoreData.value = true;
  try {
    // 加载下一批
    tableDataCache.value.currentBatchIndex += 1;
    const loadedRows = getLoadedBatches(tableDataCache.value, tableDataCache.value.currentBatchIndex);
    
    // 重新转换，使用累积的数据
    const sheet = convertTableResponseToVXESheet(cachedTableResponse.value, loadedRows);
    tableSheets.value = [sheet];
    activeSheetId.value = sheet.id;
  } catch (error) {
    console.error('加载更多数据失败', error);
    snackbar.show({ message: '加载更多数据失败', color: 'error' });
  } finally {
    loadingMoreData.value = false;
  }
};

const handleRefreshTableView = () => {
  tableDataStale.value = true;
  void syncVXETableData({ force: true });
};

watch(
  () => state.activeDocumentId.value,
  () => {
    tableDataStale.value = true;
    tableSheets.value = [];
    activeSheetId.value = null;
    if (activeViewTab.value === 'table') {
      void syncVXETableData({ force: true });
    }
  },
);

watch(
  () => state.initializing.value,
  (value) => {
    if (!value && activeViewTab.value === 'table') {
      void syncVXETableData({ force: true });
    }
  },
);

watch(
  () => activeViewTab.value,
  (value) => {
    if (value === 'table') {
      void syncVXETableData();
    }
  },
);

type MaybeCardInstance = { $el?: HTMLElement | null };

const fullscreenCardRef = ref<HTMLElement | MaybeCardInstance | null>(null);
const isFullscreen = ref(false);

const getFullscreenTargetElement = (): HTMLElement | null => {
  const target = fullscreenCardRef.value;
  if (!target) {
    return null;
  }
  if (target instanceof HTMLElement) {
    return target;
  }
  return target.$el ?? null;
};

const handleFullscreenChange = () => {
  const target = getFullscreenTargetElement();
  isFullscreen.value = !!target && document.fullscreenElement === target;
};

const toggleFullscreen = async () => {
  const target = getFullscreenTargetElement();
  if (!target) {
    return;
  }

  try {
    if (!document.fullscreenElement) {
      await target.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    console.error('切换全屏失败', error);
    snackbar.show({ message: '无法切换全屏，请稍后再试', color: 'error' });
  }
};

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange);
});

onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange);
  const target = getFullscreenTargetElement();
  if (target && document.fullscreenElement === target) {
    void document.exitFullscreen();
  }
});

const deleteDialogVisible = ref(false);
const deleteInput = ref('');
const deleteLoading = ref(false);

const importDialogVisible = ref(false);
const importLoading = ref(false);
const importForm = reactive({
  title: '',
  description: '',
  remark: '',
});
const importFile = ref<File | null>(null);
const importInputKey = ref(0);

const resolveActionErrorMessage = (error: unknown, fallback: string): string => {
  if (error && typeof error === 'object') {
    const httpError = error as Partial<HttpError> & { payload?: unknown };
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

const openDeleteDialog = () => {
  if (!currentDocumentTitle.value) {
    snackbar.show({ message: '当前没有可删除的文档', color: 'warning' });
    return;
  }
  deleteInput.value = '';
  deleteDialogVisible.value = true;
};

const closeDeleteDialog = () => {
  deleteDialogVisible.value = false;
  deleteInput.value = '';
};

const deleteConfirmDisabled = computed(() => {
  const requiredTitle = currentDocumentTitle.value?.trim() ?? '';
  return (
    deleteLoading.value ||
    requiredTitle.length === 0 ||
    deleteInput.value.trim() !== requiredTitle
  );
});

const handleDeleteDocument = async () => {
  const expectedTitle = currentDocumentTitle.value;
  const documentId = activeDocumentId.value;
  if (!expectedTitle || !documentId) {
    snackbar.show({ message: '当前没有可删除的文档', color: 'warning' });
    closeDeleteDialog();
    return;
  }

  if (deleteInput.value.trim() !== expectedTitle) {
    snackbar.show({ message: '文档名称不匹配，请重新输入', color: 'warning' });
    return;
  }

  deleteLoading.value = true;
  try {
    await service.flushAutoSave();
    await deleteTeamSpreadsheetDocument(documentId, deleteInput.value.trim());
    snackbar.show({ message: '文档已删除', color: 'success' });
    closeDeleteDialog();
    state.activeDocumentId.value = null;
    await loadDocuments();
  } catch (error) {
    console.error('删除文档失败', error);
    const message = resolveActionErrorMessage(error, '删除文档失败，请稍后再试');
    snackbar.show({ message, color: 'error' });
  } finally {
    deleteLoading.value = false;
  }
};

const resetImportForm = () => {
  importForm.title = '';
  importForm.description = '';
  importForm.remark = '';
  importFile.value = null;
  importInputKey.value += 1;
};

const openImportDialog = () => {
  resetImportForm();
  importDialogVisible.value = true;
};

const closeImportDialog = () => {
  importDialogVisible.value = false;
  resetImportForm();
};

const handleImportFileChange = (files: File | File[] | null) => {
  if (Array.isArray(files)) {
    importFile.value = files[0] ?? null;
    return;
  }
  importFile.value = files;
};

const importConfirmDisabled = computed(() => importLoading.value || !importFile.value);

const handleImportDocument = async () => {
  if (!importFile.value) {
    snackbar.show({ message: '请选择要导入的 Excel 文件', color: 'warning' });
    return;
  }
  importLoading.value = true;
  try {
    const formData = new FormData();
    formData.append('file', importFile.value);
    if (importForm.title.trim().length > 0) {
      formData.append('title', importForm.title.trim());
    }
    if (importForm.description.trim().length > 0) {
      formData.append('description', importForm.description.trim());
    }
    if (importForm.remark.trim().length > 0) {
      formData.append('remark', importForm.remark.trim());
    }

    const response = await importTeamSpreadsheetDocument(formData);
    snackbar.show({ message: 'Excel 导入成功', color: 'success' });
    closeImportDialog();
    await loadDocuments();
    state.activeDocumentId.value = response.id;
  } catch (error) {
    console.error('导入 Excel 文档失败', error);
    const message = resolveActionErrorMessage(error, '导入 Excel 失败，请稍后再试');
    snackbar.show({ message, color: 'error' });
  } finally {
    importLoading.value = false;
  }
};

const saveStatusText = computed(() => {
  if (autoSaving.value) {
    return '正在自动保存...';
  }
  if (lastSavedAt.value) {
    const formatter = new Intl.DateTimeFormat('zh-CN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return `最近保存 ${formatter.format(lastSavedAt.value)}`;
  }
  return '自动保存已启用';
});
</script>

<template>
  <v-row dense>
    <v-col cols="12">
      <v-card ref="fullscreenCardRef" :class="['web-docs-card', { 'is-fullscreen': isFullscreen }]" elevation="2">
        <v-card-title class="d-flex flex-wrap justify-space-between align-center card-toolbar">
          <div class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-file-table-box-multiple</v-icon>
            团队在线表格
          </div>
          <div class="toolbar-actions">
            <v-select
              v-model="activeDocumentId"
              :items="documents"
              :loading="documentsLoading"
              density="comfortable"
              hide-details
              item-title="title"
              item-value="id"
              label="我的文档"
              variant="outlined"
              class="toolbar-select"
            />
            <v-chip
              class="save-status-chip"
              :color="autoSaving ? 'warning' : 'success'"
              prepend-icon="mdi-cloud-upload"
              size="small"
              variant="tonal"
            >
              {{ saveStatusText }}
            </v-chip>
            <v-btn
              color="error"
              variant="tonal"
              prepend-icon="mdi-trash-can-outline"
              :disabled="initializing || !currentDocumentTitle"
              @click="openDeleteDialog"
            >
              删除文档
            </v-btn>
            <v-btn
              color="primary"
              variant="tonal"
              prepend-icon="mdi-file-import"
              :disabled="initializing"
              @click="openImportDialog"
            >
              导入 Excel
            </v-btn>
            <v-btn
              color="secondary"
              variant="tonal"
              :prepend-icon="isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
              :disabled="initializing"
              @click="toggleFullscreen"
            >
              {{ isFullscreen ? '退出全屏' : '全屏查看' }}
            </v-btn>
          </div>
        </v-card-title>

        <v-card-text>
          <v-tabs v-model="activeViewTab" class="web-docs-tabs" color="primary" density="comfortable">
            <v-tab value="editor" prepend-icon="mdi-file-table-box">
              在线编辑
            </v-tab>
            <v-tab value="table" prepend-icon="mdi-table-large">
              VXETable 视图
            </v-tab>
          </v-tabs>
          <v-window v-model="activeViewTab" class="web-docs-window" eager>
            <v-window-item value="editor">
              <div class="fortune-sheet-wrapper">
                <div ref="containerRef" class="fortune-sheet-host" />
              </div>
            </v-window-item>
            <v-window-item value="table">
              <div class="vxetable-wrapper">
                <div class="vxetable-toolbar">
                  <v-select
                    v-model="activeSheetId"
                    :items="tableSheets"
                    item-title="name"
                    item-value="id"
                    label="工作表"
                    density="compact"
                    hide-details
                    variant="outlined"
                    class="vxetable-sheet-select"
                    :disabled="tableSyncing || tableSheets.length === 0"
                  />
                  <v-chip
                    class="vxetable-summary-chip"
                    color="primary"
                    prepend-icon="mdi-table"
                    variant="tonal"
                    size="small"
                  >
                    {{ tableSummaryText }}
                  </v-chip>
                  <v-spacer />
                  <v-btn
                    color="primary"
                    variant="tonal"
                    prepend-icon="mdi-refresh"
                    :loading="tableSyncing"
                    :disabled="initializing"
                    @click="handleRefreshTableView"
                  >
                    同步数据
                  </v-btn>
                </div>
                <div class="vxetable-container">
                  <div v-if="tableSyncing" class="vxetable-loading">
                    <v-progress-circular indeterminate color="primary" size="32" />
                    <span>正在同步最新数据...</span>
                  </div>
                  <template v-else>
                    <vxe-table
                      v-if="activeVXESheet && activeVXESheet.columns.length > 0"
                      class="vxetable-grid"
                      :data="activeVXESheet.rows"
                      :max-height="tableMaxHeight"
                      show-overflow="title"
                      show-header-overflow="title"
                      :column-config="{ resizable: true }"
                      :row-config="{ isHover: true }"
                      :sort-config="vxeSortConfig"
                      :filter-config="vxeFilterConfig"
                    >
                      <vxe-column type="seq" width="64" title="#" />
                      <vxe-column
                        v-for="column in activeVXESheet.columns"
                        :key="column.field"
                        :field="column.field"
                        :title="column.title"
                        :width="column.width"
                        :min-width="column.minWidth"
                        show-overflow
                        resizable
                        :sortable="column.sortable"
                        :filters="column.filters"
                        :filter-multiple="column.filterMultiple"
                      />
                    </vxe-table>
                    <div v-else class="vxetable-empty">
                      <v-icon size="40" color="grey">mdi-table-off</v-icon>
                      <p>暂无可展示的数据</p>
                    </div>
                  </template>
                </div>
                
                <!-- 加载进度与加载更多 -->
                <div v-if="tableDataCache && loadProgress.total > 0" class="vxetable-load-more">
                  <v-progress-linear
                    :model-value="loadProgress.percentage"
                    color="primary"
                    height="4"
                    class="mb-2"
                  />
                  <div class="d-flex align-center justify-space-between">
                    <span class="text-caption">
                      已加载 {{ loadProgress.loaded }} / {{ loadProgress.total }} 行
                      ({{ loadProgress.percentage }}%)
                    </span>
                    <v-btn
                      v-if="showLoadMoreButton"
                      color="primary"
                      variant="tonal"
                      size="small"
                      prepend-icon="mdi-chevron-down"
                      :loading="loadingMoreData"
                      @click="loadMoreTableData"
                    >
                      加载更多 (500 行)
                    </v-btn>
                    <v-chip v-else color="success" size="small" variant="flat">
                      全部加载完成
                    </v-chip>
                  </div>
                </div>
                
                <v-alert
                  v-if="showTableLimitAlert && activeVXESheet"
                  type="info"
                  variant="tonal"
                  density="comfortable"
                  class="vxetable-limit-alert"
                >
                  仅展示前 {{ activeVXESheet.rows.length }} 行 / {{ activeVXESheet.columns.length }} 列，
                  如需查看完整数据请在在线编辑页签中浏览或导出。
                </v-alert>
              </div>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-dialog v-model="deleteDialogVisible" max-width="520">
    <v-card>
      <v-card-title class="text-h6">删除文档</v-card-title>
      <v-card-text>
        <p class="mb-4">
          将删除当前的文档
          <strong>{{ currentDocumentTitle }}</strong>
          ，该操作不可撤销。请在下方输入文档名称以确认。
        </p>
        <v-text-field
          v-model="deleteInput"
          label="输入文档名称以确认"
          :disabled="deleteLoading"
          variant="outlined"
          autofocus
        />
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text" @click="closeDeleteDialog" :disabled="deleteLoading">取消</v-btn>
        <v-btn color="error" :loading="deleteLoading" :disabled="deleteConfirmDisabled" @click="handleDeleteDocument">
          确认删除
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="importDialogVisible" max-width="560">
    <v-card>
      <v-card-title class="text-h6">导入 Excel 文档</v-card-title>
      <v-card-text>
        <p class="mb-4">
          选择一个 Excel 文件（支持 .xls / .xlsx），系统会自动生成在线表格文档。可选填写文档标题、描述及备注。
        </p>
        <v-file-input
          :key="importInputKey"
          label="选择 Excel 文件"
          accept=".xls,.xlsx"
          prepend-icon="mdi-file-excel"
          variant="outlined"
          :disabled="importLoading"
          @update:model-value="handleImportFileChange"
        />
        <v-text-field
          v-model="importForm.title"
          label="文档标题（可选）"
          variant="outlined"
          :disabled="importLoading"
        />
        <v-textarea
          v-model="importForm.description"
          label="文档描述（可选）"
          variant="outlined"
          :disabled="importLoading"
          rows="2"
          auto-grow
        />
        <v-textarea
          v-model="importForm.remark"
          label="备注（可选）"
          variant="outlined"
          :disabled="importLoading"
          rows="2"
          auto-grow
        />
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text" :disabled="importLoading" @click="closeImportDialog">取消</v-btn>
        <v-btn color="primary" :loading="importLoading" :disabled="importConfirmDisabled" @click="handleImportDocument">
          确认导入
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

