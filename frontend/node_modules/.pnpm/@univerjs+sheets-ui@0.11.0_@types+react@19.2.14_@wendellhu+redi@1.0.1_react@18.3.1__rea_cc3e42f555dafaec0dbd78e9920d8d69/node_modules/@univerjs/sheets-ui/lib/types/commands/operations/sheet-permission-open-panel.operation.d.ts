import { ICommand } from '@univerjs/core';
import { IPermissionPanelRule } from '../../services/permission/sheet-permission-panel.model';
export interface IPermissionOpenPanelParam {
    fromSheetBar?: boolean;
    showDetail?: boolean;
    rule?: IPermissionPanelRule;
    oldRule?: IPermissionPanelRule;
}
export declare const SheetPermissionOpenPanelOperation: ICommand<IPermissionOpenPanelParam>;
