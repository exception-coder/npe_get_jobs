import { Nullable } from '@univerjs/core';
export interface ILineBreakRule {
    (codePoint: number, lastCodePoint: Nullable<number>, className: number): boolean;
}
export declare class Rule {
    private _rules;
    add(key: string, rule: ILineBreakRule): void;
    shouldBreak(codePoint: number, lastCodePoint: Nullable<number>, className: number): boolean;
}
