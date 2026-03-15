import { IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class DocsRenderService extends RxDisposable {
    private readonly _instanceSrv;
    private readonly _renderManagerService;
    constructor(_instanceSrv: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    private _init;
    private _createRenderer;
    private _createRenderWithId;
    private _disposeRenderer;
}
