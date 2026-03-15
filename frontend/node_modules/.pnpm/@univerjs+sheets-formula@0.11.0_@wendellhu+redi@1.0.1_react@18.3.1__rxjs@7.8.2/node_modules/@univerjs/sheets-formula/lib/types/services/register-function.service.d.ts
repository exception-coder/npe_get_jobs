import { IDisposable, ILocales, Disposable, LocaleService } from '@univerjs/core';
import { FormulaFunctionResultValueType, FormulaFunctionValueType, IFunctionInfo, IFunctionService } from '@univerjs/engine-formula';
import { IDescriptionService } from './description.service';
import { IRemoteRegisterFunctionService } from './remote/remote-register-function.service';
export type IRegisterFunction = (...arg: Array<FormulaFunctionValueType>) => FormulaFunctionResultValueType;
export type IRegisterAsyncFunction = (...arg: Array<FormulaFunctionValueType>) => Promise<FormulaFunctionResultValueType>;
export type IRegisterFunctionList = [[IRegisterFunction, string, string?]];
export interface IFormulaCustomFunctionService {
    /**
     * register descriptions
     * @param functionList
     */
    registerFunctions(functionList: IRegisterFunctionList): IDisposable;
}
/**
 * Register function operation params
 */
export interface IRegisterFunctionParams {
    /**
     * i18n
     */
    locales?: ILocales;
    /**
     * function description
     */
    description?: IFunctionInfo[];
    /**
     * function calculation
     */
    calculate: IRegisterFunctionList;
}
/**
 * Unregister function operation params
 */
export interface IUnregisterFunctionParams {
    /**
     * Remove i18n
     */
    localeKeys?: string[];
    /**
     * Function name
     */
    functionNames: string[];
}
/**
 * This
 */
export interface IRegisterFunctionService {
    /**
     * register descriptions
     * @param params
     */
    registerFunctions(params: IRegisterFunctionParams): IDisposable;
    /**
     * register a single function
     * @param params
     */
    registerFunction(params: ISingleFunctionRegisterParams): IDisposable;
    /**
     * register a single async function
     * @param params
     */
    registerAsyncFunction(params: ISingleFunctionRegisterParams): IDisposable;
}
export declare const IRegisterFunctionService: import('@wendellhu/redi').IdentifierDecorator<IRegisterFunctionService>;
export interface ISingleFunctionRegisterParams {
    /**
     * function name
     */
    name: string;
    /**
     * function calculation
     */
    func: IRegisterFunction | IRegisterAsyncFunction;
    /**
     * function description
     */
    description: string | IFunctionInfo;
    /**
     * function locales
     */
    locales?: ILocales;
    /**
     * function async
     */
    async?: boolean;
}
export declare class RegisterFunctionService extends Disposable implements IRegisterFunctionService {
    private readonly _localeService;
    private readonly _descriptionService;
    private readonly _functionService;
    private readonly _remoteRegisterFunctionService?;
    constructor(_localeService: LocaleService, _descriptionService: IDescriptionService, _functionService: IFunctionService, _remoteRegisterFunctionService?: IRemoteRegisterFunctionService | undefined);
    registerFunction(params: ISingleFunctionRegisterParams): IDisposable;
    registerAsyncFunction(params: ISingleFunctionRegisterParams): IDisposable;
    registerFunctions(params: IRegisterFunctionParams): IDisposable;
    private _registerSingleFunction;
    private _registerLocalExecutors;
    private _registerRemoteExecutors;
}
