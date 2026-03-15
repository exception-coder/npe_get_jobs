import { ICommand, Workbook, LocaleService } from '@univerjs/core';
export interface ICopySheetCommandParams {
    unitId?: string;
    subUnitId?: string;
}
export declare const CopySheetCommand: ICommand;
export declare function getCopyUniqueSheetName(workbook: Workbook, localeService: LocaleService, name: string): string;
