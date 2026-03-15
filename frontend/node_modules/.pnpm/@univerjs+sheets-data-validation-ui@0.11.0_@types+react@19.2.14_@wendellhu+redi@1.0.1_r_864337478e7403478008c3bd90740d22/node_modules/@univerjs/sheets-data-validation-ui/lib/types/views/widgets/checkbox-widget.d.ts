import { ICellRenderContext, ICommandService, IUniverInstanceService, ThemeService } from '@univerjs/core';
import { IBaseDataValidationWidget } from '@univerjs/data-validation';
import { IMouseEvent, IPointerEvent, UniverRenderingContext2D, IRenderManagerService } from '@univerjs/engine-render';
import { DataValidationFormulaService, SheetDataValidationModel } from '@univerjs/sheets-data-validation';
export declare class CheckboxRender implements IBaseDataValidationWidget {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _formulaService;
    private readonly _themeService;
    private readonly _renderManagerService;
    private readonly _dataValidationModel;
    private _calc;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _formulaService: DataValidationFormulaService, _themeService: ThemeService, _renderManagerService: IRenderManagerService, _dataValidationModel: SheetDataValidationModel);
    calcCellAutoHeight(info: ICellRenderContext): number | undefined;
    calcCellAutoWidth(info: ICellRenderContext): number | undefined;
    private _parseFormula;
    drawWith(ctx: UniverRenderingContext2D, info: ICellRenderContext): void;
    isHit(evt: {
        x: number;
        y: number;
    }, info: ICellRenderContext): boolean;
    onPointerDown(info: ICellRenderContext, evt: IPointerEvent | IMouseEvent): Promise<void>;
    onPointerEnter(info: ICellRenderContext, evt: IPointerEvent | IMouseEvent): void;
    onPointerLeave(info: ICellRenderContext, evt: IPointerEvent | IMouseEvent): void;
}
