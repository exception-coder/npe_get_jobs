import { IRange, IUnitRange, Nullable, Disposable, RTree } from '@univerjs/core';
import { IFeatureDirtyRangeType, IFormulaData, IFormulaDataItem, IOtherFormulaData, IUnitData } from '../../basics/common';
import { IFeatureCalculationManagerParam, IFeatureCalculationManagerService } from '../../services/feature-calculation-manager.service';
import { FunctionNode } from '../ast-node';
import { BaseAstNode } from '../ast-node/base-ast-node';
import { IExecuteAstNodeData } from '../utils/ast-node-tool';
import { IFormulaDependencyTree, FormulaDependencyTree, FormulaDependencyTreeVirtual } from './dependency-tree';
import { IFormulaCurrentConfigService } from '../../services/current-data.service';
import { IDependencyManagerService } from '../../services/dependency-manager.service';
import { IOtherFormulaManagerService } from '../../services/other-formula-manager.service';
import { IFormulaRuntimeService } from '../../services/runtime.service';
import { Lexer } from '../analysis/lexer';
import { AstTreeBuilder } from '../analysis/parser';
import { Interpreter } from '../interpreter/interpreter';
export declare function generateRandomDependencyTreeId(dependencyManagerService: IDependencyManagerService): number;
export interface IFormulaDependencyGenerator {
    generate(): Promise<IFormulaDependencyTree[]>;
}
export declare const IFormulaDependencyGenerator: import('@wendellhu/redi').IdentifierDecorator<IFormulaDependencyGenerator>;
export declare class FormulaDependencyGenerator extends Disposable {
    protected readonly _currentConfigService: IFormulaCurrentConfigService;
    protected readonly _runtimeService: IFormulaRuntimeService;
    protected readonly _otherFormulaManagerService: IOtherFormulaManagerService;
    private readonly _featureCalculationManagerService;
    private readonly _interpreter;
    protected readonly _astTreeBuilder: AstTreeBuilder;
    protected readonly _lexer: Lexer;
    protected readonly _dependencyManagerService: IDependencyManagerService;
    private _updateRangeFlattenCache;
    protected _dependencyRTreeCacheForAddressFunction: RTree;
    constructor(_currentConfigService: IFormulaCurrentConfigService, _runtimeService: IFormulaRuntimeService, _otherFormulaManagerService: IOtherFormulaManagerService, _featureCalculationManagerService: IFeatureCalculationManagerService, _interpreter: Interpreter, _astTreeBuilder: AstTreeBuilder, _lexer: Lexer, _dependencyManagerService: IDependencyManagerService);
    dispose(): void;
    generate(): Promise<(FormulaDependencyTree | FormulaDependencyTreeVirtual)[]>;
    private _dependencyFeatureCalculation;
    private _clearFeatureCalculationNode;
    /**
     * TODO @DR-Univer: The next step will be to try changing the incoming dirtyRanges to an array, thus avoiding conversion.
     * @param dirtyRanges
     * @returns
     */
    protected _convertDirtyRangesToUnitRange(dirtyRanges: IFeatureDirtyRangeType): IUnitRange[];
    private _intersectFeatureCalculation;
    private _getExistTreeList;
    private _isCyclicUtil;
    protected _checkIsCycleDependency(treeList: IFormulaDependencyTree[]): boolean;
    /**
     * Generate nodes for the dependency tree, where each node contains all the reference data ranges included in each formula.
     * @param formulaData
     */
    protected _generateTreeList(formulaData: IFormulaData, otherFormulaData: IOtherFormulaData, unitData: IUnitData): Promise<IFormulaDependencyTree[]>;
    protected _registerFeatureFormulas(treeList: FormulaDependencyTree[]): void;
    protected _getFeatureFormulaTree(featureId: string, treeId: Nullable<number>, params: IFeatureCalculationManagerParam): FormulaDependencyTree;
    protected _registerOtherFormulas(otherFormulaData: IOtherFormulaData, otherFormulaDataKeys: string[], treeList: IFormulaDependencyTree[]): void;
    protected _getFirstCellOfRange(ranges: IRange[]): {
        firstRow: number;
        firstColumn: number;
    };
    protected _registerFormulas(formulaDataKeys: string[], formulaData: IFormulaData, unitData: IUnitData, treeList: IFormulaDependencyTree[]): void;
    protected _createFDtree(unitId: string, sheetId: string, row: number, column: number, unitData: IUnitData, formulaDataItem: IFormulaDataItem): FormulaDependencyTree;
    protected _createVirtualFDtree(tree: FormulaDependencyTree, formulaDataItem: IFormulaDataItem): FormulaDependencyTreeVirtual;
    /**
     * Break down the dirty areas into ranges for subsequent matching.
     */
    protected _updateRangeFlatten(): void;
    private _addFlattenCache;
    private _isPreCalculateNode;
    private _nodeTraversalRef;
    private _nodeTraversalReferenceFunction;
    private _executeNode;
    /**
     * Calculate the range required for collection in advance,
     * including references and location functions (such as OFFSET, INDIRECT, INDEX, etc.).
     * @param node
     */
    protected _getRangeListByNode(nodeData: IExecuteAstNodeData): Promise<IUnitRange[]>;
    protected _getAddressFunctionNodeList(node: Nullable<BaseAstNode>): FunctionNode[];
    protected _getTreeNode(tree: IFormulaDependencyTree): import('../ast-node').AstRootNode;
    protected _buildDirtyRangesByAddressFunction(treeDependencyCache: RTree, tree: IFormulaDependencyTree): Promise<void>;
    private _executedAddressFunctionNodeIds;
    protected _calculateListByFunctionRefNode(treeList: IFormulaDependencyTree[]): Promise<void>;
    private _calculateAddressFunction;
    private _calculateAddressFunctionRuntimeData;
    private _buildTreeNodeById;
    private _searchDependencyByAddressFunction;
    protected _getTreeById(treeId: number): Nullable<IFormulaDependencyTree>;
    private _addDependencyTreeByAddressFunction;
    /**
     * Calculate the range required for collection in advance,
     * including references and location functions (such as OFFSET, INDIRECT, INDEX, etc.).
     * @param node
     */
    protected _getRangeListByFunctionRefNode(referenceFunctionList: FunctionNode[], refOffsetX: number, refOffsetY: number): Promise<IUnitRange[]>;
    /**
     * Build a formula dependency tree based on the dependency relationships.
     * @param treeList
     */
    protected _getUpdateTreeListAndMakeDependency(treeList: IFormulaDependencyTree[]): IFormulaDependencyTree[];
    private _includeTreeFeature;
    private _includeOtherFormula;
    private _detectForcedRecalculationNode;
    private _detectForcedRecalculationNodeRecursion;
    /**
     * Determine whether all ranges of the current node exist within the dirty area.
     * If they are within the dirty area, return true, indicating that this node needs to be calculated.
     * @param tree
     */
    protected _includeTree(tree: IFormulaDependencyTree, node: BaseAstNode): boolean;
    /**
     * Generate the final formula calculation order array by traversing the dependency tree established via depth-first search.
     * @param treeList
     */
    protected _calculateRunList(treeList: IFormulaDependencyTree[]): (FormulaDependencyTree | FormulaDependencyTreeVirtual)[];
}
