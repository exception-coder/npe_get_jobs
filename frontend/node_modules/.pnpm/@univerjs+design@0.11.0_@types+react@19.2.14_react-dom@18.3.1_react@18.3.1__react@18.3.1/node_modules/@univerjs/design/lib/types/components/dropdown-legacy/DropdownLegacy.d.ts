import { default as Placements } from 'rc-dropdown/lib/placements';
import { ReactElement } from 'react';
import './index.css';
type ActionType = 'hover' | 'focus' | 'click' | 'contextMenu';
export interface IDropdownLegacyProps {
    /** Semantic DOM class */
    className?: string;
    /**
     * The dropdown content
     */
    children: ReactElement;
    /**
     * Whether the dropdown is visible
     */
    visible?: boolean;
    /**
     * Whether to force render the dropdown
     * @default false
     */
    forceRender?: boolean;
    /**
     * The trigger mode which executes the dropdown action
     * @default ['click']
     */
    trigger?: ActionType | ActionType[];
    /**
     * The placement of the dropdown
     */
    placement?: keyof typeof Placements;
    /**
     * The dropdown overlay
     */
    overlay: React.ReactElement;
    /**
     * Whether the dropdown aligns to the point
     * @default false
     */
    alignPoint?: boolean;
    /**
     * The align of the dropdown
     */
    align?: {
        offset?: number[];
    };
    /**
     * Triggered after the dropdown visibility changes
     * @param visible
     */
    onVisibleChange?: (visible: boolean) => void;
    /** Disable dropdown from showing up. */
    disabled?: boolean;
}
/** @deprecated */
export declare function DropdownLegacy(props: IDropdownLegacyProps): import("react/jsx-runtime").JSX.Element | null;
export {};
