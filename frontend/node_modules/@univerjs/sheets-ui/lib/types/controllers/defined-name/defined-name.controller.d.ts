import { Disposable, ICommandService, IUniverInstanceService, ThemeService } from '@univerjs/core';
import { IDefinedNamesService } from '@univerjs/engine-formula';
import { SheetsSelectionsService } from '@univerjs/sheets';
export declare class SheetsDefinedNameController extends Disposable {
    private readonly _selectionManagerService;
    private readonly _themeService;
    private readonly _instanceSrv;
    private readonly _cmdSrv;
    private readonly _definedNamesService;
    constructor(_selectionManagerService: SheetsSelectionsService, _themeService: ThemeService, _instanceSrv: IUniverInstanceService, _cmdSrv: ICommandService, _definedNamesService: IDefinedNamesService);
    private _init;
    private _syncDefinedNameRange;
    private _getSelections;
}
