import { IUnitRange, Nullable, Worksheet, Disposable, IUniverInstanceService } from '@univerjs/core';
import { Observable } from 'rxjs';
export interface IDefinedNamesServiceParam {
    id: string;
    name: string;
    formulaOrRefString: string;
    comment?: string;
    localSheetId?: string;
    hidden?: boolean;
}
export interface IDefinedNamesServiceFocusParam extends IDefinedNamesServiceParam {
    unitId: string;
}
export interface IDefinedNameMap {
    [unitId: string]: IDefinedNameMapItem;
}
export interface IDefinedNameMapItem {
    [id: string]: IDefinedNamesServiceParam;
}
export interface IDefinedNamesService {
    registerDefinedName(unitId: string, param: IDefinedNamesServiceParam): void;
    registerDefinedNames(unitId: string, params: IDefinedNameMapItem): void;
    getDefinedNameMap(unitId: string): Nullable<IDefinedNameMapItem>;
    getValueByName(unitId: string, name: string): Nullable<IDefinedNamesServiceParam>;
    getValueById(unitId: string, id: string): Nullable<IDefinedNamesServiceParam>;
    removeDefinedName(unitId: string, name: string): void;
    removeUnitDefinedName(unitId: string): void;
    hasDefinedName(unitId: string): boolean;
    setCurrentRange(range: IUnitRange): void;
    getCurrentRange(): IUnitRange;
    getCurrentRangeForString(): string;
    currentRange$: Observable<IUnitRange>;
    update$: Observable<unknown>;
    focusRange$: Observable<IDefinedNamesServiceFocusParam>;
    focusRange(unitId: string, id: string): void;
    getWorksheetByRef(unitId: string, ref: string): Nullable<Worksheet>;
}
export declare class DefinedNamesService extends Disposable implements IDefinedNamesService {
    private readonly _univerInstanceService;
    private _definedNameMap;
    private _nameCacheMap;
    private readonly _update$;
    readonly update$: Observable<unknown>;
    private _currentRange;
    private readonly _currentRange$;
    readonly currentRange$: Observable<IUnitRange>;
    private readonly _focusRange$;
    readonly focusRange$: Observable<IDefinedNamesServiceFocusParam>;
    constructor(_univerInstanceService: IUniverInstanceService);
    dispose(): void;
    getWorksheetByRef(unitId: string, ref: string): Nullable<Worksheet>;
    focusRange(unitId: string, id: string): void;
    setCurrentRange(range: IUnitRange): void;
    getCurrentRange(): IUnitRange;
    getCurrentRangeForString(): string;
    registerDefinedNames(unitId: string, params: IDefinedNameMapItem): void;
    registerDefinedName(unitId: string, param: IDefinedNamesServiceParam): void;
    removeDefinedName(unitId: string, id: string): void;
    removeUnitDefinedName(unitId: string): void;
    getDefinedNameMap(unitId: string): IDefinedNameMapItem;
    getValueByName(unitId: string, name: string): IDefinedNamesServiceParam | null;
    getValueById(unitId: string, id: string): IDefinedNamesServiceParam;
    hasDefinedName(unitId: string): boolean;
    private _update;
    private _updateCache;
}
export declare const IDefinedNamesService: import('@wendellhu/redi').IdentifierDecorator<DefinedNamesService>;
