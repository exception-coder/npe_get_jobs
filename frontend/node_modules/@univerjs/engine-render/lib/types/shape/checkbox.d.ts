import { UniverRenderingContext } from '../context';
import { IShapeProps, Shape } from './shape';
export interface ICheckboxShapeProps extends IShapeProps {
    checked?: boolean;
}
export declare const CHECK_OBJECT_ARRAY: string[];
export declare class CheckboxShape extends Shape<ICheckboxShapeProps> {
    _checked: boolean;
    constructor(key: string, props: ICheckboxShapeProps);
    get checked(): boolean;
    static drawWith(ctx: UniverRenderingContext, props: ICheckboxShapeProps): void;
    protected _draw(ctx: UniverRenderingContext): void;
    toJson(): {
        [x: string]: any;
    };
}
