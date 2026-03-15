import { Nullable } from '@univerjs/core';
import { BaseAstNode } from '../ast-node/base-ast-node';
import { Interpreter } from '../interpreter/interpreter';
import { FunctionVariantType, AsyncObject } from '../reference-object/base-reference-object';
import { PrimitiveValueType } from './primitive-object';
import { BaseValueObject } from './base-value-object';
export declare class LambdaValueObjectObject extends BaseValueObject {
    private _lambdaNode;
    private _interpreter;
    private _lambdaPrivacyVarKeys;
    static create(lambdaNode: BaseAstNode, interpreter: Interpreter, lambdaPrivacyVarKeys: string[]): LambdaValueObjectObject;
    private _lambdaPrivacyValueMap;
    constructor(_lambdaNode: Nullable<BaseAstNode>, _interpreter: Nullable<Interpreter>, _lambdaPrivacyVarKeys: string[]);
    dispose(): void;
    isLambda(): boolean;
    execute(...variants: FunctionVariantType[]): BaseValueObject | AsyncObject;
    /**
     * Execute custom lambda function, handle basic types
     * @param variants
     */
    executeCustom(...variants: PrimitiveValueType[]): BaseValueObject | AsyncObject;
    private _setLambdaNodeValue;
    private _setLambdaPrivacyValueMap;
    getLambdaPrivacyVarKeys(): string[];
}
