import { ICellWithCoord, ICustomRange, Injector, IParagraph } from '@univerjs/core';
import { DocumentSkeleton, IFontCacheItem } from '@univerjs/engine-render';
export declare const calculateDocSkeletonRects: (docSkeleton: DocumentSkeleton, paddingLeft?: number, paddingTop?: number) => {
    links: {
        rects: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        }[];
        range: ICustomRange<Record<string, any>>;
    }[];
    checkLists: {
        rect: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        segmentId: undefined;
        segmentPageIndex: number;
        paragraph: IParagraph;
    }[];
    drawings: {
        drawingId: string;
        rect: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        drawing: import('@univerjs/engine-render').IDocumentSkeletonDrawing;
    }[];
};
export declare function calcPadding(cell: ICellWithCoord, font: IFontCacheItem, isNum: boolean): {
    paddingLeft: number;
    paddingTop: number;
};
export declare const getCustomRangePosition: (injector: Injector, unitId: string, subUnitId: string, row: number, col: number, rangeId: string) => {
    rects: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }[] | undefined;
    customRange: ICustomRange<Record<string, any>>;
    label: string;
} | null | undefined;
export declare const getEditingCustomRangePosition: (injector: Injector, unitId: string, subUnitId: string, row: number, col: number, rangeId: string) => {
    rects: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }[] | undefined;
    customRange: ICustomRange<Record<string, any>>;
    label: string;
} | null;
