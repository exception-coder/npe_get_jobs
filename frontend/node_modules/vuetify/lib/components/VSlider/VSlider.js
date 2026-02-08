import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VSlider.css";

// Components
import { VSliderThumb } from "./VSliderThumb.js";
import { VSliderTrack } from "./VSliderTrack.js";
import { makeVInputProps, VInput } from "../VInput/VInput.js";
import { VLabel } from "../VLabel/index.js"; // Composables
import { makeSliderProps, useSlider, useSteps } from "./slider.js";
import { makeFocusProps, useFocus } from "../../composables/focus.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useRtl } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, ref } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVSliderProps = propsFactory({
  ...makeFocusProps(),
  ...makeSliderProps(),
  ...makeVInputProps(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, 'VSlider');
export const VSlider = genericComponent()({
  name: 'VSlider',
  props: makeVSliderProps(),
  emits: {
    'update:focused': value => true,
    'update:modelValue': v => true,
    start: value => true,
    end: value => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const thumbContainerRef = ref();
    const inputRef = ref();
    const {
      rtlClasses
    } = useRtl();
    const steps = useSteps(props);
    const model = useProxiedModel(props, 'modelValue', undefined, value => {
      return steps.roundValue(value == null ? steps.min.value : value);
    });
    const {
      min,
      max,
      mousePressed,
      roundValue,
      onSliderMousedown,
      onSliderTouchstart,
      trackContainerRef,
      position,
      hasLabels,
      disabled,
      readonly,
      noKeyboard
    } = useSlider({
      props,
      steps,
      onSliderStart: () => {
        if (!disabled.value && !readonly.value) {
          emit('start', model.value);
        }
      },
      onSliderEnd: _ref2 => {
        let {
          value
        } = _ref2;
        const roundedValue = roundValue(value);
        if (!disabled.value && !readonly.value) {
          model.value = roundedValue;
        }
        emit('end', roundedValue);
      },
      onSliderMove: _ref3 => {
        let {
          value
        } = _ref3;
        if (!disabled.value && !readonly.value) {
          model.value = roundValue(value);
        }
      },
      getActiveThumb: () => thumbContainerRef.value?.$el
    });
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const trackStop = computed(() => position(model.value));
    useRender(() => {
      const inputProps = VInput.filterProps(props);
      const hasPrepend = !!(props.label || slots.label || slots.prepend);
      return _createVNode(VInput, _mergeProps({
        "ref": inputRef,
        "class": ['v-slider', {
          'v-slider--has-labels': !!slots['tick-label'] || hasLabels.value,
          'v-slider--focused': isFocused.value,
          'v-slider--pressed': mousePressed.value,
          'v-slider--disabled': disabled.value
        }, rtlClasses.value, props.class],
        "style": props.style
      }, inputProps, {
        "focused": isFocused.value
      }), {
        ...slots,
        prepend: hasPrepend ? slotProps => _createElementVNode(_Fragment, null, [slots.label?.(slotProps) ?? (props.label ? _createVNode(VLabel, {
          "id": slotProps.id.value,
          "class": "v-slider__label",
          "text": props.label
        }, null) : undefined), slots.prepend?.(slotProps)]) : undefined,
        default: _ref4 => {
          let {
            id,
            messagesId
          } = _ref4;
          return _createElementVNode("div", {
            "class": "v-slider__container",
            "onMousedown": !readonly.value ? onSliderMousedown : undefined,
            "onTouchstartPassive": !readonly.value ? onSliderTouchstart : undefined
          }, [_createElementVNode("input", {
            "id": id.value,
            "name": props.name || id.value,
            "disabled": disabled.value,
            "readonly": readonly.value,
            "tabindex": "-1",
            "value": model.value
          }, null), _createVNode(VSliderTrack, {
            "ref": trackContainerRef,
            "start": 0,
            "stop": trackStop.value
          }, {
            'tick-label': slots['tick-label']
          }), _createVNode(VSliderThumb, {
            "ref": thumbContainerRef,
            "aria-describedby": messagesId.value,
            "focused": isFocused.value,
            "noKeyboard": noKeyboard.value,
            "min": min.value,
            "max": max.value,
            "modelValue": model.value,
            "onUpdate:modelValue": v => model.value = v,
            "position": trackStop.value,
            "elevation": props.elevation,
            "onFocus": focus,
            "onBlur": blur,
            "ripple": props.ripple,
            "name": props.name
          }, {
            'thumb-label': slots['thumb-label']
          })]);
        }
      });
    });
    return forwardRefs({
      focus: () => thumbContainerRef.value?.$el.focus()
    }, inputRef);
  }
});
//# sourceMappingURL=VSlider.js.map