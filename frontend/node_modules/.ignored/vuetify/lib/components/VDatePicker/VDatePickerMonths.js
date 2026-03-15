import { mergeProps as _mergeProps, createVNode as _createVNode, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VDatePickerMonths.css";

// Components
import { VBtn } from "../VBtn/index.js"; // Composables
import { useDate } from "../../composables/date/index.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, watchEffect } from 'vue';
import { convertToUnit, createRange, genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVDatePickerMonthsProps = propsFactory({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number,
  allowedMonths: [Array, Function]
}, 'VDatePickerMonths');
export const VDatePickerMonths = genericComponent()({
  name: 'VDatePickerMonths',
  props: makeVDatePickerMonthsProps(),
  emits: {
    'update:modelValue': date => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const model = useProxiedModel(props, 'modelValue');
    const months = computed(() => {
      let date = adapter.startOfYear(adapter.date());
      if (props.year) {
        date = adapter.setYear(date, props.year);
      }
      return createRange(12).map(i => {
        const text = adapter.format(date, 'monthShort');
        const label = adapter.format(date, 'month');
        const isDisabled = !!(!isMonthAllowed(i) || props.min && adapter.isAfter(adapter.startOfMonth(adapter.date(props.min)), date) || props.max && adapter.isAfter(date, adapter.startOfMonth(adapter.date(props.max))));
        date = adapter.getNextMonth(date);
        return {
          isDisabled,
          text,
          label,
          value: i
        };
      });
    });
    watchEffect(() => {
      model.value = model.value ?? adapter.getMonth(adapter.date());
    });
    function isMonthAllowed(month) {
      if (Array.isArray(props.allowedMonths) && props.allowedMonths.length) {
        return props.allowedMonths.includes(month);
      }
      if (typeof props.allowedMonths === 'function') {
        return props.allowedMonths(month);
      }
      return true;
    }
    useRender(() => _createElementVNode("div", {
      "class": "v-date-picker-months",
      "style": {
        height: convertToUnit(props.height)
      }
    }, [_createElementVNode("div", {
      "class": "v-date-picker-months__content"
    }, [months.value.map((month, i) => {
      const btnProps = {
        active: model.value === i,
        ariaLabel: month.label,
        color: model.value === i ? props.color : undefined,
        disabled: month.isDisabled,
        rounded: true,
        text: month.text,
        variant: model.value === month.value ? 'flat' : 'text',
        onClick: () => onClick(i)
      };
      function onClick(i) {
        if (model.value === i) {
          emit('update:modelValue', model.value);
          return;
        }
        model.value = i;
      }
      return slots.month?.({
        month,
        i,
        props: btnProps
      }) ?? _createVNode(VBtn, _mergeProps({
        "key": "month"
      }, btnProps), null);
    })])]));
    return {};
  }
});
//# sourceMappingURL=VDatePickerMonths.js.map