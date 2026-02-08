import { onBeforeUnmount, watch } from 'vue';
import type { TeamSpreadsheetState } from '../state/teamSpreadsheetState';
import { useTeamSpreadsheetState } from '../state/teamSpreadsheetState';
import type { TeamSpreadsheetService } from '../service/teamSpreadsheetService';
import { useTeamSpreadsheetService } from '../service/teamSpreadsheetService';

/**
 * 切换文档时的兜底逻辑：先保存当前文档，再加载新文档。
 */
const handleDocumentChange = async (
  service: TeamSpreadsheetService,
  documentId: number | null,
): Promise<void> => {
  await service.flushAutoSave();
  if (documentId == null) {
    service.disposeWorkbook();
    return;
  }
  await service.mountDocument(documentId);
};

/**
 * 注册手动保存快捷键（Windows: Ctrl+S / macOS: ⌘+S）。
 * 返回取消监听的方法，供组件卸载时调用。
 */
const registerManualSaveHotkey = (service: TeamSpreadsheetService): (() => void) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 's') {
      event.preventDefault();
      void service.flushAutoSave();
    }
  };

  window.addEventListener('keydown', handleKeydown);
  return () => {
    window.removeEventListener('keydown', handleKeydown);
  };
};

/**
 * 统一初始化 TeamSpreadsheet 视图需要的副作用：
 * - 监听 activeDocumentId 变化以在文档之间切换
 * - 注册全局保存快捷键
 * - 在组件卸载时清理资源并进行最后一次保存
 */
export const useTeamSpreadsheetEvents = (
  state: TeamSpreadsheetState = useTeamSpreadsheetState(),
  service: TeamSpreadsheetService = useTeamSpreadsheetService(state),
): void => {
  const disposeManualSaveHotkey = registerManualSaveHotkey(service);

  watch(
    () => state.activeDocumentId.value,
    (documentId) => {
      void handleDocumentChange(service, documentId);
    },
    { immediate: true },
  );

  onBeforeUnmount(() => {
    disposeManualSaveHotkey();
    void service.flushAutoSave();
    service.disposeWorkbook();
    service.disposeUniver();
  });
};

