// Types
import type { MaybeRef } from '../../util/index.js';
interface HotkeyOptions {
    event?: MaybeRef<'keydown' | 'keyup'>;
    inputs?: MaybeRef<boolean>;
    preventDefault?: MaybeRef<boolean>;
    sequenceTimeout?: MaybeRef<number>;
}
export declare function useHotkey(keys: MaybeRef<string | undefined>, callback: (e: KeyboardEvent) => void, options?: HotkeyOptions): () => void;

