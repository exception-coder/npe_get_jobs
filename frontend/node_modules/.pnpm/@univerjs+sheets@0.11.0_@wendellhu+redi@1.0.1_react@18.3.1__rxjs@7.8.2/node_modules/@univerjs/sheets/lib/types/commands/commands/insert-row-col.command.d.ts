import { ICellData, ICommand, IObjectMatrixPrimitiveType, IRange, Direction } from '@univerjs/core';
export interface IInsertRowCommandParams {
    unitId: string;
    subUnitId: string;
    /**
     * whether it is inserting row after (DOWN) or inserting before (UP)
     *
     * this determines styles of the cells in the inserted rows
     */
    direction: Direction.UP | Direction.DOWN;
    /**
     * The range will the row be inserted.
     */
    range: IRange;
    cellValue?: IObjectMatrixPrimitiveType<ICellData>;
}
export declare const InsertRowCommandId = "sheet.command.insert-row";
export declare const InsertRowByRangeCommand: ICommand;
export declare const InsertRowBeforeCommand: ICommand;
export declare const InsertRowAfterCommand: ICommand;
export interface IInsertMultiRowsCommandParams {
    value: number;
}
export declare const InsertMultiRowsAboveCommand: ICommand;
export declare const InsertMultiRowsAfterCommand: ICommand;
export interface IInsertColCommandParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    direction: Direction.LEFT | Direction.RIGHT;
    cellValue?: IObjectMatrixPrimitiveType<ICellData>;
}
export declare const InsertColCommandId = "sheet.command.insert-col";
export declare const InsertColCommand: ICommand<IInsertColCommandParams>;
export declare const InsertColByRangeCommand: ICommand<IInsertColCommandParams>;
export declare const InsertColBeforeCommand: ICommand;
export declare const InsertColAfterCommand: ICommand;
export interface IInsertMultiColsCommandParams {
    value: number;
}
export declare const InsertMultiColsLeftCommand: ICommand;
export declare const InsertMultiColsRightCommand: ICommand;
