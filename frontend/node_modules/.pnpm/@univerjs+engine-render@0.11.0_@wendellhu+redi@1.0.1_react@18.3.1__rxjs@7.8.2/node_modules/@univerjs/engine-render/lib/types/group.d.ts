import { CURSOR_TYPE, RENDER_CLASS_TYPE } from './basics/const';
import { IViewportInfo } from './basics/vector2';
import { UniverRenderingContext } from './context';
import { BaseObject } from './base-object';
export declare class Group extends BaseObject {
    private _objects;
    private _selfSizeMode;
    constructor(key?: string, ...objects: BaseObject[]);
    get classType(): RENDER_CLASS_TYPE;
    set cursor(val: CURSOR_TYPE);
    getState(): import('@univerjs/core').ITransformState | {
        left: number;
        top: number;
        width: number;
        height: number;
        angle: number;
        scaleX: number;
        scaleY: number;
    };
    get width(): number;
    get height(): number;
    set width(val: number);
    set height(val: number);
    get maxZIndex(): number;
    openSelfSizeMode(): void;
    closeSelfSizeMode(): void;
    reCalculateObjects(): void;
    addObjects(...objects: BaseObject[]): void;
    addObject(o: BaseObject | string): void;
    removeObject(object: BaseObject | string): void;
    removeSelfObjectAndTransform(oKey: string, width?: number, height?: number, isTransform?: boolean): void;
    private _transformObject;
    getObjectsByOrder(): BaseObject[];
    getObjects(): BaseObject[];
    render(ctx: UniverRenderingContext, bounds: IViewportInfo): void;
    private _clear;
    dispose(): void;
}
