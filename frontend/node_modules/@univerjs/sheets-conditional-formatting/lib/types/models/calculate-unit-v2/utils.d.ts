import { CellValue, ICellData, IObjectMatrixPrimitiveType, IRange, Nullable, ColorKit, ObjectMatrix } from '@univerjs/core';
import { IConditionFormattingRule, IValueConfig } from '../../models/type';
import { IContext } from './base-calculate-unit';
import { CFNumberOperator } from '../../base/const';
import { FormulaResultStatus } from '../../services/conditional-formatting-formula.service';
export declare function isFloatsEqual(a: number, b: number): boolean;
export declare const isNullable: (v: any) => boolean;
export declare const getCellValue: (cell?: ICellData) => Nullable<CellValue>;
export declare function toYMD_1900(ord: number, leap1900?: boolean): number[];
export declare const serialTimeToTimestamp: (value: number) => number;
export declare const getValueByType: (value: IValueConfig, matrix: ObjectMatrix<number>, context: IContext & {
    cfId: string;
}) => {
    status: FormulaResultStatus;
    result?: undefined;
} | {
    result: Nullable<string | number | boolean | void | null | undefined>;
    status: FormulaResultStatus;
};
export declare const getCacheStyleMatrix: <S = any>(unitId: string, subUnitId: string, rule: IConditionFormattingRule, context: IContext) => ObjectMatrix<S>;
export declare const compareWithNumber: (config: {
    operator: CFNumberOperator;
    value: number | [number, number];
}, v: number) => boolean | undefined;
export declare const getOppositeOperator: (operator: CFNumberOperator) => CFNumberOperator;
export declare const getColorScaleFromValue: (colorList: {
    color: ColorKit;
    value: number;
}[], value: number) => string | undefined;
export declare const filterRange: (ranges: IRange[], maxRow: number, maxCol: number) => IRange[];
export declare function getMaxInFormulaResult(result: IObjectMatrixPrimitiveType<Nullable<CellValue>>): number;
