import { IRange } from '@univerjs/core';
export interface IEmbedSortBtnProps {
    range: IRange;
    colIndex: number;
    onClose: () => void;
}
export default function EmbedSortBtn(props: IEmbedSortBtnProps): import("react/jsx-runtime").JSX.Element;
