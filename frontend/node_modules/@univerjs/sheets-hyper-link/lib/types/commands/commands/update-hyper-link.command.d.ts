import { ICommand } from '@univerjs/core';
import { ICellLinkContent } from '../../types/interfaces/i-hyper-link';
export interface IUpdateHyperLinkCommandParams {
    unitId: string;
    subUnitId: string;
    id: string;
    payload: ICellLinkContent;
    row: number;
    column: number;
}
export declare const UpdateHyperLinkCommand: ICommand<IUpdateHyperLinkCommandParams>;
export interface IUpdateRichHyperLinkCommandParams {
    documentId: string;
    id: string;
    payload: ICellLinkContent;
}
export declare const UpdateRichHyperLinkCommand: ICommand<IUpdateRichHyperLinkCommandParams>;
