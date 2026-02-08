"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _comp = require("../../ui/src/comp");
var _ui = require("../../ui");
var _xeUtils = _interopRequireDefault(require("xe-utils"));
var _dom = require("../../ui/src/dom");
var _util = require("./util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = (0, _comp.defineVxeComponent)({
  name: 'VxeImage',
  props: {
    src: [String, Array],
    alt: [String, Number],
    loading: String,
    title: [String, Number],
    width: [String, Number],
    height: [String, Number],
    circle: Boolean,
    zIndex: Number,
    maskClosable: {
      type: Boolean,
      default: () => (0, _ui.getConfig)().image.maskClosable
    },
    toolbarConfig: Object,
    showPreview: {
      type: Boolean,
      default: () => (0, _ui.getConfig)().image.showPreview
    },
    showPrintButton: {
      type: Boolean,
      default: () => (0, _ui.getConfig)().image.showPrintButton
    },
    showDownloadButton: {
      type: Boolean,
      default: () => (0, _ui.getConfig)().image.showDownloadButton
    },
    size: {
      type: String,
      default: () => (0, _ui.getConfig)().image.size || (0, _ui.getConfig)().size
    },
    getThumbnailUrlMethod: Function
  },
  emits: ['click', 'change', 'rotate'],
  setup(props, context) {
    const {
      emit
    } = context;
    const xID = _xeUtils.default.uniqueId();
    const $xeImageGroup = (0, _vue.inject)('$xeImageGroup', null);
    const refElem = (0, _vue.ref)();
    const {
      computeSize
    } = (0, _ui.useSize)(props);
    const reactData = (0, _vue.reactive)({});
    const refMaps = {
      refElem
    };
    const computeImgStyle = (0, _vue.computed)(() => {
      const {
        width,
        height
      } = props;
      const style = {};
      if (width && height) {
        style.maxWidth = (0, _dom.toCssUnit)(width);
        style.maxHeight = (0, _dom.toCssUnit)(height);
      } else {
        if (width) {
          style.width = (0, _dom.toCssUnit)(width);
        }
        if (height) {
          style.height = (0, _dom.toCssUnit)(height);
        }
      }
      return style;
    });
    const computeImgList = (0, _vue.computed)(() => {
      const {
        src
      } = props;
      if (src) {
        return (_xeUtils.default.isArray(src) ? src : [src]).map(item => {
          if (_xeUtils.default.isString(item)) {
            return {
              url: item,
              alt: ''
            };
          }
          return {
            url: item.url,
            alt: item.alt
          };
        });
      }
      return [];
    });
    const computeImgItem = (0, _vue.computed)(() => {
      const imgList = computeImgList.value;
      return imgList[0];
    });
    const computeImgUrl = (0, _vue.computed)(() => {
      const imgItem = computeImgItem.value;
      return imgItem ? `${imgItem.url || ''}` : '';
    });
    const computeImgThumbnailUrl = (0, _vue.computed)(() => {
      const getThumbnailUrlFn = props.getThumbnailUrlMethod || (0, _ui.getConfig)().image.getThumbnailUrlMethod;
      const imgUrl = computeImgUrl.value;
      return getThumbnailUrlFn ? getThumbnailUrlFn({
        url: imgUrl,
        $image: $xeImage
      }) : '';
    });
    const computeMaps = {
      computeSize
    };
    const $xeImage = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: () => refMaps,
      getComputeMaps: () => computeMaps
    };
    const imageMethods = {
      dispatchEvent(type, params, evnt) {
        emit(type, (0, _ui.createEvent)(evnt, {
          $image: $xeImage
        }, params));
      }
    };
    const clickEvent = evnt => {
      const {
        showPreview,
        toolbarConfig,
        showPrintButton,
        showDownloadButton,
        maskClosable,
        zIndex
      } = props;
      const imgList = computeImgList.value;
      const imgUrl = computeImgUrl.value;
      if ($xeImageGroup) {
        $xeImageGroup.handleClickImgEvent(evnt, {
          url: imgUrl
        });
      } else {
        if (showPreview && imgUrl) {
          (0, _util.openPreviewImage)({
            urlList: imgList,
            toolbarConfig,
            showPrintButton,
            showDownloadButton,
            maskClosable,
            zIndex,
            events: {
              change(eventParams) {
                $xeImage.dispatchEvent('change', eventParams, eventParams.$event);
              },
              rotate(eventParams) {
                $xeImage.dispatchEvent('rotate', eventParams, eventParams.$event);
              }
            }
          });
        }
        $xeImage.dispatchEvent('click', {
          url: imgUrl
        }, evnt);
      }
    };
    const imagePrivateMethods = {};
    Object.assign($xeImage, imageMethods, imagePrivateMethods);
    const renderVN = () => {
      const {
        alt,
        loading,
        circle
      } = props;
      const imgStyle = computeImgStyle.value;
      const imgUrl = computeImgUrl.value;
      const imgThumbnailUrl = computeImgThumbnailUrl.value;
      const vSize = computeSize.value;
      return (0, _vue.h)('img', {
        ref: refElem,
        class: ['vxe-image', {
          [`size--${vSize}`]: vSize,
          'is--circle': circle
        }],
        src: imgThumbnailUrl || imgUrl,
        alt,
        loading,
        style: imgStyle,
        onClick: clickEvent
      });
    };
    $xeImage.renderVN = renderVN;
    return $xeImage;
  },
  render() {
    return this.renderVN();
  }
});