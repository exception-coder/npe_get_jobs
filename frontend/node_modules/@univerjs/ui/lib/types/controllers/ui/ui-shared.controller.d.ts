import { IDisposable, Injector, IUniverInstanceService, LifecycleService, Disposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ILayoutService } from '../../services/layout/layout.service';
/**
 * @ignore
 */
export declare abstract class SingleUnitUIController extends Disposable {
    protected readonly _injector: Injector;
    protected readonly _instanceService: IUniverInstanceService;
    protected readonly _layoutService: ILayoutService;
    protected readonly _lifecycleService: LifecycleService;
    protected readonly _renderManagerService: IRenderManagerService;
    protected _steadyTimeout: number;
    protected _renderTimeout: number;
    constructor(_injector: Injector, _instanceService: IUniverInstanceService, _layoutService: ILayoutService, _lifecycleService: LifecycleService, _renderManagerService: IRenderManagerService);
    dispose(): void;
    protected _bootstrapWorkbench(): void;
    private _currentRenderId;
    private _changeRenderUnit;
    abstract bootstrap(callback: (contentElement: HTMLElement, containerElement: HTMLElement) => void): IDisposable;
}
