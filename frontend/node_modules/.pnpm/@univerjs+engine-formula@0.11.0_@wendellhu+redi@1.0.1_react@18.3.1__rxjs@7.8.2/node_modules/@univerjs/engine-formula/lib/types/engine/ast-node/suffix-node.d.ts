import { BaseFunction } from '../../functions/base-function';
import { IFormulaCurrentConfigService } from '../../services/current-data.service';
import { IFunctionService } from '../../services/function.service';
import { Lexer } from '../analysis/lexer';
import { LexerNode } from '../analysis/lexer-node';
import { BaseAstNode, ErrorNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class SuffixNode extends BaseAstNode {
    private _currentConfigService;
    private _lexer;
    private _operatorString;
    private _functionExecutor?;
    constructor(_currentConfigService: IFormulaCurrentConfigService, _lexer: Lexer, _operatorString: string, _functionExecutor?: BaseFunction | undefined);
    get nodeType(): NodeType;
    execute(): void;
    private _handlerPound;
}
export declare class SuffixNodeFactory extends BaseAstNodeFactory {
    private readonly _functionService;
    private readonly _lexer;
    private readonly _currentConfigService;
    constructor(_functionService: IFunctionService, _lexer: Lexer, _currentConfigService: IFormulaCurrentConfigService);
    get zIndex(): number;
    checkAndCreateNodeType(param: LexerNode | string): ErrorNode | SuffixNode | undefined;
}
