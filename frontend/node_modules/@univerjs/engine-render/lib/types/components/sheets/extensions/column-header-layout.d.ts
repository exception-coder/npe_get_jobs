import { IScale } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { IAColumnCfg, IAColumnCfgObj, IHeaderStyleCfg } from '../interfaces';
import { SpreadsheetSkeleton } from '../sheet.render-skeleton';
import { SheetExtension } from './sheet-extension';
export interface IColumnsHeaderCfgParam {
    headerStyle?: Partial<IHeaderStyleCfg>;
    columnsCfg?: Record<number, IAColumnCfg>;
}
/**
 * Column Header Bar, include a lot of columns header
 */
export declare class ColumnHeaderLayout extends SheetExtension {
    uKey: string;
    Z_INDEX: number;
    columnsCfg: Record<number, IAColumnCfg>;
    headerStyle: Partial<IHeaderStyleCfg>;
    columnsCfgOfWorksheet: Map<string, Record<number, IAColumnCfg>>;
    headerStyleOfWorksheet: Map<string, Partial<IHeaderStyleCfg>>;
    constructor(cfg?: IColumnsHeaderCfgParam);
    configHeaderColumn(cfg: IColumnsHeaderCfgParam, sheetId?: string): void;
    getColumnsCfg(sheetId: string): Record<number, IAColumnCfg>;
    getHeaderStyle(sheetId: string): IHeaderStyleCfg;
    getCfgOfCurrentColumn(columnsCfg: Record<number, IAColumnCfg>, headerStyle: IHeaderStyleCfg, colIndex: number): [IAColumnCfgObj, boolean];
    setStyleToCtx(ctx: UniverRenderingContext, columnStyle: Partial<IHeaderStyleCfg>): void;
    draw(ctx: UniverRenderingContext, parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton): void;
}
