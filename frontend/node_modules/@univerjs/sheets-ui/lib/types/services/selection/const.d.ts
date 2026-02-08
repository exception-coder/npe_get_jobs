import { ThemeService } from '@univerjs/core';
import { Scene, SpreadsheetSkeleton } from '@univerjs/engine-render';
import { ISelectionStyle } from '@univerjs/sheets';
export declare const RANGE_MOVE_PERMISSION_CHECK: import('@univerjs/core').IInterceptor<boolean, null>;
export declare const RANGE_FILL_PERMISSION_CHECK: import('@univerjs/core').IInterceptor<boolean, {
    x: number;
    y: number;
    skeleton: SpreadsheetSkeleton;
    scene: Scene;
}>;
export declare enum SELECTION_SHAPE_DEPTH {
    FORMULA_EDITOR_SHOW = 100,// see packages/sheets-formula/src/controllers/formula-editor-show.controller.ts
    MARK_SELECTION = 10000
}
export declare function genNormalSelectionStyle(themeService: ThemeService): ISelectionStyle;
