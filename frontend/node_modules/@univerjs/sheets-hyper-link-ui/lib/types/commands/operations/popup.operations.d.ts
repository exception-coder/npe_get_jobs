import { ICommand } from '@univerjs/core';
import { ISheetCommandSharedParams } from '@univerjs/sheets';
import { HyperLinkEditSourceType } from '../../types/enums/edit-source';
export interface IOpenHyperLinkEditPanelOperationParams extends ISheetCommandSharedParams {
    row: number;
    col: number;
    customRangeId?: string;
    type: HyperLinkEditSourceType;
}
export declare const OpenHyperLinkEditPanelOperation: ICommand<IOpenHyperLinkEditPanelOperationParams>;
export declare const CloseHyperLinkPopupOperation: ICommand;
export declare const InsertHyperLinkOperation: ICommand;
export declare const InsertHyperLinkToolbarOperation: ICommand;
