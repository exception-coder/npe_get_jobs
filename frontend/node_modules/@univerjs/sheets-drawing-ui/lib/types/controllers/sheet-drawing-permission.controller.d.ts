import { Disposable, IPermissionService, IUniverInstanceService, UserManagerService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class SheetDrawingPermissionController extends Disposable {
    private readonly _drawingManagerService;
    private readonly _renderManagerService;
    private readonly _permissionService;
    private readonly _univerInstanceService;
    private _userManagerService;
    constructor(_drawingManagerService: IDrawingManagerService, _renderManagerService: IRenderManagerService, _permissionService: IPermissionService, _univerInstanceService: IUniverInstanceService, _userManagerService: UserManagerService);
    private _initDrawingVisible;
    private _handleDrawingVisibilityFalse;
    private _initDrawingEditable;
    private _handleDrawingEditableFalse;
    private _initViewPermissionChange;
    private _initEditPermissionChange;
}
