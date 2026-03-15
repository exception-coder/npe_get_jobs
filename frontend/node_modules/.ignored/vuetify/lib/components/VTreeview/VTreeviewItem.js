import { Fragment as _Fragment, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VTreeviewItem.css";

// Components
import { VAvatar } from "../VAvatar/index.js";
import { VBtn } from "../VBtn/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VIcon } from "../VIcon/index.js";
import { VListItemAction } from "../VList/index.js";
import { makeVListItemProps, VListItem } from "../VList/VListItem.js";
import { VProgressCircular } from "../VProgressCircular/index.js"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.js";
import { IconValue } from "../../composables/icons.js"; // Utilities
import { computed, inject, ref, toRaw } from 'vue';
import { VTreeviewSymbol } from "./shared.js";
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVTreeviewItemProps = propsFactory({
  loading: Boolean,
  hideActions: Boolean,
  hasCustomPrepend: Boolean,
  indentLines: Array,
  toggleIcon: IconValue,
  ...makeVListItemProps({
    slim: true
  })
}, 'VTreeviewItem');
export const VTreeviewItem = genericComponent()({
  name: 'VTreeviewItem',
  props: makeVTreeviewItemProps(),
  emits: {
    toggleExpand: value => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const visibleIds = inject(VTreeviewSymbol, {
      visibleIds: ref()
    }).visibleIds;
    const vListItemRef = ref();
    const isActivatableGroupActivator = computed(() => vListItemRef.value?.root.activatable.value && vListItemRef.value?.isGroupActivator);
    const vListItemRefIsClickable = computed(() => vListItemRef.value?.link.isClickable.value || props.value != null && !!vListItemRef.value?.list);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || vListItemRefIsClickable.value || isActivatableGroupActivator.value));
    const isFiltered = computed(() => visibleIds.value && !visibleIds.value.has(toRaw(vListItemRef.value?.id)));
    function activateGroupActivator(e) {
      if (isClickable.value && isActivatableGroupActivator.value) {
        vListItemRef.value?.activate(!vListItemRef.value?.isActivated, e);
      }
    }
    function onClickAction(e) {
      e.preventDefault();
      e.stopPropagation();
      emit('toggleExpand', e);
    }
    useRender(() => {
      const listItemProps = VListItem.filterProps(props);
      const hasPrepend = slots.prepend || props.toggleIcon || props.indentLines || props.prependIcon || props.prependAvatar;
      return _createVNode(VListItem, _mergeProps({
        "ref": vListItemRef
      }, listItemProps, {
        "active": vListItemRef.value?.isActivated || undefined,
        "class": ['v-treeview-item', {
          'v-treeview-item--activatable-group-activator': isActivatableGroupActivator.value,
          'v-treeview-item--filtered': isFiltered.value
        }, props.class],
        "ripple": false,
        "onClick": activateGroupActivator
      }), {
        ...slots,
        prepend: hasPrepend ? slotProps => {
          return _createElementVNode(_Fragment, null, [props.indentLines && props.indentLines.length > 0 ? _createElementVNode("div", {
            "key": "indent-lines",
            "class": "v-treeview-indent-lines",
            "style": {
              '--v-indent-parts': props.indentLines.length
            }
          }, [props.indentLines.map(type => _createElementVNode("div", {
            "class": _normalizeClass(`v-treeview-indent-line v-treeview-indent-line--${type}`)
          }, null))]) : '', !props.hideActions && _createVNode(VListItemAction, {
            "start": true
          }, {
            default: () => [props.toggleIcon ? _createElementVNode(_Fragment, null, [!slots.toggle ? _createVNode(VBtn, {
              "key": "prepend-toggle",
              "density": "compact",
              "icon": props.toggleIcon,
              "loading": props.loading,
              "variant": "text",
              "onClick": onClickAction
            }, {
              loader: () => _createVNode(VProgressCircular, {
                "indeterminate": "disable-shrink",
                "size": "20",
                "width": "2"
              }, null)
            }) : _createVNode(VDefaultsProvider, {
              "key": "prepend-defaults",
              "defaults": {
                VBtn: {
                  density: 'compact',
                  icon: props.toggleIcon,
                  variant: 'text',
                  loading: props.loading
                },
                VProgressCircular: {
                  indeterminate: 'disable-shrink',
                  size: 20,
                  width: 2
                }
              }
            }, {
              default: () => [slots.toggle({
                ...slotProps,
                loading: props.loading,
                props: {
                  onClick: onClickAction
                }
              })]
            })]) : _createElementVNode("div", {
              "class": "v-treeview-item__level"
            }, null)]
          }), !props.hasCustomPrepend ? _createElementVNode(_Fragment, null, [slots.prepend?.(slotProps), props.prependAvatar && _createVNode(VAvatar, {
            "key": "prepend-avatar",
            "density": props.density,
            "image": props.prependAvatar
          }, null), props.prependIcon && _createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": props.prependIcon
          }, null)]) : _createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "defaults": {
              VAvatar: {
                density: props.density,
                image: props.appendAvatar
              },
              VIcon: {
                density: props.density,
                icon: props.appendIcon
              },
              VListItemAction: {
                start: true
              }
            }
          }, {
            default: () => [slots.prepend?.(slotProps)]
          })]);
        } : undefined
      });
    });
    return forwardRefs({}, vListItemRef);
  }
});
//# sourceMappingURL=VTreeviewItem.js.map