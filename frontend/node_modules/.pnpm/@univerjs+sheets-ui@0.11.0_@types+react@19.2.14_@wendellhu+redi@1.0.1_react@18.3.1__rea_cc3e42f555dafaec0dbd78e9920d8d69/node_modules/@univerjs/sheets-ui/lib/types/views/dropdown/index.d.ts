import { ICascaderDropdownProps, CascaderDropdown } from './cascader-dropdown';
import { IColorDropdownProps, ColorDropdown } from './color-dropdown';
import { IDateDropdownProps, DateDropdown } from './date-dropdown';
import { IListDropdownProps, ListDropDown } from './list-dropdown';
export type ICellDropdown = {
    type: 'datepicker';
    props: IDateDropdownProps;
} | {
    type: 'list';
    props: IListDropdownProps;
} | {
    type: 'color';
    props: IColorDropdownProps;
} | {
    type: 'cascader';
    props: ICascaderDropdownProps;
};
export { CascaderDropdown } from './cascader-dropdown';
export { ColorDropdown } from './color-dropdown';
export { DateDropdown } from './date-dropdown';
export { ListDropDown } from './list-dropdown';
export declare const dropdownMap: {
    datepicker: typeof DateDropdown;
    list: typeof ListDropDown;
    color: typeof ColorDropdown;
    cascader: typeof CascaderDropdown;
};
