import { Nullable } from '../../shared/types';
import { BorderStyleTypes } from '../enum/border-style-types';
import { BaselineOffset, BooleanNumber, HorizontalAlign, TextDecoration, TextDirection, VerticalAlign, WrapStrategy } from '../enum/text-style';
import { ThemeColorType } from '../enum/theme-color-type';
/**
 * Properties of text decoration
 */
export interface ITextDecoration {
    /**
     * show
     */
    s: BooleanNumber;
    /**
     * color is follow the font color. the default value is TRUE, it's also TRUE if it is undefined. the cl has no effect when `c` is TRUE.
     */
    c?: BooleanNumber;
    /**
     * color
     */
    cl?: IColorStyle;
    /**
     * lineType
     */
    t?: TextDecoration;
}
/**
 * RGB color or theme color
 */
export interface IColorStyle {
    rgb?: Nullable<string>;
    th?: ThemeColorType;
}
/**
 * Format of RBGA color
 */
export interface IColor {
    r: number;
    g: number;
    b: number;
    a?: number;
}
/**
 * Style properties of border
 */
export interface IBorderStyleData {
    s: BorderStyleTypes;
    cl: IColorStyle;
}
/**
 * Style properties of top, bottom, left and right border
 *
 * TLBR = 'tlbr', //START_TOP_LEFT_END_BOTTOM_RIGHT
 * TLBC = 'tlbc', // START_TOP_LEFT_END_BOTTOM_CENTER

 * TLMR = 'tlmr', // START_TOP_LEFT_END_MIDDLE_RIGHT

 * BLTR = 'bltr', // START_BOTTOM_LEFT_END_TOP_RIGHT

 * MLTR = 'mltr', // START_MIDDLE_LEFT_END_TOP_RIGHT

 * BCTR = 'bctr', // START_BOTTOM_CENTER_END_TOP_RIGHT
 */
export interface IBorderData {
    t?: Nullable<IBorderStyleData>;
    r?: Nullable<IBorderStyleData>;
    b?: Nullable<IBorderStyleData>;
    l?: Nullable<IBorderStyleData>;
    tl_br?: Nullable<IBorderStyleData>;
    tl_bc?: Nullable<IBorderStyleData>;
    tl_mr?: Nullable<IBorderStyleData>;
    bl_tr?: Nullable<IBorderStyleData>;
    ml_tr?: Nullable<IBorderStyleData>;
    bc_tr?: Nullable<IBorderStyleData>;
}
export interface ITextRotation {
    /**
     * angle
     */
    a: number;
    /**
     * vertical
     * true : 1
     * false : 0
     */
    v?: BooleanNumber;
}
/**
 * Top,right,bottom,left padding
 */
export interface IPaddingData {
    t?: number;
    r?: number;
    b?: number;
    l?: number;
}
/**
 * Basics properties of cell style
 */
export interface IStyleBase {
    /**
     * fontFamily
     */
    ff?: Nullable<string>;
    /**
     * fontSize
     *
     * pt
     */
    fs?: number;
    /**
     * italic
     * 0: false
     * 1: true
     */
    it?: BooleanNumber;
    /**
     * bold
     * 0: false
     * 1: true
     */
    bl?: BooleanNumber;
    /**
     * underline
     */
    ul?: ITextDecoration;
    /**
     * bottomBorerLine
     */
    bbl?: ITextDecoration;
    /**
     * strikethrough
     */
    st?: ITextDecoration;
    /**
     * overline
     */
    ol?: ITextDecoration;
    /**
     * background
     */
    bg?: Nullable<IColorStyle>;
    /**
     * border
     */
    bd?: Nullable<IBorderData>;
    /**
     * foreground
     */
    cl?: Nullable<IColorStyle>;
    /**
     * (Subscript 下标 /Superscript上标 Text)
     */
    va?: Nullable<BaselineOffset>;
    /**
     * Numfmt pattern
     */
    n?: Nullable<{
        pattern: string;
    }>;
}
/**
 * Properties of cell style
 */
export interface IStyleData extends IStyleBase {
    /**
     * textRotation
     */
    tr?: Nullable<ITextRotation>;
    /**
     * textDirection @TODO
     * @description The `td` property has not been fully implemented yet.
     */
    td?: Nullable<TextDirection>;
    /**
     * horizontalAlignment
     */
    ht?: Nullable<HorizontalAlign>;
    /**
     * verticalAlignment
     */
    vt?: Nullable<VerticalAlign>;
    /**
     * wrapStrategy
     */
    tb?: Nullable<WrapStrategy>;
    /**
     * padding
     */
    pd?: Nullable<IPaddingData>;
}
