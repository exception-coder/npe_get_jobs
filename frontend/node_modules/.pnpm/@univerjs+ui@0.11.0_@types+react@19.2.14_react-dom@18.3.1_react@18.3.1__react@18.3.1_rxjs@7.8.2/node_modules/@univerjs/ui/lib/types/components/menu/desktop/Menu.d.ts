import { IValueOption } from '../../../services/menu/menu';
/** @deprecated */
export interface IBaseMenuProps {
    parentKey?: string | number;
    menuType?: string;
    value?: string | number;
    options?: IValueOption[];
    /**
     * The menu will show scroll on it over viewport height
     * Recommend that you use this prop when displaying menu overlays in Dropdown
     */
    overViewport?: 'scroll';
    onOptionSelect?: (option: IValueOption) => void;
    style?: React.CSSProperties;
}
/** @deprecated */
export declare const Menu: (props: IBaseMenuProps) => import("react/jsx-runtime").JSX.Element;
