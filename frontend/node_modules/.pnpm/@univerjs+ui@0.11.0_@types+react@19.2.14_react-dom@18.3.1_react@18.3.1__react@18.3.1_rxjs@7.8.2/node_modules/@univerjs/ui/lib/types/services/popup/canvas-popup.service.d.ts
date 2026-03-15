import { Nullable, Disposable } from '@univerjs/core';
import { IBoundRectNoAngle } from '@univerjs/engine-render';
import { Observable } from 'rxjs';
import { IRectPopupProps } from '../../views/components/popup/RectPopup';
export interface IPopup<T = Record<string, unknown>> extends Omit<IRectPopupProps, 'children' | 'hidden' | 'excludeRects' | 'anchorRect$'> {
    anchorRect$: Observable<IBoundRectNoAngle>;
    anchorRect?: IBoundRectNoAngle;
    excludeRects$?: Observable<IBoundRectNoAngle[]>;
    excludeRects?: Nullable<IBoundRectNoAngle[]>;
    componentKey: string;
    unitId: string;
    subUnitId: string;
    offset?: [number, number];
    canvasElement: HTMLCanvasElement;
    hideOnInvisible?: boolean;
    hiddenType?: 'hide' | 'destroy';
    hiddenRects$?: Observable<IBoundRectNoAngle[]>;
    extraProps?: T;
    customActive?: boolean;
    onActiveChange?: (active: boolean) => void;
}
export interface ICanvasPopupService {
    addPopup(item: IPopup): string;
    removePopup(id: string): void;
    removeAll(): void;
    popups$: Observable<[string, IPopup][]>;
    get popups(): [string, IPopup][];
    /**
     * which popup is under hovering now
     */
    get activePopupId(): Nullable<string>;
}
export declare const ICanvasPopupService: import('@wendellhu/redi').IdentifierDecorator<ICanvasPopupService>;
export declare class CanvasPopupService extends Disposable implements ICanvasPopupService {
    private readonly _popupMap;
    private readonly _popups$;
    readonly popups$: Observable<[string, IPopup<Record<string, unknown>>][]>;
    get popups(): [string, IPopup<Record<string, unknown>>][];
    private _activePopupId;
    get activePopupId(): Nullable<string>;
    private _update;
    dispose(): void;
    addPopup(item: IPopup): string;
    removePopup(id: string): void;
    removeAll(): void;
}
