import { Nullable } from '@univerjs/core';
import { IBreakPoints, LineBreaker } from '../line-breaker';
import { Break } from '../break';
export declare class LineBreakerLinkEnhancer implements IBreakPoints {
    private _lineBreaker;
    private _curBreak;
    private _nextBreak;
    private _isInLink;
    private _link;
    private _index;
    private _linkSlice;
    content: string;
    constructor(_lineBreaker: LineBreaker);
    nextBreakPoint(): Nullable<Break>;
}
