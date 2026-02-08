import { IDisposable, Disposable } from '@univerjs/core';
import { Observable } from 'rxjs';
import { ComponentType } from '../../common/component-manager';
export type ComponentRenderer = () => ComponentType;
type ComponentPartKey = BuiltInUIPart | string;
export declare enum BuiltInUIPart {
    GLOBAL = "global",
    HEADER = "header",
    HEADER_MENU = "header-menu",
    CONTENT = "content",
    FOOTER = "footer",
    LEFT_SIDEBAR = "left-sidebar",
    FLOATING = "floating",
    UNIT = "unit",
    CUSTOM_HEADER = "custom-header",
    CUSTOM_LEFT = "custom-left",
    CUSTOM_RIGHT = "custom-right",
    CUSTOM_FOOTER = "custom-footer",
    TOOLBAR = "toolbar"
}
export interface IUIPartsService {
    componentRegistered$: Observable<ComponentPartKey>;
    uiVisibleChange$: Observable<{
        ui: ComponentPartKey;
        visible: boolean;
    }>;
    registerComponent(part: ComponentPartKey, componentFactory: () => ComponentType): IDisposable;
    getComponents(part: ComponentPartKey): Set<ComponentRenderer>;
    setUIVisible(part: ComponentPartKey, visible: boolean): void;
    isUIVisible(part: ComponentPartKey): boolean;
}
export declare const IUIPartsService: import('@wendellhu/redi').IdentifierDecorator<IUIPartsService>;
export declare class UIPartsService extends Disposable implements IUIPartsService {
    private _componentsByPart;
    private readonly _componentRegistered$;
    readonly componentRegistered$: Observable<string>;
    private readonly _uiVisible;
    private readonly _uiVisibleChange$;
    readonly uiVisibleChange$: Observable<{
        ui: ComponentPartKey;
        visible: boolean;
    }>;
    dispose(): void;
    setUIVisible(part: ComponentPartKey, visible: boolean): void;
    isUIVisible(part: ComponentPartKey): boolean;
    registerComponent<T>(part: ComponentPartKey, componentFactory: () => React.ComponentType<T>): IDisposable;
    getComponents(part: ComponentPartKey): Set<ComponentType>;
}
export {};
