import { IFormulaRuntimeService } from '../../services/runtime.service';
import { LexerNode } from '../analysis/lexer-node';
import { Interpreter } from '../interpreter/interpreter';
import { BaseAstNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class LambdaNode extends BaseAstNode {
    private _lambdaId;
    private _interpreter;
    private _lambdaPrivacyVarKeys;
    private _isNotEmpty;
    constructor(token: string, _lambdaId: string, _interpreter: Interpreter, _lambdaPrivacyVarKeys: string[]);
    get nodeType(): NodeType;
    setNotEmpty(state?: boolean): void;
    isEmptyParamFunction(): boolean;
    isFunctionParameter(): boolean;
    getLambdaId(): string;
    execute(): void;
}
export declare class LambdaNodeFactory extends BaseAstNodeFactory {
    private readonly _runtimeService;
    private readonly _interpreter;
    constructor(_runtimeService: IFormulaRuntimeService, _interpreter: Interpreter);
    get zIndex(): number;
    create(param: LexerNode): BaseAstNode;
    checkAndCreateNodeType(param: LexerNode | string): BaseAstNode | undefined;
    private _updateLambdaStatement;
}
