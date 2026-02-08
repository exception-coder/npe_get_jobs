import { IStyleData, Nullable } from '@univerjs/core';
import { IDocumentSkeletonFontStyle } from '@univerjs/engine-render';
export declare const PADDING_H = 4;
export declare const PADDING_V = 0;
export declare const MARGIN_H = 4;
export declare const MARGIN_V = 4;
export declare const CELL_PADDING_H = 6;
export declare const CELL_PADDING_V = 6;
export declare const ICON_PLACE = 14;
export declare function measureDropdownItemText(text: string, style: Nullable<IStyleData>): import('@univerjs/engine-render').IDocumentSkeletonBoundingBox;
export declare function getDropdownItemSize(text: string, fontStyle: IDocumentSkeletonFontStyle): {
    width: number;
    height: number;
    ba: number;
};
export interface IDropdownLayoutInfo {
    layout: {
        width: number;
        height: number;
        ba: number;
    };
    text: string;
}
export interface IDropdownLine {
    width: number;
    height: number;
    items: (IDropdownLayoutInfo & {
        left: number;
    })[];
}
export declare function layoutDropdowns(items: string[], fontStyle: IDocumentSkeletonFontStyle, cellWidth: number, cellHeight: number): {
    lines: IDropdownLine[];
    totalHeight: number;
    contentWidth: number;
    contentHeight: number;
    cellAutoHeight: number;
    calcAutoWidth: number;
};
