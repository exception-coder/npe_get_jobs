import { ICascaderOption } from '@univerjs/design';
import { IPopup } from '@univerjs/ui';
import { IBaseDropdownProps } from '../type';
export interface ICascaderDropdownProps {
    options: ICascaderOption[];
    defaultValue?: string[];
    onChange: (value: string[]) => void;
}
export declare function CascaderDropdown(props: {
    popup: IPopup<ICascaderDropdownProps & IBaseDropdownProps>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace CascaderDropdown {
    var componentKey: string;
}
