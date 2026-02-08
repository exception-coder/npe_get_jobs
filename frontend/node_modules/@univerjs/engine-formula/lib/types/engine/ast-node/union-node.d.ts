import { IFunctionService } from '../../services/function.service';
import { LexerNode } from '../analysis/lexer-node';
import { BaseAstNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class UnionNode extends BaseAstNode {
    constructor(operatorString: string);
    get nodeType(): NodeType;
    execute(): void;
    private _unionFunction;
}
export declare class UnionNodeFactory extends BaseAstNodeFactory {
    private readonly _functionService;
    constructor(_functionService: IFunctionService);
    get zIndex(): number;
    create(param: string): BaseAstNode;
    checkAndCreateNodeType(param: LexerNode | string): BaseAstNode | undefined;
}
