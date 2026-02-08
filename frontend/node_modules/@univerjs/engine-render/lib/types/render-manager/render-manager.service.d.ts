import { Dependency, DependencyIdentifier, IDisposable, Nullable, UnitModel, UnitType, Disposable, Injector, IUniverInstanceService, ThemeService, UniverInstanceType } from '@univerjs/core';
import { Observable } from 'rxjs';
import { BaseObject } from '../base-object';
import { DocComponent } from '../components/docs/doc-component';
import { SheetComponent } from '../components/sheets/sheet-component';
import { Slide } from '../components/slides/slide';
import { IRender, RenderUnit } from './render-unit';
import { Engine } from '../engine';
export type RenderComponentType = SheetComponent | DocComponent | Slide | BaseObject;
export interface IRenderManagerService extends IDisposable {
    addRender(unitId: string, renderer: IRender): void;
    /**
     * create renderUnit & init deps from renderDependencies by renderUnit's type.
     * @param unitId
     * @returns renderUnit:IRender
     */
    createRender(unitId: string): IRender;
    removeRender(unitId: string): void;
    /**
     * Get RenderUnit By Id, RenderUnit implements IRender
     * @param unitId
     */
    getRenderById(unitId: string): Nullable<IRender>;
    /**
     * Get RenderUnit By Id, RenderUnit implements IRender
     * @param unitId
     */
    getRenderUnitById(unitId: string): Nullable<IRender>;
    getAllRenderersOfType(type: UniverInstanceType): RenderUnit[];
    getRenderAll(): Map<string, IRender>;
    defaultEngine: Engine;
    /** @deprecated */
    createRender$: Observable<string>;
    /** @deprecated this design is very very weird! Remove it. */
    create(unitId: string): void;
    created$: Observable<IRender>;
    disposed$: Observable<string>;
    has(unitId: string): boolean;
    /**
     * add dep to _renderDependencies(type, dep)
     * @param type
     * @param dep
     */
    registerRenderModule<T extends UnitModel>(type: UnitType, dep: Dependency<T>): IDisposable;
}
export declare class RenderManagerService extends Disposable implements IRenderManagerService {
    protected readonly _injector: Injector;
    protected readonly _univerInstanceService: IUniverInstanceService;
    private readonly _themeService;
    private _defaultEngine;
    private _renderMap;
    private readonly _createRender$;
    /** @deprecated */
    readonly createRender$: Observable<string>;
    private readonly _renderCreated$;
    readonly created$: Observable<IRender>;
    private readonly _renderDisposed$;
    readonly disposed$: Observable<string>;
    get defaultEngine(): Engine;
    private readonly _renderDependencies;
    constructor(_injector: Injector, _univerInstanceService: IUniverInstanceService, _themeService: ThemeService);
    dispose(): void;
    registerRenderModules(type: UnitType, deps: Dependency[]): IDisposable;
    /**
     * add dep to _renderDependencies(type, dep)
     * @param type
     * @param depCtor
     */
    registerRenderModule(type: UnitType, depCtor: Dependency): IDisposable;
    /**
     * get render dependencies from _renderDependencies
     * @param type
     * @returns Dependency[]
     */
    private _getRenderDepsByType;
    private _initDarkModeListener;
    create(unitId: string): void;
    /**
     * create renderUnit & init deps from renderDependencies
     * @param unitId
     * @returns renderUnit:IRender
     */
    createRender(unitId: string): IRender;
    getAllRenderersOfType(type: UniverInstanceType): RenderUnit[];
    /**
     * init deps by injector.get(dep), and injector derives from renderer.
     * @param renderer
     * @param deps
     */
    private _tryAddRenderDependencies;
    /**
     * create renderUnit & init deps from renderDependencies by renderUnit's type
     * @param unitId
     * @param engine
     * @param isMainScene
     * @returns renderUnit:IRender
     */
    protected _createRender(unitId: string, engine: Engine, isMainScene?: boolean): IRender;
    addRender(unitId: string, renderUnit: IRender): void;
    private _addRenderUnit;
    removeRender(unitId: string): void;
    has(unitId: string): boolean;
    /**
     * @deprecated use getRenderUnitById instead
     * Get RenderUnit from this._renderMap.
     * @param unitId
     * @returns RenderUnit, aka IRender
     */
    getRenderById(unitId: string): Nullable<IRender>;
    getRenderUnitById(unitId: string): Nullable<IRender>;
    getRenderAll(): Map<string, IRender>;
    private _disposeItem;
}
export declare const IRenderManagerService: import('@wendellhu/redi').IdentifierDecorator<IRenderManagerService>;
export declare function isDisposable(thing: unknown): thing is IDisposable;
export declare function getCurrentTypeOfRenderer(type: UniverInstanceType, instanceService: IUniverInstanceService, renderManageService: IRenderManagerService): Nullable<IRender>;
export declare function withCurrentTypeOfRenderer<T>(type: UniverInstanceType, id: DependencyIdentifier<T>, instanceService: IUniverInstanceService, renderManagerService: IRenderManagerService): Nullable<T>;
