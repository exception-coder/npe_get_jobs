import { createVNode as _createVNode, mergeProps as _mergeProps, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, withDirectives as _withDirectives, normalizeStyle as _normalizeStyle } from "vue";
// Components
import { VIcon } from "../../components/VIcon/VIcon.js";
import { VMenu } from "../../components/VMenu/VMenu.js";
import { VSlider } from "../../components/VSlider/VSlider.js";
import { VIconBtn } from "../VIconBtn/VIconBtn.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Directives
import vTooltip from "../../directives/tooltip/index.js"; // Utilities
import { ref, toRef } from 'vue';
import { EventProp, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVVideoVolumeProps = propsFactory({
  inline: Boolean,
  label: String,
  direction: {
    type: String,
    default: 'vertical'
  },
  modelValue: {
    type: Number,
    default: 0
  },
  menuProps: Object,
  sliderProps: Object,
  onClick: EventProp(),
  ...makeComponentProps()
}, 'VVideoVolume');
export const VVideoVolume = genericComponent()({
  name: 'VVideoVolume',
  directives: {
    vTooltip: vTooltip
  },
  props: makeVVideoVolumeProps(),
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs
    } = _ref;
    const {
      t
    } = useLocale();
    const volume = useProxiedModel(props, 'modelValue');
    const volumeIcon = toRef(() => volume.value > 70 ? '$volumeHigh' : volume.value > 40 ? '$volumeMedium' : volume.value > 10 ? '$volumeLow' : '$volumeOff');
    const containerRef = ref();
    useRender(() => {
      const sliderDefaults = {
        hideDetails: true,
        step: 5,
        thumbSize: 16
      };
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-video-volume', {
          'v-video-volume--inline': props.inline
        }, props.class]),
        "style": _normalizeStyle(props.style),
        "ref": containerRef
      }, [_withDirectives(_createVNode(VIconBtn, _mergeProps({
        "icon": volumeIcon.value,
        "aria-label": props.label,
        "onClick": props.onClick
      }, attrs), {
        default: () => [_createVNode(VIcon, null, null), !props.inline && _createVNode(VMenu, {
          "offset": "8",
          "activator": "parent",
          "attach": containerRef.value,
          "location": props.menuProps?.location ?? 'top center',
          "closeOnContentClick": false
        }, {
          default: () => [_createElementVNode("div", {
            "class": _normalizeClass(['v-video-volume__menu', `v-video-volume__menu--${props.direction}`])
          }, [_createVNode(VSlider, _mergeProps({
            "direction": props.direction,
            "aria-label": t('$vuetify.video.volume'),
            "modelValue": volume.value,
            "onUpdate:modelValue": v => volume.value = v
          }, sliderDefaults, props.sliderProps), null)])]
        })]
      }), [[vTooltip, props.label, 'top']]), props.inline && _createVNode(VSlider, _mergeProps({
        "class": "v-video-volume-inline__slider",
        "minWidth": "50",
        "aria-label": t('$vuetify.video.volume'),
        "modelValue": volume.value,
        "onUpdate:modelValue": v => volume.value = v,
        "onKeydown": e => {
          e.stopPropagation();
        }
      }, sliderDefaults, props.sliderProps), null)]);
    });
  }
});
//# sourceMappingURL=VVideoVolume.js.map