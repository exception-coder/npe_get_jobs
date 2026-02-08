import { IDocumentData, Disposable, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IDocDrawingService } from '../services/doc-drawing.service';
export declare const DOCS_DRAWING_PLUGIN = "DOC_DRAWING_PLUGIN";
export interface IDocDrawingModel {
    drawings?: IDocumentData['drawings'];
    drawingsOrder?: IDocumentData['drawingsOrder'];
}
export declare class DocDrawingController extends Disposable {
    private readonly _docDrawingService;
    private readonly _drawingManagerService;
    private _resourceManagerService;
    private _univerInstanceService;
    constructor(_docDrawingService: IDocDrawingService, _drawingManagerService: IDrawingManagerService, _resourceManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService);
    private _init;
    private _initSnapshot;
    private _setDrawingDataForUnit;
    loadDrawingDataForUnit(unitId: string): boolean;
}
