// @ts-nocheck
/* eslint-disable */
import { Point } from '../VSparkline.js';
// import { checkCollinear, getDistance, moveTo } from './math'
/**
 * From https://github.com/unsplash/react-trend/blob/master/src/helpers/DOM.helpers.js#L18
 */
export declare function genPath(points: Point[], radius: number, fill?: boolean, height?: number): string;
/**
 * https://en.wikipedia.org/wiki/Collinearity
 * x=(x1+x2)/2
 * y=(y1+y2)/2
 */
export declare function checkCollinear(p0: Point, p1: Point, p2: Point): boolean;
export declare function getDistance(p1: Point, p2: Point): number;
export declare function moveTo(to: Point, from: Point, radius: number): {
    x: any;
    y: any;
};
