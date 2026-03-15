import { IUnitRange, Nullable, Disposable, ObjectMatrix, RTree } from '@univerjs/core';
import { AstRootNode } from '../engine/ast-node';
import { FormulaDependencyTree, IFormulaDependencyTree } from '../engine/dependency/dependency-tree';
export interface IDependencyManagerService {
    dispose(): void;
    reset(): void;
    addOtherFormulaDependency(unitId: string, sheetId: string, formulaId: string, dependencyTree: IFormulaDependencyTree): void;
    addOtherFormulaDependencyMainData(formulaId: string): void;
    removeOtherFormulaDependency(unitId: string, sheetId: string, formulaId: string[]): void;
    hasOtherFormulaDataMainData(formulaId: string): boolean;
    clearOtherFormulaDependency(unitId: string, sheetId?: string): void;
    getOtherFormulaDependency(unitId: string, sheetId: string, formulaId: string): Nullable<ObjectMatrix<number>>;
    addFeatureFormulaDependency(unitId: string, sheetId: string, featureId: string, dependencyTree: FormulaDependencyTree): void;
    removeFeatureFormulaDependency(unitId: string, sheetId: string, featureIds: string[]): void;
    getFeatureFormulaDependency(unitId: string, sheetId: string, featureId: string): Nullable<number>;
    clearFeatureFormulaDependency(unitId: string, sheetId?: string): void;
    addFormulaDependency(unitId: string, sheetId: string, row: number, column: number, dependencyTree: IFormulaDependencyTree): void;
    removeFormulaDependency(unitId: string, sheetId: string, row: number, column: number): void;
    getFormulaDependency(unitId: string, sheetId: string, row: number, column: number): Nullable<number>;
    clearFormulaDependency(unitId: string, sheetId?: string): void;
    removeFormulaDependencyByDefinedName(unitId: string, definedName: string): void;
    addFormulaDependencyByDefinedName(tree: IFormulaDependencyTree, node: Nullable<AstRootNode>): void;
    addDependencyRTreeCache(tree: IFormulaDependencyTree): void;
    searchDependency(search: IUnitRange[], exceptTreeIds?: Set<number>): Set<number>;
    getLastTreeId(): number;
    getTreeById(treeId: number): Nullable<IFormulaDependencyTree>;
    getAllTree(): IFormulaDependencyTree[];
    buildDependencyTree(shouldBeBuildTrees: IFormulaDependencyTree[], dependencyTrees?: IFormulaDependencyTree[]): IFormulaDependencyTree[];
}
export declare class DependencyManagerBaseService extends Disposable implements IDependencyManagerService {
    buildDependencyTree(shouldBeBuildTrees: IFormulaDependencyTree[], dependencyTrees?: IFormulaDependencyTree[]): IFormulaDependencyTree[];
    getTreeById(treeId: number): Nullable<IFormulaDependencyTree>;
    getAllTree(): IFormulaDependencyTree[];
    protected _otherFormulaData: Map<string, Map<string, Map<string, ObjectMatrix<number>>>>;
    protected _featureFormulaData: Map<string, Map<string, Map<string, Nullable<number>>>>;
    protected _formulaData: Map<string, Map<string, ObjectMatrix<number>>>;
    protected _definedNameMap: Map<string, Map<string, Set<number>>>;
    protected _otherFormulaDataMainData: Set<string>;
    protected _dependencyRTreeCache: RTree;
    private _dependencyTreeIdLast;
    reset(): void;
    addOtherFormulaDependency(unitId: string, sheetId: string, formulaId: string, dependencyTree: IFormulaDependencyTree): void;
    removeOtherFormulaDependency(unitId: string, sheetId: string, formulaId: string[]): void;
    clearOtherFormulaDependency(unitId: string, sheetId?: string): void;
    addFeatureFormulaDependency(unitId: string, sheetId: string, featureId: string, dependencyTree: FormulaDependencyTree): void;
    removeFeatureFormulaDependency(unitId: string, sheetId: string, featureIds: string[]): void;
    clearFeatureFormulaDependency(unitId: string, sheetId?: string): void;
    addFormulaDependency(unitId: string, sheetId: string, row: number, column: number, dependencyTree: IFormulaDependencyTree): void;
    removeFormulaDependency(unitId: string, sheetId: string, row: number, column: number): void;
    clearFormulaDependency(unitId: string, sheetId?: string): void;
    removeFormulaDependencyByDefinedName(unitId: string, definedName: string): void;
    searchDependency(search: IUnitRange[], exceptTreeIds?: Set<number>): Set<number>;
    protected _restDependencyTreeId(): void;
    getOtherFormulaDependency(unitId: string, sheetId: string, formulaId: string): ObjectMatrix<number> | undefined;
    addOtherFormulaDependencyMainData(formulaId: string): void;
    hasOtherFormulaDataMainData(formulaId: string): boolean;
    protected _removeDependencyRTreeCacheById(unitId: string, sheetId: string): void;
    getFeatureFormulaDependency(unitId: string, sheetId: string, featureId: string): Nullable<number>;
    getFormulaDependency(unitId: string, sheetId: string, row: number, column: number): Nullable<number>;
    addDependencyRTreeCache(tree: IFormulaDependencyTree): void;
    getLastTreeId(): number;
    protected _addAllTreeMap(tree: IFormulaDependencyTree): void;
    protected _addDefinedName(unitId: string, definedName: string, treeId: number): void;
    addFormulaDependencyByDefinedName(tree: IFormulaDependencyTree, node: Nullable<AstRootNode>): void;
}
/**
 * Passively marked as dirty, register the reference and execution actions of the feature plugin.
 * After execution, a dirty area and calculated data will be returned,
 * causing the formula to be marked dirty again,
 * thereby completing the calculation of the entire dependency tree.
 */
