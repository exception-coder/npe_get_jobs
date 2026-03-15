import { Nullable } from '@univerjs/core';
import { BaseFunction } from '../../functions/base-function';
import { IFunctionService } from '../../services/function.service';
import { IFormulaRuntimeService } from '../../services/runtime.service';
import { LexerNode } from '../analysis/lexer-node';
import { BaseAstNode, ErrorNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class PrefixNode extends BaseAstNode {
    private _runtimeService;
    private _operatorString;
    private _functionExecutor?;
    constructor(_runtimeService: IFormulaRuntimeService, _operatorString: string, _functionExecutor?: Nullable<BaseFunction>);
    get nodeType(): NodeType;
    execute(): void;
    private _handlerAT;
}
export declare class PrefixNodeFactory extends BaseAstNodeFactory {
    private readonly _functionService;
    private readonly _runtimeService;
    constructor(_functionService: IFunctionService, _runtimeService: IFormulaRuntimeService);
    get zIndex(): number;
    checkAndCreateNodeType(param: LexerNode | string): ErrorNode | PrefixNode | undefined;
}
