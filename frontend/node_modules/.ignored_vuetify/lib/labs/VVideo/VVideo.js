import { createVNode as _createVNode, createElementVNode as _createElementVNode, mergeProps as _mergeProps, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VVideo.css";

// Components
import { makeVVideoControlsProps, VVideoControls } from "./VVideoControls.js";
import { VFadeTransition } from "../../components/transitions/index.js";
import { VImg } from "../../components/VImg/VImg.js";
import { VProgressCircular } from "../../components/VProgressCircular/VProgressCircular.js";
import { VIconBtn } from "../VIconBtn/VIconBtn.js"; // Composables
import { useDisplay } from "../../composables/index.js";
import { makeComponentProps } from "../../composables/component.js";
import { makeDensityProps, useDensity } from "../../composables/density.js";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.js";
import { useElevation } from "../../composables/elevation.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useProxiedModel } from "../../composables/proxiedModel.js";
import { useRounded } from "../../composables/rounded.js";
import { makeThemeProps, provideTheme } from "../../composables/theme.js";
import { MaybeTransition } from "../../composables/transition.js"; // Utilities
import { nextTick, onBeforeUnmount, onMounted, ref, shallowRef, toRef, Transition, watch } from 'vue';
import { createRange, genericComponent, omit, pick, propsFactory, useRender } from "../../util/index.js"; // Types
const allowedVariants = ['background', 'player'];
export const makeVVideoProps = propsFactory({
  aspectRatio: [String, Number],
  autoplay: Boolean,
  muted: Boolean,
  eager: Boolean,
  src: String,
  type: String,
  // e.g. video/mp4
  image: String,
  hideOverlay: Boolean,
  noFullscreen: Boolean,
  startAt: [Number, String],
  variant: {
    type: String,
    default: 'player',
    validator: v => allowedVariants.includes(v)
  },
  controlsTransition: {
    type: [Boolean, String, Object],
    component: VFadeTransition
  },
  controlsVariant: {
    type: String,
    default: 'default'
  },
  controlsProps: {
    type: Object
  },
  rounded: [Boolean, Number, String, Array],
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeThemeProps(),
  ...omit(makeVVideoControlsProps(), ['fullscreen', 'variant'])
}, 'VVideo');
export const VVideo = genericComponent()({
  name: 'VVideo',
  inheritAttrs: false,
  props: makeVVideoProps(),
  emits: {
    loaded: element => true,
    'update:playing': val => true,
    'update:progress': val => true,
    'update:volume': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      ssr
    } = useDisplay();
    const roundedForContainer = toRef(() => Array.isArray(props.rounded) ? props.rounded[0] : props.rounded);
    const roundedForControls = toRef(() => Array.isArray(props.rounded) ? props.rounded.at(-1) : props.rounded ?? false);
    const {
      roundedClasses: roundedContainerClasses
    } = useRounded(roundedForContainer);
    const {
      roundedClasses: roundedControlsClasses
    } = useRounded(roundedForControls);
    const containerRef = ref();
    const videoRef = ref();
    const controlsRef = ref();
    const playing = useProxiedModel(props, 'playing');
    const progress = useProxiedModel(props, 'progress');
    const volume = useProxiedModel(props, 'volume', 0, v => Number(v ?? 0));
    const fullscreen = shallowRef(false);
    const waiting = shallowRef(false);
    const triggered = shallowRef(false);
    const startAfterLoad = shallowRef(false);
    const state = shallowRef(props.autoplay ? 'loading' : 'idle');
    const duration = shallowRef(0);
    const fullscreenEnabled = toRef(() => !props.noFullscreen && !String(attrs.controlsList ?? '').includes('nofullscreen'));
    function onTimeupdate() {
      const {
        currentTime,
        duration
      } = videoRef.value;
      progress.value = duration === 0 ? 0 : 100 * currentTime / duration;
    }
    async function onTriggered() {
      await nextTick();
      if (!videoRef.value) return;
      videoRef.value.addEventListener('timeupdate', onTimeupdate);
      videoRef.value.volume = volume.value / 100;
      if (state.value !== 'loaded') {
        state.value = 'loading';
      }
    }
    function onVideoLoaded() {
      state.value = 'loaded';
      duration.value = videoRef.value.duration;
      const startTime = Number(props.startAt ?? 0);
      if (startTime && startTime <= duration.value) {
        videoRef.value.currentTime = startTime;
        progress.value = duration.value === 0 ? 0 : 100 * startTime / duration.value;
      }
      if (startAfterLoad.value) {
        setTimeout(() => playing.value = true, 100);
      }
      emit('loaded', videoRef.value);
    }
    function onClick() {
      if (state.value !== 'loaded') {
        triggered.value = true;
        startAfterLoad.value = !startAfterLoad.value;
      }
    }
    function onKeydown(e) {
      if (!videoRef.value || e.ctrlKey) return;
      if (e.key.startsWith('Arrow')) {
        e.preventDefault();
      }
      switch (true) {
        case e.key === ' ':
          {
            if (!['A', 'BUTTON'].includes(e.target?.tagName)) {
              e.preventDefault();
              playing.value = !playing.value;
            }
            break;
          }
        case e.key === 'ArrowRight':
          {
            const step = 10 * (e.shiftKey ? 6 : 1);
            videoRef.value.currentTime = Math.min(videoRef.value.currentTime + step, duration.value);
            // TODO: show skip indicator
            break;
          }
        case e.key === 'ArrowLeft':
          {
            const step = 10 * (e.shiftKey ? 6 : 1);
            videoRef.value.currentTime = Math.max(videoRef.value.currentTime - step, 0);
            // TODO: show skip indicator
            break;
          }
        case createRange(10).map(String).includes(e.key):
          {
            skipTo(Number(e.key) * 10);
            break;
          }
        case e.key === 'ArrowUp':
          {
            volume.value = Math.min(volume.value + 10, 100);
            // TODO: show volume change indicator
            break;
          }
        case e.key === 'ArrowDown':
          {
            volume.value = Math.max(volume.value - 10, 0);
            // TODO: show volume change indicator
            break;
          }
        case e.key === 'm':
          {
            controlsRef.value?.toggleMuted();
            break;
          }
        case e.key === 'f':
          {
            toggleFullscreen();
            break;
          }
      }
    }
    function skipTo(v) {
      if (!videoRef.value) return;
      progress.value = v;
      videoRef.value.currentTime = duration.value * v / 100;
    }
    watch(() => props.src, v => {
      progress.value = 0;
    });
    watch(playing, v => {
      if (!videoRef.value) return;
      if (v) {
        videoRef.value.play();
      } else {
        videoRef.value.pause();
      }
    });
    watch(volume, v => {
      if (!videoRef.value) return;
      videoRef.value.volume = v / 100;
    });
    watch(triggered, () => onTriggered(), {
      once: true
    });
    watch(() => props.eager, v => v && (triggered.value = true), {
      immediate: true
    });
    onMounted(() => {
      if (props.autoplay && !ssr) {
        triggered.value = true;
        startAfterLoad.value = true;
      }
    });
    onBeforeUnmount(() => {
      videoRef.value?.removeEventListener('timeupdate', onTimeupdate);
    });
    function focusSlider() {
      const container = videoRef.value?.closest('.v-video');
      const innerSlider = container?.querySelector('[role="slider"]');
      innerSlider?.focus();
    }
    function fullscreenExitShortcut(e) {
      if (['ESC', 'f'].includes(e.key)) {
        toggleFullscreen();
        document.body.removeEventListener('keydown', fullscreenExitShortcut);
      }
    }
    async function toggleFullscreen() {
      if (!fullscreenEnabled.value || !document.fullscreenEnabled) {
        return;
      }
      if (document.fullscreenElement) {
        document.exitFullscreen();
        onFullscreenExit();
      } else {
        await containerRef.value?.requestFullscreen();
        document.body.addEventListener('keydown', fullscreenExitShortcut);
        document.addEventListener('fullscreenchange', onFullscreenExit);
        fullscreen.value = true;
      }
    }
    function onFullscreenExit() {
      // event fires with a delay after requestFullscreen(), ignore first run
      if (document.fullscreenElement) return;
      focusSlider();
      fullscreen.value = false;
      document.body.removeEventListener('keydown', fullscreenExitShortcut);
      document.removeEventListener('fullscreenchange', onFullscreenExit);
    }
    function onVideoClick(e) {
      e.preventDefault();
      if (state.value === 'loaded') {
        playing.value = !playing.value;
        focusSlider();
      }
    }
    function onDoubleClick(e) {
      e.preventDefault();
      toggleFullscreen();
    }
    let lastTap = 0;
    function onTouchend(e) {
      const now = performance.now();
      if (now - lastTap < 500) {
        e.preventDefault();
        toggleFullscreen();
      } else {
        lastTap = now;
      }
    }
    useRender(() => {
      const showControls = state.value === 'loaded' && props.variant === 'player' && props.controlsVariant !== 'hidden';
      const posterTransition = props.variant === 'background' ? 'poster-fade-out' : 'fade-transition';
      const controlsProps = {
        ...VVideoControls.filterProps(omit(props, ['variant', 'rounded', 'hideVolume'])),
        rounded: Array.isArray(props.rounded) ? props.rounded.at(-1) : props.rounded,
        fullscreen: fullscreen.value,
        hideVolume: props.hideVolume || props.muted,
        hideFullscreen: props.hideFullscreen || !fullscreenEnabled.value,
        density: props.density,
        variant: props.controlsVariant,
        playing: playing.value,
        progress: progress.value,
        duration: duration.value,
        volume: volume.value,
        ...props.controlsProps
      };
      const controlsEventHandlers = {
        onSkip: v => skipTo(v),
        'onClick:fullscreen': () => toggleFullscreen(),
        'onUpdate:playing': v => playing.value = v,
        'onUpdate:progress': v => skipTo(v),
        'onUpdate:volume': v => volume.value = v,
        onClick: e => e.stopPropagation()
      };
      const controlslist = [attrs.controlslist, props.noFullscreen ? 'nofullscreen' : ''].filter(Boolean).join(' ');
      const loadingIndicator = _createVNode(VProgressCircular, {
        "indeterminate": true,
        "color": props.color,
        "width": "3",
        "size": Math.min(100, Number(props.height) / 2 || 50)
      }, null);
      const overlayPlayIcon = _createVNode(VIconBtn, {
        "icon": "$play",
        "size": "80",
        "color": "#fff",
        "variant": "outlined",
        "iconSize": "50",
        "class": "v-video__center-icon",
        "onClick": onVideoClick
      }, null);
      const activeOverlays = {
        playIcon: props.variant === 'player' && state.value === 'loaded' && !props.hideOverlay && !playing.value,
        poster: state.value !== 'loaded',
        loading: props.variant === 'player' && (state.value === 'loading' || waiting.value)
      };
      return _createElementVNode("div", {
        "ref": containerRef,
        "class": _normalizeClass(['v-video', `v-video--variant-${props.variant}`, `v-video--${state.value}`, {
          'v-video--playing': playing.value
        }, themeClasses.value, densityClasses.value, roundedContainerClasses.value, props.class]),
        "style": _normalizeStyle([{
          '--v-video-aspect-ratio': props.aspectRatio
        }, props.variant === 'background' ? [] : pick(dimensionStyles.value, ['width', 'minWidth', 'maxWidth']), props.style]),
        "onKeydown": onKeydown,
        "onClick": onClick
      }, [_createElementVNode("div", {
        "class": _normalizeClass(['v-video__content', elevationClasses.value]),
        "style": _normalizeStyle([props.variant === 'background' ? [] : dimensionStyles.value])
      }, [(props.eager || triggered.value) && _createElementVNode("video", _mergeProps({
        "key": "video-element",
        "class": ['v-video__video', roundedContainerClasses.value]
      }, omit(attrs, ['controlslist', 'class', 'style']), {
        "controlslist": controlslist,
        "autoplay": props.autoplay,
        "muted": props.muted,
        "playsinline": true,
        "ref": videoRef,
        "onLoadeddata": onVideoLoaded,
        "onPlay": () => playing.value = true,
        "onPause": () => playing.value = false,
        "onWaiting": () => waiting.value = true,
        "onPlaying": () => waiting.value = false,
        "onClick": onVideoClick,
        "onDblclick": onDoubleClick,
        "onTouchend": onTouchend
      }), [slots.sources?.() ?? _createElementVNode("source", {
        "src": props.src,
        "type": props.type
      }, null)]), _createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [activeOverlays.playIcon && _createElementVNode("div", {
          "class": "v-video__overlay-fill"
        }, [overlayPlayIcon])]
      }), props.variant === 'player' && !!slots.header && _createElementVNode("div", {
        "key": "header",
        "class": "v-video__header"
      }, [slots.header()]), _createVNode(MaybeTransition, {
        "transition": posterTransition
      }, {
        default: () => [activeOverlays.poster && _createElementVNode("div", {
          "class": "v-video__overlay-fill"
        }, [_createVNode(VImg, {
          "cover": true,
          "src": props.image
        }, {
          default: () => [_createElementVNode("div", {
            "class": _normalizeClass(['v-video__overlay-fill', ...roundedContainerClasses.value])
          }, [props.variant === 'player' && overlayPlayIcon])]
        })])]
      }), activeOverlays.loading && _createElementVNode("div", {
        "class": "v-video__overlay-fill"
      }, [loadingIndicator])]), _createVNode(MaybeTransition, {
        "key": "actions",
        "transition": props.controlsTransition
      }, {
        default: () => [showControls && _createVNode(VVideoControls, _mergeProps({
          "ref": controlsRef,
          "class": roundedControlsClasses.value
        }, controlsProps, controlsEventHandlers), {
          default: slots.controls,
          prepend: slots.prepend,
          append: slots.append
        })]
      })]);
    });
    return {
      video: videoRef,
      ...forwardRefs({
        skipTo,
        toggleFullscreen
      }, controlsRef)
    };
  }
});
//# sourceMappingURL=VVideo.js.map