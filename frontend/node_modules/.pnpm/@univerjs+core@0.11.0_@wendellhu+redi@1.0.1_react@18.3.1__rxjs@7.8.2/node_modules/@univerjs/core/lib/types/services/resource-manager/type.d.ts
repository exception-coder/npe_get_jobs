import { Observable } from 'rxjs';
import { IDisposable } from '../../common/di';
import { UniverInstanceType } from '../../common/unit';
export type IResources = Array<{
    id?: string;
    name: string;
    data: string;
}>;
type IBusinessName = 'SHEET' | 'DOC';
export type IResourceName = `${IBusinessName}_${string}_PLUGIN`;
export interface IResourceHook<T = any> {
    pluginName: IResourceName;
    businesses: UniverInstanceType[];
    onLoad: (unitID: string, resource: T) => void;
    onUnLoad: (unitID: string) => void;
    toJson: (unitID: string, model?: T) => string;
    parseJson: (bytes: string) => T;
}
export interface IResourceManagerService {
    register$: Observable<IResourceHook>;
    registerPluginResource: <T = any>(hook: IResourceHook<T>) => IDisposable;
    disposePluginResource: (pluginName: IResourceName) => void;
    getAllResourceHooks: () => IResourceHook[];
    /**
     * @deprecated You should get resource with type specified.
     */
    getResources(unitId: string): IResources;
    getResources(unitId: string, type: UniverInstanceType): IResources;
    getResourcesByType: (unitId: string, type: UniverInstanceType) => IResources;
    loadResources: (unitId: string, resources?: IResources) => void;
    unloadResources(unitId: string, type: UniverInstanceType): void;
}
export declare const IResourceManagerService: import('@wendellhu/redi').IdentifierDecorator<IResourceManagerService>;
export {};
