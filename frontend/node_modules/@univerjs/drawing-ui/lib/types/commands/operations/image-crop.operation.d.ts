import { IDrawingSearch, IOperation } from '@univerjs/core';
export declare const OpenImageCropOperation: IOperation<IDrawingSearch>;
export declare const CloseImageCropOperation: IOperation<{
    isAuto?: boolean;
}>;
export declare enum CropType {
    FREE = "0",
    R1_1 = "1",
    R16_9 = "2",
    R9_16 = "3",
    R5_4 = "4",
    R4_5 = "5",
    R4_3 = "6",
    R3_4 = "7",
    R3_2 = "8",
    R2_3 = "9"
}
export interface IOpenImageCropOperationBySrcRectParams {
    cropType: CropType;
}
export declare const AutoImageCropOperation: IOperation<IOpenImageCropOperationBySrcRectParams>;
