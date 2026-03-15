import { createVNode as _createVNode, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode } from "vue";
// Components
import { VDataTableColumn } from "./VDataTableColumn.js";
import { VBtn } from "../VBtn/index.js";
import { VCheckboxBtn } from "../VCheckbox/index.js"; // Composables
import { useGroupBy } from "./composables/group.js";
import { useHeaders } from "./composables/headers.js";
import { useSelection } from "./composables/select.js";
import { makeDensityProps } from "../../composables/density.js";
import { IconValue } from "../../composables/icons.js"; // Utilities
import { computed, toRef } from 'vue';
import { genericComponent, propsFactory } from "../../util/index.js"; // Types
export const makeVDataTableGroupHeaderRowProps = propsFactory({
  item: {
    type: Object,
    required: true
  },
  groupCollapseIcon: {
    type: IconValue,
    default: '$tableGroupCollapse'
  },
  groupExpandIcon: {
    type: IconValue,
    default: '$tableGroupExpand'
  },
  ...makeDensityProps()
}, 'VDataTableGroupHeaderRow');
export const VDataTableGroupHeaderRow = genericComponent()({
  name: 'VDataTableGroupHeaderRow',
  props: makeVDataTableGroupHeaderRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isGroupOpen,
      toggleGroup,
      extractRows
    } = useGroupBy();
    const {
      isSelected,
      isSomeSelected,
      select
    } = useSelection();
    const {
      columns
    } = useHeaders();
    const rows = computed(() => {
      return extractRows([props.item]);
    });
    const colspan = toRef(() => columns.value.length - (columns.value.some(c => c.key === 'data-table-select') ? 1 : 0));
    return () => _createElementVNode("tr", {
      "class": "v-data-table-group-header-row",
      "style": {
        '--v-data-table-group-header-row-depth': props.item.depth
      }
    }, [columns.value.map(column => {
      if (column.key === 'data-table-group') {
        const icon = isGroupOpen(props.item) ? props.groupCollapseIcon : props.groupExpandIcon;
        const onClick = () => toggleGroup(props.item);
        return slots['data-table-group']?.({
          item: props.item,
          count: rows.value.length,
          props: {
            icon,
            onClick
          }
        }) ?? _createVNode(VDataTableColumn, {
          "class": "v-data-table-group-header-row__column",
          "colspan": colspan.value
        }, {
          default: () => [_createVNode(VBtn, {
            "size": "small",
            "variant": "text",
            "icon": icon,
            "onClick": onClick
          }, null), _createElementVNode("span", null, [props.item.value]), _createElementVNode("span", null, [_createTextVNode("("), rows.value.length, _createTextVNode(")")])]
        });
      } else if (column.key === 'data-table-select') {
        const selectableRows = rows.value.filter(x => x.selectable);
        const modelValue = selectableRows.length > 0 && isSelected(selectableRows);
        const indeterminate = isSomeSelected(selectableRows) && !modelValue;
        const selectGroup = v => select(selectableRows, v);
        return slots['data-table-select']?.({
          props: {
            modelValue,
            indeterminate,
            'onUpdate:modelValue': selectGroup
          }
        }) ?? _createVNode(VDataTableColumn, {
          "class": "v-data-table__td--select-row",
          "noPadding": true
        }, {
          default: () => [_createVNode(VCheckboxBtn, {
            "density": props.density,
            "disabled": selectableRows.length === 0,
            "modelValue": modelValue,
            "indeterminate": indeterminate,
            "onUpdate:modelValue": selectGroup
          }, null)]
        });
      }
      return '';
    })]);
  }
});
//# sourceMappingURL=VDataTableGroupHeaderRow.js.map