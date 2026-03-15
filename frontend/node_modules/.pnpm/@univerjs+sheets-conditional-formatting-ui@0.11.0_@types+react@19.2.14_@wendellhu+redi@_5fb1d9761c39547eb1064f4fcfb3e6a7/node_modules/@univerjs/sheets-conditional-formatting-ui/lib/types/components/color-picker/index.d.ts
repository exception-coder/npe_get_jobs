import { FC } from 'react';
interface IColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    disable?: boolean;
    Icon?: FC;
    className?: string;
}
export declare const ColorPicker: (props: IColorPickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
