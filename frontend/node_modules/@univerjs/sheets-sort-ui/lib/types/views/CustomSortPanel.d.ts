import { IRange, Nullable } from '@univerjs/core';
import { IOrderRule } from '@univerjs/sheets-sort';
export interface ICustomSortPanelProps {
    range: IRange;
    onListChange: (value: IOrderRule[]) => void;
}
export declare function CustomSortPanel(): import("react/jsx-runtime").JSX.Element | null;
interface ISortOptionItemProps {
    titles: {
        index: number;
        label: string;
    }[];
    list: IOrderRule[];
    item: IOrderRule;
    scrollPosition: number;
    onChange: (value: Nullable<IOrderRule>, index: number) => void;
}
export declare function SortOptionItem(props: ISortOptionItemProps): import("react/jsx-runtime").JSX.Element;
export {};
