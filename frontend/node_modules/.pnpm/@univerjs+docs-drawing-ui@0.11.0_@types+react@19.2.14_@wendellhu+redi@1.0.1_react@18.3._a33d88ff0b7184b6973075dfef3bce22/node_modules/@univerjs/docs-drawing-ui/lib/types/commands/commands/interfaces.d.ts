import { DrawingTypeEnum } from '@univerjs/core';
import { IDocDrawing } from '@univerjs/docs-drawing';
export interface IInsertDrawingCommandParams {
    unitId: string;
    drawings: IDocDrawing[];
}
export interface IDeleteDrawingCommandParam {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    drawingType: DrawingTypeEnum;
}
export interface IDeleteDrawingCommandParams {
    unitId: string;
    drawings: IDeleteDrawingCommandParam[];
}
export interface ISetDrawingCommandParams {
    unitId: string;
    drawings: Partial<IDocDrawing>[];
}
