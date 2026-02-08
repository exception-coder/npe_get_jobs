import { IRange, IUnitRange, Nullable } from '@univerjs/core';
import { IDirtyUnitSheetNameMap, IFeatureDirtyRangeType, IRuntimeUnitDataType, IUnitExcludedCell } from '../../basics/common';
import { IFormulaDirtyData } from '../../services/current-data.service';
import { IAllRuntimeData } from '../../services/runtime.service';
import { AstRootNode, FunctionNode } from '../ast-node';
export declare enum FDtreeStateType {
    DEFAULT = 0,
    ADDED = 1,
    SKIP = 2
}
export declare enum FormulaDependencyTreeType {
    NORMAL_FORMULA = 0,
    OTHER_FORMULA = 1,
    FEATURE_FORMULA = 2
}
declare class FormulaDependencyTreeCalculator {
    private _state;
    resetState(): void;
    setAdded(): void;
    isAdded(): boolean;
    setSkip(): void;
    isSkip(): boolean;
    treeId: number;
    children: Set<number>;
    parents: Set<number>;
    pushChildren(tree: FormulaDependencyTreeCalculator): void;
    hasChildren(treeId: number): boolean;
    private _pushParent;
}
type GetDirtyDataType = Nullable<(dirtyData: IFormulaDirtyData, runtimeData: IAllRuntimeData) => {
    runtimeCellData: IRuntimeUnitDataType;
    dirtyRanges: IFeatureDirtyRangeType;
}>;
export type IFormulaDependencyTree = FormulaDependencyTree | FormulaDependencyTreeVirtual;
export declare class FormulaDependencyTreeVirtual extends FormulaDependencyTreeCalculator {
    refTree: Nullable<FormulaDependencyTree>;
    refOffsetX: number;
    refOffsetY: number;
    isCache: boolean;
    isDirty: boolean;
    addressFunctionNodes: FunctionNode[];
    get isVirtual(): boolean;
    get row(): number;
    get column(): number;
    get rowCount(): number;
    get columnCount(): number;
    get unitId(): string;
    get subUnitId(): string;
    get formula(): string;
    get nodeData(): {
        node: Nullable<AstRootNode>;
        refOffsetX: number;
        refOffsetY: number;
    };
    get node(): Nullable<AstRootNode>;
    dispose(): void;
    get rangeList(): {
        unitId: string;
        sheetId: string;
        range: IRange;
    }[];
    toRTreeItem(): IUnitRange[];
    inRangeData(range: IRange): boolean;
    dependencySheetName(dirtyUnitSheetNameMap?: IDirtyUnitSheetNameMap): boolean;
    isExcludeRange(unitExcludedCell: Nullable<IUnitExcludedCell>): boolean;
    getDirtyData: GetDirtyDataType;
    featureId: Nullable<string>;
    get formulaId(): Nullable<string>;
}
/**
 * A dependency tree, capable of calculating mutual dependencies,
 * is used to determine the order of formula calculations.
 */
export declare class FormulaDependencyTree extends FormulaDependencyTreeCalculator {
    isCache: boolean;
    featureId: Nullable<string>;
    featureDirtyRanges: IUnitRange[];
    refOffsetX: number;
    refOffsetY: number;
    type: FormulaDependencyTreeType;
    formulaId: Nullable<string>;
    subUnitId: string;
    unitId: string;
    rangeList: IUnitRange[];
    formula: string;
    row: number;
    column: number;
    rowCount: number;
    columnCount: number;
    isDirty: boolean;
    node: Nullable<AstRootNode>;
    addressFunctionNodes: FunctionNode[];
    constructor(treeId: number);
    get isVirtual(): boolean;
    get nodeData(): {
        node: Nullable<AstRootNode>;
        refOffsetX: number;
        refOffsetY: number;
    };
    toJson(): {
        formula: string;
        refOffsetX: number;
        refOffsetY: number;
    };
    getDirtyData: GetDirtyDataType;
    dispose(): void;
    inRangeData(range: IRange): boolean;
    dependencySheetName(dirtyUnitSheetNameMap?: IDirtyUnitSheetNameMap): boolean;
    isExcludeRange(unitExcludedCell: Nullable<IUnitExcludedCell>): boolean;
    /**
     * Add the range corresponding to the current ast node.
     * @param range
     */
    pushRangeList(ranges: IUnitRange[]): void;
    shouldBePushRangeList(): boolean;
    toRTreeItem(): IUnitRange[];
}
export {};
