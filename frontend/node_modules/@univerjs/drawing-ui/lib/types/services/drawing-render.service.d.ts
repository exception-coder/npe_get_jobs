import { IDrawingSearch } from '@univerjs/core';
import { IDocFloatDomData, IImageData, IDrawingManagerService, IImageIoService } from '@univerjs/drawing';
import { IRectProps, Scene, Image, Rect } from '@univerjs/engine-render';
import { IGalleryService } from '@univerjs/ui';
export declare class DrawingRenderService {
    private readonly _drawingManagerService;
    private readonly _imageIoService;
    private readonly _galleryService;
    constructor(_drawingManagerService: IDrawingManagerService, _imageIoService: IImageIoService, _galleryService: IGalleryService);
    renderImages(imageParam: IImageData, scene: Scene): Promise<Image[] | undefined>;
    renderFloatDom(param: IDocFloatDomData, scene: Scene): Rect<IRectProps>[] | undefined;
    renderDrawing(param: IDrawingSearch, scene: Scene): Promise<Image[] | undefined> | undefined;
    previewImage(key: string, src: string, width: number, height: number): void;
    private _adjustImageSize;
}
