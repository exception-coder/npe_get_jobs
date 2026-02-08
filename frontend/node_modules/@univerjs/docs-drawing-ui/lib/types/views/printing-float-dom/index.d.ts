import { IDocFloatDom } from '@univerjs/docs-drawing';
import { DocumentSkeleton, IBoundRectNoAngle, Scene } from '@univerjs/engine-render';
export interface IPrintingFloatDomProps {
    floatDomInfos: IDocFloatDom[];
    scene: Scene;
    skeleton: DocumentSkeleton;
    unitId: string;
    offset: {
        x: number;
        y: number;
    };
    bound: IBoundRectNoAngle;
}
export declare const DocPrintingFloatDom: (props: IPrintingFloatDomProps) => import("react/jsx-runtime").JSX.Element;
