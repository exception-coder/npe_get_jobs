import { Nullable, Disposable } from '@univerjs/core';
import { BaseAstNode } from '../ast-node/base-ast-node';
import { FunctionVariantType } from '../reference-object/base-reference-object';
import { IExecuteAstNodeData } from '../utils/ast-node-tool';
import { PreCalculateNodeType } from '../utils/node-type';
import { IFormulaRuntimeService } from '../../services/runtime.service';
export declare class Interpreter extends Disposable {
    private readonly _runtimeService;
    constructor(_runtimeService: IFormulaRuntimeService);
    executeAsync(nodeData: IExecuteAstNodeData): Promise<FunctionVariantType>;
    execute(nodeData: IExecuteAstNodeData): FunctionVariantType;
    executePreCalculateNode(node: PreCalculateNodeType): Nullable<FunctionVariantType>;
    checkAsyncNode(node: Nullable<BaseAstNode>): boolean;
    private _checkAsyncNode;
    private _executeAsync;
    private _execute;
}
