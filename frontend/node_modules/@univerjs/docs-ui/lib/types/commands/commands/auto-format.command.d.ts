import { ICommand } from '@univerjs/core';
export interface ITabCommandParams {
    shift?: boolean;
}
export declare const TabCommand: ICommand<ITabCommandParams>;
export declare const AfterSpaceCommand: ICommand;
export declare const EnterCommand: ICommand;
