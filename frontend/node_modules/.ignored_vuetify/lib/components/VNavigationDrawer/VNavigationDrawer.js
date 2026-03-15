import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VNavigationDrawer.css";

// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VImg } from "../VImg/index.js"; // Composables
import { useSticky } from "./sticky.js";
import { useTouch } from "./touch.js";
import { useRtl } from "../../composables/index.js";
import { makeBorderProps, useBorder } from "../../composables/border.js";
import { useBackgroundColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js";
import { makeDelayProps, useDelay } from "../../composables/delay.js";
import { makeDisplayProps, useDisplay } from "../../composables/display.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { makeLayoutItemProps, useLayoutItem } from "../../composables/layout.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { useRouter } from "../../composables/router.js";
import { useScopeId } from "../../composables/scopeId.js";
import { useSsrBoot } from "../../composables/ssrBoot.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { useToggleScope } from "../../composables/toggleScope.js"; // Utilities
import { computed, nextTick, readonly, ref, shallowRef, toRef, Transition, watch } from 'vue';
import { genericComponent, propsFactory, toPhysical, useRender } from "../../util/index.js"; // Types
const locations = ['start', 'end', 'left', 'right', 'top', 'bottom'];
export const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: 'start',
    validator: value => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: 'nav'
  }),
  ...makeThemeProps()
}, 'VNavigationDrawer');
export const VNavigationDrawer = genericComponent()({
  name: 'VNavigationDrawer',
  props: makeVNavigationDrawerProps(),
  emits: {
    'update:modelValue': val => true,
    'update:rail': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, 'modelValue', null, v => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, value => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = toRef(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== 'bottom');
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, val => emit('update:rail', !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, val => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, val => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      isActive,
      isTemporary,
      width,
      touchless: toRef(() => props.touchless),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize: width,
      active: readonly(isActive),
      disableTransitions: toRef(() => isDragging.value),
      absolute: computed(() =>
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      props.absolute || isSticky.value && typeof isStuck.value !== 'string')
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      rootEl,
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(() => {
      return typeof props.scrim === 'string' ? props.scrim : null;
    });
    const scrimStyles = computed(() => ({
      ...(isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: 'none'
      } : undefined),
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: 'transparent'
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return _createElementVNode(_Fragment, null, [_createVNode(props.tag, _mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ['v-navigation-drawer', `v-navigation-drawer--${location.value}`, {
          'v-navigation-drawer--expand-on-hover': props.expandOnHover,
          'v-navigation-drawer--floating': props.floating,
          'v-navigation-drawer--is-hovering': isHovering.value,
          'v-navigation-drawer--rail': props.rail,
          'v-navigation-drawer--temporary': isTemporary.value,
          'v-navigation-drawer--persistent': isPersistent.value,
          'v-navigation-drawer--active': isActive.value,
          'v-navigation-drawer--sticky': isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style]
      }, scopeId, attrs), {
        default: () => [hasImage && _createElementVNode("div", {
          "key": "image",
          "class": "v-navigation-drawer__img"
        }, [!slots.image ? _createVNode(VImg, {
          "key": "image-img",
          "alt": "",
          "cover": true,
          "height": "inherit",
          "src": props.image
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              alt: '',
              cover: true,
              height: 'inherit',
              src: props.image
            }
          }
        }, slots.image)]), slots.prepend && _createElementVNode("div", {
          "class": "v-navigation-drawer__prepend"
        }, [slots.prepend?.()]), _createElementVNode("div", {
          "class": "v-navigation-drawer__content"
        }, [slots.default?.()]), slots.append && _createElementVNode("div", {
          "class": "v-navigation-drawer__append"
        }, [slots.append?.()])]
      }), _createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && _createElementVNode("div", _mergeProps({
          "class": ['v-navigation-drawer__scrim', scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
//# sourceMappingURL=VNavigationDrawer.js.map