import { IResources } from '../resource-manager/type';
export declare const IResourceLoaderService: import('@wendellhu/redi').IdentifierDecorator<IResourceLoaderService>;
export interface IResourceLoaderService {
    saveUnit<T = object>(unitId: string): T & {
        resources: IResources;
    } | null;
}
