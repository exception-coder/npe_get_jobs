import { ICellCustomRender, ICellRenderContext } from '@univerjs/core';
export interface IBaseDataValidationWidget extends ICellCustomRender {
    calcCellAutoHeight(info: ICellRenderContext): number | undefined;
    calcCellAutoWidth(info: ICellRenderContext): number | undefined;
}
