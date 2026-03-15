// Utilities
import { inject, toRef } from 'vue';
import { useRtl } from "./locale.js";
import { clamp, consoleWarn, easingPatterns, mergeDeep, PREFERS_REDUCED_MOTION, refElement } from "../util/index.js"; // Types
export const GoToSymbol = Symbol.for('vuetify:goto');
function genDefaults() {
  return {
    container: undefined,
    duration: 300,
    layout: false,
    offset: 0,
    easing: 'easeInOutCubic',
    patterns: easingPatterns
  };
}
function getContainer(el) {
  return getTarget(el) ?? (document.scrollingElement || document.body);
}
function getTarget(el) {
  return typeof el === 'string' ? document.querySelector(el) : refElement(el);
}
function getOffset(target, horizontal, rtl) {
  if (typeof target === 'number') return horizontal && rtl ? -target : target;
  let el = getTarget(target);
  let totalOffset = 0;
  while (el) {
    totalOffset += horizontal ? el.offsetLeft : el.offsetTop;
    el = el.offsetParent;
  }
  return totalOffset;
}
export function createGoTo(options, locale) {
  return {
    rtl: locale.isRtl,
    options: mergeDeep(genDefaults(), options)
  };
}
export async function scrollTo(_target, _options, horizontal, goTo) {
  const property = horizontal ? 'scrollLeft' : 'scrollTop';
  const options = mergeDeep(goTo?.options ?? genDefaults(), _options);
  const rtl = goTo?.rtl.value;
  const target = (typeof _target === 'number' ? _target : getTarget(_target)) ?? 0;
  const container = options.container === 'parent' && target instanceof HTMLElement ? target.parentElement : getContainer(options.container);
  const ease = PREFERS_REDUCED_MOTION() ? options.patterns.instant : typeof options.easing === 'function' ? options.easing : options.patterns[options.easing];
  if (!ease) throw new TypeError(`Easing function "${options.easing}" not found.`);
  let targetLocation;
  if (typeof target === 'number') {
    targetLocation = getOffset(target, horizontal, rtl);
  } else {
    targetLocation = getOffset(target, horizontal, rtl) - getOffset(container, horizontal, rtl);
    if (options.layout) {
      const styles = window.getComputedStyle(target);
      const layoutOffset = styles.getPropertyValue('--v-layout-top');
      if (layoutOffset) targetLocation -= parseInt(layoutOffset, 10);
    }
  }
  targetLocation += options.offset;
  targetLocation = clampTarget(container, targetLocation, !!rtl, !!horizontal);
  const startLocation = container[property] ?? 0;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const startTime = performance.now();
  return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = timeElapsed / options.duration;
    const location = Math.floor(startLocation + (targetLocation - startLocation) * ease(clamp(progress, 0, 1)));
    container[property] = location;

    // Allow for some jitter if target time has elapsed
    if (progress >= 1 && Math.abs(location - container[property]) < 10) {
      return resolve(targetLocation);
    } else if (progress > 2) {
      // The target might not be reachable
      consoleWarn('Scroll target is not reachable');
      return resolve(container[property]);
    }
    requestAnimationFrame(step);
  }));
}
export function useGoTo() {
  let _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const goToInstance = inject(GoToSymbol);
  const {
    isRtl
  } = useRtl();
  if (!goToInstance) throw new Error('[Vuetify] Could not find injected goto instance');
  const goTo = {
    ...goToInstance,
    // can be set via VLocaleProvider
    rtl: toRef(() => goToInstance.rtl.value || isRtl.value)
  };
  async function go(target, options) {
    return scrollTo(target, mergeDeep(_options, options), false, goTo);
  }
  go.horizontal = async (target, options) => {
    return scrollTo(target, mergeDeep(_options, options), true, goTo);
  };
  return go;
}

/**
 * Clamp target value to achieve a smooth scroll animation
 * when the value goes outside the scroll container size
 */
function clampTarget(container, value, rtl, horizontal) {
  const {
    scrollWidth,
    scrollHeight
  } = container;
  const [containerWidth, containerHeight] = container === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [container.offsetWidth, container.offsetHeight];
  let min;
  let max;
  if (horizontal) {
    if (rtl) {
      min = -(scrollWidth - containerWidth);
      max = 0;
    } else {
      min = 0;
      max = scrollWidth - containerWidth;
    }
  } else {
    min = 0;
    max = scrollHeight + -containerHeight;
  }
  return clamp(value, min, max);
}
//# sourceMappingURL=goto.js.map