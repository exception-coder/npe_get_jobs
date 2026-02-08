import { IPermissionPanelRule } from '../../../services/permission/sheet-permission-panel.model';
interface ISheetPermissionPanelDetailProps {
    fromSheetBar: boolean;
    rule?: IPermissionPanelRule;
    oldRule?: IPermissionPanelRule;
}
export declare const SheetPermissionPanelDetail: (props: ISheetPermissionPanelDetailProps) => import("react/jsx-runtime").JSX.Element;
export {};
