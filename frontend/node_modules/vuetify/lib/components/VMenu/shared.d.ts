// Types
import type { InjectionKey } from 'vue';
interface MenuProvide {
    register(): void;
    unregister(): void;
    closeParents(e?: MouseEvent): void;
}
export declare const VMenuSymbol: InjectionKey<MenuProvide>;

