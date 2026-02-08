import { IOperation } from '@univerjs/core';
import { FormatPainterStatus } from '../../services/format-painter/format-painter.service';
export interface ISetFormatPainterOperationParams {
    status: FormatPainterStatus;
}
export declare const SetFormatPainterOperation: IOperation<ISetFormatPainterOperationParams>;
