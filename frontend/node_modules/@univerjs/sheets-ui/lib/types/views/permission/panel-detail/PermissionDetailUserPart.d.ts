import { EditStateEnum, ViewStateEnum } from '@univerjs/sheets';
export interface IPermissionDetailUserPartProps {
    editState: EditStateEnum;
    onEditStateChange: (v: EditStateEnum) => void;
    viewState: ViewStateEnum;
    onViewStateChange: (v: ViewStateEnum) => void;
    permissionId: string;
}
export declare const PermissionDetailUserPart: (props: IPermissionDetailUserPartProps) => import("react/jsx-runtime").JSX.Element | null;
