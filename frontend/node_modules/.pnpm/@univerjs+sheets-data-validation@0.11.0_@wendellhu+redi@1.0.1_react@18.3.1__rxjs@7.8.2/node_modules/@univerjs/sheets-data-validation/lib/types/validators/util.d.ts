import { ICellData, ISheetDataValidationRule, IUnitRangeName, IUniverInstanceService, Nullable } from '@univerjs/core';
import { LexerTreeBuilder } from '@univerjs/engine-formula';
import { ISheetLocationBase } from '@univerjs/sheets';
export declare function getSheetRangeValueSet(grid: IUnitRangeName, univerInstanceService: IUniverInstanceService, currUnitId: string, currSubUnitId: string): string[];
export declare function serializeListOptions(options: string[]): string;
export declare function deserializeListOptions(optionsStr: string): string[];
export declare function getDataValidationCellValue(cellData: Nullable<ICellData>): string;
export declare function getTransformedFormula(lexerTreeBuilder: LexerTreeBuilder, rule: ISheetDataValidationRule, position: ISheetLocationBase): {
    transformedFormula1: string | undefined;
    transformedFormula2: string | undefined;
};
