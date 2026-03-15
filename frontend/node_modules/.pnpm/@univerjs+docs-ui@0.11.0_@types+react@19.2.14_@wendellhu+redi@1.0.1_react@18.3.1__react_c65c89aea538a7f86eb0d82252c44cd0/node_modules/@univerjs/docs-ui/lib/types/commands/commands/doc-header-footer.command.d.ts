import { ICommand, BooleanNumber } from '@univerjs/core';
import { HeaderFooterType } from '../../controllers/doc-header-footer.controller';
export interface IHeaderFooterProps {
    marginHeader?: number;
    marginFooter?: number;
    useFirstPageHeaderFooter?: BooleanNumber;
    evenAndOddHeaders?: BooleanNumber;
}
export interface ICoreHeaderFooterParams {
    unitId: string;
    createType?: HeaderFooterType;
    segmentId?: string;
    headerFooterProps?: IHeaderFooterProps;
}
export declare const CoreHeaderFooterCommandId = "doc.command.core-header-footer";
/**
 * The command to update header and footer or create them.
 */
export declare const CoreHeaderFooterCommand: ICommand<ICoreHeaderFooterParams>;
interface IOpenHeaderFooterPanelParams {
}
export declare const OpenHeaderFooterPanelCommand: ICommand<IOpenHeaderFooterPanelParams>;
interface ICloseHeaderFooterParams {
    unitId: string;
}
export declare const CloseHeaderFooterCommand: ICommand<ICloseHeaderFooterParams>;
export {};
