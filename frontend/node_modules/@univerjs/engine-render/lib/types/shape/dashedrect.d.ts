import { IViewportInfo } from '../basics/vector2';
import { UniverRenderingContext } from '../context';
import { IRectProps, Rect } from './rect';
export declare class DashedRect extends Rect {
    static drawWith(ctx: UniverRenderingContext, props: IRectProps | Rect): void;
    protected _draw(ctx: UniverRenderingContext, viewportInfo?: IViewportInfo): void;
}
