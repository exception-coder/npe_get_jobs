import { ICellData, Nullable } from '@univerjs/core';
/**
 * Examine if a cell is empty (null) in the formula-related modules. This is not
 * interchangable with {@link isNullCell} from the core package, because for
 * formulas, "custom" field is meaningless.
 */
export declare function isNullCellForFormula(cell: Nullable<ICellData>): boolean;
