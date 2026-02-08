import { ref, h, reactive } from 'vue';
import { defineVxeComponent } from '../../ui/src/comp';
import { getConfig, useSize, createEvent } from '../../ui';
import VxeLoadingComponent from '../../loading/src/loading';
import XEUtils from 'xe-utils';
export default defineVxeComponent({
    name: 'VxeLayoutBody',
    props: {
        loading: Boolean,
        padding: Boolean,
        size: {
            type: String,
            default: () => getConfig().layoutBody.size || getConfig().size
        }
    },
    emits: [],
    setup(props, context) {
        const { slots, emit } = context;
        const xID = XEUtils.uniqueId();
        const refElem = ref();
        const { computeSize } = useSize(props);
        const reactData = reactive({});
        const refMaps = {
            refElem
        };
        const computeMaps = {
            computeSize
        };
        const $xeLayoutBody = {
            xID,
            props,
            context,
            reactData,
            getRefMaps: () => refMaps,
            getComputeMaps: () => computeMaps
        };
        const dispatchEvent = (type, params, evnt) => {
            emit(type, createEvent(evnt, { $layoutBody: $xeLayoutBody }, params));
        };
        const layoutBodyMethods = {
            dispatchEvent
        };
        const layoutBodyPrivateMethods = {};
        Object.assign($xeLayoutBody, layoutBodyMethods, layoutBodyPrivateMethods);
        const renderVN = () => {
            const { loading, padding } = props;
            const vSize = computeSize.value;
            const defaultSlot = slots.default;
            return h('div', {
                ref: refElem,
                class: ['vxe-layout-body', {
                        [`size--${vSize}`]: vSize,
                        'is--loading': loading,
                        'is--padding': padding
                    }]
            }, [
                h('div', {
                    class: 'vxe-layout-body--inner'
                }, defaultSlot ? defaultSlot({}) : []),
                /**
                 * 加载中
                 */
                h(VxeLoadingComponent, {
                    class: 'vxe-list-view--loading',
                    modelValue: loading
                })
            ]);
        };
        $xeLayoutBody.renderVN = renderVN;
        return $xeLayoutBody;
    },
    render() {
        return this.renderVN();
    }
});
