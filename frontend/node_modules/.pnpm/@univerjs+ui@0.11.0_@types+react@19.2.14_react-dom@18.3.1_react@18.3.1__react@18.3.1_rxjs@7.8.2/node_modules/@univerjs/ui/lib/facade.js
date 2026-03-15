var F = Object.defineProperty;
var R = (n, e, t) => e in n ? F(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var o = (n, e, t) => R(n, typeof e != "symbol" ? e + "" : e, t);
import { FBase as C, FUniver as M, FHooks as j, FEnum as y } from "@univerjs/core/facade";
import { IRenderManagerService as U } from "@univerjs/engine-render";
import { IMenuManagerService as P, MenuItemType as x, RibbonStartGroup as w, RibbonPosition as T, MenuManagerPosition as O, IShortcutService as G, CopyCommand as v, PasteCommand as p, ISidebarService as V, IDialogService as $, ComponentManager as I, IMessageService as N, IUIPartsService as g, connectInjector as H, SheetPasteShortKeyCommandName as K, BuiltInUIPart as k, KeyCode as L } from "@univerjs/ui";
import { Inject as m, Injector as f, ICommandService as u, generateRandomId as A, CommandType as W, IUniverInstanceService as q, UniverInstanceType as z } from "@univerjs/core";
var J = Object.getOwnPropertyDescriptor, D = (n, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? J(e, t) : e, s = n.length - 1, c; s >= 0; s--)
    (c = n[s]) && (i = c(i) || i);
  return i;
}, d = (n, e) => (t, r) => e(t, r, n);
class E extends C {
  /**
   * Append the menu to any menu position on Univer UI.
   * @param {string | string[]} path - Some predefined path to append the menu. The paths can be an array,
   * or an array joined by `|` separator. Since lots of submenus reuse the same name,
   * you may need to specify their parent menus as well.
   *
   * @example
   * ```typescript
   * // This menu item will appear on every `contextMenu.others` section.
   * univerAPI.createMenu({
   *   id: 'custom-menu-id-1',
   *   title: 'Custom Menu 1',
   *   action: () => {
   *     console.log('Custom Menu 1 clicked');
   *   },
   * }).appendTo('contextMenu.others');
   *
   * // This menu item will only appear on the `contextMenu.others` section on the main area.
   * univerAPI.createMenu({
   *   id: 'custom-menu-id-2',
   *   title: 'Custom Menu 2',
   *   action: () => {
   *     console.log('Custom Menu 2 clicked');
   *   },
   * }).appendTo(['contextMenu.mainArea', 'contextMenu.others']);
   * ```
   */
  appendTo(e) {
    const t = typeof e == "string" ? e.split("|") : e, r = t.length, i = {};
    let s = i;
    const c = this.__getSchema();
    t.forEach((S, B) => {
      B === r - 1 ? s[S] = c : s[S] = {}, s = s[S];
    }), this._menuManagerService.mergeMenu(i);
  }
}
var a;
let _ = (a = class extends E {
  constructor(e, t, r, i) {
    super();
    o(this, "_commandToRegister", /* @__PURE__ */ new Map());
    o(this, "_buildingSchema");
    this._item = e, this._injector = t, this._commandService = r, this._menuManagerService = i;
    const s = typeof e.action == "string" ? e.action : A(12);
    s !== e.action && this._commandToRegister.set(s, e.action), this._buildingSchema = {
      // eslint-disable-next-line ts/explicit-function-return-type
      menuItemFactory: () => ({
        id: e.id,
        type: x.BUTTON,
        // we only support button for now
        icon: e.icon,
        title: e.title,
        tooltip: e.tooltip,
        commandId: s
      })
    }, typeof e.order < "u" && (this._buildingSchema.order = e.order);
  }
  /**
   * @ignore
   */
  __getSchema() {
    return this._commandToRegister.forEach((e, t) => {
      this._commandService.hasCommand(t) || this._commandService.registerCommand({
        id: t,
        type: W.COMMAND,
        handler: e
      });
    }), { [this._item.id]: this._buildingSchema };
  }
}, o(a, "RibbonStartGroup", w), o(a, "RibbonPosition", T), o(a, "MenuManagerPosition", O), a);
_ = D([
  d(1, m(f)),
  d(2, u),
  d(3, P)
], _);
let l = class extends E {
  constructor(e, t, r) {
    super();
    o(this, "_menuByGroups", []);
    o(this, "_submenus", []);
    o(this, "_buildingSchema");
    this._item = e, this._injector = t, this._menuManagerService = r, this._buildingSchema = {
      // eslint-disable-next-line ts/explicit-function-return-type
      menuItemFactory: () => ({
        id: e.id,
        type: x.SUBITEMS,
        icon: e.icon,
        title: e.title,
        tooltip: e.tooltip
      })
    }, typeof e.order < "u" && (this._buildingSchema.order = e.order);
  }
  /**
   * Add a menu to the submenu. It can be a {@link FMenu} or a {@link FSubmenu}.
   * @param {FMenu | FSubmenu} submenu - Menu to add to the submenu.
   * @returns {FSubmenu} The FSubmenu itself for chaining calls.
   * @example
   * ```typescript
   * // Create two leaf menus.
   * const menu1 = univerAPI.createMenu({
   *   id: 'submenu-nested-1',
   *   title: 'Item 1',
   *   action: () => {
   *     console.log('Item 1 clicked');
   *   }
   * });
   * const menu2 = univerAPI.createMenu({
   *   id: 'submenu-nested-2',
   *   title: 'Item 2',
   *   action: () => {
   *     console.log('Item 2 clicked');
   *   }
   * });
   *
   * // Add the leaf menus to a submenu.
   * const submenu = univerAPI.createSubmenu({ id: 'submenu-nested', title: 'Nested Submenu' })
   *   .addSubmenu(menu1)
   *   .addSeparator()
   *   .addSubmenu(menu2);
   *
   * // Create a root submenu append to the `contextMenu.others` section.
   * univerAPI.createSubmenu({ id: 'custom-submenu', title: 'Custom Submenu' })
   *   .addSubmenu(submenu)
   *   .appendTo('contextMenu.others');
   * ```
   */
  addSubmenu(e) {
    return this._submenus.push(e), this;
  }
  /**
   * Add a separator to the submenu.
   * @returns {FSubmenu} The FSubmenu itself for chaining calls.
   * @example
   * ```typescript
   * // Create two leaf menus.
   * const menu1 = univerAPI.createMenu({
   *   id: 'submenu-nested-1',
   *   title: 'Item 1',
   *   action: () => {
   *     console.log('Item 1 clicked');
   *   }
   * });
   * const menu2 = univerAPI.createMenu({
   *   id: 'submenu-nested-2',
   *   title: 'Item 2',
   *   action: () => {
   *     console.log('Item 2 clicked');
   *   }
   * });
   *
   * // Add the leaf menus to a submenu and add a separator between them.
   * // Append the submenu to the `contextMenu.others` section.
   * univerAPI.createSubmenu({ id: 'submenu-nested', title: 'Nested Submenu' })
   *   .addSubmenu(menu1)
   *   .addSeparator()
   *   .addSubmenu(menu2)
   *   .appendTo('contextMenu.others');
   * ```
   */
  addSeparator() {
    return this._menuByGroups.push(this._submenus), this._submenus = [], this;
  }
  /**
   * @ignore
   */
  __getSchema() {
    const e = {};
    return this.addSeparator(), this._menuByGroups.forEach((t, r) => {
      const i = {};
      t.forEach((s) => {
        Object.assign(i, s.__getSchema());
      }), e[`${this._item.id}-group-${r}`] = i;
    }), { [this._item.id]: Object.assign(this._buildingSchema, e) };
  }
};
l = D([
  d(1, m(f)),
  d(2, P)
], l);
var Q = Object.getOwnPropertyDescriptor, X = (n, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? Q(e, t) : e, s = n.length - 1, c; s >= 0; s--)
    (c = n[s]) && (i = c(i) || i);
  return i;
}, h = (n, e) => (t, r) => e(t, r, n);
let b = class extends C {
  constructor(e, t, r, i) {
    super();
    o(this, "_forceDisableDisposable", null);
    this._injector = e, this._renderManagerService = t, this._univerInstanceService = r, this._shortcutService = i;
  }
  /**
   * Enable shortcuts of Univer.
   * @returns {FShortcut} The Facade API instance itself for chaining.
   *
   * @example
   * ```typescript
   * fShortcut.enableShortcut(); // Use the FShortcut instance used by disableShortcut before, do not create a new instance
   * ```
   */
  enableShortcut() {
    var e;
    return (e = this._forceDisableDisposable) == null || e.dispose(), this._forceDisableDisposable = null, this;
  }
  /**
   * Disable shortcuts of Univer.
   * @returns {FShortcut} The Facade API instance itself for chaining.
   *
   * @example
   * ```typescript
   * const fShortcut = univerAPI.getShortcut();
   * fShortcut.disableShortcut();
   * ```
   */
  disableShortcut() {
    return this._forceDisableDisposable || (this._forceDisableDisposable = this._shortcutService.forceDisable()), this;
  }
  /**
   * Trigger shortcut of Univer by a KeyboardEvent and return the matched shortcut item.
   * @param {KeyboardEvent} e - The KeyboardEvent to trigger.
   * @returns {IShortcutItem<object> | undefined} The matched shortcut item.
   *
   * @example
   * ```typescript
   * // Assum the current sheet is empty sheet.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1');
   *
   * // Set A1 cell active and set value to 'Hello Univer'.
   * fRange.activate();
   * fRange.setValue('Hello Univer');
   * console.log(fRange.getCellStyle().bold); // false
   *
   * // Set A1 cell bold by shortcut.
   * const fShortcut = univerAPI.getShortcut();
   * const pseudoEvent = new KeyboardEvent('keydown', {
   *   key: 'b',
   *   ctrlKey: true,
   *   keyCode: univerAPI.Enum.KeyCode.B
   * });
   * const ifShortcutItem = fShortcut.triggerShortcut(pseudoEvent);
   * if (ifShortcutItem) {
   *   const commandId = ifShortcutItem.id;
   *   console.log(fRange.getCellStyle().bold); // true
   * }
   * ```
   */
  triggerShortcut(e) {
    const t = this._univerInstanceService.getCurrentUnitForType(z.UNIVER_SHEET);
    if (!t)
      return;
    const r = this._renderManagerService.getRenderById(t.getUnitId());
    return r ? (r.engine.getCanvasElement().dispatchEvent(e), this._shortcutService.dispatch(e)) : void 0;
  }
  /**
   * Dispatch a KeyboardEvent to the shortcut service and return the matched shortcut item.
   * @param {KeyboardEvent} e - The KeyboardEvent to dispatch.
   * @returns {IShortcutItem<object> | undefined} The matched shortcut item.
   *
   * @example
   * ```typescript
   * const fShortcut = univerAPI.getShortcut();
   * const pseudoEvent = new KeyboardEvent('keydown', { key: 's', ctrlKey: true });
   * const ifShortcutItem = fShortcut.dispatchShortcutEvent(pseudoEvent);
   * if (ifShortcutItem) {
   *   const commandId = ifShortcutItem.id;
   *   // Do something with the commandId.
   * }
   * ```
   */
  dispatchShortcutEvent(e) {
    return this._shortcutService.dispatch(e);
  }
};
b = X([
  h(0, m(f)),
  h(1, m(U)),
  h(2, q),
  h(3, G)
], b);
class Y extends M {
  getURL() {
    return new URL(window.location.href);
  }
  getShortcut() {
    return this._injector.createInstance(b);
  }
  copy() {
    return this._commandService.executeCommand(v.id);
  }
  paste() {
    return this._commandService.executeCommand(p.id);
  }
  createMenu(e) {
    return this._injector.createInstance(_, e);
  }
  createSubmenu(e) {
    return this._injector.createInstance(l, e);
  }
  openSiderbar(e) {
    return this._injector.get(V).open(e);
  }
  openSidebar(e) {
    return this.openSiderbar(e);
  }
  openDialog(e) {
    const r = this._injector.get($).open({
      ...e,
      onClose: () => {
        r.dispose();
      }
    });
    return r;
  }
  getComponentManager() {
    return this._injector.get(I);
  }
  showMessage(e) {
    return this._injector.get(N).show(e), this;
  }
  setUIVisible(e, t) {
    return this._injector.get(g).setUIVisible(e, t), this;
  }
  isUIVisible(e) {
    return this._injector.get(g).isUIVisible(e);
  }
  registerUIPart(e, t) {
    return this._injector.get(g).registerComponent(e, () => H(t, this._injector));
  }
  registerComponent(e, t, r) {
    const i = this._injector.get(I);
    return this.disposeWithMe(i.register(e, t, r));
  }
  setCurrent(e) {
    if (!this._injector.get(U).getRenderById(e))
      throw new Error("Unit not found");
    this._univerInstanceService.setCurrentUnitForType(e);
  }
}
M.extend(Y);
class Z extends j {
  onBeforeCopy(e) {
    return this._injector.get(u).beforeCommandExecuted((r) => {
      r.id === v.id && e();
    });
  }
  onCopy(e) {
    return this._injector.get(u).onCommandExecuted((r) => {
      r.id === v.id && e();
    });
  }
  onBeforePaste(e) {
    return this._injector.get(u).beforeCommandExecuted((r) => {
      r.id === p.id && e();
    });
  }
  onPaste(e) {
    return this._injector.get(u).onCommandExecuted((r) => {
      (r.id === p.id || r.id === K) && e();
    });
  }
}
j.extend(Z);
class ee extends y {
  get BuiltInUIPart() {
    return k;
  }
  get KeyCode() {
    return L;
  }
}
y.extend(ee);
