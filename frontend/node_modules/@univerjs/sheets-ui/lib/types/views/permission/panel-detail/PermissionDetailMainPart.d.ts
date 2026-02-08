import { IRange } from '@univerjs/core';
interface IPermissionDetailMainPartProps {
    permissionId: string;
    ranges: IRange[];
    onRangesChange: (ranges: IRange[], err?: string) => void;
    rangesErrMsg?: string;
    desc?: string;
    onDescChange: (desc: string) => void;
}
export declare const PermissionDetailMainPart: (props: IPermissionDetailMainPartProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
