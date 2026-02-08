import { ISheetLocation } from '@univerjs/sheets';
export interface IBaseDropdownProps {
    location: ISheetLocation;
    hideFn: () => void;
}
