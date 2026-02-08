import { IDisposable } from '@wendellhu/redi';
export interface INeedCheckDisposable extends IDisposable {
    canDispose: () => boolean;
}
