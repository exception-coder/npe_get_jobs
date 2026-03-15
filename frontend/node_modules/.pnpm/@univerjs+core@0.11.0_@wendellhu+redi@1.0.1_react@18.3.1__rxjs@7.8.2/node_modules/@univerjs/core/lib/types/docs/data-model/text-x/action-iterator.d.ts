import { TextXAction, TextXActionType } from './action-types';
export declare class ActionIterator {
    private _actions;
    private _index;
    private _offset;
    constructor(_actions: TextXAction[]);
    hasNext(): boolean;
    next(length?: number): TextXAction;
    peek(): TextXAction;
    peekLength(): number;
    peekType(): TextXActionType;
    rest(): TextXAction[];
}
