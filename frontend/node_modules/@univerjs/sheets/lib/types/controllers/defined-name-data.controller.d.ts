import { Disposable, IResourceManagerService } from '@univerjs/core';
import { IDefinedNamesService } from '@univerjs/engine-formula';
export declare const SCOPE_WORKBOOK_VALUE_DEFINED_NAME = "AllDefaultWorkbook";
export declare class DefinedNameDataController extends Disposable {
    private readonly _definedNamesService;
    private _resourceManagerService;
    constructor(_definedNamesService: IDefinedNamesService, _resourceManagerService: IResourceManagerService);
    private _initialize;
    private _initSnapshot;
}
