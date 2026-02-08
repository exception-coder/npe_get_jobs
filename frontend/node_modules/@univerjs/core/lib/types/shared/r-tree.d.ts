import { BBox, default as RBush } from 'rbush';
import { IUnitRange } from '../sheets/typedef';
type StringOrNumber = string | number;
export interface IRTreeItem extends IUnitRange {
    id: StringOrNumber;
}
interface IRBushItem extends BBox {
    id: StringOrNumber;
}
export interface IRTreeData {
    [unitId: string]: {
        [subUnitId: string]: IRTreeItem[];
    };
}
export declare class RTree {
    private _enableOneCellCache;
    private _tree;
    private _oneCellCache;
    private _kdTree;
    constructor(_enableOneCellCache?: boolean);
    dispose(): void;
    getTree(unitId: string, subUnitId: string): RBush<IRBushItem>;
    private _getOneCellCache;
    private _removeOneCellCache;
    private _removeCellCacheByRange;
    private _insertOneCellCache;
    private _getRdTreeItems;
    private _searchByOneCellCache;
    /**
     * Open the kd-tree search state.
     * The kd-tree is used to search for data in a single cell.
     */
    openKdTree(): void;
    closeKdTree(): void;
    insert(item: IRTreeItem): void;
    bulkInsert(items: IRTreeItem[]): void;
    searchGenerator(search: IUnitRange): IterableIterator<StringOrNumber>;
    bulkSearch(searchList: IUnitRange[], exceptTreeIds?: Set<number>): Set<StringOrNumber>;
    removeById(unitId: string, subUnitId?: string): void;
    private _removeRTreeItem;
    remove(search: IRTreeItem): void;
    bulkRemove(searchList: IRTreeItem[]): void;
    clear(): void;
    toJSON(): IRTreeData;
    fromJSON(data: IRTreeData): void;
}
export { type BBox, RBush };
