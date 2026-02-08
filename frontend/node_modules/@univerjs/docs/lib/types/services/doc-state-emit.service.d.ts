import { JSONXActions, Nullable, RxDisposable } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
interface IDocChangeState {
    actions: JSONXActions;
    textRanges: Nullable<ITextRangeWithStyle[]>;
}
export interface IDocStateChangeParams {
    commandId: string;
    unitId: string;
    trigger: Nullable<string>;
    redoState: IDocChangeState;
    undoState: IDocChangeState;
    segmentId?: string;
    noHistory?: boolean;
    debounce?: boolean;
}
export interface IDocStateChangeInfo extends IDocStateChangeParams {
    isCompositionEnd?: boolean;
    isSync?: boolean;
    syncer?: string;
}
export declare class DocStateEmitService extends RxDisposable {
    private readonly _docStateChangeParams$;
    readonly docStateChangeParams$: import('rxjs').Observable<Nullable<IDocStateChangeInfo>>;
    constructor();
    emitStateChangeInfo(params: IDocStateChangeInfo): void;
    dispose(): void;
}
export {};
