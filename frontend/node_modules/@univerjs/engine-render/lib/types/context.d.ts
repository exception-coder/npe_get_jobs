import { ICanvasColorService } from './services/canvas-color.service';
import { IRenderConfig } from './services/render-config';
export interface IUniverRenderingContextOptions {
    canvasColorService?: ICanvasColorService;
}
export declare class UniverRenderingContext2D implements CanvasRenderingContext2D {
    __mode: string;
    private _transformCache;
    readonly canvas: HTMLCanvasElement;
    _context: CanvasRenderingContext2D;
    private _systemType;
    private _browserType;
    renderConfig: Readonly<IRenderConfig>;
    private _canvasColorService?;
    constructor(context: CanvasRenderingContext2D, options?: IUniverRenderingContextOptions);
    private _id;
    getId(): string;
    setId(id: string): void;
    isContextLost(): boolean;
    get globalAlpha(): number;
    set globalAlpha(val: number);
    get globalCompositeOperation(): GlobalCompositeOperation;
    set globalCompositeOperation(val: GlobalCompositeOperation);
    get fillStyle(): string | CanvasGradient | CanvasPattern;
    set fillStyle(val: string | CanvasGradient | CanvasPattern);
    get strokeStyle(): string | CanvasGradient | CanvasPattern;
    set strokeStyle(val: string | CanvasGradient | CanvasPattern);
    get filter(): string;
    set filter(val: string);
    get imageSmoothingEnabled(): boolean;
    set imageSmoothingEnabled(val: boolean);
    get imageSmoothingQuality(): ImageSmoothingQuality;
    set imageSmoothingQuality(val: ImageSmoothingQuality);
    get lineCap(): CanvasLineCap;
    set lineCap(val: CanvasLineCap);
    get lineDashOffset(): number;
    set lineDashOffset(val: number);
    get lineJoin(): CanvasLineJoin;
    set lineJoin(val: CanvasLineJoin);
    get lineWidth(): number;
    set lineWidth(val: number);
    setLineWidthByPrecision(val: number): void;
    get miterLimit(): number;
    set miterLimit(val: number);
    get shadowBlur(): number;
    set shadowBlur(val: number);
    get shadowColor(): string;
    set shadowColor(val: string);
    get shadowOffsetX(): number;
    set shadowOffsetX(val: number);
    get shadowOffsetY(): number;
    set shadowOffsetY(val: number);
    get direction(): CanvasDirection;
    set direction(val: CanvasDirection);
    get font(): string;
    _normalizedCachedFont: string;
    set font(val: string);
    get fontKerning(): CanvasFontKerning;
    set fontKerning(val: CanvasFontKerning);
    get fontStretch(): CanvasFontStretch;
    set fontStretch(val: CanvasFontStretch);
    get fontVariantCaps(): CanvasFontVariantCaps;
    set fontVariantCaps(val: CanvasFontVariantCaps);
    get letterSpacing(): string;
    set letterSpacing(val: string);
    get textRendering(): CanvasTextRendering;
    set textRendering(val: CanvasTextRendering);
    get wordSpacing(): string;
    set wordSpacing(val: string);
    get textAlign(): CanvasTextAlign;
    set textAlign(val: CanvasTextAlign);
    get textBaseline(): CanvasTextBaseline;
    set textBaseline(val: CanvasTextBaseline);
    /**
     * Get scale from ctx.
     * DOMMatrix.a DOMMatrix.d would affect by ctx.rotate()
     */
    protected _getScale(): {
        scaleX: number;
        scaleY: number;
    };
    getScale(): {
        scaleX: number;
        scaleY: number;
    };
    getContextAttributes(): CanvasRenderingContext2DSettings;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
    roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | Array<number | DOMPointInit>): void;
    roundRectByPrecision(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | Array<number | DOMPointInit>): void;
    getTransform(): DOMMatrix;
    resetTransform(): void;
    drawFocusIfNeeded(element: Element): void;
    drawFocusIfNeeded(path: Path2D, element: Element): void;
    /**
     * reset canvas context transform
     * @method
     */
    reset(): void;
    /**
     * arc function.
     * @method
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterClockwise?: boolean): void;
    /**
     * arc function.
     * @method
     */
    arcByPrecision(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterClockwise?: boolean): void;
    /**
     * arcTo function.
     * @method
     *
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * arcTo function.
     * @method
     *
     */
    arcToByPrecision(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * beginPath function.
     * @method
     */
    beginPath(): void;
    /**
     * bezierCurveTo function.
     * @method
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * bezierCurveTo function precision.
     * @method
     */
    bezierCurveToByPrecision(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * clearRect function.
     * @method
     */
    clearRect(x: number, y: number, width: number, height: number): void;
    /**
     * clearRect function.
     * @method
     */
    clearRectByPrecision(x: number, y: number, width: number, height: number): void;
    /**
     * clip function.
     * @method
     */
    clip(): void;
    clip(path: Path2D): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    /**
     * closePath function.
     * @method
     */
    closePath(): void;
    getSystemType(): string;
    getBrowserType(): string;
    /**
     * Chrome hardware acceleration causes canvas stroke to fail to draw lines on Mac.
     */
    closePathByEnv(): void;
    /**
     * createImageData function.
     * @method
     */
    createImageData(width: number, height: number, settings?: ImageDataSettings): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    /**
     * createLinearGradient function.
     * @method
     */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    /**
     * createPattern function.
     * @method
     */
    createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
    /**
     * createRadialGradient function.
     * @method
     */
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    /**
     * drawImage function.
     * @method
     */
    drawImage(image: CanvasImageSource, sx: number, sy: number, sWidth?: number, sHeight?: number, dx?: number, dy?: number, dWidth?: number, dHeight?: number): void;
    /**
     * ellipse function.
     * @method
     */
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /**
     * isPointInPath function.
     * @method
     */
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    /**
     * fill function.
     * @method
     */
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    /**
     * fillRect function.
     * @method
     */
    fillRect(x: number, y: number, width: number, height: number): void;
    /**
     * fillRect function precision.
     * @method
     */
    fillRectByPrecision(x: number, y: number, width: number, height: number): void;
    /**
     * strokeRect function.
     * @method
     */
    strokeRect(x: number, y: number, width: number, height: number): void;
    /**
     * strokeRect function precision.
     * @method
     */
    strokeRectPrecision(x: number, y: number, width: number, height: number): void;
    /**
     * fillText function.
     * @method
     */
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * fillText function.
     * @method
     */
    fillTextPrecision(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * measureText function.
     * @method
     */
    measureText(text: string): TextMetrics;
    /**
     * getImageData function.
     * @method
     */
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    /**
     * lineTo function.
     * @method
     */
    lineTo(x: number, y: number): void;
    /**
     * lineTo function precision.
     * @method
     */
    lineToByPrecision(x: number, y: number): void;
    /**
     * moveTo function.
     * @method
     */
    moveTo(x: number, y: number): void;
    /**
     * moveTo function precision.
     * @method
     */
    moveToByPrecision(x: number, y: number): void;
    moveToByPrecisionLog(x: number, y: number): void;
    /**
     * rect function.
     * @method
     */
    rect(x: number, y: number, width: number, height: number): void;
    /**
     * rect function.
     * @method
     */
    rectByPrecision(x: number, y: number, width: number, height: number): void;
    /**
     * putImageData function.
     * @method
     */
    putImageData(imageData: ImageData, dx: number, dy: number): void;
    /**
     * quadraticCurveTo function.
     * @method
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * restore function.
     * @method
     */
    restore(): void;
    /**
     * rotate function.
     * @method
     */
    rotate(angle: number): void;
    /**
     * save function.
     * @method
     */
    save(): void;
    /**
     * scale function.
     * @method
     */
    scale(x: number, y: number): void;
    /**
     * setLineDash function.
     * @method
     */
    setLineDash(segments: number[]): void;
    /**
     * getLineDash function.
     * @method
     */
    getLineDash(): number[];
    /**
     * setTransform function.
     * @method
     */
    setTransform(transform?: DOMMatrix2DInit): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * stroke function.
     * @method
     */
    stroke(path2d?: Path2D): void;
    /**
     * strokeText function.
     * @method
     */
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * strokeText function precision.
     * @method
     */
    strokeTextByPrecision(text: string, x: number, y: number, maxWidth?: number): void;
    /**
     * transform function.
     * @method
     */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * translate function.
     * @method
     */
    translate(x: number, y: number): void;
    translateWithPrecision(x: number, y: number): void;
    translateWithPrecisionRatio(x: number, y: number): void;
    clearRectForTexture(x: number, y: number, width: number, height: number): void;
    setGlobalCompositeOperation(val: GlobalCompositeOperation): void;
}
export declare class UniverRenderingContext extends UniverRenderingContext2D {
}
export declare class UniverPrintingContext extends UniverRenderingContext2D {
    __mode: string;
    clearRect(x: number, y: number, width: number, height: number): void;
    clearRectForTexture(x: number, y: number, width: number, height: number): void;
    setGlobalCompositeOperation(val: GlobalCompositeOperation): void;
}
