import { Nullable, ICommandService, IUndoRedoService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IDocStateChangeParams, DocStateEmitService } from '@univerjs/docs';
import { IRenderManagerService } from '@univerjs/engine-render';
interface IStateCache {
    history: IDocStateChangeParams[];
    collaboration: IDocStateChangeParams[];
}
export declare class DocStateChangeManagerService extends RxDisposable {
    private _undoRedoService;
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _docStateEmitService;
    private readonly _renderManagerService;
    private readonly _docStateChange$;
    readonly docStateChange$: import('rxjs').Observable<Nullable<IDocStateChangeParams>>;
    private _historyStateCache;
    private _changeStateCache;
    private _historyTimer;
    private _changeStateCacheTimer;
    constructor(_undoRedoService: IUndoRedoService, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _docStateEmitService: DocStateEmitService, _renderManagerService: IRenderManagerService);
    getStateCache(unitId: string): {
        history: IDocStateChangeParams[];
        collaboration: IDocStateChangeParams[];
    };
    setStateCache(unitId: string, cache: IStateCache): void;
    private _setChangeState;
    private _initialize;
    private _listenDocStateChange;
    private _cacheChangeState;
    private _pushHistory;
    private _emitChangeState;
}
export {};
