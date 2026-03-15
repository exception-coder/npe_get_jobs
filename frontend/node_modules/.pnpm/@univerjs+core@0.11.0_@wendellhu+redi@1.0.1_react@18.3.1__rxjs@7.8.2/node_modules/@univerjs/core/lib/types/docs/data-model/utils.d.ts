import { IStyleBase, ITextRotation } from '../../types/interfaces';
export declare const DEFAULT_FONTFACE_PLANE = "\"Helvetica Neue\", Helvetica, Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Heiti SC\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", sans-serif";
export interface IDocumentSkeletonFontStyle {
    fontString: string;
    fontSize: number;
    originFontSize: number;
    fontFamily: string;
    fontCache: string;
}
export declare function getFontStyleString(textStyle?: IStyleBase): IDocumentSkeletonFontStyle;
export declare function getBaselineOffsetInfo(_fontFamily: string, fontSize: number): {
    sbr: number;
    sbo: number;
    spr: number;
    spo: number;
};
export declare function convertTextRotation(textRotation?: ITextRotation): {
    centerAngle: number;
    vertexAngle: number;
};
