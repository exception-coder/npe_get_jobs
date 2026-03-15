import { Nullable } from '@univerjs/core';
import { Vector2 } from './vector2';
export declare const INITIAL_Path2: Vector2[];
export declare class Path2 {
    private _lines;
    constructor(_lines?: Vector2[]);
    intersection(lines: Vector2[]): Nullable<Vector2[]>;
    private _intersection;
}
