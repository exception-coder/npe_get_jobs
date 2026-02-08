import { Observable } from 'rxjs';
import { IDisposable, Injector } from '../../common/di';
import { UnitModel, UnitType, UniverInstanceType } from '../../common/unit';
import { Nullable } from '../../shared';
import { DocumentDataModel } from '../../docs/data-model/document-data-model';
import { Disposable } from '../../shared/lifecycle';
import { Workbook } from '../../sheets/workbook';
import { IContextService } from '../context/context.service';
export type UnitCtor = new (...args: any[]) => UnitModel;
export interface ICreateUnitOptions {
    /**
     * If Univer should make the new unit as current of its type.
     *
     * @default true
     */
    makeCurrent?: boolean;
}
/**
 * IUniverInstanceService holds all the current univer instances and provides a set of
 * methods to add and remove univer instances.
 *
 * It also manages the focused univer instance.
 */
export interface IUniverInstanceService {
    /** Omits value when a new UnitModel is created. */
    unitAdded$: Observable<UnitModel>;
    /** Subscribe to curtain type of units' creation. */
    getTypeOfUnitAdded$<T extends UnitModel>(type: UnitType): Observable<T>;
    /** @ignore */
    __addUnit(unit: UnitModel): void;
    /** Omits value when a UnitModel is disposed. */
    unitDisposed$: Observable<UnitModel>;
    /** Subscribe to curtain type of units' disposing. */
    getTypeOfUnitDisposed$<T extends UnitModel>(type: UnitType): Observable<T>;
    /**
     * An observable value that emits the id of the focused unit. A Univer app instance
     * can only have 1 focused unit.
     *
     * You can use `getFocusedUnit` to get the currently focused unit, and
     * `focusUnit` to focus a unit.
     */
    focused$: Observable<Nullable<string>>;
    /** Focus a unit. */
    focusUnit(unitId: string | null): void;
    /** Get the currently focused unit. */
    getFocusedUnit(): Nullable<UnitModel>;
    /** @deprecated Use `getCurrentUnitOfType` instead. */
    getCurrentUnitForType<T extends UnitModel>(type: UnitType): Nullable<T>;
    getCurrentUnitOfType<T extends UnitModel>(type: UnitType): Nullable<T>;
    setCurrentUnitForType(unitId: string): void;
    getCurrentTypeOfUnit$<T extends UnitModel>(type: UnitType): Observable<Nullable<T>>;
    /** Create a unit with snapshot info. */
    createUnit<T, U extends UnitModel>(type: UnitType, data: Partial<T>, options?: ICreateUnitOptions): U;
    /** Dispose a unit  */
    disposeUnit(unitId: string): boolean;
    registerCtorForType<T extends UnitModel>(type: UnitType, ctor: new (...args: any[]) => T): IDisposable;
    /** @deprecated */
    changeDoc(unitId: string, doc: DocumentDataModel): void;
    getUnit<T extends UnitModel>(id: string, type?: UnitType): Nullable<T>;
    getAllUnitsForType<T>(type: UnitType): T[];
    getUnitType(unitId: string): UnitType;
    /** @deprecated */
    getUniverSheetInstance(unitId: string): Nullable<Workbook>;
    /** @deprecated */
    getUniverDocInstance(unitId: string): Nullable<DocumentDataModel>;
    /** @deprecated */
    getCurrentUniverDocInstance(): Nullable<DocumentDataModel>;
}
export declare const IUniverInstanceService: import('@wendellhu/redi').IdentifierDecorator<IUniverInstanceService>;
export declare class UniverInstanceService extends Disposable implements IUniverInstanceService {
    private readonly _injector;
    private readonly _contextService;
    private readonly _unitsByType;
    constructor(_injector: Injector, _contextService: IContextService);
    dispose(): void;
    private _createHandler;
    __setCreateHandler(handler: (type: UnitType, data: unknown, ctor: UnitCtor, options?: ICreateUnitOptions) => UnitModel): void;
    createUnit<T, U extends UnitModel>(type: UnitType, data: T, options?: ICreateUnitOptions): U;
    private readonly _ctorByType;
    registerCtorForType<T extends UnitModel>(type: UnitType, ctor: new () => T): IDisposable;
    private _currentUnits;
    private readonly _currentUnits$;
    readonly currentUnits$: Observable<Map<number, Nullable<UnitModel<object, number>>>>;
    getCurrentTypeOfUnit$<T>(type: number): Observable<Nullable<T>>;
    getCurrentUnitForType<T extends UnitModel>(type: UnitType): Nullable<T>;
    getCurrentUnitOfType<T extends UnitModel>(type: UnitType): Nullable<T>;
    setCurrentUnitForType(unitId: string): void;
    private readonly _unitAdded$;
    readonly unitAdded$: Observable<UnitModel<object, number>>;
    getTypeOfUnitAdded$<T extends UnitModel<object, number>>(type: UnitType): Observable<T>;
    /**
     * Add a unit into Univer.
     *
     * @ignore
     *
     * @param unit The unit to be added.
     */
    __addUnit(unit: UnitModel, options?: ICreateUnitOptions): void;
    private _unitDisposed$;
    readonly unitDisposed$: Observable<UnitModel<object, number>>;
    getTypeOfUnitDisposed$<T extends UnitModel<object, number>>(type: UniverInstanceType): Observable<T>;
    getUnit<T extends UnitModel = UnitModel>(id: string, type?: UnitType): Nullable<T>;
    getCurrentUniverDocInstance(): Nullable<DocumentDataModel>;
    getUniverDocInstance(unitId: string): Nullable<DocumentDataModel>;
    getUniverSheetInstance(unitId: string): Nullable<Workbook>;
    getAllUnitsForType<T>(type: UnitType): T[];
    changeDoc(unitId: string, doc: DocumentDataModel): void;
    private readonly _focused$;
    readonly focused$: Observable<Nullable<string>>;
    get focused(): Nullable<UnitModel>;
    focusUnit(id: string | null): void;
    getFocusedUnit(): Nullable<UnitModel>;
    getUnitType(unitId: string): UniverInstanceType;
    disposeUnit(unitId: string): boolean;
    private _tryResetCurrentOnRemoval;
    private _tryResetFocusOnRemoval;
    private _getUnitById;
}
