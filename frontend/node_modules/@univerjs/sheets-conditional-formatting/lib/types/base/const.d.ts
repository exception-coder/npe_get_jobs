import { IConditionFormattingRule } from '../models/type';
export declare const SHEET_CONDITIONAL_FORMATTING_PLUGIN = "SHEET_CONDITIONAL_FORMATTING_PLUGIN";
export declare enum CFTextOperator {
    beginsWith = "beginsWith",
    endsWith = "endsWith",
    containsText = "containsText",
    notContainsText = "notContainsText",
    equal = "equal",
    notEqual = "notEqual",
    containsBlanks = "containsBlanks",
    notContainsBlanks = "notContainsBlanks",
    containsErrors = "containsErrors",
    notContainsErrors = "notContainsErrors"
}
export declare enum CFTimePeriodOperator {
    today = "today",
    yesterday = "yesterday",
    tomorrow = "tomorrow",
    last7Days = "last7Days",
    thisMonth = "thisMonth",
    lastMonth = "lastMonth",
    nextMonth = "nextMonth",
    thisWeek = "thisWeek",
    lastWeek = "lastWeek",
    nextWeek = "nextWeek"
}
export declare enum CFNumberOperator {
    greaterThan = "greaterThan",
    greaterThanOrEqual = "greaterThanOrEqual",
    lessThan = "lessThan",
    lessThanOrEqual = "lessThanOrEqual",
    notBetween = "notBetween",
    between = "between",
    equal = "equal",
    notEqual = "notEqual"
}
export declare enum CFRuleType {
    highlightCell = "highlightCell",
    dataBar = "dataBar",
    colorScale = "colorScale",
    iconSet = "iconSet"
}
export declare enum CFSubRuleType {
    uniqueValues = "uniqueValues",
    duplicateValues = "duplicateValues",
    rank = "rank",
    text = "text",
    timePeriod = "timePeriod",
    number = "number",
    average = "average",
    formula = "formula"
}
export declare enum CFValueType {
    num = "num",
    min = "min",
    max = "max",
    percent = "percent",
    percentile = "percentile",
    formula = "formula"
}
export declare const DEFAULT_BG_COLOR = "#fff";
export declare const DEFAULT_FONT_COLOR = "#000000";
export declare const createDefaultRule: () => IConditionFormattingRule;
export declare const createDefaultValue: (subType: CFSubRuleType, operator: CFTextOperator | CFNumberOperator | CFTimePeriodOperator) => "" | 10 | [number, number];
export declare const createDefaultValueByValueType: (type: CFValueType, defaultValue?: number) => number | "" | "=";
