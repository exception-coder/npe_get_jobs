import { Disposable, ICommandService } from '@univerjs/core';
export declare class SheetTableThemeUIController extends Disposable {
    private _commandService;
    private _refreshTable;
    refreshTable$: import('rxjs').Observable<number>;
    constructor(_commandService: ICommandService);
    private _initListener;
}
