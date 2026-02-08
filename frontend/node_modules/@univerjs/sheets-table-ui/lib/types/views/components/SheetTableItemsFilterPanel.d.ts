import { ITableFilterItem } from '@univerjs/sheets-table';
import { Dispatch, SetStateAction } from 'react';
interface ISheetTableItemsFilterPanelProps {
    unitId: string;
    subUnitId: string;
    tableFilter: ITableFilterItem | undefined;
    tableId: string;
    columnIndex: number;
    checkedItemSet: Set<string>;
    setCheckedItemSet: Dispatch<SetStateAction<Set<string>>>;
}
export declare function SheetTableItemsFilterPanel(props: ISheetTableItemsFilterPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
