import { ICellData, IMutationInfo, IObjectMatrixPrimitiveType, IRange, Nullable } from '@univerjs/core';
import { ISetRangeValuesMutationParams } from '@univerjs/sheets';
import { IDiscreteRange } from '../../controllers/utils/range-tools';
/**
 *
 *
 * @param {IRange} sourceRange
 * @param {IRange} targetRange
 * @param {boolean} [isStrictMode] if is true,the remainder of the row and column must all be 0 to be repeated
 * @return {*}
 */
export declare const getRepeatRange: (sourceRange: IRange, targetRange: IRange, isStrictMode?: boolean) => {
    startRange: IRange;
    repeatRelativeRange: IRange;
}[];
export declare function htmlIsFromExcel(html: string): boolean;
export declare function htmlContainsImage(html: string): boolean;
export declare function mergeCellValues(...cellValues: IObjectMatrixPrimitiveType<Nullable<ICellData>>[]): IObjectMatrixPrimitiveType<Nullable<ICellData>> | IObjectMatrixPrimitiveType<IObjectMatrixPrimitiveType<Nullable<ICellData>>>;
export declare function getRangeValuesMergeable(m1: IMutationInfo<ISetRangeValuesMutationParams>, m2: IMutationInfo<ISetRangeValuesMutationParams>): boolean;
export declare function mergeSetRangeValues(mutations: IMutationInfo[]): IMutationInfo<object>[];
export declare function rangeIntersectWithDiscreteRange(range: IRange, discrete: IDiscreteRange): true | undefined;
export declare function discreteRangeContainsRange(discrete: IDiscreteRange, range: IRange): boolean;
export declare function convertTextToTable(text: string): string;
