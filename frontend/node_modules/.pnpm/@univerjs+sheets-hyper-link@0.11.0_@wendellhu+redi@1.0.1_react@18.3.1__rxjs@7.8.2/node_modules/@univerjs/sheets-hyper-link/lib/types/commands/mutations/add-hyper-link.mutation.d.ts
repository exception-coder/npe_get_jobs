import { ICommand } from '@univerjs/core';
import { ISheetHyperLink } from '../../types/interfaces/i-hyper-link';
export interface IAddHyperLinkMutationParams {
    unitId: string;
    subUnitId: string;
    link: ISheetHyperLink;
}
export declare const AddHyperLinkMutation: ICommand<IAddHyperLinkMutationParams>;
