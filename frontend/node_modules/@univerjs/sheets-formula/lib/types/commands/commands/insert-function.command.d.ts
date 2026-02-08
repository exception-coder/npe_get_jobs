import { ICommand, IRange } from '@univerjs/core';
export interface IInsertFunction {
    /**
     * The range into which the function is to be inserted
     */
    range: IRange;
    /**
     * Where there is a function id, other locations reference this function id
     */
    primary: {
        row: number;
        column: number;
    };
    /**
     * Function name
     */
    formula: string;
}
export interface IInsertFunctionCommandParams {
    list: IInsertFunction[];
    listOfRangeHasNumber?: IInsertFunction[];
}
export declare const InsertFunctionCommand: ICommand;
