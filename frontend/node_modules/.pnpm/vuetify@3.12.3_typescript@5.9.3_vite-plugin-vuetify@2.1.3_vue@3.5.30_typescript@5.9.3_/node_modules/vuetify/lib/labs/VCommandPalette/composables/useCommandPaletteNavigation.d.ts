// Types
import type { ComputedRef, Ref } from 'vue';
import type { VCommandPaletteItem } from '../types.js';
export interface UseCommandPaletteNavigationOptions {
    filteredItems: ComputedRef<VCommandPaletteItem[]>;
    onItemClick: (item: VCommandPaletteItem, event: KeyboardEvent | MouseEvent) => void;
}
export interface UseCommandPaletteNavigationReturn {
    selectedIndex: Readonly<Ref<number>>;
    getSelectedItem: () => VCommandPaletteItem | undefined;
    execute: (index: number, event: KeyboardEvent | MouseEvent) => void;
    executeSelected: (event: KeyboardEvent | MouseEvent) => void;
    reset: () => void;
    setSelectedIndex: (index: number) => void;
}
export declare function useCommandPaletteNavigation(options: UseCommandPaletteNavigationOptions): UseCommandPaletteNavigationReturn;
