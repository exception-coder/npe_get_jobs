import { ICellDataForSheetInterceptor } from '@univerjs/core';
import { UnitAction } from '@univerjs/protocol';
export declare const defaultSheetActions: UnitAction[];
export type IWorksheetProtectionRenderCellData = ICellDataForSheetInterceptor & {
    hasWorksheetRule: boolean;
} & {
    selectionProtection: {
        [UnitAction.View]: boolean;
        [UnitAction.Edit]: boolean;
    }[];
};
