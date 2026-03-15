// Utilities
import { computed, shallowRef, toValue, watch } from 'vue';
import { clamp } from "./helpers.js";
import { PREFERS_REDUCED_MOTION } from "./globals.js"; // Types
export const standardEasing = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const deceleratedEasing = 'cubic-bezier(0.0, 0, 0.2, 1)'; // Entering
export const acceleratedEasing = 'cubic-bezier(0.4, 0, 1, 1)'; // Leaving

export const easingPatterns = {
  linear: t => t,
  easeInQuad: t => t ** 2,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t,
  easeInCubic: t => t ** 3,
  easeOutCubic: t => --t ** 3 + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: t => t ** 4,
  easeOutQuart: t => 1 - --t ** 4,
  easeInOutQuart: t => t < 0.5 ? 8 * t ** 4 : 1 - 8 * --t ** 4,
  easeInQuint: t => t ** 5,
  easeOutQuint: t => 1 + --t ** 5,
  easeInOutQuint: t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5,
  instant: t => 1
};
export function useTransition(source, options) {
  const defaultTransition = {
    duration: 300,
    transition: easingPatterns.easeInOutCubic
  };
  let raf = -1;
  const outputRef = shallowRef(toValue(source));
  watch(() => toValue(source), async to => {
    cancelAnimationFrame(raf);
    const easing = {
      ...defaultTransition,
      ...toValue(options)
    };
    await executeTransition(outputRef, outputRef.value, to, easing);
  });
  function executeTransition(out, from, to, options) {
    const startTime = performance.now();
    const ease = PREFERS_REDUCED_MOTION() ? easingPatterns.instant : options.transition ?? easingPatterns.easeInOutCubic;
    return new Promise(resolve => {
      raf = requestAnimationFrame(function step(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / options.duration;
        out.value = from + (to - from) * ease(clamp(progress, 0, 1));
        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          out.value = to;
          resolve();
        }
      });
    });
  }
  return computed(() => outputRef.value);
}
//# sourceMappingURL=easing.js.map