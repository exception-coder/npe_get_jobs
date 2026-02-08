import { IAccessor, Nullable, RANGE_TYPE } from '@univerjs/core';
import { ISelectionWithStyle } from '@univerjs/sheets';
export declare function getSheetSelectionsDisabled$(accessor: IAccessor): import('rxjs').Observable<boolean>;
/**
 * Detect if this row is selected
 * @param selections
 * @param rowIndex
 * @returns boolean
 */
export declare function isThisRowSelected(selections: Readonly<ISelectionWithStyle[]>, rowIndex: number): boolean;
/**
 * Detect if this col is selected
 * @param selections
 * @param colIndex
 * @returns boolean
 */
export declare function isThisColSelected(selections: Readonly<ISelectionWithStyle[]>, colIndex: number): boolean;
/**
 * Detect this row/col is in selections.
 * @param selections
 * @param indexOfRowCol
 * @param rowOrCol
 * @returns boolean
 */
export declare function matchedSelectionByRowColIndex(selections: Readonly<ISelectionWithStyle[]>, indexOfRowCol: number, rowOrCol: RANGE_TYPE.ROW | RANGE_TYPE.COLUMN): Nullable<ISelectionWithStyle>;