export declare class DependencyManagerService extends DependencyManagerBaseService implements IDependencyManagerService {
    protected _allTreeMap: Map<number, IFormulaDependencyTree>;
    dispose(): void;
    buildDependencyTree(shouldBeBuildTrees: IFormulaDependencyTree[], dependencyTrees?: IFormulaDependencyTree[]): IFormulaDependencyTree[];
    /**
     * Build the dependency relationship between the trees.
     * @param allTrees  all FormulaDependencyTree
     * @param shouldBeBuildTrees  FormulaDependencyTree[] | FormulaDependencyTreeCache
     */
    private _buildDependencyTree;
    /**
     * Build the reverse dependency relationship between the trees.
     * @param allTrees
     * @param dependencyTrees
     */
    private _buildReverseDependency;
    /**
     * Get all FormulaDependencyTree from _otherFormulaData, _featureFormulaData, _formulaData
     * return FormulaDependencyTree[]
     */
    getAllTree(): IFormulaDependencyTree[];
    getTreeById(treeId: number): IFormulaDependencyTree | undefined;
    reset(): void;
    addOtherFormulaDependency(unitId: string, sheetId: string, formulaId: string, dependencyTree: IFormulaDependencyTree): void;
    removeOtherFormulaDependency(unitId: string, sheetId: string, formulaIds: string[]): void;
    clearOtherFormulaDependency(unitId: string, sheetId?: string): void;
    addFeatureFormulaDependency(unitId: string, sheetId: string, featureId: string, dependencyTree: FormulaDependencyTree): void;
    removeFeatureFormulaDependency(unitId: string, sheetId: string, featureIds: string[]): void;
    clearFeatureFormulaDependency(unitId: string, sheetId?: string): void;
    addFormulaDependency(unitId: string, sheetId: string, row: number, column: number, dependencyTree: IFormulaDependencyTree): void;
    removeFormulaDependency(unitId: string, sheetId: string, row: number, column: number): void;
    clearFormulaDependency(unitId: string, sheetId?: string): void;
    /**
     * Clear the dependency relationship of the tree.
     * establish the relationship between the parent and the child.
     * @param shouldBeClearTree
     */
    clearDependencyForTree(shouldBeClearTree: Nullable<IFormulaDependencyTree>): void;
    private _removeDependencyRTreeCache;
    removeFormulaDependencyByDefinedName(unitId: string, definedName: string): void;
    protected _removeAllTreeMap(treeId: Nullable<number>): void;
    protected _addAllTreeMap(tree: IFormulaDependencyTree): void;
}
export declare const IDependencyManagerService: import('@wendellhu/redi').IdentifierDecorator<DependencyManagerService>;
