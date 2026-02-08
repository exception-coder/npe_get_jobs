import { Fragment as _Fragment, createVNode as _createVNode, withDirectives as _withDirectives, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, mergeProps as _mergeProps } from "vue";
/* eslint-disable complexity */
// Components
import { VVideoVolume } from "./VVideoVolume.js";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/VDefaultsProvider.js";
import { VSpacer } from "../../components/VGrid/VSpacer.js";
import { VSlider } from "../../components/VSlider/VSlider.js";
import { VIconBtn } from "../VIconBtn/VIconBtn.js"; // Composables
import { useBackgroundColor } from "../../composables/color.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeElevationProps, useElevation } from "../../composables/elevation.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js"; // Directives
import vTooltip from "../../directives/tooltip/index.js"; // Utilities
import { computed, shallowRef, toRef } from 'vue';
import { formatTime, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
const allowedVariants = ['hidden', 'default', 'tube', 'mini'];
export const makeVVideoControlsProps = propsFactory({
  color: String,
  backgroundColor: String,
  trackColor: String,
  playing: Boolean,
  hidePlay: Boolean,
  hideVolume: Boolean,
  hideFullscreen: Boolean,
  fullscreen: Boolean,
  floating: Boolean,
  splitTime: Boolean,
  pills: Boolean,
  detached: Boolean,
  progress: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 0
  },
  volume: [Number, String],
  variant: {
    type: String,
    default: 'default',
    validator: v => allowedVariants.includes(v)
  },
  volumeProps: Object,
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeThemeProps()
}, 'VVideoControls');
export const VVideoControls = genericComponent()({
  name: 'VVideoControls',
  directives: {
    vTooltip: vTooltip
  },
  props: makeVVideoControlsProps(),
  emits: {
    'update:playing': val => true,
    'update:progress': val => true,
    'update:volume': val => true,
    skip: val => true,
    'click:fullscreen': () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      themeClasses,
      current: currentTheme
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => {
      const fallbackBackground = props.detached ? 'surface' : undefined;
      return props.backgroundColor ?? fallbackBackground;
    });
    const trackColor = toRef(() => {
      if (props.trackColor) {
        return props.trackColor;
      }
      const fallback = currentTheme.value.dark || !props.pills ? undefined : 'surface';
      return (props.pills ? props.backgroundColor : props.color) ?? fallback;
    });
    const playing = useProxiedModel(props, 'playing');
    const progress = useProxiedModel(props, 'progress');
    const volume = useProxiedModel(props, 'volume', 0, v => Number(v ?? 0));
    const lastVolume = shallowRef();
    const currentTime = computed(() => {
      const secondsElapsed = Math.round(props.progress / 100 * props.duration);
      return {
        elapsed: formatTime(secondsElapsed),
        remaining: formatTime(props.duration - secondsElapsed),
        total: formatTime(props.duration)
      };
    });
    const labels = computed(() => {
      const playIconLocaleKey = playing.value ? 'pause' : 'play';
      const volumeIconLocaleKey = props.volumeProps?.inline ? volume.value ? 'mute' : 'unmute' : 'showVolume';
      const fullscreenIconLocaleKey = props.fullscreen ? 'exitFullscreen' : 'enterFullscreen';
      return {
        seek: t('$vuetify.video.seek'),
        volume: t('$vuetify.video.volume'),
        playAction: t(`$vuetify.video.${playIconLocaleKey}`),
        volumeAction: t(`$vuetify.video.${volumeIconLocaleKey}`),
        fullscreenAction: t(`$vuetify.video.${fullscreenIconLocaleKey}`)
      };
    });
    function play() {
      playing.value = true;
    }
    function pause() {
      playing.value = false;
    }
    function skipTo(v) {
      progress.value = v;
    }
    function toggleMuted() {
      if (volume.value) {
        lastVolume.value = volume.value;
        volume.value = 0;
      } else {
        volume.value = lastVolume.value ?? 100;
      }
    }
    function toggleFullscreen() {
      emit('click:fullscreen');
    }
    useRender(() => {
      const sizes = props.pills ? [42, 36, 30] : [32, 28, 24];
      const innerDefaults = {
        VIconBtn: {
          size: props.density === 'compact' ? sizes[2] : props.density === 'comfortable' ? sizes[1] : sizes[0],
          iconSize: props.density === 'compact' ? 20 : props.density === 'comfortable' ? 24 : 26,
          variant: 'text',
          color: props.color
        },
        VSlider: {
          thumbSize: props.variant === 'tube' ? 10 : 16,
          hideDetails: true
        }
      };
      const regularBtnSize = innerDefaults.VIconBtn.size;
      const playBtnSize = props.pills ? regularBtnSize + 8 : regularBtnSize;
      const pillClasses = ['v-video-control__pill', props.pills ? elevationClasses.value : [], props.pills ? backgroundColorClasses.value : []];
      const pillStyles = props.pills ? backgroundColorStyles.value : [];
      const slotProps = {
        play,
        pause,
        playing: playing.value,
        progress: progress.value,
        currentTime: currentTime.value,
        skipTo,
        volume,
        toggleMuted,
        fullscreen: props.fullscreen,
        toggleFullscreen,
        labels: labels.value
      };
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-video-controls', `v-video-controls--variant-${props.variant}`, {
          'v-video-controls--pills': props.pills
        }, {
          'v-video-controls--detached': props.detached
        }, {
          'v-video-controls--floating': props.floating
        }, {
          'v-video-controls--split-time': props.splitTime
        }, !props.pills ? backgroundColorClasses.value : [], props.detached && !props.pills ? elevationClasses.value : [], densityClasses.value, themeClasses.value]),
        "style": _normalizeStyle([!props.pills ? backgroundColorStyles.value : [], {
          '--v-video-controls-pill-height': `${regularBtnSize}px`
        }])
      }, [_createVNode(VDefaultsProvider, {
        "defaults": innerDefaults
      }, {
        default: () => [slots.default?.(slotProps) ?? _createElementVNode(_Fragment, null, [props.variant !== 'mini' && _createElementVNode(_Fragment, null, [!props.hidePlay && _createElementVNode("div", {
          "class": _normalizeClass([pillClasses, 'v-video__action-play']),
          "style": _normalizeStyle(pillStyles)
        }, [_withDirectives(_createVNode(VIconBtn, {
          "icon": playing.value ? '$pause' : '$play',
          "size": playBtnSize,
          "aria-label": labels.value.playAction,
          "onClick": () => playing.value = !playing.value
        }, null), [[vTooltip, labels.value.playAction, 'top']])]), slots.prepend && _createElementVNode("div", {
          "class": _normalizeClass(pillClasses),
          "style": _normalizeStyle(pillStyles)
        }, [slots.prepend(slotProps)]), props.splitTime ? _createElementVNode("span", {
          "class": _normalizeClass([pillClasses, 'v-video__time']),
          "style": _normalizeStyle(pillStyles)
        }, [currentTime.value.elapsed]) : props.variant !== 'default' ? _createElementVNode("span", {
          "class": _normalizeClass([pillClasses, 'v-video__time']),
          "style": _normalizeStyle(pillStyles)
        }, [currentTime.value.elapsed, _createTextVNode(" / "), currentTime.value.total]) : '', _createVNode(VSlider, {
          "modelValue": props.progress,
          "noKeyboard": true,
          "color": trackColor.value ?? 'surface-variant',
          "trackColor": props.variant === 'tube' ? 'white' : undefined,
          "class": "v-video__track",
          "thumbLabel": "always",
          "aria-label": labels.value.seek,
          "onUpdate:modelValue": skipTo
        }, {
          'thumb-label': () => currentTime.value.elapsed
        }), props.variant === 'tube' && _createVNode(VSpacer, null, null), props.splitTime ? _createElementVNode("span", {
          "class": _normalizeClass([pillClasses, 'v-video__time']),
          "style": _normalizeStyle(pillStyles)
        }, [currentTime.value.remaining]) : '']), props.variant === 'mini' && _createElementVNode(_Fragment, null, [_createVNode(VSpacer, null, null), slots.prepend && _createElementVNode("div", {
          "class": _normalizeClass(pillClasses),
          "style": _normalizeStyle(pillStyles)
        }, [slots.prepend(slotProps)]), !props.hidePlay && _createElementVNode("div", {
          "class": _normalizeClass([pillClasses, 'v-video__action-play']),
          "style": _normalizeStyle(pillStyles)
        }, [_withDirectives(_createVNode(VIconBtn, {
          "icon": playing.value ? '$pause' : '$play',
          "size": playBtnSize,
          "aria-label": labels.value.playAction,
          "onClick": () => playing.value = !playing.value
        }, null), [[vTooltip, labels.value.playAction, 'top']])])]), (!props.hideVolume || !props.hideFullscreen || slots.append) && _createElementVNode("div", {
          "class": _normalizeClass(pillClasses),
          "style": _normalizeStyle(pillStyles)
        }, [!props.hideVolume && _createVNode(VVideoVolume, _mergeProps({
          "key": "volume-control",
          "sliderProps": {
            color: props.color
          },
          "modelValue": volume.value,
          "label": labels.value.volumeAction,
          "onUpdate:modelValue": v => volume.value = v,
          "onClick": () => props.volumeProps?.inline && toggleMuted()
        }, props.volumeProps), null), slots.append?.(slotProps), !props.hideFullscreen && _withDirectives(_createVNode(VIconBtn, {
          "icon": props.fullscreen ? '$fullscreenExit' : '$fullscreen',
          "aria-label": labels.value.fullscreenAction,
          "onClick": toggleFullscreen
        }, null), [[vTooltip, labels.value.fullscreenAction, 'top']])]), props.variant === 'mini' && _createVNode(VSpacer, null, null)])]
      })]);
    });
    return {
      toggleMuted
    };
  }
});
//# sourceMappingURL=VVideoControls.js.map