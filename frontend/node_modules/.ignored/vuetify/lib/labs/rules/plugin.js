// Composables
import { createRules, RulesSymbol } from "./rules.js"; // Types
export function createRulesPlugin(rules, locale) {
  return {
    install(app) {
      app.provide(RulesSymbol, createRules(rules, locale));
    }
  };
}
//# sourceMappingURL=plugin.js.map