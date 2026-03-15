import { ICellRenderContext, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IBaseDataValidationWidget } from '@univerjs/data-validation';
import { IMouseEvent, IPointerEvent, Spreadsheet, SpreadsheetSkeleton, UniverRenderingContext2D, IRenderManagerService } from '@univerjs/engine-render';
import { SheetDataValidationModel } from '@univerjs/sheets-data-validation';
export declare class DropdownMultipleWidget implements IBaseDataValidationWidget {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _dataValidationModel;
    zIndex?: number | undefined;
    private _dropdownInfoMap;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _dataValidationModel: SheetDataValidationModel);
    private _ensureMap;
    private _generateKey;
    private _drawDownIcon;
    drawWith(ctx: UniverRenderingContext2D, info: ICellRenderContext, skeleton: SpreadsheetSkeleton, spreadsheets: Spreadsheet): void;
    calcCellAutoHeight(info: ICellRenderContext): number | undefined;
    calcCellAutoWidth(info: ICellRenderContext): number | undefined;
    isHit(position: {
        x: number;
        y: number;
    }, info: ICellRenderContext): boolean;
    onPointerDown(info: ICellRenderContext, evt: IPointerEvent | IMouseEvent): void;
    onPointerEnter(info: ICellRenderContext, evt: IPointerEvent | IMouseEvent): void | undefined;
    onPointerLeave(info: ICellRenderContext, evt: IPointerEvent | IMouseEvent): void | undefined;
}
