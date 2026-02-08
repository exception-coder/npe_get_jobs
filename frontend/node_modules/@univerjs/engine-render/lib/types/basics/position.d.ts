import { BaseObject } from '../base-object';
import { IBoundRect } from './vector2';
export declare function getOffsetRectForDom(ele: HTMLElement): {
    top: number;
    left: number;
};
export declare function transformBoundingCoord(object: BaseObject, bounds: IBoundRect): {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
};
