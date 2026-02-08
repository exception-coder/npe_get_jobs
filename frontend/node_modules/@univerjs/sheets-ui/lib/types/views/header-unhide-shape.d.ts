import { IShapeProps, UniverRenderingContext, Shape } from '@univerjs/engine-render';
export declare enum HeaderUnhideShapeType {
    ROW = 0,
    COLUMN = 1
}
export interface IHeaderUnhideShapeProps extends IShapeProps {
    /** On row headers or on column headers. */
    type: HeaderUnhideShapeType;
    /** If the shape is hovered. If it's hovered it should have a border. */
    hovered: boolean;
    /** This hidden position has previous rows/cols. */
    hasPrevious: boolean;
    /** This hidden position has succeeding rows/cols. */
    hasNext: boolean;
}
export declare const UNHIDE_ICON_SIZE = 12;
export declare class HeaderUnhideShape<T extends IHeaderUnhideShapeProps = IHeaderUnhideShapeProps> extends Shape<T> {
    private _size;
    private _iconRatio;
    private _hovered;
    private _hasPrevious;
    private _hasNext;
    private _unhideType;
    constructor(key?: string, props?: T, onClick?: () => void);
    setShapeProps(props: Partial<IHeaderUnhideShapeProps>): void;
    protected _draw(ctx: UniverRenderingContext): void;
    private _drawOnRow;
    /**
     *
     * @param ctx
     */
    private _drawOnCol;
}
