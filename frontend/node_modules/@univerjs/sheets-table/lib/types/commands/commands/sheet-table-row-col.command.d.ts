import { ICommand } from '@univerjs/core';
interface ISheetTableRowColOperationCommandParams {
    tableId: string;
    unitId: string;
    subUnitId: string;
}
export declare const SheetTableInsertRowCommand: ICommand<ISheetTableRowColOperationCommandParams>;
export declare const SheetTableInsertColCommand: ICommand<ISheetTableRowColOperationCommandParams>;
export declare const SheetTableRemoveRowCommand: ICommand<ISheetTableRowColOperationCommandParams>;
export declare const SheetTableRemoveColCommand: ICommand<ISheetTableRowColOperationCommandParams>;
export {};
