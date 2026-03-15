import { ITextRange } from '../../../sheets/typedef';
import { IDocumentBody } from '../../../types/interfaces/i-document-data';
import { TextXAction } from './action-types';
import { UpdateDocsAttributeType } from '../../../shared/command-enum';
export type TPriority = 'left' | 'right';
export declare class TextX {
    static id: string;
    static uri: string;
    static apply(doc: IDocumentBody, actions: TextXAction[]): IDocumentBody;
    static compose(thisActions: TextXAction[], otherActions: TextXAction[]): TextXAction[];
    /**
     * |(this↓ \| other→) | **insert** | **retain** | **delete** |
     * | ---------------- | ---------- | ---------- | ---------- |
     * |    **insert**    |   Case 1   |   Case 2   |   Case 2   |
     * |    **retain**    |   Case 1   |   Case 5   |   Case 4   |
     * |    **delete**    |   Case 1   |   Case 3   |   Case 3   |
     *
     * Case 1: When the other action type is an insert operation,
     *         the insert operation is retained regardless of the type of action this action
     * Case 2: When this action type is an insert operation and the other action type is a
     *         non-insert operation, you need to retain the length of this action insert
     * Case 3: When this action is a delete operation, there are two scenarios:
     *      1) When other is a delete operation, since it is a delete operation, this has
     *         already been deleted, so the target does not need to be in delete, and it can
     *         be continued directly
     *      2) When other is the retain operation, although this action delete occurs first,
     *         the delete priority is higher, so the delete operation is retained, and the origin
     *         delete has been applied, so it is directly continued
     * Case 4: other is the delete operation, this is the retain operation, and the target delete operation
     *         is kept
     * Case 5: When both other and this are retain operations
     *      1) If the other body attribute does not exist, directly retain length
     *      2) If the other body property exists, then execute the TransformBody logic to override it
     */
    static transform(thisActions: TextXAction[], otherActions: TextXAction[], priority?: TPriority): TextXAction[];
    static _transform(thisActions: TextXAction[], otherActions: TextXAction[], priority?: TPriority): TextXAction[];
    /**
     * Used to transform selection. Why not named transformSelection?
     * Because Univer Doc supports multiple Selections in one document, user need to encapsulate transformSelections at the application layer.
     */
    static transformPosition(thisActions: TextXAction[], index: number, priority?: boolean): number;
    static isNoop(actions: TextXAction[]): boolean;
    static invert(actions: TextXAction[]): TextXAction[];
    static makeInvertible(actions: TextXAction[], doc: IDocumentBody): TextXAction[];
    private _actions;
    insert(len: number, body: IDocumentBody): this;
    retain(len: number, body?: IDocumentBody, coverType?: UpdateDocsAttributeType): this;
    delete(len: number): this;
    empty(): this;
    serialize(): TextXAction[];
    push(...args: TextXAction[]): this;
    protected trimEndUselessRetainAction(): this;
}
export type TextXSelection = TextX & {
    selections?: ITextRange[];
};
