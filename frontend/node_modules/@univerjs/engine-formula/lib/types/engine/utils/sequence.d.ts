import { LexerNode } from '../analysis/lexer-node';
export declare enum sequenceNodeType {
    NORMAL = 0,
    NUMBER = 1,
    STRING = 2,
    FUNCTION = 3,
    REFERENCE = 4,
    ARRAY = 5,
    DEFINED_NAME = 6
}
export interface ISequenceNode {
    nodeType: sequenceNodeType;
    token: string;
    startIndex: number;
    endIndex: number;
}
export interface ISequenceArray {
    segment: string;
    currentString: string;
    cur: number;
    currentLexerNode: LexerNode;
}
/**
 * Deserialize Sequence to text.
 * @param newSequenceNodes
 * @returns
 */
export declare function generateStringWithSequence(newSequenceNodes: Array<string | ISequenceNode>): string;
