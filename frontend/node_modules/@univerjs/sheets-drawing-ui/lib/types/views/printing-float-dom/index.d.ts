import { Worksheet } from '@univerjs/core';
import { Scene, SpreadsheetSkeleton } from '@univerjs/engine-render';
import { IFloatDomData } from '@univerjs/sheets-drawing';
export interface IPrintingFloatDomProps {
    floatDomInfos: IFloatDomData[];
    scene: Scene;
    skeleton: SpreadsheetSkeleton;
    worksheet: Worksheet;
}
export declare const PrintingFloatDom: (props: IPrintingFloatDomProps) => import("react/jsx-runtime").JSX.Element;
