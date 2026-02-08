import { IMouseEvent, IPointerEvent, IShapeProps, UniverRenderingContext2D, Shape } from '@univerjs/engine-render';
import { ICommandService, IContextService, ThemeService } from '@univerjs/core';
export declare const FILTER_ICON_SIZE = 16;
export declare const FILTER_ICON_PADDING = 1;
export interface ISheetsFilterButtonShapeProps extends IShapeProps {
    cellWidth: number;
    cellHeight: number;
    filterParams: {
        col: number;
        unitId: string;
        subUnitId: string;
        hasCriteria: boolean;
    };
}
/**
 * The widget to render a filter button on canvas.
 */
export declare class SheetsFilterButtonShape extends Shape<ISheetsFilterButtonShapeProps> {
    private readonly _contextService;
    private readonly _commandService;
    private readonly _themeService;
    private _cellWidth;
    private _cellHeight;
    private _filterParams?;
    private _hovered;
    constructor(key: string, props: ISheetsFilterButtonShapeProps, _contextService: IContextService, _commandService: ICommandService, _themeService: ThemeService);
    setShapeProps(props: Partial<ISheetsFilterButtonShapeProps>): void;
    protected _draw(ctx: UniverRenderingContext2D): void;
    onPointerDown(evt: IPointerEvent | IMouseEvent): void;
    onPointerEnter(): void;
    onPointerLeave(): void;
}
