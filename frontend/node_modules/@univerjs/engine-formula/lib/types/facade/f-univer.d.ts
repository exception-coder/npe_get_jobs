import { FUniver } from '@univerjs/core/facade';
import { FFormula } from './f-formula';
/**
 * @ignore
 */
export interface IFUniverEngineFormulaMixin {
    getFormula(): FFormula;
}
export declare class FUniverEngineFormulaMixin extends FUniver implements IFUniverEngineFormulaMixin {
    getFormula(): FFormula;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverEngineFormulaMixin {
    }
}
