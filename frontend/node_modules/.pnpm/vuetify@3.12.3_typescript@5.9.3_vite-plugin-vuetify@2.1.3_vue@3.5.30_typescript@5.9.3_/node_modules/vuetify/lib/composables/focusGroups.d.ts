// Types
import type { MaybeRefOrGetter, Ref } from 'vue';
import type { VList } from '../components/VList/index.js';
type FocusGroup = {
    type: 'list';
    contentRef: Ref<VList | undefined>;
    displayItemsCount: MaybeRefOrGetter<number>;
} | {
    type: 'element';
    contentRef: Ref<HTMLElement | undefined>;
};
export declare function useFocusGroups({ groups, onLeave }: {
    groups: FocusGroup[];
    onLeave: () => void;
}): {
    onTabKeydown: (e: KeyboardEvent) => void;
};

