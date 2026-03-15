import { LexerNode } from '../analysis/lexer-node';
import { BaseAstNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class AstRootNode extends BaseAstNode {
    get nodeType(): NodeType;
    execute(): void;
}
export declare class AstRootNodeFactory extends BaseAstNodeFactory {
    get zIndex(): number;
    checkAndCreateNodeType(param: LexerNode | string): AstRootNode | undefined;
}
