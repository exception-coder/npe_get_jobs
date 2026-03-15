import { Observable, BehaviorSubject } from 'rxjs';
import { IPermissionPoint, IPermissionService } from './type';
import { Disposable } from '../../shared';
export declare class PermissionService extends Disposable implements IPermissionService {
    private _permissionPointMap;
    private _permissionPointUpdate$;
    permissionPointUpdate$: Observable<IPermissionPoint<unknown>>;
    private _showComponents;
    setShowComponents(showComponents: boolean): void;
    getShowComponents(): boolean;
    deletePermissionPoint(permissionId: string): void;
    addPermissionPoint<T = boolean>(_item: IPermissionPoint<T> | BehaviorSubject<IPermissionPoint<T>>): boolean;
    updatePermissionPoint<T = boolean>(permissionId: string, value: T): void;
    clearPermissionMap(): void;
    getPermissionPoint<T = boolean>(permissionId: string): IPermissionPoint<T> | undefined;
    getPermissionPoint$<T = boolean>(permissionId: string): Observable<IPermissionPoint<T>> | undefined;
    composePermission$(permissionIdList: string[]): Observable<IPermissionPoint<any>[]>;
    composePermission(permissionIdList: string[]): IPermissionPoint<any>[];
    getAllPermissionPoint(): Map<string, BehaviorSubject<IPermissionPoint<unknown>>>;
}
