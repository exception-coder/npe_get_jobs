import { IShapeProps, UniverRenderingContext, Shape } from '@univerjs/engine-render';
export interface IHeaderMenuShapeProps extends IShapeProps {
    size?: number;
    mode?: HEADER_MENU_SHAPE_TYPE;
    iconRatio?: number;
}
export declare enum HEADER_MENU_SHAPE_TYPE {
    NORMAL = 0,
    HIGHLIGHT = 1
}
export declare const HEADER_MENU_SHAPE_CIRCLE_FILL = "rgba(0, 0, 0, 0.15)";
export declare const HEADER_MENU_SHAPE_TRIANGLE_FILL = "rgb(0, 0, 0)";
export declare const HEADER_MENU_BACKGROUND_COLOR = "rgb(255, 255, 255, 1)";
export declare class HeaderMenuShape<T extends IHeaderMenuShapeProps = IHeaderMenuShapeProps> extends Shape<T> {
    private _size;
    private _iconRatio;
    private _mode;
    constructor(key?: string, props?: T);
    setShapeProps(props?: T): void;
    protected _draw(ctx: UniverRenderingContext): void;
}
