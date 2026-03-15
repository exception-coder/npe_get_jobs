// Types
import type { InjectionKey, Ref } from 'vue';
import type { VCommandPaletteItem } from './types.js';
export interface CommandPaletteProvide {
    items: Ref<VCommandPaletteItem[]>;
    filteredItems: Ref<VCommandPaletteItem[]>;
    selectedIndex: Ref<number>;
    search: Ref<string>;
    setSelectedIndex: (index: number) => void;
}
export declare const VCommandPaletteSymbol: InjectionKey<CommandPaletteProvide>;
export declare function useCommandPalette(): CommandPaletteProvide;
