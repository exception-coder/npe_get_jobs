import { IDrawingParam, Nullable } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { BaseObject } from '@univerjs/engine-render';
export declare function getUpdateParams(objects: Map<string, BaseObject>, drawingManagerService: IDrawingManagerService): Nullable<IDrawingParam>[];
