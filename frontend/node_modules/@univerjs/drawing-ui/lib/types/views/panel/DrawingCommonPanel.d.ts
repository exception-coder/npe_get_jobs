import { IDrawingParam } from '@univerjs/core';
export interface IDrawingCommonPanelProps {
    drawings: IDrawingParam[];
    hasArrange?: boolean;
    hasTransform?: boolean;
    hasAlign?: boolean;
    hasCropper?: boolean;
    hasGroup?: boolean;
}
export declare const DrawingCommonPanel: (props: IDrawingCommonPanelProps) => import("react/jsx-runtime").JSX.Element | undefined;
