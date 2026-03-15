import { ICommand } from '@univerjs/core';
export interface IUpdateDocHyperLinkCommandParams {
    unitId: string;
    linkId: string;
    payload: string;
    label: string;
    segmentId: string;
}
export declare const UpdateDocHyperLinkCommand: ICommand<IUpdateDocHyperLinkCommandParams>;
