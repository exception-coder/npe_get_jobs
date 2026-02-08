import { UniverInstanceType } from '../../common/unit';
import { IResources } from '../resource-manager/type';
import { IResourceHook, IResourceManagerService, IResourceName } from './type';
import { Disposable } from '../../shared/lifecycle';
import { ILogService } from '../log/log.service';
export declare class ResourceManagerService extends Disposable implements IResourceManagerService {
    private readonly _logService;
    private _resourceMap;
    private readonly _register$;
    readonly register$: import('rxjs').Observable<IResourceHook<any>>;
    constructor(_logService: ILogService);
    getAllResourceHooks(): IResourceHook<any>[];
    getResources(unitId: string): IResources;
    getResources(unitId: string, type: UniverInstanceType): IResources;
    getResourcesByType(unitId: string, type: UniverInstanceType): {
        name: `SHEET_${string}_PLUGIN` | `DOC_${string}_PLUGIN`;
        data: string;
    }[];
    registerPluginResource<T = unknown>(hook: IResourceHook<T>): import('@wendellhu/redi').IDisposable;
    disposePluginResource(pluginName: IResourceName): void;
    loadResources(unitId: string, resources?: IResources): void;
    unloadResources(unitId: string, type: UniverInstanceType): void;
    dispose(): void;
}
