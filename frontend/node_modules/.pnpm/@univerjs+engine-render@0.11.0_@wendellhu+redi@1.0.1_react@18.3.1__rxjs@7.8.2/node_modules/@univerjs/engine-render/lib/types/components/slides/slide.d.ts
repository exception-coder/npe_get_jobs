import { Nullable, EventSubject } from '@univerjs/core';
import { UniverRenderingContext } from '../../context';
import { Scene } from '../../scene';
import { SceneViewer } from '../../scene-viewer';
export declare enum SLIDE_NAVIGATION_KEY {
    LEFT = "__slideNavigationLeft__",
    RIGHT = "__slideNavigationRight__"
}
export declare class Slide extends SceneViewer {
    slideChangePageByNavigation$: EventSubject<Nullable<string>>;
    subSceneChanged$: EventSubject<Scene>;
    private _navigationEnabled;
    activeFirstPage(): void;
    /**
     * add pageScene to this._subScenes
     * @param pageScene
     */
    addPageScene(pageScene: Scene): void;
    changePage(id?: string): void;
    hasPage(key: string): Scene | undefined;
    addNavigation(): void;
    removeNavigation(): void;
    enableNav(): void;
    disableNav(): void;
    hiddenNav(): void;
    showNav(): void;
    renderToThumb(mainCtx: UniverRenderingContext, pageId: string, scaleX?: number, scaleY?: number): void;
    private _getSubScenesIndex;
    private _addNavTrigger;
    private _getArrowColor;
}
