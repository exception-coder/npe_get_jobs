import { RangeThemeStyle } from '../range-theme-util';
export declare const lightRangeThemeBuilder: (baseName: string, header: string, color: string) => RangeThemeStyle;
export declare const middleRangeThemeBuilder: (baseName: string, rowHeader: string, colHeader: string) => RangeThemeStyle;
export declare const darkRangeThemeBuilder: (baseName: string, rowHeader: string, firstRow: string, secondRow: string) => RangeThemeStyle;
export declare const buildInThemes: RangeThemeStyle[];
