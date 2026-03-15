import { BorderStyleTypes } from '../enum/border-style-types';
import { IColorStyle } from './i-style-data';
/**
 * ShapeProperties
 */
export interface IShapeProperties {
    shapeBackgroundFill: IColorStyle;
    radius?: number;
    outline?: IOutline;
}
export interface IOutline {
    outlineFill: IColorStyle;
    weight: number;
    dashStyle?: BorderStyleTypes;
}
