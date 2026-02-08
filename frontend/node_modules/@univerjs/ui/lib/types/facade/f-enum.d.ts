import { FEnum } from '@univerjs/core/facade';
import { BuiltInUIPart, KeyCode } from '@univerjs/ui';
/**
 * @ignore
 */
interface IFUIEnumMixin {
    /**
     * Built-in UI parts.
     */
    get BuiltInUIPart(): typeof BuiltInUIPart;
    /**
     * Key codes.
     */
    get KeyCode(): typeof KeyCode;
}
/**
 * @ignore
 */
export declare class FUIEnum extends FEnum implements IFUIEnumMixin {
    get BuiltInUIPart(): typeof BuiltInUIPart;
    get KeyCode(): typeof KeyCode;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFUIEnumMixin {
    }
}
export {};
