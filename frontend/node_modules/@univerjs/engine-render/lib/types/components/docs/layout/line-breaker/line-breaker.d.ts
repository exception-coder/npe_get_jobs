import { Nullable } from '@univerjs/core';
import { ILineBreakRule } from './rule';
import { Break } from './break';
interface ILineBreakExtension {
    (breaker: LineBreaker): void;
}
export interface IBreakPoints {
    nextBreakPoint(): Nullable<Break>;
}
export declare class LineBreaker implements IBreakPoints {
    content: string;
    private _pos;
    private _lastPos;
    private _curClass;
    private _codePoint;
    private _lastCodePoint;
    private _nextClass;
    private _LB8a;
    private _LB21a;
    private _LB30a;
    private _rule;
    constructor(content: string);
    use(extension: ILineBreakExtension): this;
    addRule(key: string, rule: ILineBreakRule): this;
    nextBreakPoint(): Break | null;
    private _getNextCodePoint;
    private _nextCharClass;
    private _getSimpleBreak;
    private _getPairTableBreak;
}
export {};
