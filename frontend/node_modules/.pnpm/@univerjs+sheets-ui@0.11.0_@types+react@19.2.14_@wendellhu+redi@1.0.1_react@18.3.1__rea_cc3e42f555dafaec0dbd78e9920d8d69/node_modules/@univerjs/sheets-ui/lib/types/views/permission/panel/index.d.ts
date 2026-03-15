import { IPermissionPanelRule } from '../../../services/permission/sheet-permission-panel.model';
interface ISheetPermissionPanelProps {
    showDetail: boolean;
    fromSheetBar: boolean;
    rule?: IPermissionPanelRule;
    oldRule?: IPermissionPanelRule;
}
export declare const SheetPermissionPanel: ({ showDetail, fromSheetBar, rule, oldRule }: ISheetPermissionPanelProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
