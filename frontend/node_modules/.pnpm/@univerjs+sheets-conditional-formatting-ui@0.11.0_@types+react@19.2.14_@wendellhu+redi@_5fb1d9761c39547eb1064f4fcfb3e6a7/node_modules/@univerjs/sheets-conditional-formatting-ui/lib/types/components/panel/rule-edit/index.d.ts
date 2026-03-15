import { IConditionFormattingRule } from '@univerjs/sheets-conditional-formatting';
interface IRuleEditProps {
    rule?: IConditionFormattingRule;
    onCancel: () => void;
}
export declare const RuleEdit: (props: IRuleEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
