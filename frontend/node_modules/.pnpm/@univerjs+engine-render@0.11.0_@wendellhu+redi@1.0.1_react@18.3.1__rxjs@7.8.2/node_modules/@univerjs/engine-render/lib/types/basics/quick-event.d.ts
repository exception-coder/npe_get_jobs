import { BaseObject } from '../base-object';
import { IMouseEvent, IPointerEvent } from './i-events';
export declare function attachObjectHover(o: BaseObject, hoverIn: (o: any, evt: IPointerEvent | IMouseEvent) => void, hoverOut: (o: any, evt: IPointerEvent | IMouseEvent) => void): void;
