import { IActionInfo, IAllowedRequest, IBatchAllowedResponse, ICollaborator, ICreateRequest, IListPermPointRequest, IPermissionPoint, IPutCollaboratorsRequest, IUnitRoleKV, IUpdatePermPointRequest, UnitAction } from '@univerjs/protocol';
import { IResourceManagerService } from '../resource-manager/type';
import { UserManagerService } from '../user-manager/user-manager.service';
import { IAuthzIoService } from './type';
/**
 * Do not use the mock implementation in a production environment as it is a minimal version.
 */
export declare class AuthzIoLocalService implements IAuthzIoService {
    private _resourceManagerService;
    private _userManagerService;
    private _permissionMap;
    constructor(_resourceManagerService: IResourceManagerService, _userManagerService: UserManagerService);
    private _initDefaultUser;
    private _getRole;
    private _initSnapshot;
    create(config: ICreateRequest): Promise<string>;
    allowed(_config: IAllowedRequest): Promise<IActionInfo[]>;
    batchAllowed(_config: IAllowedRequest[]): Promise<IBatchAllowedResponse['objectActions']>;
    list(config: IListPermPointRequest): Promise<IPermissionPoint[]>;
    listCollaborators(): Promise<ICollaborator[]>;
    listRoles(): Promise<{
        roles: IUnitRoleKV[];
        actions: UnitAction[];
    }>;
    deleteCollaborator(): Promise<void>;
    update(config: IUpdatePermPointRequest): Promise<void>;
    updateCollaborator(): Promise<void>;
    createCollaborator(): Promise<void>;
    putCollaborators(config: IPutCollaboratorsRequest): Promise<void>;
}
