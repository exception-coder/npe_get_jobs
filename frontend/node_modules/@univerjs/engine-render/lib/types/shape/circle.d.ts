import { UniverRenderingContext } from '../context';
import { IShapeProps, Shape } from './shape';
import { ObjectType } from '../base-object';
export interface ICircleProps extends IShapeProps {
    radius: number;
}
export declare const CIRCLE_OBJECT_ARRAY: string[];
export declare class Circle extends Shape<ICircleProps> {
    private _radius;
    objectType: ObjectType;
    constructor(key?: string, props?: ICircleProps);
    get radius(): number;
    static drawWith(ctx: UniverRenderingContext, props: ICircleProps | Circle): void;
    toJson(): {
        [x: string]: any;
    };
    protected _draw(ctx: UniverRenderingContext): void;
    private _setFixBoundingBox;
}
