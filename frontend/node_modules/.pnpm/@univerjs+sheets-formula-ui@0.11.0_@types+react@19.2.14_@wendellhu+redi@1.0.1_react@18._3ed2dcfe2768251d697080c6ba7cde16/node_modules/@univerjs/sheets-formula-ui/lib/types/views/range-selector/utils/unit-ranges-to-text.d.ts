import { IUnitRangeName, IUniverInstanceService } from '@univerjs/core';
export declare function getSheetIdByName(univerInstanceService: IUniverInstanceService, unitId: string, name: string): string;
export declare function getSheetNameById(univerInstanceService: IUniverInstanceService, unitId: string, sheetId: string): string;
export declare const unitRangesToText: (ranges: IUnitRangeName[], isNeedSheetName?: boolean, originSheetName?: string, isNeedWorkbookName?: boolean) => string[];
