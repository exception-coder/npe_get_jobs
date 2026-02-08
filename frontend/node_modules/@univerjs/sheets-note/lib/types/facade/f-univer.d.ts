import { Injector } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFUniverSheetNoteMixin {
}
export declare class FUniverSheetNoteMixin extends FUniver implements IFUniverSheetNoteMixin {
    _initialize(injector: Injector): void;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverSheetNoteMixin {
    }
}
