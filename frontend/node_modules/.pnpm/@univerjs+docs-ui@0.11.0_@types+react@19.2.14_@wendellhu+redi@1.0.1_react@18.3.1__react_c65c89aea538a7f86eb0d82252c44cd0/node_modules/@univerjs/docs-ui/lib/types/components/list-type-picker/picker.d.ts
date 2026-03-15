import { PresetListType } from '@univerjs/core';
export interface IListTypePickerBaseProps {
    value?: PresetListType;
    onChange: (value: PresetListType | undefined) => void;
}
interface IListTypePickerProps extends IListTypePickerBaseProps {
    options: {
        value: PresetListType;
        img: string;
    }[];
}
export declare const ListTypePicker: (props: IListTypePickerProps) => import("react/jsx-runtime").JSX.Element;
export declare const OrderListTypePicker: (props: IListTypePickerBaseProps) => import("react/jsx-runtime").JSX.Element;
export declare const BulletListTypePicker: (props: IListTypePickerBaseProps) => import("react/jsx-runtime").JSX.Element;
export {};
