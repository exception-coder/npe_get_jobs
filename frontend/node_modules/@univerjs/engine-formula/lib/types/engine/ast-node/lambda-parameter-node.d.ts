import { LambdaPrivacyVarType, BaseAstNode } from './base-ast-node';
import { LexerNode } from '../analysis/lexer-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class LambdaParameterNode extends BaseAstNode {
    private _lambdaParameter;
    private _currentLambdaPrivacyVar;
    constructor(token: string, _lambdaParameter: string, _currentLambdaPrivacyVar: LambdaPrivacyVarType);
    getLambdaParameter(): string;
    getCurrentLambdaPrivacyVar(): LambdaPrivacyVarType;
    get nodeType(): NodeType;
    execute(): void;
}
export declare class LambdaParameterNodeFactory extends BaseAstNodeFactory {
    get zIndex(): number;
    create(param: LexerNode): BaseAstNode;
    checkAndCreateNodeType(param: LexerNode | string): BaseAstNode | undefined;
}
