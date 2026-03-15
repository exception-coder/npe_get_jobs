import { createElementVNode as _createElementVNode, createVNode as _createVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, mergeProps as _mergeProps, withDirectives as _withDirectives } from "vue";
// Styles
import "./VPie.css";

// Components
import { makeVPieSegmentProps, VPieSegment } from "./VPieSegment.js";
import { VPieTooltip } from "./VPieTooltip.js";
import { VAvatar } from "../../components/VAvatar/index.js";
import { VChip } from "../../components/VChip/index.js";
import { VChipGroup } from "../../components/VChipGroup/index.js";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/index.js"; // Composables
import { useColor } from "../../composables/color.js";
import { makeDensityProps } from "../../composables/density.js"; // Directives
import vClickOutside from "../../directives/click-outside/index.js"; // Utilities
import { computed, shallowRef, toRef, watch } from 'vue';
import { formatTextTemplate } from "./utils.js";
import { convertToUnit, genericComponent, pick, propsFactory } from "../../util/index.js"; // Types
export const makeVPieProps = propsFactory({
  title: String,
  bgColor: String,
  items: {
    type: Array,
    default: () => []
  },
  palette: {
    type: Array,
    default: () => []
  },
  itemKey: {
    type: String,
    default: 'key'
  },
  itemValue: {
    type: String,
    default: 'value'
  },
  itemTitle: {
    type: String,
    default: 'title'
  },
  size: {
    type: [Number, String],
    default: 250
  },
  rotate: [Number, String],
  gaugeCut: [Number, String],
  legend: {
    type: [Boolean, Object],
    default: false
  },
  tooltip: {
    type: [Boolean, Object],
    default: false
  },
  ...makeDensityProps(),
  ...pick(makeVPieSegmentProps(), ['animation', 'gap', 'rounded', 'innerCut', 'hoverScale', 'hideSlice', 'reveal'])
}, 'VPie');
export const VPie = genericComponent()({
  name: 'VPie',
  directives: {
    vClickOutside
  },
  props: makeVPieProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const legendConfig = computed(() => ({
      visible: !!props.legend,
      position: 'bottom',
      textFormat: '[title]',
      ...(typeof props.legend === 'object' ? props.legend : {})
    }));
    const {
      colorClasses,
      colorStyles
    } = useColor(() => ({
      background: props.bgColor
    }));
    const textColorStyles = toRef(() => pick(colorStyles.value, ['color', 'caretColor']));
    const legendAvatarSize = toRef(() => ({
      default: 20,
      comfortable: 18,
      compact: 16
    })[props.density ?? 'default']);
    const legendDirection = toRef(() => ['left', 'right'].includes(legendConfig.value.position) ? 'vertical' : 'horizontal');
    const legendMode = toRef(() => !legendConfig.value.visible ? 'hidden' : legendConfig.value.position);
    const legendTextFormatFunction = toRef(() => item => {
      return typeof legendConfig.value.textFormat === 'function' ? legendConfig.value.textFormat(item) : formatTextTemplate(legendConfig.value.textFormat, item);
    });
    const arcs = computed(() => {
      // hidden items get (value: 0) to trigger disappearing animation
      return props.items.filter(Boolean).map((item, index) => {
        return {
          key: item[props.itemKey],
          color: item.color ?? colorFromPalette(index),
          value: item[props.itemValue],
          title: String(item[props.itemTitle]),
          pattern: item.pattern ?? patternFromPalette(index),
          raw: item
        };
      });
    });
    const visibleItemsKeys = shallowRef([]);
    watch(() => arcs.value.length, () => {
      // reset when number of items changes
      visibleItemsKeys.value = arcs.value.map(a => a.key);
    }, {
      immediate: true
    });
    const visibleItems = computed(() => {
      // hidden items get (value: 0) to trigger disappearing animation
      return arcs.value.map(item => {
        return isVisible(item) ? item : {
          ...item,
          value: 0
        };
      });
    });
    const total = computed(() => visibleItems.value.reduce((sum, item) => sum + item.value, 0));
    const gaugeCut = toRef(() => Number(props.gaugeCut ?? 0));
    const gaugeOffset = computed(() => (1 - Math.cos(Math.PI * Math.min(90, gaugeCut.value / 2) / 180)) / 2);
    const rotateDeg = computed(() => `${gaugeCut.value ? 180 + gaugeCut.value / 2 : props.rotate ?? 0}deg`);
    function arcOffset(index) {
      return visibleItems.value.slice(0, index).reduce((acc, s) => acc + (total.value > 0 ? s.value / total.value : 0) * (360 - gaugeCut.value), 0);
    }
    function arcSize(v) {
      return v / total.value * (100 - gaugeCut.value / 3.6);
    }
    function colorFromPalette(index) {
      if (props.palette.length === 0) return undefined;
      const paletteItem = props.palette[index % props.palette.length];
      return typeof paletteItem === 'object' ? paletteItem.color : paletteItem;
    }
    function patternFromPalette(index) {
      if (props.palette.length === 0) return undefined;
      const paletteItem = props.palette[index % props.palette.length];
      return typeof paletteItem === 'object' ? paletteItem.pattern : undefined;
    }
    function isVisible(item) {
      return visibleItemsKeys.value.includes(item.key);
    }
    function toggle(item) {
      if (isVisible(item)) {
        visibleItemsKeys.value = visibleItemsKeys.value.filter(x => x !== item.key);
      } else {
        visibleItemsKeys.value = [...visibleItemsKeys.value, item.key];
      }
    }
    const tooltipItem = shallowRef(null);
    const tooltipVisible = shallowRef(false);
    const tooltipTarget = shallowRef([0, 0]);
    let mouseLeaveTimeout = null;
    function setItemActive(item, active) {
      arcs.value.forEach(a => a.isActive = a.key === item.key && active);
      if (props.tooltip) {
        setTooltip(item, active);
      }
    }
    function setTooltip(item, active) {
      clearTimeout(mouseLeaveTimeout);
      if (active) {
        tooltipVisible.value = true;
        tooltipItem.value = item;
      } else {
        mouseLeaveTimeout = setTimeout(() => {
          tooltipVisible.value = false;

          // intentionally reusing timeout here
          mouseLeaveTimeout = setTimeout(() => {
            tooltipItem.value = null;
          }, 500);
        }, 100);
      }
    }
    let frame = -1;
    function onSvgMousemove(_ref2) {
      let {
        clientX,
        clientY
      } = _ref2;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        tooltipTarget.value = [clientX, clientY];
      });
    }
    function onSvgTouchstart(_ref3) {
      let {
        touches
      } = _ref3;
      if (!touches) return;
      const {
        clientX,
        clientY
      } = touches[0];
      tooltipTarget.value = [clientX, clientY];
    }
    function onSvgClickOutside() {
      arcs.value.forEach(a => a.isActive = false);
      tooltipVisible.value = false;
    }
    return () => {
      const segmentProps = pick(props, ['animation', 'gap', 'rounded', 'hideSlice', 'reveal', 'innerCut', 'hoverScale']);
      const defaultTooltipTransition = {
        name: 'fade-transition',
        duration: 150
      };
      const tooltipProps = {
        item: tooltipItem.value,
        modelValue: tooltipVisible.value,
        titleFormat: typeof props.tooltip === 'object' ? props.tooltip.titleFormat : '[title]',
        subtitleFormat: typeof props.tooltip === 'object' ? props.tooltip.subtitleFormat : '[value]',
        transition: typeof props.tooltip === 'object' ? props.tooltip.transition : defaultTooltipTransition,
        offset: typeof props.tooltip === 'object' ? props.tooltip.offset : 16,
        target: tooltipTarget.value
      };
      const legendDefaults = {
        VChipGroup: {
          direction: legendDirection.value
        },
        VChip: {
          density: props.density
        },
        VAvatar: {
          size: legendAvatarSize.value
        }
      };
      const tooltipDefaults = {
        VAvatar: {
          size: typeof props.tooltip === 'object' ? props.tooltip.avatarSize ?? 28 : 28
        }
      };
      const avatarSlot = _ref4 => {
        let {
          item
        } = _ref4;
        return _createVNode(VAvatar, {
          "color": item.color,
          "start": true
        }, {
          default: () => [item.pattern && _createElementVNode("svg", {
            "height": "40",
            "width": "40"
          }, [_createElementVNode("rect", {
            "width": "40",
            "height": "40",
            "fill": item.pattern
          }, null)])]
        });
      };
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-pie', `v-pie--legend-${legendMode.value}`]),
        "style": {
          '--v-pie-size': convertToUnit(props.size)
        }
      }, [slots.title?.() ?? (props.title && _createElementVNode("div", {
        "class": "v-pie__title"
      }, [props.title])), _createElementVNode("div", {
        "class": _normalizeClass(['v-pie__content', colorClasses.value]),
        "style": _normalizeStyle([{
          transform: `rotate(${rotateDeg.value})`,
          marginBottom: `calc(-1 * ${convertToUnit(props.size)} * ${gaugeOffset.value})`
        }, textColorStyles.value])
      }, [_createElementVNode("div", {
        "class": _normalizeClass(['v-pie__content-underlay', colorClasses.value]),
        "style": _normalizeStyle(colorStyles.value)
      }, null), _withDirectives(_createElementVNode("svg", {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 100 100",
        "class": "v-pie__segments",
        "onMousemove": onSvgMousemove,
        "onTouchstart": onSvgTouchstart
      }, [arcs.value.map((item, index) => _createVNode(VPieSegment, _mergeProps(segmentProps, {
        "key": item.key,
        "active": item.isActive,
        "color": item.color,
        "value": isVisible(item) ? arcSize(item.value) : 0,
        "rotate": arcOffset(index),
        "pattern": item.pattern,
        "onUpdate:active": val => setItemActive(item, val),
        "onTouchend": () => setItemActive(item, true)
      }), null))]), [[vClickOutside, {
        handler: onSvgClickOutside
      }]]), _createElementVNode("div", {
        "class": "v-pie__center-content",
        "style": {
          transform: `translate(-50%, -50%)
                  rotate(-${rotateDeg.value})
                  translateY(calc(-100% * ${gaugeOffset.value}))`
        }
      }, [_createElementVNode("div", null, [slots.center?.({
        total: total.value
      })])])]), legendConfig.value.visible && _createVNode(VDefaultsProvider, {
        "key": "legend",
        "defaults": legendDefaults
      }, {
        default: () => [_createElementVNode("div", {
          "class": "v-pie__legend"
        }, [slots.legend?.({
          isActive: isVisible,
          toggle,
          items: arcs.value,
          total: total.value
        }) ?? _createVNode(VChipGroup, {
          "column": true,
          "multiple": true,
          "modelValue": visibleItemsKeys.value,
          "onUpdate:modelValue": $event => visibleItemsKeys.value = $event
        }, {
          default: () => [arcs.value.map(item => _createVNode(VChip, {
            "value": item.key
          }, {
            prepend: () => avatarSlot({
              item
            }),
            default: () => _createElementVNode("div", {
              "class": "v-pie__legend__text"
            }, [slots['legend-text']?.({
              item,
              total: total.value
            }) ?? legendTextFormatFunction.value(item)])
          }))]
        })])]
      }), !!props.tooltip && _createVNode(VDefaultsProvider, {
        "defaults": tooltipDefaults
      }, {
        default: () => [_createVNode(VPieTooltip, tooltipProps, {
          default: slots.tooltip ? slotProps => slots.tooltip?.({
            ...slotProps,
            total: total.value
          }) : undefined,
          prepend: avatarSlot
        })]
      })]);
    };
  }
});
//# sourceMappingURL=VPie.js.map