"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _comp = require("../../ui/src/comp");
var _xeUtils = _interopRequireDefault(require("xe-utils"));
var _ui = require("../../ui");
var _dom = require("../../ui/src/dom");
var _utils = require("../../ui/src/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = (0, _comp.defineVxeComponent)({
  name: 'VxePulldown',
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    placement: String,
    trigger: {
      type: String,
      default: (0, _ui.getConfig)().pulldown.trigger
    },
    zIndex: Number,
    size: {
      type: String,
      default: () => (0, _ui.getConfig)().pulldown.size || (0, _ui.getConfig)().size
    },
    options: Array,
    className: {
      type: [String, Function],
      default: (0, _ui.getConfig)().pulldown.className
    },
    popupClassName: [String, Function],
    showPopupShadow: Boolean,
    destroyOnClose: {
      type: Boolean,
      default: (0, _ui.getConfig)().pulldown.destroyOnClose
    },
    transfer: {
      type: Boolean,
      default: null
    }
  },
  emits: ['update:modelValue', 'click', 'option-click', 'show-panel', 'hide-panel', 'visible-change'],
  setup(props, context) {
    const {
      slots,
      emit
    } = context;
    const $xeModal = (0, _vue.inject)('$xeModal', null);
    const $xeDrawer = (0, _vue.inject)('$xeDrawer', null);
    const $xeTable = (0, _vue.inject)('$xeTable', null);
    const $xeForm = (0, _vue.inject)('$xeForm', null);
    const xID = _xeUtils.default.uniqueId();
    const {
      computeSize
    } = (0, _ui.useSize)(props);
    const reactData = (0, _vue.reactive)({
      initialized: false,
      panelIndex: 0,
      panelStyle: {},
      panelPlacement: null,
      visiblePanel: false,
      isAniVisible: false,
      isActivated: false
    });
    const internalData = {
      hpTimeout: undefined
    };
    const refElem = (0, _vue.ref)();
    const refPulldownContent = (0, _vue.ref)();
    const refPulldownPanel = (0, _vue.ref)();
    const computeBtnTransfer = (0, _vue.computed)(() => {
      const {
        transfer
      } = props;
      if (transfer === null) {
        const globalTransfer = (0, _ui.getConfig)().pulldown.transfer;
        if (_xeUtils.default.isBoolean(globalTransfer)) {
          return globalTransfer;
        }
        if ($xeTable || $xeModal || $xeDrawer || $xeForm) {
          return true;
        }
      }
      return transfer;
    });
    const refMaps = {
      refElem
    };
    const $xePulldown = {
      xID,
      props,
      context,
      reactData,
      internalData,
      getRefMaps: () => refMaps
    };
    let pulldownMethods = {};
    const updateZindex = () => {
      const {
        zIndex
      } = props;
      if (zIndex) {
        reactData.panelIndex = zIndex;
      } else if (reactData.panelIndex < (0, _utils.getLastZIndex)()) {
        reactData.panelIndex = (0, _utils.nextZIndex)();
      }
    };
    const isPanelVisible = () => {
      return reactData.visiblePanel;
    };
    /**
     * 手动更新位置
     */
    const updatePlacement = () => {
      const {
        placement
      } = props;
      const {
        panelIndex
      } = reactData;
      const targetElem = refPulldownContent.value;
      const panelElem = refPulldownPanel.value;
      const btnTransfer = computeBtnTransfer.value;
      const handleStyle = () => {
        const ppObj = (0, _dom.updatePanelPlacement)(targetElem, panelElem, {
          placement,
          teleportTo: btnTransfer
        });
        const panelStyle = Object.assign(ppObj.style, {
          zIndex: panelIndex
        });
        reactData.panelStyle = panelStyle;
        reactData.panelPlacement = ppObj.placement;
      };
      handleStyle();
      return (0, _vue.nextTick)().then(handleStyle);
    };
    /**
     * 显示下拉面板
     */
    const showPanel = () => {
      if (!reactData.initialized) {
        reactData.initialized = true;
      }
      return new Promise(resolve => {
        if (!props.disabled) {
          if (internalData.hpTimeout) {
            clearTimeout(internalData.hpTimeout);
          }
          reactData.isActivated = true;
          reactData.isAniVisible = true;
          setTimeout(() => {
            reactData.visiblePanel = true;
            emit('update:modelValue', true);
            updatePlacement();
            setTimeout(() => {
              resolve(updatePlacement());
            }, 40);
          }, 10);
          updateZindex();
          dispatchEvent('visible-change', {
            visible: true
          }, null);
        } else {
          (0, _vue.nextTick)(() => {
            resolve();
          });
        }
      });
    };
    /**
     * 隐藏下拉面板
     */
    const hideOptionPanel = () => {
      reactData.visiblePanel = false;
      dispatchEvent('visible-change', {
        visible: false
      }, null);
      emit('update:modelValue', false);
      return new Promise(resolve => {
        if (reactData.isAniVisible) {
          internalData.hpTimeout = setTimeout(() => {
            reactData.isAniVisible = false;
            (0, _vue.nextTick)(() => {
              resolve();
            });
          }, 350);
        } else {
          (0, _vue.nextTick)(() => {
            resolve();
          });
        }
      });
    };
    /**
     * 切换下拉面板
     */
    const togglePanel = () => {
      if (reactData.visiblePanel) {
        return hideOptionPanel();
      }
      return showPanel();
    };
    const handleOptionEvent = (evnt, option) => {
      if (!option.disabled) {
        if (reactData.visiblePanel) {
          hideOptionPanel();
          dispatchEvent('hide-panel', {}, evnt);
        }
        dispatchEvent('option-click', {
          option
        }, evnt);
      }
    };
    const clickTargetEvent = evnt => {
      const {
        trigger
      } = props;
      if (trigger === 'click') {
        if (reactData.visiblePanel) {
          hideOptionPanel();
          dispatchEvent('hide-panel', {}, evnt);
        } else {
          showPanel();
          dispatchEvent('show-panel', {}, evnt);
        }
      }
      dispatchEvent('click', {
        $pulldown: $xePulldown
      }, evnt);
    };
    const handleGlobalMousewheelEvent = evnt => {
      const {
        disabled
      } = props;
      const {
        visiblePanel
      } = reactData;
      const panelElem = refPulldownPanel.value;
      if (!disabled) {
        if (visiblePanel) {
          if ((0, _dom.getEventTargetNode)(evnt, panelElem).flag) {
            updatePlacement();
          } else {
            hideOptionPanel();
            dispatchEvent('hide-panel', {}, evnt);
          }
        }
      }
    };
    const handleGlobalMousedownEvent = evnt => {
      const {
        disabled
      } = props;
      const {
        visiblePanel
      } = reactData;
      const el = refElem.value;
      const panelElem = refPulldownPanel.value;
      if (!disabled) {
        reactData.isActivated = (0, _dom.getEventTargetNode)(evnt, el).flag || (0, _dom.getEventTargetNode)(evnt, panelElem).flag;
        if (visiblePanel && !reactData.isActivated) {
          hideOptionPanel();
          dispatchEvent('hide-panel', {}, evnt);
        }
      }
    };
    const handleGlobalBlurEvent = evnt => {
      const {
        visiblePanel,
        isActivated
      } = reactData;
      if (visiblePanel) {
        hideOptionPanel();
        dispatchEvent('hide-panel', {}, evnt);
      }
      if (isActivated) {
        reactData.isActivated = false;
      }
    };
    const handleGlobalResizeEvent = () => {
      const {
        visiblePanel
      } = reactData;
      if (visiblePanel) {
        updatePlacement();
      }
    };
    const dispatchEvent = (type, params, evnt) => {
      emit(type, (0, _ui.createEvent)(evnt, {
        $pulldown: $xePulldown
      }, params));
    };
    pulldownMethods = {
      dispatchEvent,
      isPanelVisible,
      togglePanel,
      showPanel,
      hidePanel: hideOptionPanel
    };
    Object.assign($xePulldown, pulldownMethods);
    (0, _vue.watch)(() => props.modelValue, value => {
      reactData.isActivated = !!value;
      if (value) {
        showPanel();
      } else {
        hideOptionPanel();
      }
    });
    (0, _vue.nextTick)(() => {
      if (props.modelValue) {
        showPanel();
      }
      _ui.globalEvents.on($xePulldown, 'mousewheel', handleGlobalMousewheelEvent);
      _ui.globalEvents.on($xePulldown, 'mousedown', handleGlobalMousedownEvent);
      _ui.globalEvents.on($xePulldown, 'blur', handleGlobalBlurEvent);
      _ui.globalEvents.on($xePulldown, 'resize', handleGlobalResizeEvent);
    });
    (0, _vue.onUnmounted)(() => {
      _ui.globalEvents.off($xePulldown, 'mousewheel');
      _ui.globalEvents.off($xePulldown, 'mousedown');
      _ui.globalEvents.off($xePulldown, 'blur');
      _ui.globalEvents.off($xePulldown, 'resize');
    });
    const renderDefaultPanel = options => {
      const optionSlot = slots.option;
      return (0, _vue.h)('div', {
        class: 'vxe-pulldown--panel-list'
      }, options ? options.map(item => {
        return (0, _vue.h)('div', {
          class: 'vxe-pulldown--panel-item',
          onClick(evnt) {
            handleOptionEvent(evnt, item);
          }
        }, optionSlot ? optionSlot({
          $pulldown: $xePulldown,
          option: item
        }) : `${item.label || ''}`);
      }) : []);
    };
    const renderVN = () => {
      const {
        className,
        options,
        popupClassName,
        showPopupShadow,
        destroyOnClose,
        disabled
      } = props;
      const {
        initialized,
        isActivated,
        isAniVisible,
        visiblePanel,
        panelStyle,
        panelPlacement
      } = reactData;
      const btnTransfer = computeBtnTransfer.value;
      const vSize = computeSize.value;
      const defaultSlot = slots.default;
      const headerSlot = slots.header;
      const footerSlot = slots.footer;
      const dropdownSlot = slots.dropdown;
      return (0, _vue.h)('div', {
        ref: refElem,
        class: ['vxe-pulldown', className ? _xeUtils.default.isFunction(className) ? className({
          $pulldown: $xePulldown
        }) : className : '', {
          [`size--${vSize}`]: vSize,
          'is--visible': visiblePanel,
          'is--disabled': disabled,
          'is--active': isActivated
        }]
      }, [(0, _vue.h)('div', {
        ref: refPulldownContent,
        class: 'vxe-pulldown--content',
        onClick: clickTargetEvent
      }, defaultSlot ? defaultSlot({
        $pulldown: $xePulldown
      }) : []), (0, _vue.h)(_vue.Teleport, {
        to: 'body',
        disabled: btnTransfer ? !initialized : true
      }, [(0, _vue.h)('div', {
        ref: refPulldownPanel,
        class: ['vxe-table--ignore-clear vxe-pulldown--panel', popupClassName ? _xeUtils.default.isFunction(popupClassName) ? popupClassName({
          $pulldown: $xePulldown
        }) : popupClassName : '', {
          [`size--${vSize}`]: vSize,
          'is--transfer': btnTransfer,
          'ani--leave': isAniVisible,
          'ani--enter': visiblePanel
        }],
        placement: panelPlacement,
        style: panelStyle
      }, [(0, _vue.h)('div', {
        class: ['vxe-pulldown--panel-wrapper', {
          'is--shadow': showPopupShadow
        }]
      }, initialized && (destroyOnClose ? visiblePanel || isAniVisible : true) ? [headerSlot ? (0, _vue.h)('div', {
        class: 'vxe-pulldown--panel-header'
      }, headerSlot({
        $pulldown: $xePulldown
      })) : (0, _ui.renderEmptyElement)($xePulldown), (0, _vue.h)('div', {
        class: 'vxe-pulldown--panel-body'
      }, dropdownSlot ? dropdownSlot({
        $pulldown: $xePulldown
      }) : [renderDefaultPanel(options)]), footerSlot ? (0, _vue.h)('div', {
        class: 'vxe-pulldown--panel-footer'
      }, footerSlot({
        $pulldown: $xePulldown
      })) : (0, _ui.renderEmptyElement)($xePulldown)] : [])])])]);
    };
    $xePulldown.renderVN = renderVN;
    return $xePulldown;
  },
  render() {
    return this.renderVN();
  }
});