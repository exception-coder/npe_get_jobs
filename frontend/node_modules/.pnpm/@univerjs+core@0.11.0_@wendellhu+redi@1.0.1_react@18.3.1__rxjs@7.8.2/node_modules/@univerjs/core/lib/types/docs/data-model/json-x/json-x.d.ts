import { Doc, JSONOp, Path } from 'ot-json1';
import { IDocumentBody, IDocumentData } from '../../../types/interfaces';
import { TextXAction } from '../text-x/action-types';
import { TPriority } from '../text-x/text-x';
import * as json1 from 'ot-json1';
export interface ISubType {
    name: string;
    id?: string;
    uri?: string;
    apply(doc: IDocumentBody, actions: TextXAction[]): IDocumentBody;
    compose(thisActions: TextXAction[], otherActions: TextXAction[]): TextXAction[];
    transform(thisActions: TextXAction[], otherActions: TextXAction[], priority: 'left' | 'right'): TextXAction[];
    invert?: (actions: TextXAction[]) => TextXAction[];
    isNoop?: (actions: TextXAction[]) => boolean;
    makeInvertible?: (actions: TextXAction[], doc: IDocumentBody) => TextXAction[];
    [k: string]: any;
}
export { json1 as JSON1, JSONOp as JSONXActions, Path as JSONXPath };
export declare class JSONX {
    static uri: string;
    private static _subTypes;
    static registerSubtype(subType: ISubType): void;
    static apply(doc: IDocumentData, actions: JSONOp): string | number | boolean | Doc[] | {
        [k: string]: Doc;
    } | null | undefined;
    static compose(thisActions: JSONOp, otherActions: JSONOp): JSONOp;
    static transform(thisActions: JSONOp, otherActions: JSONOp, priority: TPriority): json1.JSONOpList | null | undefined;
    static transformPosition(thisActions: JSONOp, index: number, priority?: TPriority): number;
    static invertWithDoc(actions: JSONOp, doc: IDocumentData): JSONOp;
    static isNoop(actions: JSONOp): boolean;
    private static _instance;
    static getInstance(): JSONX;
    removeOp(path: Path, value?: any): JSONOp;
    moveOp(from: Path, to: Path): JSONOp;
    insertOp(path: Path, value: any): JSONOp;
    replaceOp(path: Path, oldVal: any, newVal: any): JSONOp;
    editOp(subOp: TextXAction[], path?: string[]): JSONOp;
}
