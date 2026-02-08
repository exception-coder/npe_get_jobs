import { IContextService } from '@univerjs/core';
export declare function whenSheetFocused(contextService: IContextService): boolean;
/**
 * Requires the currently focused unit to be Workbook and the sheet editor is focused but not activated.
 * @param contextService
 * @returns If the sheet editor is focused but not activated.
 */
export declare function whenSheetEditorFocused(contextService: IContextService): boolean;
export declare function whenSheetEditorFocusedAndFxNotFocused(contextService: IContextService): boolean;
/**
 * Requires the currently focused unit to be Workbook and the sheet editor is activated.
 * @param contextService
 * @returns If the sheet editor is activated.
 */
export declare function whenSheetEditorActivated(contextService: IContextService): boolean;
export declare function whenEditorActivated(contextService: IContextService): boolean;
/**
 * Requires the currently focused editor is a formula editor.
 * @param contextService
 * @returns If the formula editor is focused.
 */
export declare function whenFormulaEditorFocused(contextService: IContextService): boolean;
/**
 * Requires the currently focused editor is a formula editor, and it is activated.
 * @param contextService
 * @returns If the formula editor is activated.
 */
export declare function whenFormulaEditorActivated(contextService: IContextService): boolean;
/**
 * Requires the currently focused editor is not a formula editor, and it is activated.
 * @param contextService
 * @returns If the editor is activated and the editor is not the formula editor.
 */
export declare function whenEditorDidNotInputFormulaActivated(contextService: IContextService): boolean;
