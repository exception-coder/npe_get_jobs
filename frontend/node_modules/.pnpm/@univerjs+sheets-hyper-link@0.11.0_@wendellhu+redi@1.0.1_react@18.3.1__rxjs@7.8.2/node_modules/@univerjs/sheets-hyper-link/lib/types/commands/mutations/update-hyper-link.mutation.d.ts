import { ICommand } from '@univerjs/core';
import { ICellLinkContent } from '../../types/interfaces/i-hyper-link';
export interface IUpdateHyperLinkMutationParams {
    unitId: string;
    subUnitId: string;
    id: string;
    payload: ICellLinkContent;
}
export declare const UpdateHyperLinkMutation: ICommand<IUpdateHyperLinkMutationParams>;
export interface IUpdateHyperLinkRefMutationParams {
    unitId: string;
    subUnitId: string;
    id: string;
    row: number;
    column: number;
    silent?: boolean;
}
export declare const UpdateHyperLinkRefMutation: ICommand<IUpdateHyperLinkRefMutationParams>;
export interface IUpdateRichHyperLinkMutationParams {
    unitId: string;
    subUnitId: string;
    row: number;
    col: number;
    id: string;
    url: string;
}
export declare const UpdateRichHyperLinkMutation: ICommand<IUpdateRichHyperLinkMutationParams>;
