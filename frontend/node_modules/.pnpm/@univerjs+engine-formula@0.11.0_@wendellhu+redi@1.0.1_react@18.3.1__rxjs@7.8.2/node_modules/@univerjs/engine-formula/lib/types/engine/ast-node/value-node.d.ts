import { LexerNode } from '../analysis/lexer-node';
import { BaseAstNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class ValueNode extends BaseAstNode {
    constructor(operatorString: string);
    get nodeType(): NodeType;
    execute(): void;
}
export declare class ValueNodeFactory extends BaseAstNodeFactory {
    get zIndex(): number;
    _checkValueNode(token: string): BaseAstNode | undefined;
    create(param: string): BaseAstNode;
    checkAndCreateNodeType(param: LexerNode | string): BaseAstNode | undefined;
}
