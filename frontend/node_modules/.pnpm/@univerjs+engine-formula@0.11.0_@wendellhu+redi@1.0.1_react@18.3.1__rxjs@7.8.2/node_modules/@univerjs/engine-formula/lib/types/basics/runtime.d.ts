import { IArrayFormulaUnitCellType, IRuntimeUnitDataPrimitiveType, IRuntimeUnitDataType } from './common';
export declare function convertUnitDataToRuntime(unitData: IArrayFormulaUnitCellType): IRuntimeUnitDataType;
export declare function convertRuntimeToUnitData(unitData: IRuntimeUnitDataType): IRuntimeUnitDataPrimitiveType;
