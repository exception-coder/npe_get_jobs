import { Disposable, ICommandService, Injector } from '@univerjs/core';
import { ComponentManager } from '../../common/component-manager';
import { IMenuManagerService } from '../../services/menu/menu-manager.service';
import { IShortcutService } from '../../services/shortcut/shortcut.service';
/**
 * This controller add a side panel to the application to display the shortcuts.
 */
export declare class ShortcutPanelController extends Disposable {
    private readonly _menuManagerService;
    constructor(injector: Injector, componentManager: ComponentManager, shortcutService: IShortcutService, _menuManagerService: IMenuManagerService, commandService: ICommandService);
}
