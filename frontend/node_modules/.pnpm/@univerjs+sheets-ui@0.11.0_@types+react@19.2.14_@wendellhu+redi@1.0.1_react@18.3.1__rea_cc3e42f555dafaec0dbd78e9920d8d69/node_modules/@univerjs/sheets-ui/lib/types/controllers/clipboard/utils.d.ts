import { IAccessor, IDocumentBody, IMutationInfo, Nullable, ObjectMatrix } from '@univerjs/core';
import { ICellDataWithSpanInfo, ICopyPastePayload, ISheetDiscreteRangeLocation } from '../../services/clipboard/type';
import { IDiscreteRange } from '../utils/range-tools';
/**
 *
 * @param pasteFrom
 * @param pasteTo
 * @param data
 * @param payload
 * @param accessor
 */
export declare function getDefaultOnPasteCellMutations(pasteFrom: ISheetDiscreteRangeLocation, pasteTo: ISheetDiscreteRangeLocation, data: ObjectMatrix<ICellDataWithSpanInfo>, payload: ICopyPastePayload, accessor: IAccessor): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
/**
 *
 * @param from
 * @param from.unitId
 * @param from.subUnitId
 * @param from.range
 * @param to
 * @param to.unitId
 * @param to.subUnitId
 * @param to.range
 * @param accessor
 */
export declare function getMoveRangeMutations(from: {
    unitId: string;
    subUnitId: string;
    range?: IDiscreteRange;
}, to: {
    unitId: string;
    subUnitId: string;
    range?: IDiscreteRange;
}, accessor: IAccessor): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
/**
 *
 * @param pasteTo
 * @param pasteFrom
 * @param matrix
 * @param accessor
 */
export declare function getSetCellValueMutations(pasteTo: ISheetDiscreteRangeLocation, pasteFrom: Nullable<ISheetDiscreteRangeLocation>, matrix: ObjectMatrix<ICellDataWithSpanInfo>, accessor: IAccessor): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
/**
 *
 * @param pasteTo
 * @param matrix
 * @param accessor
 * @param withRichFormat
 */
export declare function getSetCellStyleMutations(pasteTo: ISheetDiscreteRangeLocation, pasteFrom: Nullable<ISheetDiscreteRangeLocation>, matrix: ObjectMatrix<ICellDataWithSpanInfo>, accessor: IAccessor, withRichFormat?: boolean): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
/**
 *
 * @param pasteTo
 * @param matrix
 * @param accessor
 */
export declare function getClearCellStyleMutations(pasteTo: ISheetDiscreteRangeLocation, matrix: ObjectMatrix<ICellDataWithSpanInfo>, accessor: IAccessor): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
/**
 *
 * @param pasteTo
 * @param matrix
 * @param accessor
 */
export declare function getClearCellValueMutations(pasteTo: ISheetDiscreteRangeLocation, matrix: ObjectMatrix<ICellDataWithSpanInfo>, accessor: IAccessor): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
/**
 *
 * @param pasteTo
 * @param matrix
 * @param accessor
 */
export declare function getClearAndSetMergeMutations(pasteTo: ISheetDiscreteRangeLocation, matrix: ObjectMatrix<ICellDataWithSpanInfo>, accessor: IAccessor): {
    undos: IMutationInfo<object>[];
    redos: IMutationInfo<object>[];
};
/**
 *
 * @param text
 */
export declare function generateBody(text: string): IDocumentBody;
