import { IConditionFormattingRule } from '@univerjs/sheets-conditional-formatting';
interface IRuleListProps {
    onClick: (rule: IConditionFormattingRule) => void;
    onCreate: () => void;
}
export declare const RuleList: (props: IRuleListProps) => import("react/jsx-runtime").JSX.Element;
export {};
