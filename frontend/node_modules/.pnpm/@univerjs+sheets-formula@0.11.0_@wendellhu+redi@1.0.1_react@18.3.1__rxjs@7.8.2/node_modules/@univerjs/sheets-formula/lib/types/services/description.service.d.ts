import { IDisposable, IConfigService, LocaleService } from '@univerjs/core';
import { IFunctionInfo, IFunctionNames, FunctionType, IFunctionService } from '@univerjs/engine-formula';
export interface ISearchItem {
    name: string;
    desc: string;
}
export interface ISearchItemWithType extends ISearchItem {
    functionType: FunctionType;
}
export interface IDescriptionService {
    /**
     * get all descriptions
     */
    getDescriptions(): Map<IFunctionNames, IFunctionInfo>;
    hasFunction(searchText: string): boolean;
    /**
     * get function info by name
     * @param searchText
     */
    getFunctionInfo(searchText: string): IFunctionInfo | undefined;
    /**
     * get search list by name
     * @param searchText
     * @returns
     */
    getSearchListByName(searchText: string): ISearchItem[];
    /**
     * get search list by name, from first letter
     * @param searchText
     * @returns
     */
    getSearchListByNameFirstLetter(searchText: string): ISearchItemWithType[];
    /**
     * get search list by type, if type is -1, return all
     * @param type
     * @returns
     */
    getSearchListByType(type: number): ISearchItem[];
    /**
     * register descriptions
     * @param functionList
     */
    registerDescriptions(functionList: IFunctionInfo[]): IDisposable;
    /**
     * unregister descriptions
     * @param functionList
     */
    unregisterDescriptions(functionNames: string[]): void;
    /**
     * check if has description
     * @param name
     */
    hasDescription(name: string): boolean;
    /**
     * check if has defined name description
     * @param name
     */
    hasDefinedNameDescription(name: string): boolean;
    /**
     * check if is formula defined name
     * @param name
     */
    isFormulaDefinedName(name: string): boolean;
}
export declare const IDescriptionService: import('@wendellhu/redi').IdentifierDecorator<IDescriptionService>;
export declare class DescriptionService implements IDescriptionService, IDisposable {
    private readonly _functionService;
    private readonly _localeService;
    private readonly _configService;
    private _descriptions;
    constructor(_functionService: IFunctionService, _localeService: LocaleService, _configService: IConfigService);
    dispose(): void;
    getDescriptions(): Map<IFunctionNames, IFunctionInfo>;
    hasFunction(searchText: string): boolean;
    getFunctionInfo(searchText: string): IFunctionInfo | undefined;
    getSearchListByName(searchText: string): ISearchItem[];
    getSearchListByNameFirstLetter(searchText: string): ISearchItemWithType[];
    getSearchListByType(type: number): ISearchItem[];
    registerDescriptions(description: IFunctionInfo[]): IDisposable;
    unregisterDescriptions(functionNames: string[]): void;
    hasDescription(name: string): boolean;
    hasDefinedNameDescription(name: string): boolean;
    isFormulaDefinedName(name: string): boolean;
    private _initialize;
    private _initDescription;
    private _registerDescriptions;
}
