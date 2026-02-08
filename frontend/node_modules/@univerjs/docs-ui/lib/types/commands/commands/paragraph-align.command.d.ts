import { ICommand, HorizontalAlign } from '@univerjs/core';
interface IAlignOperationCommandParams {
    alignType: HorizontalAlign;
}
export declare const AlignOperationCommand: ICommand<IAlignOperationCommandParams>;
interface IAlignLeftCommandParams {
}
export declare const AlignLeftCommand: ICommand<IAlignLeftCommandParams>;
interface IAlignCenterCommandParams {
}
export declare const AlignCenterCommand: ICommand<IAlignCenterCommandParams>;
interface IAlignRightCommandParams {
}
export declare const AlignRightCommand: ICommand<IAlignRightCommandParams>;
interface IAlignJustifyCommandParams {
}
export declare const AlignJustifyCommand: ICommand<IAlignJustifyCommandParams>;
export {};
