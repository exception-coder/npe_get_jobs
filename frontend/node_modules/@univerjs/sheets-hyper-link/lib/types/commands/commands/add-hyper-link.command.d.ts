import { ICommand } from '@univerjs/core';
import { ISheetHyperLink } from '../../types/interfaces/i-hyper-link';
export interface IAddHyperLinkCommandParams {
    unitId: string;
    subUnitId: string;
    link: ISheetHyperLink;
}
/**
 * Command for add hyperlink
 */
export declare const AddHyperLinkCommand: ICommand<IAddHyperLinkCommandParams>;
export interface IAddRichHyperLinkCommandParams {
    /**
     * url of link
     */
    documentId: string;
    link: ISheetHyperLink;
}
export declare const AddRichHyperLinkCommand: ICommand<IAddRichHyperLinkCommandParams>;
