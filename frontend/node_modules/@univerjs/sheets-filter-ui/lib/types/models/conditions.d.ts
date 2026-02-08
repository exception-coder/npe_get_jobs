import { Nullable } from '@univerjs/core';
import { IFilterColumn, CustomFilterOperator } from '@univerjs/sheets-filter';
import { ExtendCustomFilterOperator, OperatorOrder } from './extended-operators';
export type FilterOperator = ExtendCustomFilterOperator | CustomFilterOperator;
export interface IFilterConditionFormParams {
    and?: true;
    operator1?: FilterOperator;
    val1?: string;
    operator2?: FilterOperator;
    val2?: string;
}
export interface IFilterConditionItem {
    operator: FilterOperator;
    numOfParameters: number;
    order: OperatorOrder;
    /**
     * Name of the filter condition. Should be an i18n key.
     */
    label: string;
    and?: true;
    /**
     * Get the initial form parameters for this condition item. This should only be called when `numOfParameters` is not `0`.
     */
    getDefaultFormParams(): IFilterConditionFormParams;
    /**
     * Test if the form params can be mapped to this condition item. This should be called when the
     * condition form changes and `numOfParameters` is not `0`.
     * @param params
     */
    testMappingParams(params: IFilterConditionFormParams): boolean;
    /**
     * When user confirm changing filter condition, this method will be called to map the form params
     * to the filter column data.
     * @param mapParams
     */
    mapToFilterColumn(mapParams: IFilterConditionFormParams): Nullable<Omit<IFilterColumn, 'colId'>>;
    /**
     * Test if the filter column data can be mapped to this condition item.
     * It should return the mapping parameters if it can be mapped, otherwise `false`.
     * This should be called when the filter panel opens.
     *
     * @param filterColumn
     * @returns the mapping parameters if it can be mapped, otherwise `false`
     */
    testMappingFilterColumn(filterColumn: Omit<IFilterColumn, 'colId'>): IFilterConditionFormParams | false;
}
export declare namespace FilterConditionItems {
    const NONE: IFilterConditionItem;
    const EMPTY: IFilterConditionItem;
    const NOT_EMPTY: IFilterConditionItem;
    const TEXT_CONTAINS: IFilterConditionItem;
    const DOES_NOT_CONTAIN: IFilterConditionItem;
    const STARTS_WITH: IFilterConditionItem;
    const ENDS_WITH: IFilterConditionItem;
    const EQUALS: IFilterConditionItem;
    const GREATER_THAN: IFilterConditionItem;
    const GREATER_THAN_OR_EQUAL: IFilterConditionItem;
    const LESS_THAN: IFilterConditionItem;
    const LESS_THAN_OR_EQUAL: IFilterConditionItem;
    const EQUAL: IFilterConditionItem;
    const NOT_EQUAL: IFilterConditionItem;
    const BETWEEN: IFilterConditionItem;
    const NOT_BETWEEN: IFilterConditionItem;
    /**
     * This should be test last. If no other condition item can be mapped, then it should be mapped.
     */
    const CUSTOM: IFilterConditionItem;
    const ALL_CONDITIONS: IFilterConditionItem[];
    function getItemByOperator(operator: FilterOperator): IFilterConditionItem;
    function testMappingParams(mapParams: IFilterConditionFormParams, numOfParameters: number): IFilterConditionItem;
    function getInitialFormParams(operator: FilterOperator): IFilterConditionFormParams;
    function mapToFilterColumn(condition: IFilterConditionItem, mapParams: IFilterConditionFormParams): Nullable<Omit<IFilterColumn, 'colId'>>;
    function testMappingFilterColumn(filterColumn: Nullable<Omit<IFilterColumn, 'colId'>>): [IFilterConditionItem, IFilterConditionFormParams];
}
