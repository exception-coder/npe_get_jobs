import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VSpeedDial.css";

// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { makeVMenuProps, VMenu } from "../VMenu/VMenu.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { MaybeTransition } from "../../composables/transition.js"; // Utilities
import { computed, ref } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVSpeedDialProps = propsFactory({
  ...makeComponentProps(),
  ...makeVMenuProps({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: 'top center',
    transition: 'scale-transition'
  })
}, 'VSpeedDial');
export const VSpeedDial = genericComponent()({
  name: 'VSpeedDial',
  props: makeVSpeedDialProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const menuRef = ref();
    const location = computed(() => {
      const [y, x = 'center'] = props.location?.split(' ') ?? [];
      return `${y} ${x}`;
    });
    const locationClasses = computed(() => ({
      [`v-speed-dial__content--${location.value.replace(' ', '-')}`]: true
    }));
    useRender(() => {
      const menuProps = VMenu.filterProps(props);
      return _createVNode(VMenu, _mergeProps(menuProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": props.class,
        "style": props.style,
        "contentClass": ['v-speed-dial__content', locationClasses.value, props.contentClass],
        "location": location.value,
        "ref": menuRef,
        "transition": "fade-transition"
      }), {
        ...slots,
        default: slotProps => _createVNode(VDefaultsProvider, {
          "defaults": {
            VBtn: {
              size: 'small'
            }
          }
        }, {
          default: () => [_createVNode(MaybeTransition, {
            "appear": true,
            "group": true,
            "transition": props.transition
          }, {
            default: () => [slots.default?.(slotProps)]
          })]
        })
      });
    });
    return {};
  }
});
//# sourceMappingURL=VSpeedDial.js.map