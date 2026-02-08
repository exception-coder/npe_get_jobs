import { ICommand } from '@univerjs/core';
export interface ICancelHyperLinkCommandParams {
    unitId: string;
    subUnitId: string;
    /**
     * id of link
     */
    id: string;
    row: number;
    column: number;
}
export declare const CancelHyperLinkCommand: ICommand<ICancelHyperLinkCommandParams>;
export interface ICancelRichHyperLinkCommandParams extends ICancelHyperLinkCommandParams {
    /**
     * document id
     */
    documentId: string;
}
export declare const CancelRichHyperLinkCommand: ICommand<ICancelRichHyperLinkCommandParams>;
