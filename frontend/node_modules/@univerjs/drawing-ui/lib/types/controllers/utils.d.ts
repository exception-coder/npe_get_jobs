import { IDrawingSearch, IUniverInstanceService, Nullable } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { BaseObject, Scene } from '@univerjs/engine-render';
export declare function insertGroupObject(objectParam: IDrawingSearch, object: BaseObject, scene: Scene, drawingManagerService: IDrawingManagerService): void;
export declare function getCurrentUnitInfo(currentUniverService: IUniverInstanceService, propUnitId?: string): {
    unitId: string;
    subUnitId: Nullable<string>;
    current: import('@univerjs/core').UnitModel<object, number>;
} | undefined;
