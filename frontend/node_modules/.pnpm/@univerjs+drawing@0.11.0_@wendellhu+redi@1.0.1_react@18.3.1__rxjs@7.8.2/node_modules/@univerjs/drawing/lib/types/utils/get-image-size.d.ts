import { ISize } from '@univerjs/core';
interface IImageParam extends ISize {
    image: HTMLImageElement;
}
export declare const getImageSize: (src: string) => Promise<Required<IImageParam>>;
export {};
