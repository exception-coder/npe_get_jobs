import { ICommand, IRange } from '@univerjs/core';
import { FormatPainterStatus } from '../../services/format-painter/format-painter.service';
export interface ISetFormatPainterCommandParams {
    status: FormatPainterStatus;
}
export declare const SetInfiniteFormatPainterCommand: ICommand;
export declare const SetOnceFormatPainterCommand: ICommand;
export interface IApplyFormatPainterCommandParams {
    subUnitId: string;
    unitId: string;
    range: IRange;
}
export declare const ApplyFormatPainterCommand: ICommand;
