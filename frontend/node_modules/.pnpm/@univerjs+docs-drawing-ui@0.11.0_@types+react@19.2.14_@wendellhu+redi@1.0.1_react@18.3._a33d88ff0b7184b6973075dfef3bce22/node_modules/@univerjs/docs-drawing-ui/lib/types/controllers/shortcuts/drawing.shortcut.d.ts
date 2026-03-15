import { IContextService } from '@univerjs/core';
import { IShortcutItem } from '@univerjs/ui';
import { IMoveDrawingsCommandParams } from '../../commands/commands/move-drawings.command';
export declare function whenDocDrawingFocused(contextService: IContextService): boolean;
export declare const MoveDrawingDownShortcutItem: IShortcutItem<IMoveDrawingsCommandParams>;
export declare const MoveDrawingUpShortcutItem: IShortcutItem<IMoveDrawingsCommandParams>;
export declare const MoveDrawingLeftShortcutItem: IShortcutItem<IMoveDrawingsCommandParams>;
export declare const MoveDrawingRightShortcutItem: IShortcutItem<IMoveDrawingsCommandParams>;
export declare const DeleteDrawingsShortcutItem: IShortcutItem;
