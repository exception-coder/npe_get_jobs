import { IPopup } from '@univerjs/ui';
import { IBaseDropdownProps } from '../type';
export interface IColorDropdownProps {
    defaultValue?: string;
    onChange?: (value: string) => void;
}
export declare function ColorDropdown(props: {
    popup: IPopup<IColorDropdownProps & IBaseDropdownProps>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace ColorDropdown {
    var componentKey: string;
}
