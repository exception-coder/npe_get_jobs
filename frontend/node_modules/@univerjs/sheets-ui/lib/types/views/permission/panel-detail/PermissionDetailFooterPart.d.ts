import { IRange } from '@univerjs/core';
import { IPermissionPanelRule } from '../../../services/permission/sheet-permission-panel.model';
import { EditStateEnum, ViewStateEnum } from '@univerjs/sheets';
interface IPermissionDetailFooterPartProps {
    permissionId: string;
    id: string;
    ranges: IRange[];
    rangesErrMsg?: string;
    desc?: string;
    editState: EditStateEnum;
    viewState: ViewStateEnum;
    oldRule?: IPermissionPanelRule;
}
export declare const PermissionDetailFooterPart: (props: IPermissionDetailFooterPartProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
