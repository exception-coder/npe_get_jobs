import { Nullable } from '@univerjs/core';
import { IObjectFullState } from './basics/interfaces';
import { IViewportInfo, Vector2 } from './basics/vector2';
import { UniverRenderingContext } from './context';
import { Scene } from './scene';
import { BaseObject } from './base-object';
import { RENDER_CLASS_TYPE } from './basics/const';
export declare class SceneViewer extends BaseObject {
    private _subScenes;
    private _activeSubScene;
    private _allowSelectedClipElement;
    constructor(key?: string, props?: IObjectFullState);
    get classType(): RENDER_CLASS_TYPE;
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    getSubScenes(): Map<string, Scene>;
    getActiveSubScene(): Nullable<Scene>;
    getSubScene(sceneKey: string): Scene | undefined;
    addSubScene(scene: Scene): void;
    removeSubScene(key: string): void;
    activeSubScene(key: Nullable<string>): void;
    enableSelectedClipElement(): void;
    disableSelectedClipElement(): void;
    allowSelectedClipElement(): boolean;
    pick(coord: Vector2): Nullable<BaseObject | Scene>;
    dispose(): void;
    private _initialProps;
}
