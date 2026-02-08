import { Disposable, IDisposable } from '@univerjs/core';
import { Observable } from 'rxjs';
import { IScrollState } from '../../views/sheet-bar/sheet-bar-tabs/utils/slide-tab-bar';
export interface ISheetBarMenuHandler {
    handleSheetBarMenu(): void;
}
export interface ISheetBarService {
    renameId$: Observable<string>;
    removeId$: Observable<string>;
    scroll$: Observable<IScrollState>;
    scrollX$: Observable<number>;
    addSheet$: Observable<number>;
    setRenameId(id: string): void;
    setRemoveId(id: string): void;
    setScroll(state: IScrollState): void;
    setScrollX(x: number): void;
    setAddSheet(index: number): void;
    triggerSheetBarMenu(): void;
    registerSheetBarMenuHandler(handler: ISheetBarMenuHandler): IDisposable;
}
export declare const ISheetBarService: import('@wendellhu/redi').IdentifierDecorator<ISheetBarService>;
export declare class SheetBarService extends Disposable implements ISheetBarService {
    readonly renameId$: Observable<string>;
    readonly removeId$: Observable<string>;
    readonly scroll$: Observable<IScrollState>;
    readonly scrollX$: Observable<number>;
    readonly addSheet$: Observable<number>;
    private readonly _renameId$;
    private readonly _removeId$;
    private readonly _scroll$;
    private readonly _scrollX$;
    private readonly _addSheet$;
    private _currentHandler;
    constructor();
    setRenameId(renameId: string): void;
    setRemoveId(removeId: string): void;
    setScroll(state: IScrollState): void;
    setScrollX(x: number): void;
    setAddSheet(index: number): void;
    triggerSheetBarMenu(): void;
    registerSheetBarMenuHandler(handler: ISheetBarMenuHandler): IDisposable;
}
