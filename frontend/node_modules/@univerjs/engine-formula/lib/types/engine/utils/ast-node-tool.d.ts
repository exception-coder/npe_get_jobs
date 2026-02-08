import { Nullable } from '@univerjs/core';
import { BaseAstNode } from '../ast-node/base-ast-node';
export interface IExecuteAstNodeData {
    node: Nullable<BaseAstNode>;
    refOffsetX: number;
    refOffsetY: number;
}
export declare function getAstNodeTopParent(node: BaseAstNode): Nullable<BaseAstNode>;
export declare function generateExecuteAstNodeData(node: BaseAstNode, refOffsetX?: number, refOffsetY?: number): {
    node: BaseAstNode;
    refOffsetX: number;
    refOffsetY: number;
};
