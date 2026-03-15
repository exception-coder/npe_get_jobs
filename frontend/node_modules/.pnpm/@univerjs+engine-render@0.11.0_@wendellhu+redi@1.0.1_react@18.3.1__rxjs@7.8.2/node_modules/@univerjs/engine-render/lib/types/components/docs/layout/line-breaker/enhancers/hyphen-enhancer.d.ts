import { Nullable } from '@univerjs/core';
import { Break } from '../break';
import { IBreakPoints, LineBreaker } from '../line-breaker';
import { Hyphen } from '../../hyphenation/hyphen';
import { Lang } from '../../hyphenation/lang';
export declare class LineBreakerHyphenEnhancer implements IBreakPoints {
    private _lineBreaker;
    private _hyphen;
    private _lang;
    private _doNotHyphenateCaps;
    private _curBreak;
    private _nextBreak;
    private _isInWord;
    private _word;
    private _hyphenIndex;
    private _hyphenSlice;
    content: string;
    constructor(_lineBreaker: LineBreaker, _hyphen: Hyphen, _lang: Lang, _doNotHyphenateCaps?: boolean);
    nextBreakPoint(): Nullable<Break>;
}
