import { onBeforeUnmount, watch } from 'vue';
import type { useSnackbarStore } from '@/stores/snackbar';
import type { useSaslState } from '../state/saslState';
import { searchRecords, updateRecord, type SaslRecordResponse } from '../api/saslConfigApi';

type SaslState = ReturnType<typeof useSaslState>;
type SnackbarStore = ReturnType<typeof useSnackbarStore>;

const AUTO_SEARCH_DELAY = 500;

export const useSaslService = (state: SaslState, snackbar: SnackbarStore) => {
  let searchDebounceTimer: number | null = null;

  const clearSearchTimer = () => {
    if (searchDebounceTimer) {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = null;
    }
  };

  // 执行搜索
  const performSearch = async () => {
    // 验证数据源必选
    if (!state.searchDataSource.value) {
      snackbar.show({ message: '請選擇數據源', color: 'warning' });
      return;
    }

    state.searchingMrt.value = true;
    try {
      const params = {
        mrt: state.mrtSearch.value.trim() || undefined,
        callStatus: state.searchCallStatus.value || undefined,
        documentTitle: state.searchDataSource.value || undefined,
      };

      const results = await searchRecords(params);
      state.searchResults.value = results;

      if (results.length === 0) {
        snackbar.show({ message: '未找到匹配的記錄', color: 'info' });
        // 清空表单
        Object.assign(state.form, {
          oldContract: '',
          mrtNumber: '',
          lastTurnNetworkMonth: '',
          category: '',
          sales: '',
          lastCallTime: '',
          callStatus: '',
          nextCallTime: '',
          remark: '',
        });
        state.selectedRecord.value = null;
      } else {
        // 自动填充第一条记录到表单
        const firstRecord = results[0];
        state.selectedRecord.value = firstRecord;
        fillFormFromRecord(firstRecord);
        snackbar.show({ message: `找到 ${results.length} 條記錄`, color: 'success' });
      }
    } catch (error) {
      console.error('搜索失敗', error);
      snackbar.show({ message: '搜索失敗，請稍後重試', color: 'error' });
      state.searchResults.value = [];
    } finally {
      state.searchingMrt.value = false;
    }
  };

  // 将 ISO 格式日期时间转换为前端格式（YYYY-MM-DD HH:mm）
  const convertFromIsoDateTime = (isoStr: string): string => {
    if (!isoStr) return '';
    try {
      const date = new Date(isoStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    } catch {
      return '';
    }
  };

  // 从记录填充表单
  const fillFormFromRecord = (record: SaslRecordResponse) => {
    Object.assign(state.form, {
      oldContract: record.oldContract || '',
      mrtNumber: record.mrt || '',
      lastTurnNetworkMonth: record.lastTurnNetworkMonth || '',
      category: record.category || '',
      sales: record.sales || '',
      lastCallTime: record.lastCallTime
        ? new Date(record.lastCallTime).toLocaleString('zh-CN')
        : record.updatedAt
          ? new Date(record.updatedAt).toLocaleString('zh-CN')
          : '',
      callStatus: record.callStatus || '',
      nextCallTime: record.nextCallTime
        ? convertFromIsoDateTime(record.nextCallTime)
        : '',
      remark: record.remark || '',
    });
  };

  // 防抖搜索调度
  const scheduleAutoSearch = () => {
    clearSearchTimer();

    // 如果数据源未选择，不执行搜索
    if (!state.searchDataSource.value) {
      return;
    }

    searchDebounceTimer = window.setTimeout(() => {
      void performSearch();
    }, AUTO_SEARCH_DELAY) as unknown as number;
  };

  // 监听3个搜索项的变更
  watch([state.mrtSearch, state.searchCallStatus, state.searchDataSource], scheduleAutoSearch);

  // 将前端日期时间格式（YYYY-MM-DD HH:mm）转换为 ISO 8601 格式（YYYY-MM-DDTHH:mm:00）
  const convertToIsoDateTime = (dateTimeStr: string): string | undefined => {
    if (!dateTimeStr || !dateTimeStr.trim()) {
      return undefined;
    }
    // 格式：YYYY-MM-DD HH:mm -> YYYY-MM-DDTHH:mm:00
    const trimmed = dateTimeStr.trim();
    const isoFormat = trimmed.replace(' ', 'T') + ':00';
    return isoFormat;
  };

  const handleSubmit = async () => {
    const result = await state.formRef.value?.validate?.();
    if (result?.valid === false) {
      snackbar.show({ message: '請先修正表單校驗錯誤', color: 'warning' });
      return;
    }

    // 检查是否有选中的记录
    if (!state.selectedRecord.value || !state.selectedRecord.value.id) {
      snackbar.show({ message: '請先選擇一條記錄', color: 'warning' });
      return;
    }

    state.submitting.value = true;
    try {
      // 转换下次致电时间为 ISO 格式
      const nextCallTimeIso = convertToIsoDateTime(state.form.nextCallTime);
      
      // 调用后端接口更新记录
      const response = await updateRecord(state.selectedRecord.value.id, {
        callStatus: state.form.callStatus,
        remark: state.form.remark || undefined,
        nextCallTime: nextCallTimeIso,
        documentTitle: state.searchDataSource.value || undefined,
        queryCallStatus: state.searchCallStatus.value || undefined,
      });

      // 如果有下一条记录，加载到表单中
      if (response.nextRecord) {
        state.selectedRecord.value = response.nextRecord;
        fillFormFromRecord(response.nextRecord);
        snackbar.show({ message: '記錄已成功更新，已加載下一條記錄', color: 'success' });
      } else {
        // 如果没有下一条记录，保持当前更新后的记录
        state.selectedRecord.value = response.updatedRecord;
        // 更新表单中的最后致电时间
        if (response.updatedRecord.lastCallTime) {
          state.form.lastCallTime = new Date(response.updatedRecord.lastCallTime).toLocaleString('zh-CN');
        } else if (response.updatedRecord.updatedAt) {
          state.form.lastCallTime = new Date(response.updatedRecord.updatedAt).toLocaleString('zh-CN');
        }
        snackbar.show({ message: '記錄已成功更新', color: 'success' });
      }
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error('更新記錄失敗', error);
      let errorMessage = '更新失敗，請稍後重試';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.submitting.value = false;
    }
  };

  onBeforeUnmount(() => {
    clearSearchTimer();
  });

  return {
    performSearch,
    handleSubmit,
    fillFormFromRecord,
  };
};


