import { ICommand, Direction } from '@univerjs/core';
export interface IMoveDrawingsCommandParams {
    direction: Direction;
}
export declare const MoveDrawingsCommand: ICommand;
