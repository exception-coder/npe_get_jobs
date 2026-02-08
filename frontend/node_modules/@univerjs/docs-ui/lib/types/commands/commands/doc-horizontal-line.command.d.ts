import { ICommand, ITextRangeParam } from '@univerjs/core';
interface IHorizontalCommandParams {
    insertRange?: ITextRangeParam;
}
export declare const HorizontalLineCommand: ICommand<IHorizontalCommandParams>;
export declare const InsertHorizontalLineBellowCommand: ICommand<IHorizontalCommandParams>;
export {};
