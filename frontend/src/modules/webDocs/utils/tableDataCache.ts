import type { TeamSpreadsheetTableResponse } from '../api/teamSpreadsheetApi';

/**
 * 分批数据缓存管理器
 * 用于将大数据集拆分成小批次，按需加载到 VXETable，避免一次性渲染导致卡顿
 */

/** 单批次大小（行数） */
const DEFAULT_BATCH_SIZE = 500;

/** 每批数据的原始行集合 */
interface DataBatch {
  startIndex: number;
  endIndex: number;
  rows: string[][];
}

/** 缓存状态 */
export interface TableDataCache {
  documentId: number;
  headers: string[];
  totalRows: number;
  batches: DataBatch[];
  batchSize: number;
  currentBatchIndex: number;
}

/** 创建数据缓存 */
export const createTableDataCache = (
  tableResponse: TeamSpreadsheetTableResponse,
  batchSize: number = DEFAULT_BATCH_SIZE,
): TableDataCache => {
  const totalRows = tableResponse.rows.length;
  const batches: DataBatch[] = [];

  // 按批次大小拆分数据
  for (let i = 0; i < totalRows; i += batchSize) {
    const endIndex = Math.min(i + batchSize, totalRows);
    batches.push({
      startIndex: i,
      endIndex,
      rows: tableResponse.rows.slice(i, endIndex),
    });
  }

  return {
    documentId: tableResponse.documentId,
    headers: tableResponse.headers,
    totalRows,
    batches,
    batchSize,
    currentBatchIndex: 0,
  };
};

/** 获取指定批次的数据 */
export const getBatch = (cache: TableDataCache, batchIndex: number): DataBatch | null => {
  if (batchIndex < 0 || batchIndex >= cache.batches.length) {
    return null;
  }
  return cache.batches[batchIndex];
};

/** 获取当前已加载的批次数据（用于累积显示） */
export const getLoadedBatches = (cache: TableDataCache, upToBatchIndex: number): string[][] => {
  const maxIndex = Math.min(upToBatchIndex, cache.batches.length - 1);
  const result: string[][] = [];

  for (let i = 0; i <= maxIndex; i++) {
    result.push(...cache.batches[i].rows);
  }

  return result;
};

/** 是否还有更多批次 */
export const hasMoreBatches = (cache: TableDataCache): boolean => {
  return cache.currentBatchIndex < cache.batches.length - 1;
};

/** 获取加载进度信息 */
export const getLoadProgress = (cache: TableDataCache): { loaded: number; total: number; percentage: number } => {
  const loaded = cache.currentBatchIndex >= 0
    ? cache.batches[cache.currentBatchIndex]?.endIndex ?? 0
    : 0;
  const percentage = cache.totalRows > 0 ? Math.round((loaded / cache.totalRows) * 100) : 0;

  return {
    loaded,
    total: cache.totalRows,
    percentage,
  };
};

