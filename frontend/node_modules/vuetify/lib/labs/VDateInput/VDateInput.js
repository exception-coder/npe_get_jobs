import { Fragment as _Fragment, mergeProps as _mergeProps, createVNode as _createVNode, createElementVNode as _createElementVNode } from "vue";
// Components
import { makeVConfirmEditProps, VConfirmEdit } from "../../components/VConfirmEdit/VConfirmEdit.js";
import { makeVDatePickerProps, VDatePicker } from "../../components/VDatePicker/VDatePicker.js";
import { VMenu } from "../../components/VMenu/VMenu.js";
import { makeVTextFieldProps, VTextField } from "../../components/VTextField/VTextField.js"; // Composables
import { useCalendarRange } from "../../composables/calendar.js";
import { useDate } from "../../composables/date/index.js";
import { createDateRange } from "../../composables/date/date.js";
import { makeDateFormatProps, useDateFormat } from "../../composables/dateFormat.js";
import { makeDisplayProps, useDisplay } from "../../composables/display.js";
import { makeFocusProps } from "../../composables/focus.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, ref, shallowRef, watch } from 'vue';
import { genericComponent, omit, pick, propsFactory, useRender, wrapInArray } from "../../util/index.js"; // Types
// Types
export const makeVDateInputProps = propsFactory({
  displayFormat: {
    type: [Function, String],
    default: undefined
  },
  location: {
    type: String,
    default: 'bottom start'
  },
  menu: Boolean,
  updateOn: {
    type: Array,
    default: () => ['blur', 'enter']
  },
  ...makeDateFormatProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeFocusProps(),
  ...makeVConfirmEditProps({
    hideActions: true
  }),
  ...makeVTextFieldProps({
    prependIcon: '$calendar'
  }),
  ...omit(makeVDatePickerProps({
    hideHeader: true,
    showAdjacentMonths: true
  }), ['active', 'location', 'rounded', 'height', 'minHeight', 'maxHeight'])
}, 'VDateInput');
export const VDateInput = genericComponent()({
  name: 'VDateInput',
  props: makeVDateInputProps(),
  emits: {
    save: value => true,
    cancel: () => true,
    'update:focused': val => true,
    'update:modelValue': val => true,
    'update:menu': val => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t,
      current: currentLocale
    } = useLocale();
    const adapter = useDate();
    const {
      isValid,
      parseDate,
      formatDate,
      parserFormat
    } = useDateFormat(props, currentLocale);
    const {
      mobile
    } = useDisplay(props);
    const {
      clampDate,
      isInAllowedRange
    } = useCalendarRange(props);
    const emptyModelValue = () => props.multiple ? [] : null;
    const model = useProxiedModel(props, 'modelValue', emptyModelValue(), val => Array.isArray(val) ? val.map(item => adapter.toJsDate(item)) : val ? adapter.toJsDate(val) : val, val => Array.isArray(val) ? val.map(item => adapter.date(item)) : val ? adapter.date(val) : val);
    const menu = useProxiedModel(props, 'menu');
    const isEditingInput = shallowRef(false);
    const isFocused = shallowRef(props.focused);
    const vTextFieldRef = ref();
    const disabledActions = ref(['save']);
    function format(date) {
      if (typeof props.displayFormat === 'function') {
        return props.displayFormat(date);
      }
      if (props.displayFormat) {
        return adapter.format(date, props.displayFormat ?? 'keyboardDate');
      }
      return formatDate(date);
    }
    const display = computed(() => {
      const value = wrapInArray(model.value);
      if (!value.length) return null;
      if (props.multiple === true) {
        return t('$vuetify.datePicker.itemsSelected', value.length);
      }
      if (props.multiple === 'range') {
        const start = value[0];
        const end = value[value.length - 1];
        if (!adapter.isValid(start) || !adapter.isValid(end)) return '';
        return `${format(adapter.date(start))} - ${format(adapter.date(end))}`;
      }
      return adapter.isValid(model.value) ? format(adapter.date(model.value)) : '';
    });
    const inputmode = computed(() => {
      if (!mobile.value) return undefined;
      if (isEditingInput.value) return 'text';
      return 'none';
    });
    const isInteractive = computed(() => !props.disabled && !props.readonly);
    const isReadonly = computed(() => {
      if (!props.updateOn.length) return true;
      return !(mobile.value && isEditingInput.value) && props.readonly;
    });
    watch(menu, val => {
      if (val) return;
      isEditingInput.value = false;
      disabledActions.value = ['save'];
    });
    function onKeydown(e) {
      if (e.key !== 'Enter') return;
      if (!menu.value || !isFocused.value) {
        menu.value = true;
      }
      if (props.updateOn.includes('enter') && !props.readonly) {
        onUserInput(e.target);
      }
    }
    function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      if (menu.value && mobile.value) {
        isEditingInput.value = true;
      } else {
        menu.value = true;
      }
    }
    function onCancel() {
      emit('cancel');
      menu.value = false;
      isEditingInput.value = false;
    }
    function onSave(value) {
      emit('save', value);
      menu.value = false;
    }
    function onUpdateDisplayModel(value) {
      if (value != null) return;
      model.value = emptyModelValue();
    }
    function onBlur(e) {
      if (props.updateOn.includes('blur') && !props.readonly) {
        onUserInput(e.target);
      }

      // When in mobile mode and editing is done (due to keyboard dismissal), close the menu
      if (mobile.value && isEditingInput.value && !isFocused.value) {
        menu.value = false;
        isEditingInput.value = false;
      }
    }
    function onUserInput(_ref2) {
      let {
        value
      } = _ref2;
      if (!value.trim()) {
        model.value = emptyModelValue();
      } else if (!props.multiple) {
        if (isValid(value)) {
          model.value = clampDate(parseDate(value));
        }
      } else {
        const parts = value.trim().split(/\D+-\D+|[^\d\-/.]+/);
        if (parts.every(isValid)) {
          if (props.multiple === 'range') {
            const [start, stop] = parts.map(parseDate).map(clampDate).toSorted((a, b) => adapter.isAfter(a, b) ? 1 : -1);
            model.value = createDateRange(adapter, start, stop);
          } else {
            model.value = parts.map(parseDate).filter(isInAllowedRange);
          }
        }
      }
    }
    useRender(() => {
      const confirmEditProps = VConfirmEdit.filterProps(props);
      const datePickerProps = VDatePicker.filterProps(omit(props, ['active', 'bgColor', 'color', 'location', 'rounded', 'maxWidth', 'minWidth', 'width']));
      const datePickerSlots = pick(slots, ['title', 'header', 'day', 'month', 'year']);
      const textFieldProps = VTextField.filterProps(omit(props, ['placeholder']));
      return _createVNode(VTextField, _mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "class": props.class,
        "style": props.style,
        "modelValue": display.value,
        "inputmode": inputmode.value,
        "placeholder": props.placeholder ?? parserFormat.value,
        "readonly": isReadonly.value,
        "onKeydown": isInteractive.value ? onKeydown : undefined,
        "focused": menu.value || isFocused.value,
        "onBlur": onBlur,
        "validationValue": model.value,
        "onClick:control": isInteractive.value ? onClick : undefined,
        "onClick:prepend": isInteractive.value ? onClick : undefined,
        "onUpdate:modelValue": onUpdateDisplayModel,
        "onUpdate:focused": event => isFocused.value = event
      }), {
        ...slots,
        default: () => _createElementVNode(_Fragment, null, [_createVNode(VMenu, {
          "modelValue": menu.value,
          "onUpdate:modelValue": $event => menu.value = $event,
          "activator": "parent",
          "minWidth": "0",
          "eager": isFocused.value,
          "location": props.location,
          "closeOnContentClick": false,
          "openOnClick": false
        }, {
          default: () => [_createVNode(VConfirmEdit, _mergeProps(confirmEditProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "disabled": disabledActions.value,
            "onSave": onSave,
            "onCancel": onCancel
          }), {
            default: _ref3 => {
              let {
                actions,
                model: proxyModel,
                save,
                cancel,
                isPristine
              } = _ref3;
              function onUpdateModel(value) {
                if (!props.hideActions) {
                  proxyModel.value = value;
                } else {
                  model.value = value;
                  if (!props.multiple) {
                    menu.value = false;
                  }
                }
                emit('save', value);
                disabledActions.value = [];
              }
              return _createVNode(VDatePicker, _mergeProps(datePickerProps, {
                "modelValue": props.hideActions ? model.value : proxyModel.value,
                "onUpdate:modelValue": value => onUpdateModel(value),
                "onMousedown": e => e.preventDefault()
              }), {
                ...datePickerSlots,
                actions: !props.hideActions ? () => slots.actions?.({
                  save,
                  cancel,
                  isPristine
                }) ?? actions() : undefined
              });
            }
          })]
        }), slots.default?.()])
      });
    });
    return forwardRefs({}, vTextFieldRef);
  }
});
//# sourceMappingURL=VDateInput.js.map