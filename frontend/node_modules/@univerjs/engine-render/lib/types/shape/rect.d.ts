import { Nullable } from '@univerjs/core';
import { UniverRenderingContext } from '../context';
import { IShapeProps, Shape } from './shape';
import { ObjectType } from '../base-object';
export interface IRectProps extends IShapeProps {
    radius?: number;
    visualHeight?: number;
    visualWidth?: number;
}
export declare const RECT_OBJECT_ARRAY: string[];
export declare class Rect<T extends IRectProps = IRectProps> extends Shape<T> {
    objectType: ObjectType;
    private _radius;
    private _opacity;
    /**
     * For rendering, in many case object size is bigger than visual size for better user interaction.
     */
    private _visualHeight;
    private _visualWidth;
    constructor(key?: string, props?: T);
    get visualHeight(): Nullable<number>;
    get visualWidth(): Nullable<number>;
    get radius(): number;
    get opacity(): number;
    setObjectType(type: ObjectType): void;
    setOpacity(opacity: number): void;
    static drawWith(ctx: UniverRenderingContext, props: IRectProps): void;
    toJson(): {
        [x: string]: any;
    };
    protected _draw(ctx: UniverRenderingContext): void;
}
