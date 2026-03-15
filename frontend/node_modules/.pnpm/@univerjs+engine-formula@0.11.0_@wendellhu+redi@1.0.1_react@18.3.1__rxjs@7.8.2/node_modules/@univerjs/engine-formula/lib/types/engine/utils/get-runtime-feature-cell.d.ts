import { IRuntimeUnitDataType } from '../../basics/common';
export declare function getRuntimeFeatureCell(row: number, column: number, sheetId: string, unitId: string, runtimeFeatureCellData: {
    [featureId: string]: IRuntimeUnitDataType;
}): import('@univerjs/core').ICellData | undefined;
