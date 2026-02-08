import { IDocumentRenderConfig, IRange, IScale, Nullable, Registry } from '@univerjs/core';
import { BaseObject } from '../base-object';
import { IBoundRectNoAngle, Vector2 } from '../basics/vector2';
import { UniverRenderingContext } from '../context';
export interface IExtensionConfig {
    originTranslate?: Vector2;
    spanStartPoint?: Vector2;
    spanPointWithFont?: Vector2;
    centerPoint?: Vector2;
    alignOffset?: Vector2;
    renderConfig?: IDocumentRenderConfig;
}
export interface IDrawInfo {
    viewRanges: IRange[];
    viewportKey: string;
    checkOutOfViewBound?: boolean;
    viewBound?: IBoundRectNoAngle;
}
export declare class ComponentExtension<T, U, V> {
    uKey: string;
    type: U;
    protected Z_INDEX: number;
    parent: Nullable<BaseObject>;
    translateX: number;
    translateY: number;
    extensionOffset: IExtensionConfig;
    get zIndex(): number;
    draw(_ctx: UniverRenderingContext, _parentScale: IScale, _skeleton: T, _diff?: V, _more?: IDrawInfo): void;
    clearCache(): void;
    protected _getScale(parentScale: IScale): number;
    dispose(): void;
}
export declare const SpreadsheetExtensionRegistry: Registry<any>;
export declare const SheetRowHeaderExtensionRegistry: Registry<any>;
export declare const SheetColumnHeaderExtensionRegistry: Registry<any>;
export declare const DocumentsSpanAndLineExtensionRegistry: Registry<any>;
