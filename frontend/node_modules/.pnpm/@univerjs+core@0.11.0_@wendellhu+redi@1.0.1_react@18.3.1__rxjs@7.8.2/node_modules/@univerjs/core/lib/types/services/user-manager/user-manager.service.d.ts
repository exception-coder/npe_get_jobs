import { Disposable } from '../../shared/lifecycle';
export interface IUser {
    userID: string;
    name: string;
    avatar?: string;
}
export declare class UserManagerService extends Disposable {
    private _model;
    private _userChange$;
    userChange$: import('rxjs').Observable<{
        type: "add" | "delete";
        user: IUser;
    } | {
        type: "clear";
    }>;
    private _currentUser$;
    /**
     * When the current user undergoes a switch or change
     * @memberof UserManagerService
     */
    currentUser$: import('rxjs').Observable<IUser>;
    dispose(): void;
    getCurrentUser<T extends IUser>(): T;
    setCurrentUser<T extends IUser>(user: T): void;
    addUser<T extends IUser>(user: T): void;
    getUser<T extends IUser>(userId: string, callBack?: () => void): T | undefined;
    delete(userId: string): void;
    clear(): void;
    list(): IUser[];
}
