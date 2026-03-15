import { IDocDrawingPosition, ITransformState, Nullable } from '@univerjs/core';
export declare function docDrawingPositionToTransform(position: IDocDrawingPosition): Nullable<ITransformState>;
export declare function transformToDocDrawingPosition(transform: ITransformState, marginLeft?: number, marginTop?: number): Nullable<IDocDrawingPosition>;
