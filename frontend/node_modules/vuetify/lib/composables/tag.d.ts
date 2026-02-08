// Types
import type { PropType } from 'vue';
import type { JSXComponent } from '../util/index.js';
// Types
export interface TagProps {
    tag: string | JSXComponent;
}
// Composables
export declare const makeTagProps: <Defaults extends {
    tag?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | JSXComponent : string | Defaults["tag"] | JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | JSXComponent : Defaults["tag"] | NonNullable<string | JSXComponent>;
    };
};
