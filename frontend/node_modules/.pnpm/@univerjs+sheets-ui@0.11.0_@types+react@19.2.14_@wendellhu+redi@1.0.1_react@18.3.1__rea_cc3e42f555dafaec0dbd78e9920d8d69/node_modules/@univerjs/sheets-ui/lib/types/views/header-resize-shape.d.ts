import { IShapeProps, UniverRenderingContext, Shape } from '@univerjs/engine-render';
export interface IHeaderMenuShapeResizeProps extends IShapeProps {
    size?: number;
    mode?: HEADER_RESIZE_SHAPE_TYPE;
    color?: string;
}
export declare enum HEADER_RESIZE_SHAPE_TYPE {
    VERTICAL = 0,
    HORIZONTAL = 1
}
export declare const HEADER_MENU_SHAPE_RECT_BACKGROUND_FILL = "rgba(120, 120, 120, 0.01)";
export declare const HEADER_MENU_SHAPE_RECT_FILL = "rgb(68, 71, 70)";
export declare const HEADER_MENU_SHAPE_SIZE = 12;
export declare const MAX_HEADER_MENU_SHAPE_SIZE = 44;
export declare const HEADER_MENU_SHAPE_THUMB_SIZE = 4;
export declare class HeaderMenuResizeShape<T extends IHeaderMenuShapeResizeProps = IHeaderMenuShapeResizeProps> extends Shape<T> {
    private _size;
    private _color;
    private _mode;
    constructor(key?: string, props?: T);
    get size(): number;
    get mode(): HEADER_RESIZE_SHAPE_TYPE;
    get color(): string;
    protected _draw(ctx: UniverRenderingContext): void;
    setShapeProps(props?: T): this;
}
