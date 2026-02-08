import { Nullable } from '../../shared';
import { ICellDataForSheetInterceptor, ICellWithCoord } from '../../sheets/typedef';
import { Workbook } from '../../sheets/workbook';
import { Worksheet } from '../../sheets/worksheet';
import { IStyleData } from './i-style-data';
export interface ICellRenderContext {
    data: Nullable<ICellDataForSheetInterceptor>;
    style: Nullable<IStyleData>;
    primaryWithCoord: ICellWithCoord;
    unitId: string;
    subUnitId: string;
    row: number;
    col: number;
    worksheet: Worksheet;
    workbook?: Workbook;
}
/**
 * @debt This shouldn't exist in core package.
 * @ignore
 *
 * @deprecated This interface is subject to change in the future.
 */
export interface ICellCustomRender {
    drawWith(ctx: CanvasRenderingContext2D, info: ICellRenderContext, skeleton: any, spreadsheets: any): void;
    zIndex?: number;
    isHit?: (position: {
        x: number;
        y: number;
    }, info: ICellRenderContext) => boolean;
    onPointerDown?: (info: ICellRenderContext, evt: any) => void;
    onPointerEnter?: (info: ICellRenderContext, evt: any) => void;
    onPointerLeave?: (info: ICellRenderContext, evt: any) => void;
}
