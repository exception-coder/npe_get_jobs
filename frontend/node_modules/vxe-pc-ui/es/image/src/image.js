import { ref, h, inject, reactive, computed } from 'vue';
import { defineVxeComponent } from '../../ui/src/comp';
import { getConfig, createEvent, useSize } from '../../ui';
import XEUtils from 'xe-utils';
import { toCssUnit } from '../../ui/src/dom';
import { openPreviewImage } from './util';
export default defineVxeComponent({
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
            default: () => getConfig().image.maskClosable
        },
        toolbarConfig: Object,
        showPreview: {
            type: Boolean,
            default: () => getConfig().image.showPreview
        },
        showPrintButton: {
            type: Boolean,
            default: () => getConfig().image.showPrintButton
        },
        showDownloadButton: {
            type: Boolean,
            default: () => getConfig().image.showDownloadButton
        },
        size: {
            type: String,
            default: () => getConfig().image.size || getConfig().size
        },
        getThumbnailUrlMethod: Function
    },
    emits: [
        'click',
        'change',
        'rotate'
    ],
    setup(props, context) {
        const { emit } = context;
        const xID = XEUtils.uniqueId();
        const $xeImageGroup = inject('$xeImageGroup', null);
        const refElem = ref();
        const { computeSize } = useSize(props);
        const reactData = reactive({});
        const refMaps = {
            refElem
        };
        const computeImgStyle = computed(() => {
            const { width, height } = props;
            const style = {};
            if (width && height) {
                style.maxWidth = toCssUnit(width);
                style.maxHeight = toCssUnit(height);
            }
            else {
                if (width) {
                    style.width = toCssUnit(width);
                }
                if (height) {
                    style.height = toCssUnit(height);
                }
            }
            return style;
        });
        const computeImgList = computed(() => {
            const { src } = props;
            if (src) {
                return (XEUtils.isArray(src) ? src : [src]).map(item => {
                    if (XEUtils.isString(item)) {
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
        const computeImgItem = computed(() => {
            const imgList = computeImgList.value;
            return imgList[0];
        });
        const computeImgUrl = computed(() => {
            const imgItem = computeImgItem.value;
            return imgItem ? `${imgItem.url || ''}` : '';
        });
        const computeImgThumbnailUrl = computed(() => {
            const getThumbnailUrlFn = props.getThumbnailUrlMethod || getConfig().image.getThumbnailUrlMethod;
            const imgUrl = computeImgUrl.value;
            return getThumbnailUrlFn ? getThumbnailUrlFn({ url: imgUrl, $image: $xeImage }) : '';
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
                emit(type, createEvent(evnt, { $image: $xeImage }, params));
            }
        };
        const clickEvent = (evnt) => {
            const { showPreview, toolbarConfig, showPrintButton, showDownloadButton, maskClosable, zIndex } = props;
            const imgList = computeImgList.value;
            const imgUrl = computeImgUrl.value;
            if ($xeImageGroup) {
                $xeImageGroup.handleClickImgEvent(evnt, { url: imgUrl });
            }
            else {
                if (showPreview && imgUrl) {
                    openPreviewImage({
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
                $xeImage.dispatchEvent('click', { url: imgUrl }, evnt);
            }
        };
        const imagePrivateMethods = {};
        Object.assign($xeImage, imageMethods, imagePrivateMethods);
        const renderVN = () => {
            const { alt, loading, circle } = props;
            const imgStyle = computeImgStyle.value;
            const imgUrl = computeImgUrl.value;
            const imgThumbnailUrl = computeImgThumbnailUrl.value;
            const vSize = computeSize.value;
            return h('img', {
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
