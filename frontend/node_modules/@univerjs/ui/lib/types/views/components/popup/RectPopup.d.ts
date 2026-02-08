import { Nullable } from '@univerjs/core';
import { ReactNode, RefObject } from 'react';
import { Observable } from 'rxjs';
interface IAbsolutePosition {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export type RectPopupDirection = 'left' | 'left-center' | 'left-bottom' | 'left-top' | 'right' | 'right-center' | 'right-bottom' | 'right-top' | 'top' | 'top-center' | 'top-left' | 'top-right' | 'bottom' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'vertical' | 'vertical-left' | 'vertical-right' | 'vertical-center' | 'horizontal' | 'horizontal-top' | 'horizontal-bottom' | 'horizontal-center';
export interface IRectPopupProps {
    children?: ReactNode;
    /**
     * the anchor element bounding rect
     */
    anchorRect$: Observable<IAbsolutePosition>;
    excludeRects?: RefObject<Nullable<IAbsolutePosition[]>>;
    direction?: RectPopupDirection;
    hidden?: boolean;
    onClickOutside?: (e: MouseEvent) => void;
    excludeOutside?: HTMLElement[];
    onContextMenu?: () => void;
    onPointerEnter?: (e: React.MouseEvent<HTMLElement>) => void;
    onPointerLeave?: (e: React.MouseEvent<HTMLElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    portal?: boolean;
    mask?: boolean;
    zIndex?: number;
    maskZIndex?: number;
    onMaskClick?: () => void;
    noPushMinimumGap?: boolean;
    autoRelayout?: boolean;
}
export interface IPopupLayoutInfo extends Pick<IRectPopupProps, 'direction'> {
    position: IAbsolutePosition;
    width: number;
    height: number;
    containerWidth: number;
    containerHeight: number;
    noPushMinimumGap?: boolean;
}
declare function RectPopup(props: IRectPopupProps): import("react/jsx-runtime").JSX.Element | null;
declare namespace RectPopup {
    var calcPopupPosition: (layout: IPopupLayoutInfo) => {
        top: number;
        left: number;
    };
    var useContext: () => RefObject<IAbsolutePosition | undefined>;
}
export { RectPopup };
