import { vShow as _vShow, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, withDirectives as _withDirectives, createVNode as _createVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeGroupItemProps, useGroupItem } from "../../composables/group.js";
import { makeLazyProps, useLazy } from "../../composables/lazy.js";
import { useSsrBoot } from "../../composables/ssrBoot.js";
import { MaybeTransition } from "../../composables/transition.js"; // Directives
import vTouch from "../../directives/touch/index.js"; // Utilities
import { computed, inject, nextTick, shallowRef } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
import { VWindowGroupSymbol, VWindowSymbol } from "./VWindow.js";
export const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: undefined
  },
  transition: {
    type: [Boolean, String],
    default: undefined
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, 'VWindowItem');
export const VWindowItem = genericComponent()({
  name: 'VWindowItem',
  directives: {
    vTouch
  },
  props: makeVWindowItemProps(),
  emits: {
    'group:selected': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem) throw new Error('[Vuetify] VWindowItem must be used inside VWindow');
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }

      // Finalize transition state.
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;

        // Remove container height if we are out of transition.
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = undefined;
        }
      }
    }
    function onBeforeTransition() {
      if (isTransitioning.value || !window) {
        return;
      }

      // Initialize transition state here.
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        // Set initial height for height transition.
        window.transitionHeight.value = convertToUnit(window.rootRef.value?.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition(); // This should have the same path as normal transition end.
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }

        // Set transition target height.
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== 'string' ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => _createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => [_withDirectives(_createElementVNode("div", {
        "class": _normalizeClass(['v-window-item', groupItem.selectedClass.value, props.class]),
        "style": _normalizeStyle(props.style)
      }, [hasContent.value && slots.default?.()]), [[_vShow, groupItem.isSelected.value]])]
    }));
    return {
      groupItem
    };
  }
});
//# sourceMappingURL=VWindowItem.js.map