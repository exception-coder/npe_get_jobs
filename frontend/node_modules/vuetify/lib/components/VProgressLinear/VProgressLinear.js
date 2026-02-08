import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VProgressLinear.css";

// Composables
import { useBackgroundColor, useTextColor } from "../../composables/color.js";
import { makeComponentProps } from "../../composables/component.js";
import { useIntersectionObserver } from "../../composables/intersectionObserver.js";
import { useRtl } from "../../composables/locale.js";
import { makeLocationProps, useLocation } from "../../composables/location.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { useResizeObserver } from "../../composables/resizeObserver.js";
import { makeRoundedProps, useRounded } from "../../composables/rounded.js";
import { makeTagProps } from "../../composables/tag.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { useToggleScope } from "../../composables/toggleScope.js"; // Utilities
import { computed, ref, shallowRef, Transition, watchEffect } from 'vue';
import { makeChunksProps, useChunks } from "./chunks.js";
import { clamp, convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVProgressLinearProps = propsFactory({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...makeChunksProps(),
  ...makeComponentProps(),
  ...makeLocationProps({
    location: 'top'
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, 'VProgressLinear');
export const VProgressLinear = genericComponent()({
  name: 'VProgressLinear',
  props: makeVProgressLinearProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const root = ref();
    const progress = useProxiedModel(props, 'modelValue');
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(() => props.color);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor || props.color);
    const {
      backgroundColorClasses: bufferColorClasses,
      backgroundColorStyles: bufferColorStyles
    } = useBackgroundColor(() => props.bufferColor || props.bgColor || props.color);
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseFloat(props.max));
    const height = computed(() => parseFloat(props.height));
    const normalizedBuffer = computed(() => clamp(parseFloat(props.bufferValue) / max.value * 100, 0, 100));
    const normalizedValue = computed(() => clamp(parseFloat(progress.value) / max.value * 100, 0, 100));
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? 'fade-transition' : 'slide-x-transition');
    const containerWidth = shallowRef(0);
    const {
      hasChunks,
      chunksMaskStyles,
      snapValueToChunk
    } = useChunks(props, containerWidth);
    useToggleScope(hasChunks, () => {
      const {
        resizeRef
      } = useResizeObserver(entries => containerWidth.value = entries[0].contentRect.width);
      watchEffect(() => resizeRef.value = root.value);
    });
    const bufferWidth = computed(() => {
      return hasChunks.value ? snapValueToChunk(normalizedBuffer.value) : normalizedBuffer.value;
    });
    const barWidth = computed(() => {
      return hasChunks.value ? snapValueToChunk(normalizedValue.value) : normalizedValue.value;
    });
    function handleClick(e) {
      if (!intersectionRef.value) return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    watchEffect(() => {
      intersectionRef.value = root.value;
    });
    useRender(() => _createVNode(props.tag, {
      "ref": root,
      "class": _normalizeClass(['v-progress-linear', {
        'v-progress-linear--absolute': props.absolute,
        'v-progress-linear--active': props.active && isIntersecting.value,
        'v-progress-linear--reverse': isReversed.value,
        'v-progress-linear--rounded': props.rounded,
        'v-progress-linear--rounded-bar': props.roundedBar,
        'v-progress-linear--striped': props.striped,
        'v-progress-linear--clickable': props.clickable
      }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class]),
      "style": _normalizeStyle([{
        bottom: props.location === 'bottom' ? 0 : undefined,
        top: props.location === 'top' ? 0 : undefined,
        height: props.active ? convertToUnit(height.value) : 0,
        '--v-progress-linear-height': convertToUnit(height.value),
        ...(props.absolute ? locationStyles.value : {})
      }, chunksMaskStyles.value, props.style]),
      "role": "progressbar",
      "aria-hidden": props.active ? 'false' : 'true',
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? undefined : Math.min(parseFloat(progress.value), max.value),
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && _createElementVNode("div", {
        "key": "stream",
        "class": _normalizeClass(['v-progress-linear__stream', textColorClasses.value]),
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? 'left' : 'right']: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: parseFloat(props.bufferOpacity),
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, '%'),
          '--v-progress-linear-stream-to': convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), _createElementVNode("div", {
        "class": _normalizeClass(['v-progress-linear__background', backgroundColorClasses.value]),
        "style": _normalizeStyle([backgroundColorStyles.value, {
          opacity: parseFloat(props.bgOpacity),
          width: props.stream ? 0 : undefined
        }])
      }, null), _createElementVNode("div", {
        "class": _normalizeClass(['v-progress-linear__buffer', bufferColorClasses.value]),
        "style": _normalizeStyle([bufferColorStyles.value, {
          opacity: parseFloat(props.bufferOpacity),
          width: convertToUnit(bufferWidth.value, '%')
        }])
      }, null), _createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? _createElementVNode("div", {
          "class": _normalizeClass(['v-progress-linear__determinate', barColorClasses.value]),
          "style": _normalizeStyle([barColorStyles.value, {
            width: convertToUnit(barWidth.value, '%')
          }])
        }, null) : _createElementVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [['long', 'short'].map(bar => _createElementVNode("div", {
          "key": bar,
          "class": _normalizeClass(['v-progress-linear__indeterminate', bar, barColorClasses.value]),
          "style": _normalizeStyle(barColorStyles.value)
        }, null))])]
      }), slots.default && _createElementVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});
//# sourceMappingURL=VProgressLinear.js.map