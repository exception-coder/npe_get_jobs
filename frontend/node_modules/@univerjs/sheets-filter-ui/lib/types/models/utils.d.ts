import { IFilterByValueWithTreeItem } from '../services/sheets-filter-panel.service';
export declare function statisticFilterByValueItems(items: IFilterByValueWithTreeItem[]): {
    checked: number;
    unchecked: number;
    checkedItems: IFilterByValueWithTreeItem[];
    uncheckedItems: IFilterByValueWithTreeItem[];
};
