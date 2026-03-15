import { DrawingTypeEnum } from '@univerjs/core';
import { ISheetDrawing } from '@univerjs/sheets-drawing';
export interface IInsertDrawingCommandParams {
    unitId: string;
    drawings: ISheetDrawing[];
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
    drawings: Partial<ISheetDrawing>[];
}
