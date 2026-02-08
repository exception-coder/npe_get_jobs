import { ICommand, ITextRangeParam } from '@univerjs/core';
export interface IAddDocHyperLinkCommandParams {
    payload: string;
    unitId: string;
    selections?: ITextRangeParam[];
}
export declare const AddDocHyperLinkCommand: ICommand<IAddDocHyperLinkCommandParams>;
