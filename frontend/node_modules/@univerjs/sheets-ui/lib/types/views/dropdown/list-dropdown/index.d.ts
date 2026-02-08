import { IPopup } from '@univerjs/ui';
import { IBaseDropdownProps } from '../type';
export interface IListDropdownProps {
    multiple?: boolean;
    onEdit?: () => void;
    onChange?: (value: string[]) => boolean | Promise<boolean>;
    options: {
        label: string;
        value: string;
        color?: string;
    }[];
    defaultValue?: string;
    showEdit?: boolean;
}
export declare function ListDropDown(props: {
    popup: IPopup<IListDropdownProps & IBaseDropdownProps>;
}): import("react/jsx-runtime").JSX.Element | null;
export declare namespace ListDropDown {
    var componentKey: string;
}
