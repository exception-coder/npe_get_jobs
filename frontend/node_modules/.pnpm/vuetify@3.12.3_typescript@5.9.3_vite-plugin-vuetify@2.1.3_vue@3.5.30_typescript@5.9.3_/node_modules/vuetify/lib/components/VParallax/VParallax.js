import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createVNode as _createVNode } from "vue";
// Styles
import "./VParallax.css";

// Components
import { VImg } from "../VImg/index.js"; // Composables
import { useDisplay } from "../../composables/index.js";
import { makeComponentProps } from "../../composables/component.js";
import { useIntersectionObserver } from "../../composables/intersectionObserver.js";
import { useResizeObserver } from "../../composables/resizeObserver.js"; // Utilities
import { computed, onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import { clamp, genericComponent, getScrollParent, PREFERS_REDUCED_MOTION, propsFactory, useRender } from "../../util/index.js"; // Types
function floor(val) {
  return Math.floor(Math.abs(val)) * Math.sign(val);
}
export const makeVParallaxProps = propsFactory({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...makeComponentProps()
}, 'VParallax');
export const VParallax = genericComponent()({
  name: 'VParallax',
  props: makeVParallaxProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const {
      height: displayHeight
    } = useDisplay();
    const root = ref();
    watchEffect(() => {
      intersectionRef.value = resizeRef.value = root.value?.$el;
    });
    let scrollParent;
    watch(isIntersecting, val => {
      if (val) {
        scrollParent = getScrollParent(intersectionRef.value);
        scrollParent = scrollParent === document.scrollingElement ? document : scrollParent;
        scrollParent.addEventListener('scroll', onScroll, {
          passive: true
        });
        onScroll();
      } else {
        scrollParent.removeEventListener('scroll', onScroll);
      }
    });
    onBeforeUnmount(() => {
      scrollParent?.removeEventListener('scroll', onScroll);
    });
    watch(displayHeight, onScroll);
    watch(() => contentRect.value?.height, onScroll);
    const scale = computed(() => {
      return 1 - clamp(Number(props.scale));
    });
    let frame = -1;
    function onScroll() {
      if (!isIntersecting.value || PREFERS_REDUCED_MOTION()) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = (root.value?.$el).querySelector('.v-img__img');
        if (!el) return;
        const scrollHeight = scrollParent instanceof Document ? document.documentElement.clientHeight : scrollParent.clientHeight;
        const scrollPos = scrollParent instanceof Document ? window.scrollY : scrollParent.scrollTop;
        const top = intersectionRef.value.getBoundingClientRect().top + scrollPos;
        const height = contentRect.value.height;
        const center = top + (height - scrollHeight) / 2;
        const translate = floor((scrollPos - center) * scale.value);
        const sizeScale = Math.max(1, (scale.value * (scrollHeight - height) + height) / height);
        el.style.setProperty('transform', `translateY(${translate}px) scale(${sizeScale})`);
      });
    }
    useRender(() => _createVNode(VImg, {
      "class": _normalizeClass(['v-parallax', {
        'v-parallax--active': isIntersecting.value
      }, props.class]),
      "style": _normalizeStyle(props.style),
      "ref": root,
      "cover": true,
      "onLoadstart": onScroll,
      "onLoad": onScroll
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VParallax.js.map