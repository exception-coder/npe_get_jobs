import { DataValidationType, ICellData, Nullable } from '@univerjs/core';
import { DataValidatorRegistryService } from '@univerjs/data-validation';
export declare function getFormulaResult(result: Nullable<Nullable<ICellData>[][]>): Nullable<import('@univerjs/core').CellValue>;
export declare function getFormulaCellData(result: Nullable<Nullable<ICellData>[][]>): Nullable<ICellData>;
export declare function isLegalFormulaResult(res: string): boolean;
/**
 * Judge if the data-validation's formula need to be offseted by ranges
 */
export declare function shouldOffsetFormulaByRange(type: DataValidationType | string, validatorRegistryService: DataValidatorRegistryService): boolean;
