import { ICellData, ObjectMatrix } from '@univerjs/core';
import { IDiscreteRange } from '../../../controllers/utils/range-tools';
import { ISheetClipboardHook } from '../type';
export declare class USMToHtmlService {
    convert(matrix: ObjectMatrix<ICellData & {
        rowSpan?: number | undefined;
        colSpan?: number | undefined;
    }>, range: IDiscreteRange, hooks: ISheetClipboardHook[]): string;
}
