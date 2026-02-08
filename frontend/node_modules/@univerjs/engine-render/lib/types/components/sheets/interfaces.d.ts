import { BorderStyleTypes, HorizontalAlign, ICellDataForSheetInterceptor, ICellWithCoord, ImageCacheMap, IStyleData, Nullable, ObjectMatrix, VerticalAlign, WrapStrategy } from '@univerjs/core';
import { BORDER_TYPE as BORDER_LTRB } from '../../basics/const';
import { Canvas } from '../../canvas';
import { UniverRenderingContext } from '../../context';
import { DocumentSkeleton } from '../docs/layout/doc-skeleton';
export interface BorderCache {
    [key: string]: BorderCacheItem | {};
}
export interface BorderCacheItem {
    type: BORDER_LTRB;
    style: BorderStyleTypes;
    color: string;
}
export interface IFontCacheItem {
    documentSkeleton?: DocumentSkeleton;
    vertexAngle?: number;
    centerAngle?: number;
    verticalAlign: VerticalAlign;
    horizontalAlign: HorizontalAlign;
    wrapStrategy: WrapStrategy;
    imageCacheMap: ImageCacheMap;
    cellData: Nullable<ICellDataForSheetInterceptor>;
    fontString: string;
    style?: Nullable<IStyleData>;
}
type colorString = string;
export interface IStylesCache {
    background?: Record<colorString, ObjectMatrix<string>>;
    backgroundPositions?: ObjectMatrix<ICellWithCoord>;
    /**
     * Get value from getCell in skeleton and this value is used in font extension
     */
    fontMatrix: ObjectMatrix<IFontCacheItem>;
    border?: ObjectMatrix<BorderCache>;
}
export declare enum ShowGridlinesState {
    OFF = 0,
    ON = 1
}
export declare enum SHEET_VIEWPORT_KEY {
    VIEW_MAIN = "viewMain",
    VIEW_MAIN_LEFT_TOP = "viewMainLeftTop",
    VIEW_MAIN_TOP = "viewMainTop",
    VIEW_MAIN_LEFT = "viewMainLeft",
    VIEW_ROW_TOP = "viewRowTop",
    VIEW_ROW_BOTTOM = "viewRowBottom",
    VIEW_COLUMN_LEFT = "viewColumnLeft",
    VIEW_COLUMN_RIGHT = "viewColumnRight",
    VIEW_LEFT_TOP = "viewLeftTop"
}
export interface IPaintForRefresh {
    cacheCanvas: Canvas;
    cacheCtx: UniverRenderingContext;
    mainCtx: UniverRenderingContext;
    topOrigin: number;
    leftOrigin: number;
    bufferEdgeX: number;
    bufferEdgeY: number;
}
export interface IPaintForScrolling {
    cacheCanvas: Canvas;
    cacheCtx: UniverRenderingContext;
    mainCtx: UniverRenderingContext;
    topOrigin: number;
    leftOrigin: number;
    bufferEdgeX: number;
    bufferEdgeY: number;
    rowHeaderWidth: number;
    columnHeaderHeight: number;
    scaleX: number;
    scaleY: number;
}
export interface IHeaderStyleCfg {
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    borderColor: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    backgroundColor: string;
    /**
     * column header height
     */
    size?: number;
}
export type IAColumnCfgObj = IHeaderStyleCfg & {
    text: string;
};
export type IAColumnCfg = undefined | null | string | Partial<Omit<IAColumnCfgObj, 'size'>>;
export interface IRowStyleCfg {
    fontFamily: string;
    fontColor: string;
    fontSize: number;
    borderColor: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    backgroundColor: string;
    /**
     * row header width
     */
    size?: number;
}
export type IARowCfgObj = IHeaderStyleCfg & {
    text: string;
};
export type IARowCfg = undefined | null | string | Partial<IARowCfgObj>;
export {};
