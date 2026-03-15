import { Dependency, DependencyIdentifier, IDisposable, Nullable, UnitModel, UnitType, UniverInstanceType, Disposable, Injector } from '@univerjs/core';
import { Observable } from 'rxjs';
import { Engine } from '../engine';
import { Scene } from '../scene';
import { RenderComponentType } from './render-manager.service';
/**
 * Public interface of a {@link RenderUnit}.
 *
 * @property {string} unitId - The id of the RenderUnit.
 */
export interface IRender {
    unitId: string;
    type: UniverInstanceType;
    engine: Engine;
    scene: Scene;
    mainComponent: Nullable<RenderComponentType>;
    components: Map<string, RenderComponentType>;
    isMainScene: boolean;
    isThumbNail?: boolean;
    /**
     * Whether the render unit is activated. It should emit value when subscribed immediately.
     * When created, the render unit is activated by default.
     */
    activated$: Observable<boolean>;
    with<T>(dependency: DependencyIdentifier<T>): T;
    getRenderContext?(): IRenderContext;
    /**
     * Deactivate the render unit, means the render unit would be freezed and not updated,
     * even removed from the webpage. However, the render unit is still in the memory and
     * could be activated again.
     */
    deactivate(): void;
    /**
     * Activate the render unit, means the render unit would be updated and rendered.
     */
    activate(): void;
}
/**
 * Every render module should implement this interface.
 */
export interface IRenderModule extends IDisposable {
}
/**
 * Necessary context for a render module.This interface would be the first argument of render modules' constructor
 * functions.
 */
export interface IRenderContext<T extends UnitModel = UnitModel> extends Omit<IRender, 'with'> {
    unit: T;
    type: UnitType;
}
/**
 * This class is necessary for Univer to render several units in the same webpage. It encapsulates the rendering
 * context and rendering modules for a specific unit.
 */
export declare class RenderUnit extends Disposable implements IRender {
    readonly isRenderUnit: boolean;
    private readonly _activated$;
    readonly activated$: Observable<boolean>;
    get unitId(): string;
    get type(): UnitType;
    private readonly _injector;
    private _renderContext;
    set isMainScene(is: boolean);
    get isMainScene(): boolean;
    set engine(engine: Engine);
    get engine(): Engine;
    set mainComponent(component: Nullable<RenderComponentType>);
    get mainComponent(): Nullable<RenderComponentType>;
    set scene(scene: Scene);
    get scene(): Scene;
    get components(): Map<string, RenderComponentType>;
    constructor(init: Pick<IRenderContext, 'engine' | 'scene' | 'isMainScene' | 'unit'>, parentInjector: Injector);
    dispose(): void;
    /**
     * Get a dependency from the RenderUnit's injector.
     */
    with<T>(dependency: DependencyIdentifier<T>): T;
    /**
     * Add render dependencies to the RenderUnit's injector. Note that the dependencies would be initialized immediately
     * after being added.
     */
    addRenderDependencies(dependencies: Dependency[]): void;
    private _initDependencies;
    getRenderContext(): IRenderContext;
    activate(): void;
    deactivate(): void;
}
