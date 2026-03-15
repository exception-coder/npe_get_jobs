import { createVNode as _createVNode, vShow as _vShow, createElementVNode as _createElementVNode, withDirectives as _withDirectives, Fragment as _Fragment, mergeProps as _mergeProps } from "vue";
/* eslint-disable complexity */
// Styles
import "./VChip.css";

// Components
import { VExpandXTransition } from "../transitions/index.js";
import { VAvatar } from "../VAvatar/index.js";
import { VChipGroupSymbol } from "../VChipGroup/VChipGroup.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VIcon } from "../VIcon/index.js";
import { VSlideGroupSymbol } from "../VSlideGroup/VSlideGroup.js"; // Composables
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { makeGroupItemProps, useGroupItem } from "../../composables/group.js";
import { IconValue } from "../../composables/icons.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeRouterProps, useLink } from "../../composables/router.js";
import { makeSizeProps, useSize } from "../../composables/size.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { genOverlays, makeVariantProps, useVariant } from "../../composables/variant.js"; // Directives
import vRipple from "../../directives/ripple/index.js"; // Utilities
import { computed, toDisplayString, toRef, watch } from 'vue';
import { EventProp, genericComponent, propsFactory } from "../../util/index.js"; // Types
export const makeVChipProps = propsFactory({
  activeClass: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: '$delete'
  },
  closeLabel: {
    type: String,
    default: '$vuetify.close'
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: IconValue,
    default: '$complete'
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: undefined
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: {
    type: [String, Number, Boolean],
    default: undefined
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: 'span'
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'tonal'
  })
}, 'VChip');
export const VChip = genericComponent()({
  name: 'VChip',
  directives: {
    vRipple
  },
  props: makeVChipProps(),
  emits: {
    'click:close': e => true,
    'update:modelValue': value => true,
    'group:selected': val => true,
    click: e => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses
    } = useSize(props);
    const {
      themeClasses
    } = provideTheme(props);
    const isActive = useProxiedModel(props, 'modelValue');
    const group = useGroupItem(props, VChipGroupSymbol, false);
    const slideGroup = useGroupItem(props, VSlideGroupSymbol, false);
    const link = useLink(props, attrs);
    const isLink = toRef(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (!!group || props.link || link.isClickable.value));
    const closeProps = toRef(() => ({
      'aria-label': t(props.closeLabel),
      disabled: props.disabled,
      onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        isActive.value = false;
        emit('click:close', e);
      }
    }));
    watch(isActive, val => {
      if (val) {
        group?.register();
        slideGroup?.register();
      } else {
        group?.unregister();
        slideGroup?.unregister();
      }
    });
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(() => {
      const showColor = !group || group.isSelected.value;
      return {
        color: showColor ? props.color ?? props.baseColor : props.baseColor,
        variant: props.variant
      };
    });
    function onClick(e) {
      emit('click', e);
      if (!isClickable.value) return;
      link.navigate?.(e);
      group?.toggle();
    }
    function onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(e);
      }
    }
    return () => {
      const Tag = link.isLink.value ? 'a' : props.tag;
      const hasAppendMedia = !!(props.appendIcon || props.appendAvatar);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasClose = !!(slots.close || props.closable);
      const hasFilter = !!(slots.filter || props.filter) && group;
      const hasPrependMedia = !!(props.prependIcon || props.prependAvatar);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      return isActive.value && _withDirectives(_createVNode(Tag, _mergeProps(link.linkProps, {
        "class": ['v-chip', {
          'v-chip--disabled': props.disabled,
          'v-chip--label': props.label,
          'v-chip--link': isClickable.value,
          'v-chip--filter': hasFilter,
          'v-chip--pill': props.pill,
          [`${props.activeClass}`]: props.activeClass && link.isActive?.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, group?.selectedClass.value, props.class],
        "style": [colorStyles.value, props.style],
        "disabled": props.disabled || undefined,
        "draggable": props.draggable,
        "tabindex": isClickable.value ? 0 : undefined,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }), {
        default: () => [genOverlays(isClickable.value, 'v-chip'), hasFilter && _createVNode(VExpandXTransition, {
          "key": "filter"
        }, {
          default: () => [_withDirectives(_createElementVNode("div", {
            "class": "v-chip__filter"
          }, [!slots.filter ? _createVNode(VIcon, {
            "key": "filter-icon",
            "icon": props.filterIcon
          }, null) : _createVNode(VDefaultsProvider, {
            "key": "filter-defaults",
            "disabled": !props.filterIcon,
            "defaults": {
              VIcon: {
                icon: props.filterIcon
              }
            }
          }, slots.filter)]), [[_vShow, group.isSelected.value]])]
        }), hasPrepend && _createElementVNode("div", {
          "key": "prepend",
          "class": "v-chip__prepend"
        }, [!slots.prepend ? _createElementVNode(_Fragment, null, [props.prependIcon && _createVNode(VIcon, {
          "key": "prepend-icon",
          "icon": props.prependIcon,
          "start": true
        }, null), props.prependAvatar && _createVNode(VAvatar, {
          "key": "prepend-avatar",
          "image": props.prependAvatar,
          "start": true
        }, null)]) : _createVNode(VDefaultsProvider, {
          "key": "prepend-defaults",
          "disabled": !hasPrependMedia,
          "defaults": {
            VAvatar: {
              image: props.prependAvatar,
              start: true
            },
            VIcon: {
              icon: props.prependIcon,
              start: true
            }
          }
        }, slots.prepend)]), _createElementVNode("div", {
          "class": "v-chip__content",
          "data-no-activator": ""
        }, [slots.default?.({
          isSelected: group?.isSelected.value,
          selectedClass: group?.selectedClass.value,
          select: group?.select,
          toggle: group?.toggle,
          value: group?.value.value,
          disabled: props.disabled
        }) ?? toDisplayString(props.text)]), hasAppend && _createElementVNode("div", {
          "key": "append",
          "class": "v-chip__append"
        }, [!slots.append ? _createElementVNode(_Fragment, null, [props.appendIcon && _createVNode(VIcon, {
          "key": "append-icon",
          "end": true,
          "icon": props.appendIcon
        }, null), props.appendAvatar && _createVNode(VAvatar, {
          "key": "append-avatar",
          "end": true,
          "image": props.appendAvatar
        }, null)]) : _createVNode(VDefaultsProvider, {
          "key": "append-defaults",
          "disabled": !hasAppendMedia,
          "defaults": {
            VAvatar: {
              end: true,
              image: props.appendAvatar
            },
            VIcon: {
              end: true,
              icon: props.appendIcon
            }
          }
        }, slots.append)]), hasClose && _createElementVNode("button", _mergeProps({
          "key": "close",
          "class": "v-chip__close",
          "type": "button",
          "data-testid": "close-chip"
        }, closeProps.value), [!slots.close ? _createVNode(VIcon, {
          "key": "close-icon",
          "icon": props.closeIcon,
          "size": "x-small"
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "close-defaults",
          "defaults": {
            VIcon: {
              icon: props.closeIcon,
              size: 'x-small'
            }
          }
        }, slots.close)])]
      }), [[vRipple, isClickable.value && props.ripple, null]]);
    };
  }
});
//# sourceMappingURL=VChip.js.map