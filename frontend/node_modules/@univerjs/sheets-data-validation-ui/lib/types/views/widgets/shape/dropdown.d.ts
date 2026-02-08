import { IShapeProps, UniverRenderingContext, Shape } from '@univerjs/engine-render';
import { IDropdownLayoutInfo } from './layout';
export interface IDropdownProps extends IShapeProps {
    fontString: string;
    fontFamily: string;
    fontSize: number;
    info: IDropdownLayoutInfo;
    color: string;
}
export declare class Dropdown extends Shape<IDropdownProps> {
    static drawWith(ctx: UniverRenderingContext, props: IDropdownProps): void;
}
