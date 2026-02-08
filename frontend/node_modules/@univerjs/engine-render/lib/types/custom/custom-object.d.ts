import { IViewportInfo, Vector2 } from '../basics/vector2';
import { UniverRenderingContext } from '../context';
import { BaseObject } from '../base-object';
export declare class CustomObject extends BaseObject {
    private _render;
    private _isHitCustom?;
    constructor(key?: string, _render?: (mainCtx: UniverRenderingContext) => void, _isHitCustom?: ((coord: Vector2) => boolean) | undefined);
    toJson(): {
        [key: string]: any;
    };
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    isHit(coord: Vector2): boolean;
}
