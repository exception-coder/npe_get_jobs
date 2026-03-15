import { ICommand } from '@univerjs/core';
export interface IDeleteDocHyperLinkMutationParams {
    unitId: string;
    linkId: string;
    segmentId?: string;
}
export declare const DeleteDocHyperLinkCommand: ICommand<IDeleteDocHyperLinkMutationParams>;
