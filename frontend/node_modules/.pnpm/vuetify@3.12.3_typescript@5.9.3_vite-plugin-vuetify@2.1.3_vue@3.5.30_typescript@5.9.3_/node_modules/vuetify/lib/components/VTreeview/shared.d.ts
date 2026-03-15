// Types
import type { ComputedRef, InjectionKey } from 'vue';
import type { ListItemSlot } from '../VList/VListItem.js';
export interface TreeViewProvide {
    visibleIds: ComputedRef<Set<unknown> | null>;
}
export type ToggleListItemSlot = ListItemSlot & {
    props: {
        onClick: (e: PointerEvent) => void;
    };
};
export declare const VTreeviewSymbol: InjectionKey<TreeViewProvide>;
