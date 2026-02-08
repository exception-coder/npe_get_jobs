import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Observable } from 'rxjs';
import { Nullable } from '../../shared/types';
import { IRange } from '../../sheets/typedef';
export declare enum PermissionStatus {
    INIT = "init",
    FETCHING = "fetching",
    DONE = "done"
}
export type WorkbookPermissionPointConstructor = new (unitId: string) => IPermissionPoint;
export type WorkSheetPermissionPointConstructor = new (unitId: string, subUnitId: string) => IPermissionPoint;
export type RangePermissionPointConstructor = new (unitId: string, subUnitId: string, permissionId: string) => IPermissionPoint;
export interface IPermissionTypes {
    rangeTypes?: RangePermissionPointConstructor[];
    worksheetTypes?: WorkSheetPermissionPointConstructor[];
    workbookTypes?: WorkbookPermissionPointConstructor[];
}
export interface IPermissionPoint<V = boolean> {
    type: UnitObject;
    id: string;
    status: PermissionStatus;
    subType: UnitAction;
    value: V;
}
export interface IPermissionParam {
    unitId: string;
    subUnitId: string;
    range?: IRange;
}
export interface IPermissionService {
    permissionPointUpdate$: Observable<IPermissionPoint<unknown>>;
    deletePermissionPoint(permissionId: string): void;
    addPermissionPoint<T = boolean>(permissionPoint: IPermissionPoint<T> | BehaviorSubject<IPermissionPoint<T>>): boolean;
    updatePermissionPoint<T = boolean>(permissionId: string, value: T): void;
    getPermissionPoint<T = boolean>(permissionId: string): Nullable<IPermissionPoint<T>>;
    getPermissionPoint$<T = boolean>(permissionId: string): Nullable<Observable<IPermissionPoint<T>>>;
    clearPermissionMap(): void;
    composePermission$(permissionId: string[]): Observable<IPermissionPoint<unknown>[]>;
    composePermission(permissionId: string[]): IPermissionPoint<unknown>[];
    getAllPermissionPoint(): Map<string, Observable<IPermissionPoint<unknown>>>;
    getShowComponents(): boolean;
    setShowComponents(showComponents: boolean): void;
}
export declare const IPermissionService: import('@wendellhu/redi').IdentifierDecorator<IPermissionService>;
