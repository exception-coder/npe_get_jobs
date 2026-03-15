import { ICommandInfo, IUnitRange, Nullable, Disposable } from '@univerjs/core';
import { IDirtyUnitFeatureMap, IDirtyUnitOtherFormulaMap, IDirtyUnitSheetDefinedNameMap, IDirtyUnitSheetNameMap } from '../basics/common';
export interface IDirtyConversionManagerParams {
    commandId: string;
    getDirtyData: (command: ICommandInfo) => {
        dirtyRanges?: IUnitRange[];
        dirtyNameMap?: IDirtyUnitSheetNameMap;
        dirtyDefinedNameMap?: IDirtyUnitSheetDefinedNameMap;
        dirtyUnitFeatureMap?: IDirtyUnitFeatureMap;
        dirtyUnitOtherFormulaMap?: IDirtyUnitOtherFormulaMap;
        clearDependencyTreeCache?: IDirtyUnitSheetNameMap;
    };
}
export interface IActiveDirtyManagerService {
    dispose(): void;
    remove(commandId: string): void;
    get(commandId: string): Nullable<IDirtyConversionManagerParams>;
    has(featureId: string): boolean;
    register(featureId: string, dirtyConversion: IDirtyConversionManagerParams): void;
    getDirtyConversionMap(): Map<string, IDirtyConversionManagerParams>;
}
/**
 * Actively mark as dirty, calculate the dirty area based on the command,
 * and plugins can register the ref range they affect into the formula engine.
 */
export declare class ActiveDirtyManagerService extends Disposable implements IActiveDirtyManagerService {
    private _dirtyConversionMap;
    dispose(): void;
    remove(commandId: string): void;
    get(commandId: string): IDirtyConversionManagerParams | undefined;
    has(commandId: string): boolean;
    register(commandId: string, dirtyConversion: IDirtyConversionManagerParams): void;
    getDirtyConversionMap(): Map<string, IDirtyConversionManagerParams>;
}
export declare const IActiveDirtyManagerService: import('@wendellhu/redi').IdentifierDecorator<ActiveDirtyManagerService>;
