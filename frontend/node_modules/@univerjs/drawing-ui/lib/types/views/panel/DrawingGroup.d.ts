import { IDrawingParam } from '@univerjs/core';
export interface IDrawingGroupProps {
    drawings: IDrawingParam[];
    hasGroup: boolean;
}
export declare const DrawingGroup: (props: IDrawingGroupProps) => import("react/jsx-runtime").JSX.Element;
