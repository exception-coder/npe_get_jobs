import { BaseAstNode } from './base-ast-node';
import { NodeType } from './node-type';
export declare class NullNode extends BaseAstNode {
    private _operatorString;
    constructor(_operatorString: string);
    get nodeType(): NodeType;
    execute(): void;
}
