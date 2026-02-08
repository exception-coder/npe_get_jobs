import { ICanvasColorService } from './services/canvas-color.service';
import { UniverRenderingContext } from './context';
/**
 * canvas render mode
 */
export declare enum CanvasRenderMode {
    /**
     * Normal canvas render mode
     */
    Rendering = 0,
    /**
     * Printing render mode,
     * in case of to generate high dpi pdf,
     * some canvas api was disabled by some unknown reason.
     */
    Printing = 1
}
interface ICanvasProps {
    colorService?: ICanvasColorService;
    id?: string;
    width?: number;
    height?: number;
    pixelRatio?: number;
    mode?: CanvasRenderMode;
}
/**
 * View Renderer constructor. It is a wrapper around native canvas element.
 * Usually you don't need to use it manually.
 * @constructor
 * @abstract
 * @param {object} props
 * @param {number} props.width
 * @param {number} props.height
 * @param {number} props.pixelRatio
 */
export declare class Canvas {
    isCache: boolean;
    private _pixelRatio;
    private _canvasEle;
    private _context;
    private _width;
    private _height;
    constructor(_props?: ICanvasProps);
    getCanvasEle(): HTMLCanvasElement;
    /**
     * get canvas context
     * @method
     * @returns {CanvasContext} context
     */
    getContext(): UniverRenderingContext;
    getPixelRatio(): number;
    getWidth(): number;
    getHeight(): number;
    setId(id: string): void;
    /**
     * Resize canvas when width or height or devicePixelRatio changed.
     * @param width
     * @param height
     * @param devicePixelRatio
     */
    setSize(width?: number, height?: number, devicePixelRatio?: number): void;
    setPixelRatio(pixelRatio: number): void;
    dispose(): void;
    clear(): void;
    /**
     * to data url
     * @method
     * @param {string} mimeType
     * @param {number} quality between 0 and 1 for jpg mime types
     * @returns {string} data url string
     */
    toDataURL(mimeType: string, quality: number): string;
}
export declare class SceneCanvas extends Canvas {
    constructor(props?: ICanvasProps);
}
export declare class HitCanvas extends Canvas {
    hitCanvas: boolean;
    constructor(props?: ICanvasProps);
}
export {};
