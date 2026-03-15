// Utilities
import { inject } from 'vue';

// Types

export const VCommandPaletteSymbol = Symbol.for('vuetify:command-palette');
export function useCommandPalette() {
  const commandPalette = inject(VCommandPaletteSymbol);
  if (!commandPalette) {
    throw new Error('[Vuetify] useCommandPalette must be used within VCommandPalette');
  }
  return commandPalette;
}
//# sourceMappingURL=shared.js.map