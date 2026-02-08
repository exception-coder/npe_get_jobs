import { IFilterByValueWithTreeItem } from './sheets-filter-panel.service';
export declare function findObjectByKey(data: IFilterByValueWithTreeItem[], targetKey: string): IFilterByValueWithTreeItem | null;
export declare function areAllLeafNodesChecked(node: IFilterByValueWithTreeItem): boolean;
export declare function updateLeafNodesCheckedStatus(node: IFilterByValueWithTreeItem, status?: boolean): void;
export declare function searchTree(items: IFilterByValueWithTreeItem[], searchKeywords: string[]): IFilterByValueWithTreeItem[];
