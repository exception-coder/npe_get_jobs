import { ISequenceNode } from '@univerjs/engine-formula';
export type INode = (string | ISequenceNode);
export declare const useFormulaToken: () => (text: string) => (string | ISequenceNode)[];
