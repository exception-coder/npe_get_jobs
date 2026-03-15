import { ICellRenderContext, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IBaseDataValidationWidget } from '@univerjs/data-validation';
import { IMouseEvent, IPointerEvent, SpreadsheetSkeleton, UniverRenderingContext2D, IRenderManagerService } from '@univerjs/engine-render';
import { SheetDataValidationModel } from '@univerjs/sheets-data-validation';
export interface IDropdownInfo {
    top: number;
    left: number;
    width: number;
    height: number;
}
export declare class DropdownWidget implements IBaseDataValidationWidget {
    private readonly _univerInstanceService;
    private readonly _localeService;
    private readonly _commandService;
    private readonly _renderManagerService;
    private readonly _dataValidationModel;
    private _dropdownInfoMap;
    constructor(_univerInstanceService: IUniverInstanceService, _localeService: LocaleService, _commandService: ICommandService, _renderManagerService: IRenderManagerService, _dataValidationModel: SheetDataValidationModel);
    zIndex?: number | undefined;
    private _ensureMap;
    private _generateKey;
    private _drawDownIcon;
    drawWith(ctx: UniverRenderingContext2D, info: ICellRenderContext, skeleton: SpreadsheetSkeleton): void;
    calcCellAutoHeight(info: ICellRenderContext): number | undefined;
    calcCellAutoWidth(info: ICellRenderContext): number | undefined;
    isHit(position: {
        x: number;
        y: number;
    }, info: ICellRenderContext): boolean;
    onPointerDown(info: ICellRenderContext, evt: IPointerEvent | IMouseEvent): void;
    onPointerEnter(_info: ICellRenderContext, _evt: IPointerEvent | IMouseEvent): void;
    onPointerLeave(_info: ICellRenderContext, _evt: IPointerEvent | IMouseEvent): void;
}
