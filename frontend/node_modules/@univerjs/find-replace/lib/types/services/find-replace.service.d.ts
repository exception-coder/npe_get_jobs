import { IDisposable, Nullable, Disposable, ICommandService, IContextService, Injector, IUniverInstanceService } from '@univerjs/core';
import { Observable, BehaviorSubject } from 'rxjs';
export type FindProgressFn = () => void;
export interface IFindComplete<T extends IFindMatch = IFindMatch> {
    results: T[];
}
export interface IFindMatch<T = unknown> {
    provider: string;
    unitId: string;
    range: T;
    /** Indicates if the match could be replaced. */
    replaceable?: boolean;
}
export interface IFindMoveParams {
    /** Go to next (previous) matching in a loop. */
    loop?: boolean;
    /** If the the selection is on the match and then should stay on the match. */
    stayIfOnMatch?: boolean;
    /** Go the next selection ignoring the current selection's position. */
    ignoreSelection?: boolean;
    /**
     * If this param is true, we should only change matching position without performing focusing.
     * This usually happens when "moving" is triggered when a document's content changes.
     */
    noFocus?: boolean;
}
export interface IReplaceAllResult {
    success: number;
    failure: number;
}
export declare abstract class FindModel extends Disposable {
    abstract readonly unitId: string;
    /**
     * Find model should emit new matches from this observable if they changed no matter due to incremental
     * or document's content changes.
     */
    abstract readonly matchesUpdate$: Observable<IFindMatch[]>;
    abstract readonly activelyChangingMatch$: Observable<IFindMatch>;
    abstract getMatches(): IFindMatch[];
    abstract moveToNextMatch(params?: IFindMoveParams): IFindMatch | null;
    abstract moveToPreviousMatch(params?: IFindMoveParams): IFindMatch | null;
    /** Replace the currently focused matching if there is one. */
    abstract replace(replaceString: string): Promise<boolean>;
    /**
     * Replace all matches. This method would return how many
     */
    abstract replaceAll(replaceString: string): Promise<IReplaceAllResult>;
    abstract focusSelection(): void;
}
/**
 * A provider should be implemented by a business to provide the find results.
 */
export interface IFindReplaceProvider {
    find(query: IFindQuery): Promise<FindModel[]>;
    terminate(): void;
}
type IReplaceableMatch = IFindMatch & {
    replaceable: boolean;
};
/**
 * This service works as a core of the find & replace feature.
 */
export interface IFindReplaceService {
    readonly stateUpdates$: Observable<Partial<IFindReplaceState>>;
    readonly state$: Observable<IFindReplaceState>;
    readonly currentMatch$: Observable<Nullable<IFindMatch>>;
    /** An observable value of all matches those could be replaced. */
    readonly replaceables$: Observable<IReplaceableMatch[]>;
    readonly focusSignal$: Observable<void>;
    readonly revealed: boolean;
    readonly replaceRevealed: boolean;
    /**
     * Register a find replace provider to the service. The provider is the actual bearer to
     * perform the find in different kinds of documents or different environments.
     * @param provider the find replace provider
     */
    registerFindReplaceProvider(provider: IFindReplaceProvider): IDisposable;
    /**
     * Get find string from the internal state.
     */
    getFindString(): string;
    /**
     * Start a find & replace session.
     * @returns execution result
     */
    start(revealReplace?: boolean): boolean;
    /**
     * Terminate a find session and clear all caches.
     */
    terminate(): void;
    /**
     * Start searching with the current conditions.
     */
    find(): void;
    focusFindInput(): void;
    revealReplace(): void;
    changeFindString(value: string): void;
    changeInputtingFindString(value: string): void;
    changeReplaceString(value: string): void;
    changeCaseSensitive(sensitive: boolean): void;
    changeMatchesTheWholeCell(wholeCell: boolean): void;
    changeFindScope(scope: FindScope): void;
    changeFindDirection(direction: FindDirection): void;
    changeFindBy(findBy: FindBy): void;
    moveToNextMatch(): void;
    moveToPreviousMatch(): void;
    replace(): Promise<boolean>;
    replaceAll(): Promise<IReplaceAllResult>;
    /**
     * Focus the selection of the current match.
     */
    focusSelection(): void;
    getProviders(): Set<IFindReplaceProvider>;
}
export declare const IFindReplaceService: import('@wendellhu/redi').IdentifierDecorator<IFindReplaceService>;
/**
 * The find query object with finding options.
 */
export interface IFindQuery extends Pick<IFindReplaceState, 'replaceRevealed' | 'findString' | 'caseSensitive' | 'findBy' | 'findDirection' | 'findScope' | 'matchesTheWholeCell'> {
}
/**
 * This class stores find replace results and provides methods to perform replace or something.
 *
 * It **only** live through a find-replace session and would be disposed when the user
 * close the find replace dialog (considered as session being terminated).
 */
