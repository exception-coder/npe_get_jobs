import { ITransformState } from '@univerjs/core';
export declare function getGroupState(parentLeft: number, parentTop: number, objectStates: ITransformState[]): {
    left: number;
    top: number;
    width: number;
    height: number;
    angle: number;
    scaleX: number;
    scaleY: number;
};
export declare function transformObjectOutOfGroup(child: ITransformState, parent: ITransformState, groupOriginWidth: number, groupOriginHeight: number): {
    left: number;
    top: number;
    angle: number;
};
