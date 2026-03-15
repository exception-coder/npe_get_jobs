import { UniverRenderingContext } from '../context';
import { IShapeProps, Shape } from './shape';
export interface IListItemProps extends IShapeProps {
    text: number;
    fontString: string;
    fontFamily: string;
    fontSize: string;
}
export declare class ListItem extends Shape<IListItemProps> {
    static drawWith(ctx: UniverRenderingContext, props: IListItemProps): void;
}
