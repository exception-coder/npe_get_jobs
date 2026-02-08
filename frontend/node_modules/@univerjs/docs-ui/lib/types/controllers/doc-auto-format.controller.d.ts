import { Disposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { DocAutoFormatService } from '../services/doc-auto-format.service';
export declare class DocAutoFormatController extends Disposable {
    private readonly _docAutoFormatService;
    private readonly _renderManagerService;
    constructor(_docAutoFormatService: DocAutoFormatService, _renderManagerService: IRenderManagerService);
    private _initListTabAutoFormat;
    private _initSpaceAutoFormat;
    private _initExitListAutoFormat;
    private _initDefaultEnterFormat;
}
