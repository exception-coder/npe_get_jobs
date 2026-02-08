import { IDrawingParam, IDrawingSearch, Nullable } from '@univerjs/core';
import { JSONOp, JSONOpList } from 'ot-json1';
import { Observable } from 'rxjs';
import { IDrawingGroupUpdateParam, IDrawingMap, IDrawingMapItemData, IDrawingOrderMapParam, IDrawingOrderUpdateParam, IDrawingSubunitMap, IDrawingVisibleParam, IUnitDrawingService } from './drawing-manager.service';
export interface IDrawingJsonUndo1 {
    undo: JSONOp;
    redo: JSONOp;
    unitId: string;
    subUnitId: string;
    objects: IDrawingSearch[] | IDrawingOrderMapParam | IDrawingGroupUpdateParam | IDrawingGroupUpdateParam[];
}
export interface IDrawingJson1Type {
    op: JSONOp | JSONOpList;
    unitId: string;
    subUnitId: string;
    objects: IDrawingSearch[] | IDrawingOrderMapParam | IDrawingGroupUpdateParam | IDrawingGroupUpdateParam[];
}
/**
 * unitId -> subUnitId -> drawingId -> drawingParam
 */
export declare class UnitDrawingService<T extends IDrawingParam> implements IUnitDrawingService<T> {
    drawingManagerData: IDrawingMap<T>;
    private _oldDrawingManagerData;
    private _focusDrawings;
    private readonly _remove$;
    readonly remove$: Observable<IDrawingSearch[]>;
    private readonly _add$;
    readonly add$: Observable<IDrawingSearch[]>;
    private readonly _update$;
    readonly update$: Observable<IDrawingSearch[]>;
    private _order$;
    readonly order$: Observable<IDrawingOrderMapParam>;
    private _group$;
    readonly group$: Observable<IDrawingGroupUpdateParam[]>;
    private _ungroup$;
    readonly ungroup$: Observable<IDrawingGroupUpdateParam[]>;
    private _refreshTransform$;
    readonly refreshTransform$: Observable<T[]>;
    private _visible$;
    readonly visible$: Observable<IDrawingVisibleParam[]>;
    private _focus$;
    focus$: Observable<T[]>;
    private readonly _featurePluginUpdate$;
    readonly featurePluginUpdate$: Observable<T[]>;
    private readonly _featurePluginAdd$;
    readonly featurePluginAdd$: Observable<T[]>;
    private readonly _featurePluginRemove$;
    readonly featurePluginRemove$: Observable<IDrawingSearch[]>;
    private readonly _featurePluginOrderUpdate$;
    readonly featurePluginOrderUpdate$: Observable<IDrawingOrderUpdateParam>;
    private readonly _featurePluginGroupUpdate$;
    readonly featurePluginGroupUpdate$: Observable<IDrawingGroupUpdateParam[]>;
    private readonly _featurePluginUngroupUpdate$;
    readonly featurePluginUngroupUpdate$: Observable<IDrawingGroupUpdateParam[]>;
    private _visible;
    private _editable;
    dispose(): void;
    visibleNotification(visibleParams: IDrawingVisibleParam[]): void;
    refreshTransform(updateParams: T[]): void;
    getDrawingDataForUnit(unitId: string): IDrawingSubunitMap<T>;
    removeDrawingDataForUnit(unitId: string): void;
    registerDrawingData(unitId: string, data: IDrawingSubunitMap<T>): void;
    initializeNotification(unitId: string): void;
    getDrawingData(unitId: string, subUnitId: string): IDrawingMapItemData<T>;
    setDrawingData(unitId: string, subUnitId: string, data: IDrawingMapItemData<T>): void;
    getBatchAddOp(insertParams: T[]): IDrawingJsonUndo1;
    getBatchRemoveOp(removeParams: IDrawingSearch[]): IDrawingJsonUndo1;
    getBatchUpdateOp(updateParams: T[]): IDrawingJsonUndo1;
    removeNotification(removeParams: IDrawingSearch[]): void;
    addNotification(insertParams: IDrawingSearch[]): void;
    updateNotification(updateParams: IDrawingSearch[]): void;
    orderNotification(orderParams: IDrawingOrderMapParam): void;
    groupUpdateNotification(groupParams: IDrawingGroupUpdateParam[]): void;
    ungroupUpdateNotification(groupParams: IDrawingGroupUpdateParam[]): void;
    refreshTransformNotification(refreshParams: T[]): void;
    getGroupDrawingOp(groupParams: IDrawingGroupUpdateParam[]): IDrawingJsonUndo1;
    getUngroupDrawingOp(groupParams: IDrawingGroupUpdateParam[]): IDrawingJsonUndo1;
    getDrawingsByGroup(groupParam: IDrawingSearch): IDrawingParam[];
    private _getGroupDrawingOp;
    private _getUngroupDrawingOp;
    applyJson1(unitId: string, subUnitId: string, jsonOp: JSONOp): void;
    featurePluginUpdateNotification(updateParams: T[]): void;
    featurePluginOrderUpdateNotification(drawingOrderUpdateParam: IDrawingOrderUpdateParam): void;
    featurePluginAddNotification(insertParams: T[]): void;
    featurePluginRemoveNotification(removeParams: IDrawingSearch[]): void;
    featurePluginGroupUpdateNotification(groupParams: IDrawingGroupUpdateParam[]): void;
    featurePluginUngroupUpdateNotification(groupParams: IDrawingGroupUpdateParam[]): void;
    getDrawingByParam(param: Nullable<IDrawingSearch>): Nullable<T>;
    getOldDrawingByParam(param: Nullable<IDrawingSearch>): Nullable<T>;
    getDrawingOKey(oKey: string): Nullable<T>;
    focusDrawing(params: Nullable<IDrawingSearch[]>): void;
    getFocusDrawings(): T[];
    getDrawingOrder(unitId: string, subUnitId: string): string[];
    setDrawingOrder(unitId: string, subUnitId: string, order: string[]): void;
    orderUpdateNotification(orderParams: IDrawingOrderMapParam): void;
    getForwardDrawingsOp(orderParams: IDrawingOrderMapParam): IDrawingJsonUndo1;
    getBackwardDrawingOp(orderParams: IDrawingOrderMapParam): IDrawingJsonUndo1;
    getFrontDrawingsOp(orderParams: IDrawingOrderMapParam): IDrawingJsonUndo1;
    getBackDrawingsOp(orderParams: IDrawingOrderMapParam): IDrawingJsonUndo1;
    private _getDrawingCount;
    private _getOrderFromSearchParams;
    private _hasDrawingOrder;
    private _getCurrentBySearch;
    private _getOldBySearch;
    private _establishDrawingMap;
    private _addByParam;
    private _removeByParam;
    private _updateByParam;
    private _getUpdateParamCompareOp;
    private _getDrawingData;
    private _getDrawingOrder;
    getDrawingVisible(): boolean;
    getDrawingEditable(): boolean;
    setDrawingVisible(visible: boolean): void;
    setDrawingEditable(editable: boolean): void;
}
export declare class DrawingManagerService extends UnitDrawingService<IDrawingParam> {
}
