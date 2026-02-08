import { Nullable } from '@univerjs/core';
import { LambdaPrivacyVarType } from '../ast-node/base-ast-node';
interface LexerNodeJson {
    token: string;
    children: Array<LexerNodeJson | string>;
}
export declare class LexerNode {
    private _parent;
    private _token;
    private _children;
    private _lambdaId;
    private _functionDefinitionPrivacyVar;
    private _lambdaParameter;
    private _startIndex;
    private _endIndex;
    private _definedNames;
    dispose(): void;
    getDefinedNames(): string[];
    getStartIndex(): number;
    getLambdaId(): Nullable<string>;
    setLambdaId(lambdaId: string): void;
    getFunctionDefinitionPrivacyVar(): Nullable<LambdaPrivacyVarType>;
    setLambdaPrivacyVar(lambdaPrivacyVar: LambdaPrivacyVarType): void;
    getLambdaParameter(): string;
    setLambdaParameter(lambdaParameter: string): void;
    getParent(): Nullable<LexerNode>;
    setParent(lexerNode: LexerNode): void;
    getChildren(): (string | LexerNode)[];
    setChildren(children: Array<LexerNode | string>): void;
    addChildren(children: LexerNode | string): void;
    addChildrenFirst(children: LexerNode | string): void;
    getToken(): string;
    setToken(token: string): void;
    setIndex(st: number, ed: number): void;
    setDefinedNames(definedNames: Array<string>): void;
    hasDefinedNames(): boolean;
    replaceChild(lexerNode: LexerNode, newLexerNode: LexerNode): void;
    changeToParent(newParentLexerNode: LexerNode): void;
    removeChild(lexerNode: LexerNode): void;
    serialize(): {
        token: string;
        st: number;
        ed: number;
        children: (string | LexerNodeJson)[];
    };
    private _getIndexInParent;
}
export {};
