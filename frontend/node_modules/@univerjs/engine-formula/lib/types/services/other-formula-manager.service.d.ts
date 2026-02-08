import { Nullable, Disposable } from '@univerjs/core';
import { IDirtyUnitOtherFormulaMap, IOtherFormulaData, IOtherFormulaDataItem } from '../basics/common';
export interface IOtherFormulaManagerSearchParam {
    unitId: string;
    subUnitId: string;
    formulaId: string;
}
export interface IOtherFormulaManagerInsertParam extends IOtherFormulaManagerSearchParam {
    item: IOtherFormulaDataItem;
}
export interface IOtherFormulaManagerService {
    dispose(): void;
    remove(searchParam: IOtherFormulaManagerSearchParam): void;
    get(searchParam: IOtherFormulaManagerSearchParam): Nullable<IOtherFormulaDataItem>;
    has(searchParam: IOtherFormulaManagerSearchParam): boolean;
    register(insertParam: IOtherFormulaManagerInsertParam): void;
    getOtherFormulaData(): IOtherFormulaData;
    batchRegister(formulaData: IOtherFormulaData): void;
    batchRemove(formulaData: IDirtyUnitOtherFormulaMap): void;
}
/**
 * Passively marked as dirty, register the reference and execution actions of the feature plugin.
 * After execution, a dirty area and calculated data will be returned,
 * causing the formula to be marked dirty again,
 * thereby completing the calculation of the entire dependency tree.
 */
export declare class OtherFormulaManagerService extends Disposable implements IOtherFormulaManagerService {
    private _otherFormulaData;
    dispose(): void;
    remove(searchParam: IOtherFormulaManagerSearchParam): void;
    get(searchParam: IOtherFormulaManagerSearchParam): IOtherFormulaDataItem | undefined;
    has(searchParam: IOtherFormulaManagerSearchParam): boolean;
    register(insertParam: IOtherFormulaManagerInsertParam): void;
    batchRegister(formulaData: IOtherFormulaData): void;
    batchRemove(formulaData: IDirtyUnitOtherFormulaMap): void;
    getOtherFormulaData(): IOtherFormulaData;
}
export declare const IOtherFormulaManagerService: import('@wendellhu/redi').IdentifierDecorator<OtherFormulaManagerService>;
