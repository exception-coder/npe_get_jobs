import { Nullable, DataStreamTreeNodeType } from '@univerjs/core';
export declare class DataStreamTreeNode {
    nodeType: DataStreamTreeNodeType;
    content?: string | undefined;
    children: DataStreamTreeNode[];
    parent: Nullable<DataStreamTreeNode>;
    startIndex: number;
    endIndex: number;
    blocks: number[];
    constructor(nodeType: DataStreamTreeNodeType, content?: string | undefined);
    static create(nodeType: DataStreamTreeNodeType, content?: string): DataStreamTreeNode;
    dispose(): void;
    getProps(): {
        children: DataStreamTreeNode[];
        parent: Nullable<DataStreamTreeNode>;
        startIndex: number;
        endIndex: number;
        nodeType: DataStreamTreeNodeType;
        content: string | undefined;
    };
    addBlocks(blocks: number[]): void;
    setIndexRange(startIndex: number, endIndex: number): void;
    insertText(text: string, insertIndex: number): void;
    exclude(index: number): boolean;
    plus(len: number): void;
    selfPlus(len: number, index?: number): void;
    split(index: number): {
        firstNode: DataStreamTreeNode;
        lastNode: DataStreamTreeNode;
    } | undefined;
    getPositionInParent(): number;
    remove(): void;
    minus(startIndex: number, endIndex: number): void;
    merge(node: DataStreamTreeNode): void;
    private _addIndexForBlock;
    private _resetBlocks;
}
