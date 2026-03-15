import { Fragment as _Fragment, createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "../VSlider/VSlider.css";

// Components
import { makeVInputProps, VInput } from "../VInput/VInput.js";
import { VLabel } from "../VLabel/index.js";
import { getOffset, makeSliderProps, useSlider, useSteps } from "../VSlider/slider.js";
import { VSliderThumb } from "../VSlider/VSliderThumb.js";
import { VSliderTrack } from "../VSlider/VSliderTrack.js"; // Composables
import { makeFocusProps, useFocus } from "../../composables/focus.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useRtl } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, ref } from 'vue';
import { filterInputAttrs, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVRangeSliderProps = propsFactory({
  ...makeFocusProps(),
  ...makeVInputProps(),
  ...makeSliderProps(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, 'VRangeSlider');
export const VRangeSlider = genericComponent()({
  name: 'VRangeSlider',
  inheritAttrs: false,
  props: makeVRangeSliderProps(),
  emits: {
    'update:focused': value => true,
    'update:modelValue': value => true,
    end: value => true,
    start: value => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const startThumbRef = ref();
    const stopThumbRef = ref();
    const inputRef = ref();
    const {
      rtlClasses
    } = useRtl();
    function getActiveThumb(e) {
      if (!startThumbRef.value || !stopThumbRef.value) return;
      const startOffset = getOffset(e, startThumbRef.value.$el, props.direction);
      const stopOffset = getOffset(e, stopThumbRef.value.$el, props.direction);
      const a = Math.abs(startOffset);
      const b = Math.abs(stopOffset);
      return a < b || a === b && startOffset < 0 ? startThumbRef.value.$el : stopThumbRef.value.$el;
    }
    const steps = useSteps(props);
    const model = useProxiedModel(props, 'modelValue', undefined, arr => {
      if (!arr?.length) return [0, 0];
      return arr.map(value => steps.roundValue(value));
    });
    const {
      activeThumbRef,
      hasLabels,
      max,
      min,
      mousePressed,
      onSliderMousedown,
      onSliderTouchstart,
      position,
      trackContainerRef,
      disabled,
      readonly
    } = useSlider({
      props,
      steps,
      onSliderStart: () => {
        if (disabled.value || readonly.value) {
          activeThumbRef.value?.blur();
          return;
        }
        emit('start', model.value);
      },
      onSliderEnd: _ref2 => {
        let {
          value
        } = _ref2;
        if (disabled.value || readonly.value) {
          activeThumbRef.value?.blur();
        } else {
          const newValue = activeThumbRef.value === startThumbRef.value?.$el ? [value, model.value[1]] : [model.value[0], value];
          if (!props.strict && newValue[0] < newValue[1]) {
            model.value = newValue;
          }
        }
        emit('end', model.value);
      },
      onSliderMove: _ref3 => {
        let {
          value
        } = _ref3;
        const [start, stop] = model.value;
        if (disabled.value || readonly.value) {
          activeThumbRef.value?.blur();
          return;
        }
        if (!props.strict && start === stop && start !== min.value) {
          activeThumbRef.value = value > start ? stopThumbRef.value?.$el : startThumbRef.value?.$el;
          activeThumbRef.value?.focus();
        }
        if (activeThumbRef.value === startThumbRef.value?.$el) {
          model.value = [Math.min(value, stop), stop];
        } else {
          model.value = [start, Math.max(start, value)];
        }
      },
      getActiveThumb
    });
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const trackStart = computed(() => position(model.value[0]));
    const trackStop = computed(() => position(model.value[1]));
    useRender(() => {
      const inputProps = VInput.filterProps(props);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const hasPrepend = !!(props.label || slots.label || slots.prepend);
      return _createVNode(VInput, _mergeProps({
        "class": ['v-slider', 'v-range-slider', {
          'v-slider--has-labels': !!slots['tick-label'] || hasLabels.value,
          'v-slider--focused': isFocused.value,
          'v-slider--pressed': mousePressed.value,
          'v-slider--disabled': disabled.value
        }, rtlClasses.value, props.class],
        "style": props.style,
        "ref": inputRef
      }, inputProps, rootAttrs, {
        "focused": isFocused.value
      }), {
        ...slots,
        prepend: hasPrepend ? slotProps => _createElementVNode(_Fragment, null, [slots.label?.(slotProps) ?? (props.label ? _createVNode(VLabel, {
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
            "id": `${id.value}_start`,
            "name": props.name || id.value,
            "disabled": disabled.value,
            "readonly": readonly.value,
            "tabindex": "-1",
            "value": model.value[0]
          }, null), _createElementVNode("input", {
            "id": `${id.value}_stop`,
            "name": props.name || id.value,
            "disabled": disabled.value,
            "readonly": readonly.value,
            "tabindex": "-1",
            "value": model.value[1]
          }, null), _createVNode(VSliderTrack, {
            "ref": trackContainerRef,
            "start": trackStart.value,
            "stop": trackStop.value
          }, {
            'tick-label': slots['tick-label']
          }), _createVNode(VSliderThumb, _mergeProps({
            "ref": startThumbRef,
            "aria-describedby": messagesId.value,
            "focused": isFocused && activeThumbRef.value === startThumbRef.value?.$el,
            "modelValue": model.value[0],
            "onUpdate:modelValue": v => model.value = [v, model.value[1]],
            "onFocus": e => {
              focus();
              activeThumbRef.value = startThumbRef.value?.$el;

              // Make sure second thumb is focused if
              // the thumbs are on top of each other
              // and they are both at minimum value
              // but only if focused from outside.
              if (max.value !== min.value && model.value[0] === model.value[1] && model.value[1] === min.value && e.relatedTarget !== stopThumbRef.value?.$el) {
                startThumbRef.value?.$el.blur();
                stopThumbRef.value?.$el.focus();
              }
            },
            "onBlur": () => {
              blur();
              activeThumbRef.value = undefined;
            },
            "min": min.value,
            "max": model.value[1],
            "position": trackStart.value,
            "ripple": props.ripple
          }, inputAttrs), {
            'thumb-label': slots['thumb-label']
          }), _createVNode(VSliderThumb, _mergeProps({
            "ref": stopThumbRef,
            "aria-describedby": messagesId.value,
            "focused": isFocused && activeThumbRef.value === stopThumbRef.value?.$el,
            "modelValue": model.value[1],
            "onUpdate:modelValue": v => model.value = [model.value[0], v],
            "onFocus": e => {
              focus();
              activeThumbRef.value = stopThumbRef.value?.$el;

              // Make sure first thumb is focused if
              // the thumbs are on top of each other
              // and they are both at maximum value
              // but only if focused from outside.
              if (max.value !== min.value && model.value[0] === model.value[1] && model.value[0] === max.value && e.relatedTarget !== startThumbRef.value?.$el) {
                stopThumbRef.value?.$el.blur();
                startThumbRef.value?.$el.focus();
              }
            },
            "onBlur": () => {
              blur();
              activeThumbRef.value = undefined;
            },
            "min": model.value[0],
            "max": max.value,
            "position": trackStop.value,
            "ripple": props.ripple
          }, inputAttrs), {
            'thumb-label': slots['thumb-label']
          })]);
        }
      });
    });
    return forwardRefs({
      focus: () => startThumbRef.value?.$el.focus()
    }, inputRef);
  }
});
//# sourceMappingURL=VRangeSlider.js.map