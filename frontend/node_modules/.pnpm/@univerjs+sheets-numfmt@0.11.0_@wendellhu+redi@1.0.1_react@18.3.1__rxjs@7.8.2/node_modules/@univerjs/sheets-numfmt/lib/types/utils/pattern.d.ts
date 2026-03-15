import { INumfmtLocaleTag } from '@univerjs/core';
import { FormatType } from '@univerjs/sheets';
export declare const getPatternType: (pattern: string) => FormatType;
interface IPatternPreview {
    result: string;
    color?: string;
}
export declare const getPatternPreview: (pattern: string, value: number, locale?: INumfmtLocaleTag) => IPatternPreview;
export declare const getPatternPreviewIgnoreGeneral: (pattern: string, value: number, locale?: INumfmtLocaleTag) => IPatternPreview;
export {};
