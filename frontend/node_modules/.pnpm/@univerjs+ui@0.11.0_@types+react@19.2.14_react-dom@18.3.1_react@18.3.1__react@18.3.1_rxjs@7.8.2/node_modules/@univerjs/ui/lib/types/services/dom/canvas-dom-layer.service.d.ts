import { IPosition, Serializable } from '@univerjs/core';
import { Observable } from 'rxjs';
export interface IFloatDomLayout extends IPosition {
    rotate: number;
    width: number;
    height: number;
    absolute: {
        left: boolean;
        top: boolean;
    };
    opacity?: number;
}
export interface IFloatDom {
    position$: Observable<IFloatDomLayout>;
    id: string;
    componentKey: string | React.ComponentType;
    onPointerMove: (evt: PointerEvent | MouseEvent) => void;
    onPointerDown: (evt: PointerEvent | MouseEvent) => void;
    onPointerUp: (evt: PointerEvent | MouseEvent) => void;
    onWheel: (evt: WheelEvent) => void;
    props?: Record<string, any>;
    data?: Serializable;
    unitId: string;
}
export declare class CanvasFloatDomService {
    private _domLayerMap;
    private _domLayers$;
    domLayers$: Observable<[string, IFloatDom][]>;
    get domLayers(): [string, IFloatDom][];
    private _notice;
    updateFloatDom(id: string, item: Partial<IFloatDom>): void;
    addFloatDom(item: IFloatDom): void;
    removeFloatDom(id: string): void;
    removeAll(): void;
}
