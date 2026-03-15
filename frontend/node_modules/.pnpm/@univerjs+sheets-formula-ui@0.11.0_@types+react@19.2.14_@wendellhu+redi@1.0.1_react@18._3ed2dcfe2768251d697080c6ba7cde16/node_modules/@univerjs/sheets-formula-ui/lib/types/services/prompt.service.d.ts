import { Direction, IDisposable, IContextService } from '@univerjs/core';
import { IFunctionInfo, ISequenceNode } from '@univerjs/engine-formula';
import { ISearchItem } from '@univerjs/sheets-formula';
import { Observable } from 'rxjs';
/** If the formula prompt is visible. */
export declare const FORMULA_PROMPT_ACTIVATED = "FORMULA_PROMPT_ACTIVATED";
export interface ISearchFunctionOperationParams {
    /**
     * show SearchFunction Component or not
     */
    visible: boolean;
    /**
     * function search text
     */
    searchText: string;
    /**
     * function list
     */
    searchList: ISearchItem[];
}
export interface IHelpFunctionOperationParams {
    /**
     * show HelpFunction Component or not
     */
    visible: boolean;
    /**
     * function param index
     */
    paramIndex: number;
    /**
     * function info
     */
    functionInfo: IFunctionInfo;
}
export interface INavigateParam {
    direction: Direction.UP | Direction.DOWN;
}
export interface IFormulaPromptService {
    /**
     * listen search function open
     */
    search$: Observable<ISearchFunctionOperationParams>;
    /**
     * open search function
     */
    search(param: ISearchFunctionOperationParams): void;
    /**
     * listen help function open
     */
    help$: Observable<IHelpFunctionOperationParams>;
    /**
     * open help function
     */
    help(param: IHelpFunctionOperationParams): void;
    /**
     * listen navigate shortcut, UP and DOWN
     */
    navigate$: Observable<INavigateParam>;
    /**
     * set navigate shortcut
     */
    navigate(param: INavigateParam): void;
    /**
     * listen accept shortcut, TAB/ENTER
     */
    accept$: Observable<boolean>;
    /**
     * set accept shortcut
     */
    accept(param: boolean): void;
    /**
     * accept formula name
     */
    acceptFormulaName$: Observable<string>;
    /**
     * set accept formula name
     */
    acceptFormulaName(param: string): void;
    isSearching(): boolean;
    isHelping(): boolean;
    dispose(): void;
    getSequenceNodes(): Array<string | ISequenceNode>;
    setSequenceNodes(nodes: Array<string | ISequenceNode>): void;
    clearSequenceNodes(): void;
    getCurrentSequenceNodeIndex(strIndex: number): number;
    getCurrentSequenceNodeByIndex(nodeIndex: number): string | ISequenceNode;
    getCurrentSequenceNode(strIndex: number): string | ISequenceNode;
    updateSequenceRef(nodeIndex: number, refString: string): void;
    insertSequenceRef(index: number, refString: string): void;
    insertSequenceString(index: number, content: string): void;
    enableLockedSelectionChange(): void;
    disableLockedSelectionChange(): void;
    isLockedSelectionChange(): boolean;
    enableLockedSelectionInsert(): void;
    disableLockedSelectionInsert(): void;
    isLockedSelectionInsert(): boolean;
}
export declare const IFormulaPromptService: import('@wendellhu/redi').IdentifierDecorator<FormulaPromptService>;
export declare class FormulaPromptService implements IFormulaPromptService, IDisposable {
    private readonly _contextService;
    private readonly _search$;
    private readonly _help$;
    private readonly _navigate$;
    private readonly _accept$;
    private readonly _acceptFormulaName$;
    readonly search$: Observable<ISearchFunctionOperationParams>;
    readonly help$: Observable<IHelpFunctionOperationParams>;
    readonly navigate$: Observable<INavigateParam>;
    readonly accept$: Observable<boolean>;
    readonly acceptFormulaName$: Observable<string>;
    private _searching;
    private _helping;
    private _sequenceNodes;
    private _isLockedOnSelectionChangeRefString;
    private _isLockedOnSelectionInsertRefString;
    constructor(_contextService: IContextService);
    dispose(): void;
    search(param: ISearchFunctionOperationParams): void;
    isSearching(): boolean;
    help(param: IHelpFunctionOperationParams): void;
    isHelping(): boolean;
    navigate(param: INavigateParam): void;
    accept(param: boolean): void;
    acceptFormulaName(param: string): void;
    getSequenceNodes(): (string | ISequenceNode)[];
    setSequenceNodes(nodes: Array<string | ISequenceNode>): void;
    clearSequenceNodes(): void;
    getCurrentSequenceNode(strIndex: number): string | ISequenceNode;
    getCurrentSequenceNodeByIndex(nodeIndex: number): string | ISequenceNode;
    /**
     * Query the text coordinates in the sequenceNodes and determine the actual insertion index.
     * @param strIndex
     */
    getCurrentSequenceNodeIndex(strIndex: number): number;
    /**
     * Synchronize the reference text based on the changes of the selection.
     * @param nodeIndex
     * @param refString
     */
    updateSequenceRef(nodeIndex: number, refString: string): void;
    /**
     * When the cursor is on the right side of a formula token,
     * you can add reference text to the formula by drawing a selection.
     * @param index
     * @param refString
     */
    insertSequenceRef(index: number, refString: string): void;
    /**
     * Insert a string at the cursor position in the text corresponding to the sequenceNodes.
     * @param index
     * @param content
     */
    insertSequenceString(index: number, content: string): void;
    enableLockedSelectionChange(): void;
    disableLockedSelectionChange(): void;
    isLockedSelectionChange(): boolean;
    enableLockedSelectionInsert(): void;
    disableLockedSelectionInsert(): void;
    isLockedSelectionInsert(): boolean;
}
