import { IDisposable, Disposable } from '@univerjs/core';
import { IMouseEvent, IPointerEvent } from '@univerjs/engine-render';
export interface IContextMenuHandler {
    /** A callback to open context menu with given position and menu type. */
    handleContextMenu(event: IPointerEvent | IMouseEvent, menuType: string): void;
    hideContextMenu(): void;
    get visible(): boolean;
}
export interface IContextMenuService {
    disabled: boolean;
    get visible(): boolean;
    enable(): void;
    disable(): void;
    triggerContextMenu(event: IPointerEvent | IMouseEvent, menuType: string): void;
    hideContextMenu(): void;
    registerContextMenuHandler(handler: IContextMenuHandler): IDisposable;
}
export declare const IContextMenuService: import('@wendellhu/redi').IdentifierDecorator<IContextMenuService>;
export declare class ContextMenuService extends Disposable implements IContextMenuService {
    private _currentHandler;
    disabled: boolean;
    get visible(): boolean;
    disable(): void;
    enable(): void;
    triggerContextMenu(event: IPointerEvent | IMouseEvent, menuType: string): void;
    hideContextMenu(): void;
    registerContextMenuHandler(handler: IContextMenuHandler): IDisposable;
}
