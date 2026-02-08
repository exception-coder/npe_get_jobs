import { ReactNode } from 'react';
export interface ISheetBarMenuItem {
    label?: ReactNode;
    hidden?: boolean;
    selected?: boolean;
    index?: string;
    sheetId?: string;
}
export declare function SheetBarMenu(): import("react/jsx-runtime").JSX.Element;
