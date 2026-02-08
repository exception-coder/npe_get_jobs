import { IFunctionParam } from '@univerjs/engine-formula';
interface IFunctionHelpProps {
    prefix?: string;
    value?: IFunctionParam[];
}
/**
 * Determine the parameter format
 * ┌─────────┬────────┬─────────────┐
 * │ Require │ Repeat │  Parameter  │
 * ├─────────┼────────┼─────────────┤
 * │ 0       │ 0      │ [Number]    │
 * │ 1       │ 0      │ Number      │
 * │ 0       │ 1      │ [Number,...] │
 * │ 1       │ 1      │ Number,...   │
 * └─────────┴────────┴─────────────┘
 *
 * @param props
 * @returns
 */
export declare function FunctionHelp(props: IFunctionHelpProps): import("react/jsx-runtime").JSX.Element;
export {};
