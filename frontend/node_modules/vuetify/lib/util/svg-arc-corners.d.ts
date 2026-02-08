/*
 * Credits: Alexander Milevski https://github.com/w8r/svg-arc-corners
 */
type Point = [x: number, y: number];
export declare function simpleArc(center: Point, r: number, startAngle: number, endAngle: number): string;
export declare function roundedArc(center: Point, radius: number, startAngle: number, endAngle: number, width: number, rounding: number): string;

