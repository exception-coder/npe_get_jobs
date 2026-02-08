import { Disposable } from '@univerjs/core';
import { ICellEditorManagerService } from '@univerjs/sheets-ui';
export declare class DisableStateController extends Disposable {
    private readonly _cellEditorManagerService;
    constructor(_cellEditorManagerService: ICellEditorManagerService);
    private _init;
}
