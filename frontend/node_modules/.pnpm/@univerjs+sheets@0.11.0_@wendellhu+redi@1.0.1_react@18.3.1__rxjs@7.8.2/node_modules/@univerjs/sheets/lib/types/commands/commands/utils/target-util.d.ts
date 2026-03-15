import { IUniverInstanceService, Nullable, Workbook, Worksheet } from '@univerjs/core';
export declare function getSheetCommandTargetWorkbook(univerInstanceService: IUniverInstanceService, params: {
    unitId?: string;
}): Nullable<{
    workbook: Workbook;
    unitId: string;
}>;
export interface IResult {
    workbook: Workbook;
    worksheet: Worksheet;
    unitId: string;
    subUnitId: string;
}
/**
 * Get targeted Workbook & Worksheet of a command. If `unitId` and `subUnitId` are given, the function would
 * try to get these instances. If not, it would try to get the current active instances.
 *
 * @param univerInstanceService
 * @param params - unitId and subUnitId
 * @param params.unitId - The unitId of the Workbook
 * @param params.subUnitId - The subUnitId of the Worksheet
 * @returns Targeted Workbook & Worksheet
 */
export declare function getSheetCommandTarget(univerInstanceService: IUniverInstanceService, params?: {
    unitId?: string;
    subUnitId?: string;
}): Nullable<IResult>;
export declare function getSheetMutationTarget(univerInstanceService: IUniverInstanceService, params: {
    unitId: string;
    subUnitId: string;
}): Nullable<Pick<IResult, 'workbook' | 'worksheet'>>;
