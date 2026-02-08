import { IPopup } from '@univerjs/ui';
import { IBaseDropdownProps } from '../type';
import { dayjs } from '@univerjs/core';
export interface IDateDropdownProps {
    defaultValue?: dayjs.Dayjs;
    onChange?: (value: dayjs.Dayjs | undefined) => boolean | Promise<boolean>;
    patternType?: 'datetime' | 'date' | 'time';
    showTime?: boolean;
}
export declare function DateDropdown(props: {
    popup: IPopup<IDateDropdownProps & IBaseDropdownProps>;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace DateDropdown {
    var componentKey: string;
}
