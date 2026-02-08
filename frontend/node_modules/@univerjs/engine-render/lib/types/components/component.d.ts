import { IDisposable } from '@univerjs/core';
import { IViewportInfo } from '../basics/vector2';
import { UniverRenderingContext } from '../context';
import { ComponentExtension } from './extension';
import { BaseObject } from '../base-object';
export declare class RenderComponent<T, U, V> extends BaseObject {
    private _extensions;
    get extensions(): Map<string, ComponentExtension<T, U, V>>;
    register(...extensions: Array<ComponentExtension<T, U, V>>): IDisposable;
    getExtensionsByOrder(): ComponentExtension<T, U, V>[];
    getExtensionByKey(uKey: string): ComponentExtension<T, U, V> | undefined;
    draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
    dispose(): void;
}
