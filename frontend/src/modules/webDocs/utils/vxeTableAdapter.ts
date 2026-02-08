import type { TeamSpreadsheetTableResponse } from '../api/teamSpreadsheetApi';

/**
 * VXETable 单元格支持的基础值类型。
 */
export type VXETableCellValue = string | number | boolean | null;

/**
 * VXETable 列筛选项结构。
 */
export interface VXETableColumnFilter {
  label: string;
  value: VXETableCellValue;
}

/**
 * VXETable 列定义结构，仅保留本业务需要的配置。
 */
export interface VXETableColumnDef {
  field: string;
  title: string;
  width?: number;
  minWidth?: number;
  sortable?: boolean;
  filters?: VXETableColumnFilter[];
  filterMultiple?: boolean;
}

/**
 * 供视图使用的 VXETable 工作表快照。
 */
export interface VXETableSheetView {
  id: string;
  name: string;
  columns: VXETableColumnDef[];
  rows: Record<string, VXETableCellValue>[];
  totalRows: number;
  totalColumns: number;
  limitedByRowCap: boolean;
  limitedByColumnCap: boolean;
}

/**
 * 与表格适配相关的配置常量。
 */
const MAX_RENDERED_ROWS = 10_000; // 单次最多渲染的表体行数
const FILTER_OPTION_DISPLAY_LIMIT = 200; // 单列最多展示的筛选选项
const FILTER_OPTION_SCAN_LIMIT = 10_000; // 构造筛选项时最多扫描的行数

/**
 * 循环分析日志的附加元信息类型。
 */
type LoopProfilingMeta = Record<string, string | number | boolean | undefined>;

/**
 * 是否在当前环境打印循环分析日志。
 */
const shouldProfileLoops =
  import.meta.env.DEV ||
  String(import.meta.env.VITE_ENABLE_SPREADSHEET_PROFILING ?? '').toLowerCase() === 'true';

/**
 * 获取高精度时间戳（用于埋点）。
 */
const getLoopProfilingTimestamp = (): number => {
  return typeof performance !== 'undefined' && typeof performance.now === 'function'
    ? performance.now()
    : Date.now();
};
/**
 * VXETable 适配器只处理后端 `/api/webdocs/team-spreadsheets/{id}/table` 接口返回的结构，
 * 即服务端已经解析 `teamSpreadsheet` 文档并只保留 headers / rows 的精简结果。
 * 下方的转换逻辑会在 Vue 侧被 `convertTableResponseToVXESheet` 调用，用于将该结果映射为
 * VXETable 需要的 columns 与 rows。
 */
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
  console.info(`[VXETableAdapter][Loop] ${label}: iterations=${iterations} duration=${normalizedDuration}ms${suffix}`);
};

/**
 * 将列索引转换为 Excel 式列名（A、B、AA...）。
 */
const toExcelColumnName = (index: number): string => {
  let dividend = index + 1;
  let columnLabel = '';
  while (dividend > 0) {
    const modulo = (dividend - 1) % 26;
    columnLabel = String.fromCharCode(65 + modulo) + columnLabel;
    dividend = Math.floor((dividend - modulo) / 26);
  }
  return columnLabel;
};

/**
 * 根据值类型格式化筛选项显示文本。
 */
const formatFilterLabel = (value: VXETableCellValue): string => {
  if (value === null || value === '') {
    return '（空）';
  }
  if (typeof value === 'boolean') {
    return value ? 'TRUE' : 'FALSE';
  }
  return String(value);
};

/**
 * 基于行数据生成指定列的筛选项。
 */
