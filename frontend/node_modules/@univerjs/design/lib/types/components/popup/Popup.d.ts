import { ReactElement } from 'react';
import './index.css';
export interface IPopupProps {
    children: ReactElement;
    /**
     * whether popup is visible
     * @default false
     */
    visible?: boolean;
    /**
     * the offset of popup
     * @default [0, 0]
     */
    offset?: [number, number];
}
export declare function Popup(props: IPopupProps): import('react').ReactPortal;
