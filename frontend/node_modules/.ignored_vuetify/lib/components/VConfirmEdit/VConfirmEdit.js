import { Fragment as _Fragment, mergeProps as _mergeProps, createVNode as _createVNode, createElementVNode as _createElementVNode } from "vue";
// Components
import { VBtn } from "../VBtn/index.js"; // Composables
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, ref, watchEffect } from 'vue';
import { deepEqual, deepToRaw, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVConfirmEditProps = propsFactory({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: '$vuetify.confirmEdit.cancel'
  },
  okText: {
    type: String,
    default: '$vuetify.confirmEdit.ok'
  },
  disabled: {
    type: [Boolean, Array],
    default: undefined
  },
  hideActions: Boolean
}, 'VConfirmEdit');
export const VConfirmEdit = genericComponent()({
  name: 'VConfirmEdit',
  props: makeVConfirmEditProps(),
  emits: {
    cancel: () => true,
    save: value => true,
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const internalModel = ref();
    watchEffect(() => {
      internalModel.value = structuredClone(deepToRaw(model.value));
    });
    const {
      t
    } = useLocale();
    const isPristine = computed(() => {
      return deepEqual(model.value, internalModel.value);
    });
    function isActionDisabled(action) {
      if (typeof props.disabled === 'boolean') {
        return props.disabled;
      }
      if (Array.isArray(props.disabled)) {
        return props.disabled.includes(action);
      }
      return isPristine.value;
    }
    const isSaveDisabled = computed(() => isActionDisabled('save'));
    const isCancelDisabled = computed(() => isActionDisabled('cancel'));
    function save() {
      model.value = internalModel.value;
      emit('save', internalModel.value);
    }
    function cancel() {
      internalModel.value = structuredClone(deepToRaw(model.value));
      emit('cancel');
    }
    function actions(actionsProps) {
      return _createElementVNode(_Fragment, null, [_createVNode(VBtn, _mergeProps({
        "disabled": isCancelDisabled.value,
        "variant": "text",
        "color": props.color,
        "onClick": cancel,
        "text": t(props.cancelText)
      }, actionsProps), null), _createVNode(VBtn, _mergeProps({
        "disabled": isSaveDisabled.value,
        "variant": "text",
        "color": props.color,
        "onClick": save,
        "text": t(props.okText)
      }, actionsProps), null)]);
    }
    let actionsUsed = false;
    useRender(() => {
      return _createElementVNode(_Fragment, null, [slots.default?.({
        model: internalModel,
        save,
        cancel,
        isPristine: isPristine.value,
        get actions() {
          actionsUsed = true;
          return actions;
        }
      }), !props.hideActions && !actionsUsed && actions()]);
    });
    return {
      save,
      cancel,
      isPristine
    };
  }
});
//# sourceMappingURL=VConfirmEdit.js.map