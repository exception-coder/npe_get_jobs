import { createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VCommandPalette.css";

// Components
import { VCommandPaletteSymbol } from "./shared.js";
import { VCommandPaletteItemComponent } from "./VCommandPaletteItem.js";
import { VDialog } from "../../components/VDialog/index.js";
import { makeVDialogProps } from "../../components/VDialog/VDialog.js";
import { VList } from "../../components/VList/index.js";
import { VSheet } from "../../components/VSheet/index.js";
import { VTextField } from "../../components/VTextField/index.js"; // Composables
import { useCommandPaletteNavigation } from "./composables/useCommandPaletteNavigation.js";
import { makeDensityProps } from "../../composables/density.js";
import { makeFilterProps, useFilter } from "../../composables/filter.js";
import { useHotkey } from "../../composables/hotkey/index.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, nextTick, onUnmounted, provide, ref, shallowRef, toRef, watch, watchEffect } from 'vue';
import { isActionItem } from "./types.js";
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCommandPaletteProps = propsFactory({
  modelValue: Boolean,
  search: String,
  items: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: '$vuetify.command.search'
  },
  inputIcon: {
    type: String,
    default: '$search'
  },
  hotkey: String,
  noDataText: {
    type: String,
    default: '$vuetify.noDataText'
  },
  listProps: Object,
  ...makeFilterProps({
    filterKeys: ['title', 'subtitle']
  }),
  ...makeDensityProps(),
  ...omit(makeVDialogProps({
    maxWidth: 500
  }), ['modelValue'])
}, 'VCommandPalette');
export const VCommandPalette = genericComponent()({
  name: 'VCommandPalette',
  props: makeVCommandPaletteProps(),
  emits: {
    'update:modelValue': value => true,
    'update:search': value => true,
    'click:item': (item, event) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const isOpen = useProxiedModel(props, 'modelValue');
    const searchQuery = useProxiedModel(props, 'search');
    const searchInputRef = ref();
    const dialogRef = ref();
    const previouslyFocusedElement = shallowRef(null);
    const internalItems = computed(() => props.items.map((item, index) => ({
      value: index,
      type: item.type,
      raw: item,
      ...('title' in item && {
        title: item.title
      }),
      ...('subtitle' in item && {
        subtitle: item.subtitle
      })
    })));
    const {
      filteredItems: filterResult
    } = useFilter(props, internalItems, searchQuery);
    const filteredItems = computed(() => filterResult.value.map(item => item.raw));
    const itemsForList = computed(() => {
      return filteredItems.value.map((item, idx) => ({
        ...item,
        value: idx
      }));
    });
    const navigation = useCommandPaletteNavigation({
      filteredItems,
      onItemClick: (item, event) => {
        if ('onClick' in item && item.onClick) {
          item.onClick(event, item.value);
        }
        emit('click:item', item, event);
        isOpen.value = false;
      }
    });
    provide(VCommandPaletteSymbol, {
      items: computed(() => props.items),
      filteredItems,
      selectedIndex: navigation.selectedIndex,
      search: searchQuery,
      setSelectedIndex: navigation.setSelectedIndex
    });

    // Register main hotkey with cleanup - using toRef for reactivity
    const hotkeyUnsubscribe = useHotkey(toRef(props, 'hotkey'), () => {
      isOpen.value = !isOpen.value;
    });
    watchEffect(onCleanup => {
      if (!isOpen.value) {
        return;
      }
      const hotkeyUnsubscribes = [];
      function registerItemHotkeys(items) {
        items.forEach(item => {
          if (isActionItem(item) && item.hotkey) {
            const unsubscribe = useHotkey(item.hotkey, event => {
              event.preventDefault();
              if (item.onClick) {
                item.onClick(event, item.value);
              }
              emit('click:item', item, event);
              isOpen.value = false;
            }, {
              inputs: true
            });
            hotkeyUnsubscribes.push(unsubscribe);
          }
        });
      }
      registerItemHotkeys(props.items);
      onCleanup(() => {
        hotkeyUnsubscribes.forEach(unsubscribe => unsubscribe?.());
      });
    });
    function findNextSelectableIndex(startIndex, direction) {
      const items = filteredItems.value;
      if (items.length === 0) return -1;
      let index = startIndex;
      const maxIterations = items.length;
      for (let i = 0; i < maxIterations; i++) {
        index += direction;
        if (index >= items.length) index = 0;
        if (index < 0) index = items.length - 1;
        if (isActionItem(items[index])) {
          return index;
        }
      }
      return -1;
    }
    function handleSearchKeydown(e) {
      switch (e.key) {
        case 'ArrowDown':
          {
            e.preventDefault();
            const nextIndex = findNextSelectableIndex(navigation.selectedIndex.value, 1);
            if (nextIndex !== -1) {
              navigation.setSelectedIndex(nextIndex);
            }
            break;
          }
        case 'ArrowUp':
          {
            e.preventDefault();
            const prevIndex = findNextSelectableIndex(navigation.selectedIndex.value, -1);
            if (prevIndex !== -1) {
              navigation.setSelectedIndex(prevIndex);
            }
            break;
          }
        case 'Enter':
          e.preventDefault();
          navigation.executeSelected(e);
          break;
        case 'Escape':
          e.preventDefault();
          isOpen.value = false;
          break;
      }
    }
    watch(isOpen, (newValue, oldValue) => {
      if (newValue && !oldValue) {
        previouslyFocusedElement.value = document.activeElement;
        searchQuery.value = '';
        navigation.reset();

        // Use requestAnimationFrame to ensure DOM is fully rendered
        nextTick(() => {
          requestAnimationFrame(() => {
            if (searchInputRef.value && typeof searchInputRef.value.focus === 'function') {
              searchInputRef.value.focus();
            }
          });
        });
      } else if (!newValue && oldValue) {
        nextTick(() => {
          previouslyFocusedElement.value?.focus({
            preventScroll: true
          });
          previouslyFocusedElement.value = null;
        });
      }
    }, {
      immediate: true
    });
    onUnmounted(() => {
      hotkeyUnsubscribe();
      previouslyFocusedElement.value = null;
    });
    useRender(() => {
      const dialogProps = VDialog.filterProps(omit(props, ['modelValue', 'class', 'style']));
      return _createVNode(VDialog, _mergeProps({
        "ref": dialogRef,
        "class": "v-command-palette",
        "modelValue": isOpen.value,
        "onUpdate:modelValue": $event => isOpen.value = $event,
        "scrollable": true
      }, dialogProps), {
        activator: slots.activator,
        default: () => _createVNode(VSheet, {
          "class": _normalizeClass(props.class),
          "style": _normalizeStyle(props.style)
        }, {
          default: () => [slots.prepend?.(), _createElementVNode("div", {
            "class": "v-command-palette__input-container"
          }, [slots.input?.() ?? _createVNode(VTextField, {
            "ref": searchInputRef,
            "modelValue": searchQuery.value,
            "onUpdate:modelValue": $event => searchQuery.value = $event,
            "density": props.density,
            "placeholder": t(props.placeholder),
            "prependInnerIcon": props.inputIcon,
            "autocomplete": "off",
            "autofocus": true,
            "singleLine": true,
            "hideDetails": true,
            "variant": "solo",
            "flat": true,
            "bgColor": "transparent",
            "onKeydown": handleSearchKeydown
          }, {
            'append-inner': slots['input.append-inner']
          })]), _createElementVNode("div", {
            "class": "v-command-palette__content"
          }, [filteredItems.value.length > 0 ? _createVNode(VList, _mergeProps({
            "key": "list",
            "class": "v-command-palette__list",
            "density": props.density,
            "items": itemsForList.value,
            "itemType": "type",
            "itemProps": true,
            "activatable": true
          }, props.listProps, {
            "navigationStrategy": "track",
            "navigationIndex": navigation.selectedIndex.value,
            "onUpdate:navigationIndex": navigation.setSelectedIndex
          }), {
            prepend: slots['list.prepend'],
            subheader: slots['list.subheader'],
            item: _ref2 => {
              let {
                props: itemProps
              } = _ref2;
              return slots.item?.({
                item: itemProps,
                index: itemProps.index
              }) ?? _createVNode(VCommandPaletteItemComponent, {
                "key": `item-${itemProps.index}`,
                "item": itemProps,
                "index": itemProps.index,
                "onExecute": event => navigation.execute(itemProps.index, event)
              }, {
                prepend: slots['item.prepend'] ? () => slots['item.prepend']?.({
                  item: itemProps,
                  index: itemProps.index
                }) : undefined,
                title: slots['item.title'] ? () => slots['item.title']?.({
                  item: itemProps,
                  index: itemProps.index
                }) : undefined,
                append: slots['item.append'] ? () => slots['item.append']?.({
                  item: itemProps,
                  index: itemProps.index
                }) : undefined
              });
            }
          }) : _createElementVNode("div", {
            "key": "no-data",
            "class": "v-command-palette__no-data"
          }, [slots['no-data']?.() || t(props.noDataText)])]), slots.append?.()]
        })
      });
    });
  }
});
//# sourceMappingURL=VCommandPalette.js.map