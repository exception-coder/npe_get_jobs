import { IDisposable, Nullable } from '@univerjs/core';
import { Observable } from 'rxjs';
export interface IFormulaEditorManagerService {
    position$: Observable<Nullable<DOMRect>>;
    focus$: Observable<boolean>;
    fxBtnClick$: Observable<boolean>;
    foldBtnStatus$: Observable<boolean>;
    dispose(): void;
    setPosition(param: DOMRect): void;
    getPosition(): Readonly<Nullable<DOMRect>>;
    setFocus(param: boolean): void;
}
export declare class FormulaEditorManagerService implements IDisposable {
    private _position;
    private readonly _position$;
    readonly position$: Observable<Nullable<DOMRect>>;
    private _focus;
    private readonly _focus$;
    readonly focus$: Observable<boolean>;
    private readonly _fxBtnClick$;
    readonly fxBtnClick$: Observable<boolean>;
    private readonly _foldBtnStatus$;
    readonly foldBtnStatus$: Observable<boolean>;
    dispose(): void;
    setPosition(param: DOMRect): void;
    getPosition(): Readonly<Nullable<DOMRect>>;
    setFocus(param?: boolean): void;
    handleFxBtnClick(params: boolean): void;
    handleFoldBtnClick(params: boolean): void;
    private _refresh;
}
export declare const IFormulaEditorManagerService: import('@wendellhu/redi').IdentifierDecorator<FormulaEditorManagerService>;
