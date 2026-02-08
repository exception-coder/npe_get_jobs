import { IDisposable, Nullable, Disposable, ICommandService, Injector } from '@univerjs/core';
import { FilterColumn, FilterModel, FilterBy } from '@univerjs/sheets-filter';
import { Observable } from 'rxjs';
import { FilterOperator, IFilterConditionFormParams, IFilterConditionItem } from '../models/conditions';
import { RefRangeService } from '@univerjs/sheets';
export interface IFilterByValueItem {
    value: string;
    checked: boolean;
    count: number;
    index: number;
    /**
     * This property indicates that this is a special item which maps to empty strings or empty cells.
     */
    isEmpty: boolean;
}
export interface IFilterByValueWithTreeItem {
    title: string;
    key: string;
    count: number;
    checked: boolean;
    leaf: boolean;
    originValues?: Set<string>;
    children?: IFilterByValueWithTreeItem[];
}
export interface IFilterByColorItem {
    color: string | null;
    checked?: boolean;
}
export interface ISheetsFilterPanelService {
    /**
     * Set up the panel to change the filter condition on a specific column.
     * @param filterModel the filter model we will be working on
     * @param col
     * @returns if the filter condition is set up successfully
     */
    setUpFilterConditionOfCol(filterModel: FilterModel, col: number): boolean;
    /**
     * Terminate the filter panel without applying changes.
     */
    terminate(): boolean;
}
export declare const ISheetsFilterPanelService: import('@wendellhu/redi').IdentifierDecorator<ISheetsFilterPanelService>;
export interface IFilterByModel extends IDisposable {
    canApply$: Observable<boolean>;
    deltaCol(offset: number): void;
    clear(): Promise<boolean>;
    apply(): Promise<boolean>;
}
/**
 * This service controls the state of the filter panel. There should be only one instance of the filter panel
 * at one time.
 */
export declare class SheetsFilterPanelService extends Disposable {
    private readonly _injector;
    private readonly _refRangeService;
    private readonly _filterBy$;
    readonly filterBy$: Observable<FilterBy>;
    get filterBy(): FilterBy;
    private readonly _filterByModel$;
    readonly filterByModel$: Observable<Nullable<IFilterByModel>>;
    private _filterByModel;
    get filterByModel(): Nullable<IFilterByModel>;
    private set filterByModel(value);
    private readonly _hasCriteria$;
    readonly hasCriteria$: Observable<boolean>;
    private _filterModel;
    get filterModel(): Nullable<FilterModel>;
    private readonly _col$;
    readonly col$: Observable<number>;
    get col(): number;
    constructor(_injector: Injector, _refRangeService: RefRangeService);
    dispose(): void;
    setupCol(filterModel: FilterModel, col: number): void;
    changeFilterBy(filterBy: FilterBy): boolean;
    terminate(): boolean;
    private _filterHeaderListener;
    private _disposeFilterHeaderChangeListener;
    private _listenToFilterHeaderChange;
    private _setupByValues;
    private _setupByColors;
    private _setupByConditions;
    private _disposePreviousModel;
}
/**
 * This model would be used to control the "Filter By Conditions" panel. It should be reconstructed in the following
 * situations:
 *
 * 1. The target `FilterColumn` object is changed
 * 2. User toggles "Filter By"
 */
export declare class ByConditionsModel extends Disposable implements IFilterByModel {
    private readonly _filterModel;
    col: number;
    private readonly _commandService;
    /**
     * Create a model with targeting filter column. If there is not a filter column, the model would be created with
     * default values.
     *
     * @param injector
     * @param filterModel
     * @param col
     * @param filterColumn
     *
     * @returns the model to control the panel's state
     */
    static fromFilterColumn(injector: Injector, filterModel: FilterModel, col: number, filterColumn?: Nullable<FilterColumn>): ByConditionsModel;
    canApply$: Observable<boolean>;
    private readonly _conditionItem$;
    readonly conditionItem$: Observable<IFilterConditionItem>;
    get conditionItem(): IFilterConditionItem;
    private readonly _filterConditionFormParams$;
    readonly filterConditionFormParams$: Observable<IFilterConditionFormParams>;
    get filterConditionFormParams(): IFilterConditionFormParams;
    constructor(_filterModel: FilterModel, col: number, conditionItem: IFilterConditionItem, conditionParams: IFilterConditionFormParams, _commandService: ICommandService);
    dispose(): void;
    deltaCol(offset: number): void;
    clear(): Promise<boolean>;
    /**
     * Apply the filter condition to the target filter column.
     */
    apply(): Promise<boolean>;
    /**
     * This method would be called when user changes the primary condition. The model would load the corresponding
     * `IFilterConditionFormParams` and load default condition form params.
     */
    onPrimaryConditionChange(operator: FilterOperator): void;
    /**
     * This method would be called when user changes the primary conditions, the input values or "AND" "OR" ratio.
     * If the primary conditions or the ratio is changed, the method would load the corresponding `IFilterCondition`.
     *
     * When the panel call this method, it only has to pass the changed keys.
     *
     * @param params
     */
    onConditionFormChange(params: Partial<Omit<IFilterConditionFormParams, 'and'> & {
        and: boolean;
    }>): void;
}
/**
 * This model would be used to control the "Filter By Values" panel. It should be reconstructed in the following
 * situations:
 *
 * 1. The target `FilterColumn` object is changed
 * 2. User toggles "Filter By"
 */
