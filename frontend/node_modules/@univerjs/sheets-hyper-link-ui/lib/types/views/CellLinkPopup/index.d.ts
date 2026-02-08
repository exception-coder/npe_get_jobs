import { ICustomRange, Nullable } from '@univerjs/core';
import { HyperLinkEditSourceType } from '../../types/enums/edit-source';
interface ICellLinkPopupPureProps {
    customRange?: Nullable<ICustomRange>;
    row: number;
    col: number;
    unitId: string;
    subUnitId: string;
    editPermission?: boolean;
    copyPermission?: boolean;
    type: HyperLinkEditSourceType;
}
export declare const CellLinkPopupPure: (props: ICellLinkPopupPureProps) => import("react/jsx-runtime").JSX.Element | null;
export declare const CellLinkPopup: {
    (): import("react/jsx-runtime").JSX.Element | null;
    componentKey: string;
};
export {};
