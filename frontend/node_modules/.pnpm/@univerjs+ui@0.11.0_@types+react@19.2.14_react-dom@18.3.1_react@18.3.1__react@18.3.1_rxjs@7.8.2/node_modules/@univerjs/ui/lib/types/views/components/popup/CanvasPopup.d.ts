import { ReactNode } from 'react';
import { IPopup } from '../../../services/popup/canvas-popup.service';
interface ISingleCanvasPopupProps {
    popup: IPopup;
    children?: ReactNode;
}
export declare const SingleCanvasPopup: ({ popup, children }: ISingleCanvasPopupProps) => import("react/jsx-runtime").JSX.Element | null;
export declare function CanvasPopup(): import("react/jsx-runtime").JSX.Element[];
export {};
