import { IAllowedRequest, IAllowedResponse, IBatchAllowedResponse, ICreateCollaboratorRequest, ICreateRequest, ICreateResponse, IDeleteCollaboratorRequest, IListCollaboratorRequest, IListCollaboratorResponse, IListPermPointRequest, IListPermPointResponse, IListRolesRequest, IListRolesResponse, IPutCollaboratorsRequest, IUpdateCollaboratorRequest, IUpdatePermPointRequest } from '@univerjs/protocol';
import { ILogContext } from '../log/context';
export interface IAuthzIoService {
    create(config: ICreateRequest, context?: ILogContext): Promise<ICreateResponse['objectID']>;
    allowed(config: IAllowedRequest, context?: ILogContext): Promise<IAllowedResponse['actions']>;
    batchAllowed(config: IAllowedRequest[], context?: ILogContext): Promise<IBatchAllowedResponse['objectActions']>;
    list(config: IListPermPointRequest, context?: ILogContext): Promise<IListPermPointResponse['objects']>;
    listRoles(config: IListRolesRequest, context?: ILogContext): Promise<{
        roles: IListRolesResponse['roles'];
        actions: IListRolesResponse['actions'];
    }>;
    update(config: IUpdatePermPointRequest, context?: ILogContext): Promise<void>;
    listCollaborators(config: IListCollaboratorRequest, context?: ILogContext): Promise<IListCollaboratorResponse['collaborators']>;
    updateCollaborator(config: IUpdateCollaboratorRequest, context?: ILogContext): Promise<void>;
    deleteCollaborator(config: IDeleteCollaboratorRequest, context?: ILogContext): Promise<void>;
    createCollaborator(config: ICreateCollaboratorRequest, context?: ILogContext): Promise<void>;
    putCollaborators(config: IPutCollaboratorsRequest, context?: ILogContext): Promise<void>;
}
export declare const IAuthzIoService: import('@wendellhu/redi').IdentifierDecorator<IAuthzIoService>;
