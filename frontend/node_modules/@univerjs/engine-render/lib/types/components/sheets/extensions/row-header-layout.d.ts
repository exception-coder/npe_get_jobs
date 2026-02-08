import { IScale } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { IARowCfg, IARowCfgObj, IHeaderStyleCfg, IRowStyleCfg } from '../interfaces';
import { SpreadsheetSkeleton } from '../sheet.render-skeleton';
import { SheetExtension } from './sheet-extension';
export interface IRowsHeaderCfgParam {
    headerStyle?: Partial<IRowStyleCfg>;
    rowsCfg?: Record<number, IARowCfg>;
}
export declare class RowHeaderLayout extends SheetExtension {
    uKey: string;
    Z_INDEX: number;
    rowsCfg: Record<number, IARowCfg>;
    headerStyle: Partial<IRowStyleCfg>;
    rowsCfgOfWorksheet: Map<string, Record<number, IARowCfg>>;
    headerStyleOfWorksheet: Map<string, Partial<IRowStyleCfg>>;
    constructor(cfg?: IRowsHeaderCfgParam);
    configHeaderRow(cfg: IRowsHeaderCfgParam, sheetId?: string): void;
    getRowsCfg(sheetId: string): Record<number, IARowCfg>;
    getHeaderStyle(sheetId: string): IRowStyleCfg;
    getCfgOfCurrentRow(rowsCfg: Record<number, IARowCfg>, headerStyle: IHeaderStyleCfg, rowIndex: number): [IARowCfgObj, boolean];
    setStyleToCtx(ctx: UniverRenderingContext, rowStyle: Partial<IHeaderStyleCfg>): void;
    draw(ctx: UniverRenderingContext, parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton): void;
}
