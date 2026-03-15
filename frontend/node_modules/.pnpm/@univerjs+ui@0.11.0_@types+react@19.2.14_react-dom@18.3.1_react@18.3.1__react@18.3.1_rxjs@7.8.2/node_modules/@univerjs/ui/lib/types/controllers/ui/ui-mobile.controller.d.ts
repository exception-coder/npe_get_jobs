import { IDisposable, Injector, IUniverInstanceService, LifecycleService } from '@univerjs/core';
import { IUniverUIConfig } from '../config.schema';
import { IUIController } from './ui.controller';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ILayoutService } from '../../services/layout/layout.service';
import { IUIPartsService } from '../../services/parts/parts.service';
import { SingleUnitUIController } from './ui-shared.controller';
export declare class MobileUIController extends SingleUnitUIController implements IUIController {
    private readonly _config;
    constructor(_config: IUniverUIConfig, injector: Injector, lifecycleService: LifecycleService, renderManagerService: IRenderManagerService, layoutService: ILayoutService, instanceService: IUniverInstanceService, uiPartsService: IUIPartsService);
    bootstrap(callback: (contentElement: HTMLElement, containerElement: HTMLElement) => void): IDisposable;
    private _initBuiltinComponents;
}