export declare class ByValuesModel extends Disposable implements IFilterByModel {
    private readonly _filterModel;
    col: number;
    private readonly _commandService;
    /**
     * Create a model with targeting filter column. If there is not a filter column, the model would be created with
     * default values.
     *
     * @param injector
     * @param filterModel
     * @param col
     *
     * @returns the model to control the panel's state
     */
    static fromFilterColumn(injector: Injector, filterModel: FilterModel, col: number): Promise<ByValuesModel>;
    private readonly _rawFilterItems$;
    readonly rawFilterItems$: Observable<IFilterByValueWithTreeItem[]>;
    get rawFilterItems(): IFilterByValueWithTreeItem[];
    readonly filterItems$: Observable<IFilterByValueWithTreeItem[]>;
    private _filterItems;
    get filterItems(): IFilterByValueWithTreeItem[];
    private _treeMapCache;
    get treeMapCache(): Map<string, string[]>;
    readonly canApply$: Observable<boolean>;
    private readonly _manuallyUpdateFilterItems$;
    private readonly _searchString$;
    readonly searchString$: Observable<string>;
    constructor(_filterModel: FilterModel, col: number, 
    /**
     * Filter items would remain unchanged after we create them,
     * though data may change after.
     */
    items: IFilterByValueWithTreeItem[], cache: Map<string, string[]>, _commandService: ICommandService);
    dispose(): void;
    deltaCol(offset: number): void;
    setSearchString(str: string): void;
    onCheckAllToggled(checked: boolean): void;
    /**
     * Toggle a filter item.
     */
    onFilterCheckToggled(item: IFilterByValueWithTreeItem): void;
    onFilterOnly(itemKeys: string[]): void;
    private _manuallyUpdateFilterItems;
    clear(): Promise<boolean>;
    /**
     * Apply the filter condition to the target filter column.
     */
    apply(): Promise<boolean>;
}
/**
 * This model would be used to control the "Filter By Colors" panel. It should be reconstructed in the following
 * situations:
 *
 * 1. The target `FilterColumn` object is changed
 * 2. User toggles "Filter By"
 */
export declare class ByColorsModel extends Disposable implements IFilterByModel {
    private readonly _filterModel;
    col: number;
    private readonly _commandService;
    /**
     * Create a model with targeting filter column. If there is not a filter column, the model would be created with
     * default values.
     *
     * @param injector
     * @param filterModel
     * @param col
     *
     * @returns the model to control the panel's state
     */
    static fromFilterColumn(injector: Injector, filterModel: FilterModel, col: number): Promise<ByColorsModel>;
    canApply$: Observable<boolean>;
    private readonly _cellFillColors$;
    readonly cellFillColors$: Observable<IFilterByColorItem[]>;
    get cellFillColors(): IFilterByColorItem[];
    private readonly _cellTextColors$;
    readonly cellTextColors$: Observable<IFilterByColorItem[]>;
    get cellTextColors(): IFilterByColorItem[];
    constructor(_filterModel: FilterModel, col: number, 
    /**
     * Filter items would remain unchanged after we create them,
     * though data may change after.
     */
    cellFillColors: Map<string, IFilterByColorItem>, cellTextColors: Map<string, IFilterByColorItem>, _commandService: ICommandService);
    dispose(): void;
    deltaCol(offset: number): void;
    clear(): Promise<boolean>;
    onFilterCheckToggled(item: IFilterByColorItem, isFillColor?: boolean): void;
    private _resetColorsCheckedStatus;
    /**
     * Apply the filter condition to the target filter column.
     */
    apply(): Promise<boolean>;
}
