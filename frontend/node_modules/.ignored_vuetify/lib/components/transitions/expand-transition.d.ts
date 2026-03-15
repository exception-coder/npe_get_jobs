interface HTMLExpandElement extends HTMLElement {
    _parent?: (Node & ParentNode & HTMLElement) | null;
    _initialStyle?: {
        transition: string;
        overflow: string;
        height?: string | null;
        width?: string | null;
    };
}
export default function (expandedParentClass?: string, x?: boolean): {
    onBeforeEnter(el: HTMLExpandElement): void;
    onEnter(el: HTMLExpandElement): void;
    onAfterEnter: (el: HTMLExpandElement) => void;
    onEnterCancelled: (el: HTMLExpandElement) => void;
    onLeave(el: HTMLExpandElement): void;
    onAfterLeave: (el: HTMLExpandElement) => void;
    onLeaveCancelled: (el: HTMLExpandElement) => void;
};

