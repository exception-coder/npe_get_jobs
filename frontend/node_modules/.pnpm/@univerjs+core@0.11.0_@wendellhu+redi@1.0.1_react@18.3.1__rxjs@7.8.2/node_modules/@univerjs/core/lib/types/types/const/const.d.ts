import { Nullable } from '../../shared';
import { IParagraphStyle, ITextStyle, NamedStyleType } from '../interfaces';
import { BooleanNumber, HorizontalAlign, TextDirection, VerticalAlign, WrapStrategy } from '../enum';
/**
 * Used as an illegal range array return value
 */
export declare const DEFAULT_RANGE_ARRAY: {
    sheetId: string;
    range: {
        startRow: number;
        endRow: number;
        startColumn: number;
        endColumn: number;
    };
};
/**
 * Used as an illegal range return value
 */
export declare const DEFAULT_RANGE: {
    startRow: number;
    startColumn: number;
    endRow: number;
    endColumn: number;
};
/**
 * Used as an init selection return value
 */
export declare const DEFAULT_SELECTION: {
    startRow: number;
    startColumn: number;
    endRow: number;
    endColumn: number;
};
/**
 * Used as an init cell return value
 */
export declare const DEFAULT_CELL: {
    row: number;
    column: number;
};
/**
 * Default styles.
 */
export declare const DEFAULT_STYLES: {
    /**
     * fontFamily
     */
    ff: string;
    /**
     * fontSize
     */
    fs: number;
    /**
     * italic
     * 0: false
     * 1: true
     */
    it: BooleanNumber;
    /**
     * bold
     * 0: false
     * 1: true
     */
    bl: BooleanNumber;
    /**
     * underline
     */
    ul: {
        s: BooleanNumber;
    };
    /**
     * strikethrough
     */
    st: {
        s: BooleanNumber;
    };
    /**
     * overline
     */
    ol: {
        s: BooleanNumber;
    };
    /**
     * textRotation
     */
    tr: {
        a: number;
        /**
         * true : 1
         * false : 0
         */
        v: BooleanNumber;
    };
    /**
     * textDirection
     */
    td: TextDirection;
    /**
     * color
     */
    cl: {
        rgb: string;
    };
    /**
     * background
     */
    bg: {
        rgb: string;
    };
    /**
     * horizontalAlignment
     */
    ht: HorizontalAlign;
    /**
     * verticalAlignment
     */
    vt: VerticalAlign;
    /**
     * wrapStrategy
     */
    tb: WrapStrategy;
    /**
     * padding
     */
    pd: {
        t: number;
        r: number;
        b: number;
        l: number;
    };
    n: null;
    /**
     * border
     */
    bd: {
        b: null;
        l: null;
        r: null;
        t: null;
    };
};
export declare const DEFAULT_SLIDE: {
    id: string;
    title: string;
    pageSize: {
        width: number;
        height: number;
    };
};
export declare const SHEET_EDITOR_UNITS: string[];
export declare const NAMED_STYLE_MAP: Record<NamedStyleType, Nullable<ITextStyle>>;
export declare const NAMED_STYLE_SPACE_MAP: Record<NamedStyleType, Nullable<IParagraphStyle>>;
export declare const PRINT_CHART_COMPONENT_KEY = "univer-sheets-chart-print-chart";
export declare const DOC_DRAWING_PRINTING_COMPONENT_KEY = "univer-docs-drawing-printing";
