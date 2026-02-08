import { ISheetLocationBase } from '@univerjs/sheets';
import { IPopup } from '@univerjs/ui';
export declare const CellPopup: (props: {
    popup: IPopup<ISheetLocationBase & {
        direction: "horizontal" | "vertical";
    }>;
}) => import("react/jsx-runtime").JSX.Element;