export declare class FindReplaceModel extends Disposable {
    private readonly _state;
    private readonly _providers;
    private readonly _univerInstanceService;
    private readonly _commandService;
    readonly currentMatch$: BehaviorSubject<Nullable<IFindMatch<unknown>>>;
    readonly replaceables$: BehaviorSubject<IReplaceableMatch[]>;
    /** All find models returned by providers. */
    private _findModels;
    /** The find model that the current match is from. */
    private _matchingModel;
    private _matches;
    private _currentSearchingDisposables;
    get searched(): boolean;
    constructor(_state: FindReplaceState, _providers: Set<IFindReplaceProvider>, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService);
    dispose(): void;
    start(): Promise<IFindComplete>;
    focusSelection(): void;
    /** Call this method to start a `searching`. */
    private _startSearching;
    /** Terminate the current searching session, when searching string is empty. */
    private _stopSearching;
    private _subscribeToModelsChanges;
    replace(): Promise<boolean>;
    replaceAll(): Promise<IReplaceAllResult>;
    getCurrentMatch(): Nullable<IFindMatch>;
    private _markMatch;
    moveToNextMatch(): IFindMatch<unknown> | null | undefined;
    private _moveToNextUnitMatch;
    moveToPreviousMatch(): IFindMatch<unknown> | null | undefined;
    private _moveToInitialMatch;
}
export declare enum FindDirection {
    /** Default. */
    ROW = "row",
    COLUMN = "column"
}
export declare enum FindBy {
    VALUE = "value",
    FORMULA = "formula"
}
export declare enum FindScope {
    /** Default. */
    SUBUNIT = "subunit",
    /** Find the scope in the current unit. */
    UNIT = "unit"
}
export interface IFindReplaceState {
    revealed: boolean;
    /** The string user inputs in the input box. */
    findString: string;
    inputtingFindString: string;
    replaceString?: string;
    /** Indicates if is in replacing mode. */
    replaceRevealed: boolean;
    /** The currently focused match's index (1-based). */
    matchesPosition: number;
    /** The number of all matches. */
    matchesCount: number;
    /** Indicates if an user triggered finding process is progressed. */
    findCompleted: boolean;
    caseSensitive: boolean;
    matchesTheWholeCell: boolean;
    findDirection: FindDirection;
    findScope: FindScope;
    findBy: FindBy;
}
export declare function createInitFindReplaceState(): IFindReplaceState;
/**
 * This class stores find replace options state. These state are stored
 * here instead of the React component so we can change state from
 * operations.
 */
export declare class FindReplaceState {
    private readonly _stateUpdates$;
    readonly stateUpdates$: Observable<Partial<IFindReplaceState>>;
    private readonly _state$;
    readonly state$: Observable<IFindReplaceState>;
    get state(): IFindReplaceState;
    private _findString;
    private _inputtingFindString;
    private _replaceString;
    private _revealed;
    private _replaceRevealed;
    private _matchesPosition;
    private _matchesCount;
    private _caseSensitive;
    private _matchesTheWholeCell;
    private _findDirection;
    private _findScope;
    private _findBy;
    private _findCompleted;
    get inputtingFindString(): string;
    get findString(): string;
    get revealed(): boolean;
    get replaceRevealed(): boolean;
    get matchesPosition(): number;
    get matchesCount(): number;
    get replaceString(): string;
    get caseSensitive(): boolean;
    get matchesTheWholeCell(): boolean;
    get findDirection(): FindDirection;
    get findScope(): FindScope;
    get findBy(): FindBy;
    get findCompleted(): boolean;
    changeState(changes: Partial<IFindReplaceState>): void;
}
export declare class FindReplaceService extends Disposable implements IFindReplaceService {
    private readonly _injector;
    private readonly _contextService;
    private readonly _providers;
    private readonly _state;
    private _model;
    private readonly _currentMatch$;
    readonly currentMatch$: Observable<Nullable<IFindMatch<unknown>>>;
    private readonly _replaceables$;
    readonly replaceables$: Observable<IReplaceableMatch[]>;
    private readonly _focusSignal$;
    readonly focusSignal$: Observable<void>;
    get stateUpdates$(): Observable<Partial<IFindReplaceState>>;
    get state$(): Observable<IFindReplaceState>;
    get revealed(): boolean;
    get replaceRevealed(): boolean;
    constructor(_injector: Injector, _contextService: IContextService);
    dispose(): void;
    getProviders(): Set<IFindReplaceProvider>;
    getCurrentMatch(): Nullable<IFindMatch>;
    getFindString(): string;
    changeFindString(findString: string): void;
    focusFindInput(): void;
    changeInputtingFindString(value: string): void;
    changeReplaceString(replaceString: string): void;
    changeMatchesTheWholeCell(matchesTheWholeCell: boolean): void;
    changeCaseSensitive(caseSensitive: boolean): void;
    changeFindBy(findBy: FindBy): void;
    changeFindScope(scope: FindScope): void;
    changeFindDirection(direction: FindDirection): void;
    moveToNextMatch(): void;
    moveToPreviousMatch(): void;
    replace(): Promise<boolean>;
    replaceAll(): Promise<IReplaceAllResult>;
    revealReplace(): void;
    focusSelection(): void;
    start(revealReplace?: boolean): boolean;
    find(): void;
    terminate(): void;
    registerFindReplaceProvider(provider: IFindReplaceProvider): IDisposable;
    private _toggleRevealReplace;
    private _toggleDisplayRawFormula;
}
export {};
