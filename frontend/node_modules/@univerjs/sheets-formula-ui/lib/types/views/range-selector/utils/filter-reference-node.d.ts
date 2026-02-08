import { ISequenceNode } from '@univerjs/engine-formula';
export type INode = (string | ISequenceNode);
export declare const isComma: (e: INode) => boolean;
export declare const isReference: (e: INode) => boolean | undefined;
export declare const filterReferenceNode: (nodes: INode[]) => INode[];
