import { APPLY_TYPE } from '../../services/auto-fill/type';
export interface IAnchorPoint {
    row: number;
    col: number;
}
export interface IAutoFillPopupMenuItem {
    label: string;
    value: APPLY_TYPE;
    index: number;
    disable: boolean;
}
export declare function AutoFillPopupMenu(): import("react/jsx-runtime").JSX.Element | null;
