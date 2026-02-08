import { ICellData, IContextService, Nullable } from '@univerjs/core';
export declare function whenEditorStandalone(contextService: IContextService): boolean;
/**
 * Extract the formula number from the cell, handle the precision issue
 * @param cell
 * @returns
 */
export declare function extractFormulaNumber(cell: Nullable<ICellData>): number | null;
