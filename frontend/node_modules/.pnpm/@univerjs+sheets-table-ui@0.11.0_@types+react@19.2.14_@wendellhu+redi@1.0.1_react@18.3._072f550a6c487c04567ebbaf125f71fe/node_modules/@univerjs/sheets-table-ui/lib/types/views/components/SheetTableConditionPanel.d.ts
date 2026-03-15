import { ITableFilterItem } from '@univerjs/sheets-table';
import { IConditionInfo } from './type';
interface IConditionFilterProps {
    unitId: string;
    subUnitId: string;
    tableFilter: ITableFilterItem | undefined;
    tableId: string;
    columnIndex: number;
    conditionInfo: IConditionInfo;
    onChange: (conditionInfo: IConditionInfo) => void;
}
export declare const SheetTableConditionPanel: (props: IConditionFilterProps) => import("react/jsx-runtime").JSX.Element;
export {};
