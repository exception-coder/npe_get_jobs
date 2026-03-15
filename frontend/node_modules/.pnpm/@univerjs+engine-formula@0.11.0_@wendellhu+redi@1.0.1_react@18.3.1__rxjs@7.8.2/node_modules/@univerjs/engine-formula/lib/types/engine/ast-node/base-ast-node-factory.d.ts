import { Nullable } from '@univerjs/core';
import { LexerNode } from '../analysis/lexer-node';
import { BaseAstNode } from './base-ast-node';
export declare const DEFAULT_AST_NODE_FACTORY_Z_INDEX = 100;
export declare abstract class BaseAstNodeFactory {
    get zIndex(): number;
    dispose(): void;
    create(param: LexerNode | string, currentRow?: number, currentColumn?: number): BaseAstNode;
    abstract checkAndCreateNodeType(param: LexerNode | string): Nullable<BaseAstNode>;
}
