import { DocumentDataModel, IUniverInstanceService, Nullable } from '@univerjs/core';
import { DocBackground, Documents, Engine, IRenderContext, IRenderManagerService, Scene } from '@univerjs/engine-render';
export interface IDocObjectParam {
    document: Documents;
    docBackground: DocBackground;
    scene: Scene;
    engine: Engine;
}
export declare function neoGetDocObject(renderContext: IRenderContext<DocumentDataModel>): {
    document: Documents;
    docBackground: DocBackground;
    scene: Scene;
    engine: Engine;
};
/** @deprecated After migrating to `RenderUnit`, use `neoGetDocObject` instead. */
export declare function getDocObject(univerInstanceService: IUniverInstanceService, renderManagerService: IRenderManagerService): Nullable<IDocObjectParam>;
export declare function getDocObjectById(unitId: string, renderManagerService: IRenderManagerService): Nullable<IDocObjectParam>;
