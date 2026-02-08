import { ICellData, ICellDataForSheetInterceptor, ICellInterceptor, Nullable } from '@univerjs/core';
import { ISheetLocation, ISheetRowLocation } from './utils/interceptor';
export declare const INTERCEPTOR_POINT: {
    CELL_CONTENT: ICellInterceptor<ICellDataForSheetInterceptor, ISheetLocation & {
        rawData: Nullable<ICellData>;
    }>;
    ROW_FILTERED: import('@univerjs/core').IInterceptor<boolean, ISheetRowLocation>;
};
export declare enum InterceptCellContentPriority {
    DATA_VALIDATION = 9,
    NUMFMT = 10,
    CELL_IMAGE = 11
}
export declare const RangeThemeInterceptorId = "sheet.interceptor.range-theme-id";
export declare const IgnoreRangeThemeInterceptorKey = "sheet.interceptor.ignore-range-theme";
