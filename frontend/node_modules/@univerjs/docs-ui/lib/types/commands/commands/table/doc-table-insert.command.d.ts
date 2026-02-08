import { ICommand } from '@univerjs/core';
import { INSERT_COLUMN_POSITION, INSERT_ROW_POSITION } from './table';
export declare const DocTableInsertRowCommandId = "doc.command.table-insert-row";
export declare const DocTableInsertColumnCommandId = "doc.command.table-insert-column";
export declare const DocTableInsertRowAboveCommandId = "doc.command.table-insert-row-above";
export declare const DocTableInsertRowBellowCommandId = "doc.command.table-insert-row-bellow";
export declare const DocTableInsertColumnLeftCommandId = "doc.command.table-insert-column-left";
export declare const DocTableInsertColumnRightCommandId = "doc.command.table-insert-column-right";
export interface IDocTableInsertRowAboveCommandParams {
}
export declare const DocTableInsertRowAboveCommand: ICommand<IDocTableInsertRowAboveCommandParams>;
export interface IDocTableInsertRowBellowCommandParams {
}
export declare const DocTableInsertRowBellowCommand: ICommand<IDocTableInsertRowBellowCommandParams>;
export interface IDocTableInsertColumnLeftCommandParams {
}
export declare const DocTableInsertColumnLeftCommand: ICommand<IDocTableInsertColumnLeftCommandParams>;
export interface IDocTableInsertColumnRightCommandParams {
}
export declare const DocTableInsertColumnRightCommand: ICommand<IDocTableInsertColumnRightCommandParams>;
export interface IDocTableInsertRowCommandParams {
    position: INSERT_ROW_POSITION;
}
/**
 * The command to insert table row.
 */
export declare const DocTableInsertRowCommand: ICommand<IDocTableInsertRowCommandParams>;
export interface IDocTableInsertColumnCommandParams {
    position: INSERT_COLUMN_POSITION;
}
/**
 * The command to insert table column.
 */
export declare const DocTableInsertColumnCommand: ICommand<IDocTableInsertColumnCommandParams>;
