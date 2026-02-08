import { ITableSelectionInfo } from '../../commands/operations/open-table-selector.operation';
export declare const SheetTableSelector: (props: ITableSelectionInfo & {
    onConfirm: (info: ITableSelectionInfo) => void;
    onCancel: () => void;
}) => import("react/jsx-runtime").JSX.Element;
