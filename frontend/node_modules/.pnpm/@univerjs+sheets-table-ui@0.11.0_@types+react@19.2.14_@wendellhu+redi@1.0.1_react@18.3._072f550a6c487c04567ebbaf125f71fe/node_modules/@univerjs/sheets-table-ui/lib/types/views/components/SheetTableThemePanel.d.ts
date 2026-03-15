import { ITableSetConfig } from '@univerjs/sheets-table';
export interface ISheetTableThemePanelProps {
    unitId: string;
    subUnitId: string;
    tableId: string;
    oldConfig: ITableSetConfig;
}
export declare const SheetTableThemePanel: (props: ISheetTableThemePanelProps) => import("react/jsx-runtime").JSX.Element | null;
