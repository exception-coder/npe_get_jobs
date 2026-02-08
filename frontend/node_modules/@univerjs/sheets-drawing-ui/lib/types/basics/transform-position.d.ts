import { ITransformState, Nullable } from '@univerjs/core';
import { ISheetDrawingPosition } from '@univerjs/sheets-drawing';
import { ISheetSelectionRenderService, SheetSkeletonManagerService } from '@univerjs/sheets-ui';
export declare function drawingPositionToTransform(position: ISheetDrawingPosition, selectionRenderService: ISheetSelectionRenderService, sheetSkeletonManagerService: SheetSkeletonManagerService): Nullable<ITransformState>;
export declare function transformToDrawingPosition(transform: ITransformState, selectionRenderService: ISheetSelectionRenderService): Nullable<ISheetDrawingPosition>;
