import { IFormulaCurrentConfigService } from '../../services/current-data.service';
import { IFunctionService } from '../../services/function.service';
import { IFormulaRuntimeService } from '../../services/runtime.service';
import { LexerNode } from '../analysis/lexer-node';
import { ReferenceObjectType } from '../utils/value-object';
import { BaseAstNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class ReferenceNode extends BaseAstNode {
    private _currentConfigService;
    private _runtimeService;
    private _referenceObjectType;
    private _isPrepareMerge;
    private _refOffsetX;
    private _refOffsetY;
    constructor(_currentConfigService: IFormulaCurrentConfigService, _runtimeService: IFormulaRuntimeService, operatorString: string, _referenceObjectType: ReferenceObjectType, _isPrepareMerge?: boolean);
    get nodeType(): NodeType;
    execute(): void;
    setRefOffset(x?: number, y?: number): void;
    getRefOffset(): {
        x: number;
        y: number;
    };
}
export declare class ReferenceNodeFactory extends BaseAstNodeFactory {
    private readonly _currentConfigService;
    private readonly _formulaRuntimeService;
    private readonly _functionService;
    constructor(_currentConfigService: IFormulaCurrentConfigService, _formulaRuntimeService: IFormulaRuntimeService, _functionService: IFunctionService);
    get zIndex(): number;
    checkAndCreateNodeType(param: LexerNode | string): ReferenceNode | undefined;
    private _checkParentIsUnionOperator;
}
