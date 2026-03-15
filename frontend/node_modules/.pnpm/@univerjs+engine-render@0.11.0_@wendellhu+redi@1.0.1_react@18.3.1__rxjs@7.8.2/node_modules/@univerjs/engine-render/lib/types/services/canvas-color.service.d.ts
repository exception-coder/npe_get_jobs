import { RGBColorType, Disposable, ThemeService } from '@univerjs/core';
export declare const ICanvasColorService: import('@wendellhu/redi').IdentifierDecorator<ICanvasColorService>;
/**
 * This service maps a color or a theme-token to a color for rendering. Univer supports themes for rendering
 * and dark mode. This services is responsible for abstract this complexity for rendering components.
 */
export interface ICanvasColorService {
    getRenderColor(color: string): string;
}
export declare class DumbCanvasColorService implements ICanvasColorService {
    getRenderColor(color: string): string;
}
/**
 * This service inverts a color for dark mode. This service is exposed
 */
export declare class CanvasColorService extends Disposable implements ICanvasColorService {
    private readonly _themeService;
    private readonly _cache;
    private _invertAlgo;
    constructor(_themeService: ThemeService);
    getRenderColor(color: string): string;
}
export declare function hexToRgb(_hex: string): RGBColorType;
export declare function rgbToHex(rgbColor: RGBColorType): string;
