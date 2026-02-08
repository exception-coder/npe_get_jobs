import { IKeyType, Nullable } from '../shared';
import { IStyleData } from '../types/interfaces';
import { ICellDataForSheetInterceptor } from './typedef';
/**
 * Styles in a workbook, cells locate styles based on style IDs
 *
 */
export declare class Styles {
    private _styles;
    private _cacheMap;
    constructor(styles?: IKeyType<Nullable<IStyleData>>);
    each(callback: (value: [string, Nullable<IStyleData>], index: number, array: Array<[string, Nullable<IStyleData>]>) => void): this;
    search(data: IStyleData, styleObject: string): string;
    get(id: string | Nullable<IStyleData>): Nullable<IStyleData>;
    add(data: IStyleData, styleObject: string): string;
    setValue(data: Nullable<IStyleData>): Nullable<string>;
    addCustomStyle(id: string, data: Nullable<IStyleData>): void;
    remove(id: string): void;
    toJSON(): IKeyType<Nullable<IStyleData>>;
    getStyleByCell(cell: Nullable<ICellDataForSheetInterceptor>): Nullable<IStyleData>;
    private _generateCacheMap;
    private _getExistingStyleId;
}
