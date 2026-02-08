import { BooleanNumber } from '@univerjs/core';
import { CSSProperties, ReactNode } from 'react';
export interface IBaseSheetBarProps {
    label?: ReactNode;
    children?: any[];
    index?: number;
    color?: string;
    sheetId?: string;
    style?: CSSProperties;
    hidden?: BooleanNumber;
    selected?: boolean;
    menuOverlay?: ReactNode;
}
export declare function SheetBarItem(props: IBaseSheetBarProps): import("react/jsx-runtime").JSX.Element;
