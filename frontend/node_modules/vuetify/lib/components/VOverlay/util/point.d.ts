// Types
import type { ParsedAnchor } from '../../../util/index.js';
import type { Box } from '../../../util/box.js';
type Point = {
    x: number;
    y: number;
};
declare class As<T extends string> {
    private as;
}
type ElementPoint = Point & As<'element'>;
type ViewportPoint = Point & As<'viewport'>;
type Offset = Point & As<'offset'>;
/** Convert a point in local space to viewport space */
export declare function elementToViewport(point: ElementPoint, offset: Offset | Box): ViewportPoint;
/** Convert a point in viewport space to local space */
export declare function viewportToElement(point: ViewportPoint, offset: Offset | Box): ElementPoint;
/** Get the difference between two points */
export declare function getOffset<T extends Point>(a: T, b: T): Offset;
/** Convert an anchor object to a point in local space */
export declare function anchorToPoint(anchor: ParsedAnchor, box: Box): ViewportPoint;

