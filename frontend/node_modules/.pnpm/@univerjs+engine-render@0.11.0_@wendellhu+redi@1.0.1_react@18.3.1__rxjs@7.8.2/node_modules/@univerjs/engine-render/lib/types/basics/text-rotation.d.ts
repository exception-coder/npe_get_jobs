import { ITextRotation } from '@univerjs/core';
export declare const VERTICAL_ROTATE_ANGLE = 90;
export declare function convertTextRotation(textRotation?: ITextRotation): {
    centerAngle: number;
    vertexAngle: number;
};
