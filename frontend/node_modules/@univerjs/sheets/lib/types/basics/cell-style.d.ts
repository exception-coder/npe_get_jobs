import { ICellData, IStyleData, Nullable, Styles } from '@univerjs/core';
/**
 *
 * @param styles
 * @param oldVal
 * @param newVal
 */
export declare function handleStyle(styles: Styles, oldVal: ICellData, newVal: ICellData): void;
/**
 * Convert old style data for storage
 * @param style
 * @param oldStyle
 * @param newStyle
 */
export declare function transformStyle(oldStyle: Nullable<IStyleData>, newStyle: Nullable<IStyleData>): Nullable<IStyleData>;
