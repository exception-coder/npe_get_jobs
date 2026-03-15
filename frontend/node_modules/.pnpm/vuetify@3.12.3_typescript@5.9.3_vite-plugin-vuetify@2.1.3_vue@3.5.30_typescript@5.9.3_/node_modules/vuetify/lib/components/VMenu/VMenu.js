import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VMenu.css";

// Components
import { VDialogTransition } from "../transitions/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VOverlay } from "../VOverlay/index.js";
import { makeVOverlayProps } from "../VOverlay/VOverlay.js"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useRtl } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { useScopeId } from "../../composables/scopeId.js"; // Utilities
import { computed, inject, mergeProps, onBeforeUnmount, onDeactivated, provide, ref, shallowRef, toRef, useId, watch } from 'vue';
import { VMenuSymbol } from "./shared.js";
import { focusableChildren, focusChild, genericComponent, getNextElement, isClickInsideElement, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...omit(makeVOverlayProps({
    captureFocus: true,
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: 'connected',
    location: undefined,
    openDelay: 300,
    scrim: false,
    scrollStrategy: 'reposition',
    transition: {
      component: VDialogTransition
    }
  }), ['absolute'])
}, 'VMenu');
export const VMenu = genericComponent()({
  name: 'VMenu',
  props: makeVMenuProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      scopeId
    } = useScopeId();
    const {
      isRtl
    } = useRtl();
    const uid = useId();
    const id = toRef(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(new Set());
    provide(VMenuSymbol, {
      register() {
        openChildren.value.add(uid);
      },
      unregister() {
        openChildren.value.delete(uid);
      },
      closeParents(e) {
        setTimeout(() => {
          if (!openChildren.value.size && !props.persistent && (e == null || overlay.value?.contentEl && !isClickInsideElement(e, overlay.value.contentEl))) {
            isActive.value = false;
            parent?.closeParents();
          }
        }, 40);
      }
    });
    onBeforeUnmount(() => parent?.unregister());
    onDeactivated(() => isActive.value = false);
    watch(isActive, val => {
      val ? parent?.register() : parent?.unregister();
    }, {
      immediate: true
    });
    function onClickOutside(e) {
      parent?.closeParents(e);
    }
    function onKeydown(e) {
      if (props.disabled) return;
      if (e.key === 'Tab' || e.key === 'Enter' && !props.closeOnContentClick) {
        if (e.key === 'Enter' && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest('form'))) return;
        if (e.key === 'Enter') e.preventDefault();
        const nextElement = getNextElement(focusableChildren(overlay.value?.contentEl, false), e.shiftKey ? 'prev' : 'next', el => el.tabIndex >= 0);
        if (!nextElement && !props.retainFocus) {
          isActive.value = false;
          overlay.value?.activatorEl?.focus();
        }
      } else if (props.submenu && e.key === (isRtl.value ? 'ArrowRight' : 'ArrowLeft')) {
        isActive.value = false;
        overlay.value?.activatorEl?.focus();
      }
    }
    function onActivatorKeydown(e) {
      if (props.disabled) return;
      const el = overlay.value?.contentEl;
      if (el && isActive.value) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, 'next');
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          e.stopImmediatePropagation();
          focusChild(el, 'prev');
        } else if (props.submenu) {
          if (e.key === (isRtl.value ? 'ArrowRight' : 'ArrowLeft')) {
            isActive.value = false;
          } else if (e.key === (isRtl.value ? 'ArrowLeft' : 'ArrowRight')) {
            e.preventDefault();
            focusChild(el, 'first');
          }
        }
      } else if (props.submenu ? e.key === (isRtl.value ? 'ArrowLeft' : 'ArrowRight') : ['ArrowDown', 'ArrowUp'].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      'aria-haspopup': 'menu',
      'aria-expanded': String(isActive.value),
      'aria-controls': id.value,
      'aria-owns': id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return _createVNode(VOverlay, _mergeProps({
        "ref": overlay,
        "id": id.value,
        "class": ['v-menu', props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "location": props.location ?? (props.submenu ? 'end' : 'bottom'),
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});
//# sourceMappingURL=VMenu.js.map