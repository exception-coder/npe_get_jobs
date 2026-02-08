import { Fragment as _Fragment, createVNode as _createVNode, mergeProps as _mergeProps, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VCombobox.css";

// Components
import { VAvatar } from "../VAvatar/index.js";
import { VCheckboxBtn } from "../VCheckbox/index.js";
import { VChip } from "../VChip/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VDivider } from "../VDivider/index.js";
import { VIcon } from "../VIcon/index.js";
import { VList, VListItem, VListSubheader } from "../VList/index.js";
import { VMenu } from "../VMenu/index.js";
import { makeSelectProps } from "../VSelect/VSelect.js";
import { VTextField } from "../VTextField/index.js";
import { makeVTextFieldProps } from "../VTextField/VTextField.js";
import { VVirtualScroll } from "../VVirtualScroll/index.js"; // Composables
import { useScrolling } from "../VSelect/useScrolling.js";
import { useTextColor } from "../../composables/color.js";
import { highlightResult, makeFilterProps, useFilter } from "../../composables/filter.js";
import { useForm } from "../../composables/form.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { transformItem, useItems } from "../../composables/list-items.js";
import { useLocale } from "../../composables/locale.js";
import { useMenuActivator } from "../../composables/menuActivator.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, mergeProps, nextTick, ref, shallowRef, watch } from 'vue';
import { checkPrintable, deepEqual, ensureValidVNode, escapeForRegex, genericComponent, IN_BROWSER, isComposingIgnoreKey, noop, omit, propsFactory, useRender, wrapInArray } from "../../util/index.js"; // Types
export const makeVComboboxProps = propsFactory({
  alwaysFilter: Boolean,
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: true
  },
  delimiters: Array,
  ...makeFilterProps({
    filterKeys: ['title']
  }),
  ...makeSelectProps({
    hideNoData: true,
    returnObject: true
  }),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: 'combobox'
  }), ['validationValue', 'dirty', 'appendInnerIcon'])
}, 'VCombobox');
export const VCombobox = genericComponent()({
  name: 'VCombobox',
  props: makeVComboboxProps(),
  emits: {
    'update:focused': focused => true,
    'update:modelValue': value => true,
    'update:search': value => true,
    'update:menu': value => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const isFocused = shallowRef(false);
    const isPristine = shallowRef(true);
    const listHasFocus = shallowRef(false);
    const vMenuRef = ref();
    const vVirtualScrollRef = ref();
    const selectionIndex = shallowRef(-1);
    let cleared = false;
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => vTextFieldRef.value?.color);
    const model = useProxiedModel(props, 'modelValue', [], v => transformIn(wrapInArray(v)), v => {
      const transformed = transformOut(v);
      return props.multiple ? transformed : transformed[0] ?? null;
    });
    const form = useForm(props);
    const hasChips = computed(() => !!(props.chips || slots.chip));
    const hasSelectionSlot = computed(() => hasChips.value || !!slots.selection);
    const _search = shallowRef(!props.multiple && !hasSelectionSlot.value ? model.value[0]?.title ?? '' : '');
    const _searchLock = shallowRef(null);
    const search = computed({
      get: () => {
        return _search.value;
      },
      set: async val => {
        _search.value = val ?? '';
        if (val === null || val === '' && !props.multiple && !hasSelectionSlot.value) {
          model.value = [];
        } else if (!props.multiple && !hasSelectionSlot.value) {
          model.value = [transformItem(props, val)];
          nextTick(() => vVirtualScrollRef.value?.scrollToIndex(0));
        }
        if (val && props.multiple && props.delimiters?.length) {
          const signsToMatch = props.delimiters.map(escapeForRegex).join('|');
          const values = val.split(new RegExp(`(?:${signsToMatch})+`));
          if (values.length > 1) {
            for (let v of values) {
              v = v.trim();
              if (v) {
                select(transformItem(props, v));
                await nextTick();
              }
            }
            _search.value = '';
          }
        }
        if (!val) selectionIndex.value = -1;
        isPristine.value = !val;
      }
    });
    const counterValue = computed(() => {
      return typeof props.counterValue === 'function' ? props.counterValue(model.value) : typeof props.counterValue === 'number' ? props.counterValue : props.multiple ? model.value.length : search.value.length;
    });
    const {
      filteredItems,
      getMatches
    } = useFilter(props, items, () => _searchLock.value ?? (props.alwaysFilter || !isPristine.value ? search.value : ''));
    const displayItems = computed(() => {
      if (props.hideSelected && _searchLock.value === null) {
        return filteredItems.value.filter(filteredItem => !model.value.some(s => s.value === filteredItem.value));
      }
      return filteredItems.value;
    });
    const menuDisabled = computed(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
    const _menu = useProxiedModel(props, 'menu');
    const menu = computed({
      get: () => _menu.value,
      set: v => {
        if (_menu.value && !v && vMenuRef.value?.ΨopenChildren.size) return;
        if (v && menuDisabled.value) return;
        _menu.value = v;
      }
    });
    const {
      menuId,
      ariaExpanded,
      ariaControls,
      ariaLabel
    } = useMenuActivator(props, menu);
    watch(_search, value => {
      if (cleared) {
        // wait for clear to finish, VTextField sets _search to null
        // then search computed triggers and updates _search to ''
        nextTick(() => cleared = false);
      } else if (isFocused.value && !menu.value) {
        menu.value = true;
      }
      emit('update:search', value);
    });
    watch(model, value => {
      if (!props.multiple && !hasSelectionSlot.value) {
        _search.value = value[0]?.title ?? '';
      }
    });
    const selectedValues = computed(() => model.value.map(selection => selection.value));
    const highlightFirst = computed(() => {
      const selectFirst = props.autoSelectFirst === true || props.autoSelectFirst === 'exact' && search.value === displayItems.value[0]?.title;
      return selectFirst && displayItems.value.length > 0 && !isPristine.value && !listHasFocus.value;
    });
    const listRef = ref();
    const listEvents = useScrolling(listRef, vTextFieldRef);
    function onClear(e) {
      cleared = true;
      nextTick(() => cleared = false);
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return;
      menu.value = true;
    }
    function onMousedownMenuIcon(e) {
      if (menuDisabled.value) return;
      if (isFocused.value) {
        e.preventDefault();
        e.stopPropagation();
      }
      menu.value = !menu.value;
    }
    function onListKeydown(e) {
      if (checkPrintable(e) || e.key === 'Backspace') {
        vTextFieldRef.value?.focus();
      }
    }
    // eslint-disable-next-line complexity
    function onKeydown(e) {
      if (isComposingIgnoreKey(e) || form.isReadonly.value) return;
      const selectionStart = vTextFieldRef.value?.selectionStart;
      const length = model.value.length;
      if (['Enter', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
      }
      if (['Enter', 'ArrowDown'].includes(e.key)) {
        menu.value = true;
      }
      if (['Escape'].includes(e.key)) {
        menu.value = false;
      }
      if (highlightFirst.value && ['Enter', 'Tab'].includes(e.key) && !model.value.some(_ref2 => {
        let {
          value
        } = _ref2;
        return value === displayItems.value[0].value;
      })) {
        select(filteredItems.value[0]);
      }
      if (e.key === 'ArrowDown' && highlightFirst.value) {
        listRef.value?.focus('next');
      }
      if (e.key === 'Enter' && search.value) {
        select(transformItem(props, search.value), true, true);
        if (hasSelectionSlot.value) _search.value = '';
      }
      if (['Backspace', 'Delete'].includes(e.key)) {
        if (!props.multiple && hasSelectionSlot.value && model.value.length > 0 && !search.value) return select(model.value[0], false);
        if (~selectionIndex.value) {
          e.preventDefault();
          const originalSelectionIndex = selectionIndex.value;
          select(model.value[selectionIndex.value], false);
          selectionIndex.value = originalSelectionIndex >= length - 1 ? length - 2 : originalSelectionIndex;
        } else if (e.key === 'Backspace' && !search.value) {
          selectionIndex.value = length - 1;
        }
        return;
      }
      if (!props.multiple) return;
      if (e.key === 'ArrowLeft') {
        if (selectionIndex.value < 0 && selectionStart && selectionStart > 0) return;
        const prev = selectionIndex.value > -1 ? selectionIndex.value - 1 : length - 1;
        if (model.value[prev]) {
          selectionIndex.value = prev;
        } else {
          selectionIndex.value = -1;
          vTextFieldRef.value?.setSelectionRange(search.value.length, search.value.length);
        }
      } else if (e.key === 'ArrowRight') {
        if (selectionIndex.value < 0) return;
        const next = selectionIndex.value + 1;
        if (model.value[next]) {
          selectionIndex.value = next;
        } else {
          selectionIndex.value = -1;
          vTextFieldRef.value?.setSelectionRange(0, 0);
        }
      } else if (~selectionIndex.value && checkPrintable(e)) {
        selectionIndex.value = -1;
      }
    }
    function onAfterEnter() {
      if (props.eager) {
        vVirtualScrollRef.value?.calculateVisibleItems();
      }
    }
    function onAfterLeave() {
      if (isFocused.value) {
        vTextFieldRef.value?.focus();
      }
      isPristine.value = true;
      _searchLock.value = null;
    }
    /** @param set - null means toggle */
    function select(item) {
      let set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      let keepMenu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!item || item.props.disabled) return;
      if (props.multiple) {
        const index = model.value.findIndex(selection => (props.valueComparator || deepEqual)(selection.value, item.value));
        const add = set == null ? !~index : set;
        if (~index) {
          const value = add ? [...model.value, item] : [...model.value];
          value.splice(index, 1);
          model.value = value;
        } else if (add) {
          model.value = [...model.value, item];
        }
        if (props.clearOnSelect) {
          search.value = '';
        }
      } else {
        const add = set !== false;
        model.value = add ? [item] : [];
        if ((!isPristine.value || props.alwaysFilter) && _search.value) {
          _searchLock.value = _search.value;
        }
        _search.value = add && !hasSelectionSlot.value ? item.title : '';

        // watch for search watcher to trigger
        nextTick(() => {
          menu.value = keepMenu;
          isPristine.value = true;
        });
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
      setTimeout(() => {
        listHasFocus.value = true;
      });
    }
    function onFocusout(e) {
      listHasFocus.value = false;
    }
    watch(isFocused, (val, oldVal) => {
      if (val || val === oldVal) return;
      selectionIndex.value = -1;
      menu.value = false;
      if (search.value) {
        if (props.multiple) {
          select(transformItem(props, search.value));
          return;
        }
        if (!hasSelectionSlot.value) return;
        if (model.value.some(_ref3 => {
          let {
            title
          } = _ref3;
          return title === search.value;
        })) {
          _search.value = '';
        } else {
          select(transformItem(props, search.value));
        }
      }
    });
    watch(menu, val => {
      if (!props.hideSelected && val && model.value.length && isPristine.value) {
        const index = displayItems.value.findIndex(item => model.value.some(s => (props.valueComparator || deepEqual)(s.value, item.value)));
        IN_BROWSER && window.requestAnimationFrame(() => {
          index >= 0 && vVirtualScrollRef.value?.scrollToIndex(index);
        });
      }
      if (val) _searchLock.value = null;
    });
    watch(items, (newVal, oldVal) => {
      if (menu.value) return;
      if (isFocused.value && !oldVal.length && newVal.length) {
        menu.value = true;
      }
    });
    useRender(() => {
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots['prepend-item'] || slots['append-item'] || slots['no-data']);
      const isDirty = model.value.length > 0;
      const textFieldProps = VTextField.filterProps(props);
      return _createVNode(VTextField, _mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": search.value,
        "onUpdate:modelValue": $event => search.value = $event,
        "focused": isFocused.value,
        "onUpdate:focused": $event => isFocused.value = $event,
        "validationValue": model.externalValue,
        "counterValue": counterValue.value,
        "dirty": isDirty,
        "class": ['v-combobox', {
          'v-combobox--active-menu': menu.value,
          'v-combobox--chips': !!props.chips,
          'v-combobox--selection-slot': !!hasSelectionSlot.value,
          'v-combobox--selecting-index': selectionIndex.value > -1,
          [`v-combobox--${props.multiple ? 'multiple' : 'single'}`]: true
        }, props.class],
        "style": props.style,
        "readonly": form.isReadonly.value,
        "placeholder": isDirty ? undefined : props.placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onKeydown": onKeydown,
        "aria-expanded": ariaExpanded.value,
        "aria-controls": ariaControls.value
      }), {
        ...slots,
        default: () => _createElementVNode(_Fragment, null, [_createVNode(VMenu, _mergeProps({
          "id": menuId.value,
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": $event => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-combobox__content",
          "disabled": menuDisabled.value,
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "onAfterEnter": onAfterEnter,
          "onAfterLeave": onAfterLeave
        }, props.menuProps), {
          default: () => [hasList && _createVNode(VList, _mergeProps({
            "ref": listRef,
            "filterable": true,
            "selected": selectedValues.value,
            "selectStrategy": props.multiple ? 'independent' : 'single-independent',
            "onMousedown": e => e.preventDefault(),
            "selectable": true,
            "onKeydown": onListKeydown,
            "onFocusin": onFocusin,
            "onFocusout": onFocusout,
            "tabindex": "-1",
            "aria-live": "polite",
            "color": props.itemColor ?? props.color
          }, listEvents, props.listProps), {
            default: () => [slots['prepend-item']?.(), !displayItems.value.length && !props.hideNoData && (slots['no-data']?.() ?? _createVNode(VListItem, {
              "key": "no-data",
              "title": t(props.noDataText)
            }, null)), _createVNode(VVirtualScroll, {
              "ref": vVirtualScrollRef,
              "renderless": true,
              "items": displayItems.value,
              "itemKey": "value"
            }, {
              default: _ref4 => {
                let {
                  item,
                  index,
                  itemRef
                } = _ref4;
                const itemProps = mergeProps(item.props, {
                  ref: itemRef,
                  key: item.value,
                  active: highlightFirst.value && index === 0 ? true : undefined,
                  onClick: () => select(item, null)
                });
                if (item.type === 'divider') {
                  return slots.divider?.({
                    props: item.raw,
                    index
                  }) ?? _createVNode(VDivider, _mergeProps(item.props, {
                    "key": `divider-${index}`
                  }), null);
                }
                if (item.type === 'subheader') {
                  return slots.subheader?.({
                    props: item.raw,
                    index
                  }) ?? _createVNode(VListSubheader, _mergeProps(item.props, {
                    "key": `subheader-${index}`
                  }), null);
                }
                return slots.item?.({
                  item,
                  index,
                  props: itemProps
                }) ?? _createVNode(VListItem, _mergeProps(itemProps, {
                  "role": "option"
                }), {
                  prepend: _ref5 => {
                    let {
                      isSelected
                    } = _ref5;
                    return _createElementVNode(_Fragment, null, [props.multiple && !props.hideSelected ? _createVNode(VCheckboxBtn, {
                      "key": item.value,
                      "modelValue": isSelected,
                      "ripple": false,
                      "tabindex": "-1",
                      "onClick": event => event.preventDefault()
                    }, null) : undefined, item.props.prependAvatar && _createVNode(VAvatar, {
                      "image": item.props.prependAvatar
                    }, null), item.props.prependIcon && _createVNode(VIcon, {
                      "icon": item.props.prependIcon
                    }, null)]);
                  },
                  title: () => {
                    return isPristine.value ? item.title : highlightResult('v-combobox', item.title, getMatches(item)?.title);
                  }
                });
              }
            }), slots['append-item']?.()]
          })]
        }), model.value.map((item, index) => {
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item, false);
          }
          const slotProps = {
            'onClick:close': onChipClose,
            onKeydown(e) {
              if (e.key !== 'Enter' && e.key !== ' ') return;
              e.preventDefault();
              e.stopPropagation();
              onChipClose(e);
            },
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            'onUpdate:modelValue': undefined
          };
          const hasSlot = hasChips.value ? !!slots.chip : !!slots.selection;
          const slotContent = hasSlot ? ensureValidVNode(hasChips.value ? slots.chip({
            item,
            index,
            props: slotProps
          }) : slots.selection({
            item,
            index
          })) : undefined;
          if (hasSlot && !slotContent) return undefined;
          return _createElementVNode("div", {
            "key": item.value,
            "class": _normalizeClass(['v-combobox__selection', index === selectionIndex.value && ['v-combobox__selection--selected', textColorClasses.value]]),
            "style": _normalizeStyle(index === selectionIndex.value ? textColorStyles.value : {})
          }, [hasChips.value ? !slots.chip ? _createVNode(VChip, _mergeProps({
            "key": "chip",
            "closable": props.closableChips,
            "size": "small",
            "text": item.title,
            "disabled": item.props.disabled
          }, slotProps), null) : _createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: props.closableChips,
                size: 'small',
                text: item.title
              }
            }
          }, {
            default: () => [slotContent]
          }) : slotContent ?? _createElementVNode("span", {
            "class": "v-combobox__selection-text"
          }, [item.title, props.multiple && index < model.value.length - 1 && _createElementVNode("span", {
            "class": "v-combobox__selection-comma"
          }, [_createTextVNode(",")])])]);
        })]),
        'append-inner': function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _createElementVNode(_Fragment, null, [slots['append-inner']?.(...args), (!props.hideNoData || props.items.length) && props.menuIcon ? _createVNode(VIcon, {
            "class": "v-combobox__menu-icon",
            "color": vTextFieldRef.value?.fieldIconColor,
            "icon": props.menuIcon,
            "onMousedown": onMousedownMenuIcon,
            "onClick": noop,
            "aria-label": ariaLabel.value,
            "title": ariaLabel.value,
            "tabindex": "-1"
          }, null) : undefined]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      isPristine,
      menu,
      search,
      selectionIndex,
      filteredItems,
      select
    }, vTextFieldRef);
  }
});
//# sourceMappingURL=VCombobox.js.map