const buildColumnFilters = (
  columnIndex: number,
  rows: Record<string, VXETableCellValue>[],
): VXETableColumnFilter[] => {
  if (rows.length === 0) {
    return [];
  }
  const field = `c_${columnIndex}`;
  const seen = new Map<string, VXETableColumnFilter>();
  const scanCount = Math.min(rows.length, FILTER_OPTION_SCAN_LIMIT);
  const start = getLoopProfilingTimestamp();
  for (let i = 0; i < scanCount; i += 1) {
    const value = rows[i][field] ?? null;
    const key = value === null ? '__NULL__' : `${typeof value}:${String(value)}`;
    if (!seen.has(key)) {
      seen.set(key, {
        label: formatFilterLabel(value),
        value,
      });
      if (seen.size >= FILTER_OPTION_DISPLAY_LIMIT) {
        break;
      }
    }
  }
  logLoopProfiling('buildColumnFilters', scanCount, getLoopProfilingTimestamp() - start, {
    columnIndex,
    uniqueFilters: seen.size,
  });
  return Array.from(seen.values());
};

/**
 * 将表头信息转为 VXETable 列定义。
 */
const buildColumns = (
  headers: string[],
  rows: Record<string, VXETableCellValue>[],
): VXETableColumnDef[] => {
  const start = getLoopProfilingTimestamp();
  const columns = headers.map((header, columnIndex) => {
    const filters = buildColumnFilters(columnIndex, rows);
    return {
      field: `c_${columnIndex}`,
      title: header && header.trim().length > 0 ? header.trim() : toExcelColumnName(columnIndex),
      minWidth: 120,
      sortable: true,
      filters: filters.length > 0 ? filters : undefined,
      filterMultiple: filters.length > 0 ? true : undefined,
    };
  });
  logLoopProfiling('buildColumns', columns.length, getLoopProfilingTimestamp() - start, {
    hasFilters: columns.some((column) => Boolean(column.filters)),
  });
  return columns;
};

/**
 * 将二维数组格式的行数据转换为 VXETable 可消费的行记录。
 */
const buildRows = (
  rows: string[][],
  columnCount: number,
): Record<string, VXETableCellValue>[] => {
  if (columnCount <= 0) {
    return [];
  }
  const limitedRows = rows.slice(0, Math.min(rows.length, MAX_RENDERED_ROWS));
  const start = getLoopProfilingTimestamp();
  const records = limitedRows.map((rowValues) => {
    const record: Record<string, VXETableCellValue> = {};
    for (let colIndex = 0; colIndex < columnCount; colIndex += 1) {
      record[`c_${colIndex}`] = rowValues[colIndex] ?? '';
    }
    return record;
  });
  logLoopProfiling('buildRows', records.length, getLoopProfilingTimestamp() - start, {
    columnCount,
  });
  return records;
};

/**
 * 将后端 table 接口返回的数据映射为单个 VXETable 工作表视图。
 */
/**
 * 将后端返回的表格数据转换为 VXETable 视图结构
 * @param table 后端返回的表格数据
 * @param rowsToConvert 需要转换的行数据（支持分批传入）
 * @returns VXETable 视图结构
 */
export const convertTableResponseToVXESheet = (
  table: TeamSpreadsheetTableResponse,
  rowsToConvert?: string[][],
): VXETableSheetView => {
  // 如果传入了指定的行数据，使用指定的；否则使用全部
  const dataRows = rowsToConvert ?? table.rows;
  
  const columnCount = Math.max(
    table.headers.length,
    dataRows.reduce((max, row) => Math.max(max, row.length), 0),
  );
  const normalizedHeaders =
    columnCount === table.headers.length
      ? table.headers
      : Array.from({ length: columnCount }, (_, index) => table.headers[index] ?? '');
  const rows = buildRows(dataRows, columnCount);
  const columns = buildColumns(normalizedHeaders, rows);

  return {
    id: table.sheetId ?? `sheet-${table.documentId}`,
    name: table.sheetName ?? table.documentTitle ?? '工作表',
    columns,
    rows,
    totalRows: table.rows.length,
    totalColumns: columnCount,
    limitedByRowCap: table.rows.length > MAX_RENDERED_ROWS,
    limitedByColumnCap: false,
  };
};

