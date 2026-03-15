import { IDisposable, IPosition, Nullable } from '@univerjs/core';
import { Observable } from 'rxjs';
export interface ICellEditorManagerParam extends Partial<IPosition> {
    show: boolean;
}
export interface ICellEditorBoundingClientRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface ICellEditorManagerService {
    state$: Observable<Nullable<ICellEditorManagerParam>>;
    rect$: Observable<Nullable<ICellEditorBoundingClientRect>>;
    focus$: Observable<boolean>;
    dispose(): void;
    setState(param: ICellEditorManagerParam): void;
    getState(): Readonly<Nullable<ICellEditorManagerParam>>;
    setRect(param: ICellEditorBoundingClientRect): void;
    getRect(): Readonly<Nullable<ICellEditorBoundingClientRect>>;
    setFocus(param: boolean): void;
}
export declare class CellEditorManagerService implements ICellEditorManagerService, IDisposable {
    private _state;
    private _rect;
    private readonly _state$;
    readonly state$: Observable<Nullable<ICellEditorManagerParam>>;
    private readonly _rect$;
    readonly rect$: Observable<Nullable<ICellEditorBoundingClientRect>>;
    private _focus;
    private readonly _focus$;
    readonly focus$: Observable<boolean>;
    dispose(): void;
    setState(param: ICellEditorManagerParam): void;
    getRect(): Readonly<Nullable<ICellEditorBoundingClientRect>>;
    setRect(param: ICellEditorBoundingClientRect): void;
    getState(): Readonly<Nullable<ICellEditorManagerParam>>;
    setFocus(param?: boolean): void;
    private _refresh;
}
export declare const ICellEditorManagerService: import('@wendellhu/redi').IdentifierDecorator<CellEditorManagerService>;
