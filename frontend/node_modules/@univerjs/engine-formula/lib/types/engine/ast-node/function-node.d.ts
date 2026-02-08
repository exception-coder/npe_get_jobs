import { BaseFunction } from '../../functions/base-function';
import { LexerNode } from '../analysis/lexer-node';
import { Injector } from '@univerjs/core';
import { AstNodePromiseType } from '../../basics/common';
import { FormulaDataModel } from '../../models/formula-data.model';
import { IFormulaCurrentConfigService } from '../../services/current-data.service';
import { IDefinedNamesService } from '../../services/defined-names.service';
import { IFunctionService } from '../../services/function.service';
import { IFormulaRuntimeService } from '../../services/runtime.service';
import { BaseAstNode } from './base-ast-node';
import { BaseAstNodeFactory } from './base-ast-node-factory';
import { NodeType } from './node-type';
export declare class FunctionNode extends BaseAstNode {
    private _functionExecutor;
    private _currentConfigService;
    private _runtimeService;
    private _definedNamesService;
    private _formulaDataModel;
    constructor(token: string, _functionExecutor: BaseFunction, _currentConfigService: IFormulaCurrentConfigService, _runtimeService: IFormulaRuntimeService, _definedNamesService: IDefinedNamesService, _formulaDataModel: FormulaDataModel);
    get nodeType(): NodeType;
    executeAsync(): Promise<AstNodePromiseType>;
    execute(): void;
    isFunctionExecutorArgumentsIgnoreNumberPattern(): boolean;
    /**
     * Compatibility handling for special functions.
     */
    private _compatibility;
    /**
     * The LOOKUP function follows the following rules when dealing with vectors of different sizes:
     *    If the lookup_vector is larger than the result_vector,
     *    the LOOKUP function will ignore the extra portion of the lookup_vector and only use the portion of the result_vector that is the same size as the lookup_vector for lookup and returning results.
     *    If the lookup_vector is smaller than the result_vector,
     *    the LOOKUP function will continue using the last value of the result_vector for lookup and returning results after the last value of the lookup_vector.
     */
    private _lookupCompatibility;
    /**
     * Transform the result of a custom function to a NodeValueType.
     */
    private _handleCustomResult;
    private _handleAddressFunction;
    private _mapVariantsToValues;
    private _calculate;
    private _calculateAsync;
    private _setDefinedNamesForFunction;
    private _setRefInfo;
    private _setRefData;
    private _setLocale;
    private _setSheetsInfo;
    private _setFilteredOutRows;
}
export declare class ErrorFunctionNode extends BaseAstNode {
    constructor(token?: string);
    get nodeType(): NodeType;
    executeAsync(): Promise<AstNodePromiseType>;
    execute(): void;
}
export declare class FunctionNodeFactory extends BaseAstNodeFactory {
    private readonly _functionService;
    private readonly _currentConfigService;
    private readonly _runtimeService;
    private readonly _definedNamesService;
    private readonly _injector;
    private readonly _formulaDataModel;
    constructor(_functionService: IFunctionService, _currentConfigService: IFormulaCurrentConfigService, _runtimeService: IFormulaRuntimeService, _definedNamesService: IDefinedNamesService, _injector: Injector, _formulaDataModel: FormulaDataModel);
    get zIndex(): number;
    create(token: string): BaseAstNode;
    checkAndCreateNodeType(param: LexerNode | string): BaseAstNode | undefined;
    private _isParentUnionNode;
}
