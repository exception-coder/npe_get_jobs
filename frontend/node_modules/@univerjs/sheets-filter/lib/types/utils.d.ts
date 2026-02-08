import { IMutationInfo, Nullable } from '@univerjs/core';
interface ILine {
    start: number;
    end: number;
}
export declare function lineIntersect(line1: ILine, line2: ILine): boolean;
export declare function lineContains(line1: ILine, line2: ILine): boolean;
export declare function objectsShaker<T>(target: Nullable<T>[], isEqual: (o1: T, o2: T) => boolean): T[];
export declare function mergeSetFilterCriteria(mutations: IMutationInfo[]): IMutationInfo<object>[];
export {};
