import { ICollaborator } from '@univerjs/protocol';
export declare class SheetPermissionUserManagerService {
    private _userList;
    private _userList$;
    userList$: import('rxjs').Observable<ICollaborator[]>;
    private _oldCollaboratorList;
    private _selectUserList;
    private _selectUserList$;
    selectUserList$: import('rxjs').Observable<ICollaborator[]>;
    get userList(): ICollaborator[];
    setCanEditUserList(userList: ICollaborator[]): void;
    reset(): void;
    get oldCollaboratorList(): ICollaborator[];
    setOldCollaboratorList(userList: ICollaborator[]): void;
    get selectUserList(): ICollaborator[];
    setSelectUserList(userList: ICollaborator[]): void;
}
