import { IDisposable, Injector, IUniverInstanceService, LifecycleService } from '@univerjs/core';
import { IUniverUIConfig } from '../config.schema';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ComponentManager } from '../../common';
import { ILayoutService } from '../../services/layout/layout.service';
import { IMenuManagerService } from '../../services/menu/menu-manager.service';
import { IUIPartsService } from '../../services/parts/parts.service';
import { SingleUnitUIController } from './ui-shared.controller';
export declare class DesktopUIController extends SingleUnitUIController {
    private readonly _config;
    private readonly _componentManager;
    constructor(_config: IUniverUIConfig, injector: Injector, lifecycleService: LifecycleService, renderManagerService: IRenderManagerService, layoutService: ILayoutService, instanceService: IUniverInstanceService, menuManagerService: IMenuManagerService, uiPartsService: IUIPartsService, _componentManager: ComponentManager);
    private _registerComponents;
    dispose(): void;
    bootstrap(callback: (contentElement: HTMLElement, containerElement: HTMLElement) => void): IDisposable;
    private _initBuiltinComponents;
}
