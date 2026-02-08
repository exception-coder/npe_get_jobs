import { Nullable } from '@univerjs/core';
import { DocBackground, Documents, Engine, IRenderManagerService, Scene } from '@univerjs/engine-render';
export interface IDocObjectParam {
    document: Documents;
    docBackground: DocBackground;
    scene: Scene;
    engine: Engine;
}
export declare function getEditorObject(unitId: Nullable<string>, renderManagerService: IRenderManagerService): Nullable<IDocObjectParam>;
