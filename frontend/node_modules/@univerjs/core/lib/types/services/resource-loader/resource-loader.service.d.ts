import { IResourceLoaderService } from './type';
import { Disposable } from '../../shared/lifecycle';
import { IUniverInstanceService } from '../instance/instance.service';
import { IResourceManagerService } from '../resource-manager/type';
export declare class ResourceLoaderService extends Disposable implements IResourceLoaderService {
    private readonly _resourceManagerService;
    private readonly _univerInstanceService;
    constructor(_resourceManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService);
    private _init;
    saveUnit<T = object>(unitId: string): ({
        resources: import('../..').IResources;
    } & T) | null;
}
