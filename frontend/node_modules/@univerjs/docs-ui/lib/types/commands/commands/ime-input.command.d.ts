import { ICommand } from '@univerjs/core';
export interface IIMEInputCommandParams {
    unitId: string;
    newText: string;
    oldTextLen: number;
    isCompositionStart: boolean;
    isCompositionEnd: boolean;
}
export declare const IMEInputCommand: ICommand<IIMEInputCommandParams>;
