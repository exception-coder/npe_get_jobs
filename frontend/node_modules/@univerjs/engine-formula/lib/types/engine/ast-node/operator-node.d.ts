import { BaseFunction } from '../../functions/base-function';
import { IFunctionService } from '../../services/function.service';
import { LexerNode } from '../analysis/lexer-node';
import { BaseAstNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class OperatorNode extends BaseAstNode {
    private _functionExecutor;
    constructor(operatorString: string, _functionExecutor: BaseFunction);
    get nodeType(): NodeType;
    execute(): void;
}
export declare class OperatorNodeFactory extends BaseAstNodeFactory {
    private readonly _functionService;
    constructor(_functionService: IFunctionService);
    get zIndex(): number;
    create(param: string): BaseAstNode;
    checkAndCreateNodeType(param: LexerNode | string): BaseAstNode | undefined;
}
