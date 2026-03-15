import { Workbook } from '@univerjs/core';
import { SheetSkeletonManagerService } from '../services/sheet-skeleton-manager.service';
export declare function useActiveWorkbook(): Workbook | null;
export declare function useActiveWorksheet(workbook?: Workbook | null): import('@univerjs/core').Nullable<import('@univerjs/core').Worksheet>;
export declare function useWorkbooks(): Workbook[];
export declare function useSheetSkeleton(): SheetSkeletonManagerService | null | undefined;
