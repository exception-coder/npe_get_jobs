import { createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, mergeProps as _mergeProps, Fragment as _Fragment } from "vue";
// Components
import { VDataTableColumn } from "./VDataTableColumn.js";
import { VCheckboxBtn } from "../VCheckbox/index.js";
import { VChip } from "../VChip/index.js";
import { VIcon } from "../VIcon/index.js";
import { VSelect } from "../VSelect/index.js"; // Composables
import { useHeaders } from "./composables/headers.js";
import { useSelection } from "./composables/select.js";
import { useSort } from "./composables/sort.js";
import { useBackgroundColor } from "../../composables/color.js";
import { makeDensityProps } from "../../composables/density.js";
import { makeDisplayProps, useDisplay } from "../../composables/display.js";
import { IconValue } from "../../composables/icons.js";
import { LoaderSlot, makeLoaderProps, useLoader } from "../../composables/loader.js";
import { useLocale } from "../../composables/locale.js"; // Utilities
import { computed, mergeProps, nextTick } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender, wrapInArray } from "../../util/index.js"; // Types
export const makeVDataTableHeadersProps = propsFactory({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  initialSortOrder: String,
  sortIcon: {
    type: IconValue
    // default: '$sort', // maybe in v4
  },
  sortAscIcon: {
    type: IconValue,
    default: '$sortAsc'
  },
  sortDescIcon: {
    type: IconValue,
    default: '$sortDesc'
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...makeDensityProps(),
  ...makeDisplayProps(),
  ...makeLoaderProps()
}, 'VDataTableHeaders');
export const VDataTableHeaders = genericComponent()({
  name: 'VDataTableHeaders',
  props: makeVDataTableHeadersProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      someSelected,
      allSelected,
      selectAll,
      showSelectAll
    } = useSelection();
    const {
      columns,
      headers
    } = useHeaders();
    const {
      loaderClasses
    } = useLoader(props);
    function getFixedStyles(column, y) {
      if (!(props.sticky || props.fixedHeader) && !column.fixed) return undefined;
      const fixedSide = typeof column.fixed === 'string' ? column.fixed : column.fixed ? 'start' : 'none';
      return {
        position: 'sticky',
        left: fixedSide === 'start' ? convertToUnit(column.fixedOffset) : undefined,
        right: fixedSide === 'end' ? convertToUnit(column.fixedEndOffset) : undefined,
        top: props.sticky || props.fixedHeader ? `calc(var(--v-table-header-height) * ${y})` : undefined
      };
    }
    function handleEnterKeyPress(event, column) {
      if (event.key === 'Enter' && !props.disableSort) {
        toggleSort(column, event);
      }
    }
    function getSortIcon(column) {
      const item = sortBy.value.find(item => item.key === column.key);
      switch (item?.order) {
        case 'asc':
          return props.sortAscIcon;
        case 'desc':
          return props.sortDescIcon;
        default:
          return props.sortIcon || (props.initialSortOrder === 'asc' ? props.sortAscIcon : props.sortDescIcon);
      }
    }
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const slotProps = computed(() => ({
      headers: headers.value,
      columns: columns.value,
      toggleSort,
      isSorted,
      sortBy: sortBy.value,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      selectAll,
      getSortIcon
    }));
    const headerCellClasses = computed(() => ['v-data-table__th', {
      'v-data-table__th--sticky': props.sticky || props.fixedHeader
    }, displayClasses.value, loaderClasses.value]);
    const VDataTableHeaderCell = _ref2 => {
      let {
        column,
        x,
        y
      } = _ref2;
      const noPadding = column.key === 'data-table-select' || column.key === 'data-table-expand';
      const isEmpty = column.key === 'data-table-group' && column.width === 0 && !column.title;
      const headerProps = mergeProps(props.headerProps ?? {}, column.headerProps ?? {});
      return _createVNode(VDataTableColumn, _mergeProps({
        "tag": "th",
        "align": column.align,
        "class": [{
          'v-data-table__th--sortable': column.sortable && !props.disableSort,
          'v-data-table__th--sorted': isSorted(column),
          'v-data-table__th--fixed': column.fixed
        }, ...headerCellClasses.value],
        "style": {
          width: convertToUnit(column.width),
          minWidth: convertToUnit(column.minWidth),
          maxWidth: convertToUnit(column.maxWidth),
          ...getFixedStyles(column, y)
        },
        "colspan": column.colspan,
        "rowspan": column.rowspan,
        "fixed": column.fixed,
        "nowrap": column.nowrap,
        "lastFixed": column.lastFixed,
        "firstFixedEnd": column.firstFixedEnd,
        "noPadding": noPadding,
        "empty": isEmpty,
        "tabindex": column.sortable ? 0 : undefined,
        "onClick": column.sortable ? event => toggleSort(column, event) : undefined,
        "onKeydown": column.sortable ? event => handleEnterKeyPress(event, column) : undefined
      }, headerProps), {
        default: () => {
          const columnSlotName = `header.${column.key}`;
          const columnSlotProps = {
            column,
            selectAll,
            isSorted,
            toggleSort,
            sortBy: sortBy.value,
            someSelected: someSelected.value,
            allSelected: allSelected.value,
            getSortIcon
          };
          if (slots[columnSlotName]) return slots[columnSlotName](columnSlotProps);
          if (isEmpty) return '';
          if (column.key === 'data-table-select') {
            return slots['header.data-table-select']?.(columnSlotProps) ?? (showSelectAll.value && _createVNode(VCheckboxBtn, {
              "color": props.color,
              "density": props.density,
              "modelValue": allSelected.value,
              "indeterminate": someSelected.value && !allSelected.value,
              "onUpdate:modelValue": selectAll
            }, null));
          }
          return _createElementVNode("div", {
            "class": "v-data-table-header__content"
          }, [_createElementVNode("span", null, [column.title]), column.sortable && !props.disableSort && _createVNode(VIcon, {
            "key": "icon",
            "class": "v-data-table-header__sort-icon",
            "icon": getSortIcon(column)
          }, null), props.multiSort && isSorted(column) && _createElementVNode("div", {
            "key": "badge",
            "class": _normalizeClass(['v-data-table-header__sort-badge', ...backgroundColorClasses.value]),
            "style": _normalizeStyle(backgroundColorStyles.value)
          }, [sortBy.value.findIndex(x => x.key === column.key) + 1])]);
        }
      });
    };
    const VDataTableMobileHeaderCell = () => {
      const sortableColumns = computed(() => {
        return columns.value.filter(column => column?.sortable && !props.disableSort);
      });
      const showSelectColumn = columns.value.find(column => column.key === 'data-table-select');
      const sortingChips = computed({
        get: () => sortableColumns.value.filter(_ref3 => {
          let {
            key
          } = _ref3;
          return sortBy.value.some(v => v.key === key);
        }),
        set: val => {
          const sortedColumns = wrapInArray(val);
          const activeSortKeys = sortBy.value.map(v => v.key);
          const newColumnsToSort = sortedColumns.filter(_ref4 => {
            let {
              key
            } = _ref4;
            return !activeSortKeys.includes(key);
          });
          newColumnsToSort.forEach(column => toggleSort(column));
          // sortBy is proxied model, needs nextTick after toggleSort
          nextTick(() => sortBy.value = sortBy.value.filter(_ref5 => {
            let {
              key
            } = _ref5;
            return sortedColumns.some(c => c.key === key);
          }));
        }
      });
      return _createVNode(VDataTableColumn, _mergeProps({
        "tag": "th",
        "class": [...headerCellClasses.value],
        "colspan": headers.value.length + 1
      }, props.headerProps), {
        default: () => [_createElementVNode("div", {
          "class": "v-data-table-header__content"
        }, [_createVNode(VSelect, {
          "modelValue": sortingChips.value,
          "onUpdate:modelValue": $event => sortingChips.value = $event,
          "chips": true,
          "color": props.color,
          "class": "v-data-table__td-sort-select",
          "clearable": true,
          "density": "default",
          "items": sortableColumns.value,
          "label": t('$vuetify.dataTable.sortBy'),
          "multiple": props.multiSort,
          "variant": "underlined",
          "returnObject": true,
          "onClick:clear": () => sortBy.value = []
        }, {
          append: showSelectColumn ? () => _createVNode(VCheckboxBtn, {
            "color": props.color,
            "density": "compact",
            "modelValue": allSelected.value,
            "indeterminate": someSelected.value && !allSelected.value,
            "onUpdate:modelValue": () => selectAll(!allSelected.value)
          }, null) : undefined,
          chip: _ref6 => {
            let {
              item
            } = _ref6;
            return _createVNode(VChip, {
              "onClick": item.raw.sortable ? () => toggleSort(item.raw, undefined, true) : undefined,
              "onMousedown": e => {
                e.preventDefault();
                e.stopPropagation();
              }
            }, {
              default: () => [item.title, _createVNode(VIcon, {
                "class": _normalizeClass(['v-data-table__td-sort-icon', isSorted(item.raw) && 'v-data-table__td-sort-icon-active']),
                "icon": getSortIcon(item.raw),
                "size": "small"
              }, null)]
            });
          }
        })])]
      });
    };
    useRender(() => {
      return mobile.value ? _createElementVNode("tr", null, [_createVNode(VDataTableMobileHeaderCell, null, null)]) : _createElementVNode(_Fragment, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => _createElementVNode("tr", null, [row.map((column, x) => _createVNode(VDataTableHeaderCell, {
        "column": column,
        "x": x,
        "y": y
      }, null))])), props.loading && _createElementVNode("tr", {
        "class": "v-data-table-progress"
      }, [_createElementVNode("th", {
        "colspan": columns.value.length
      }, [_createVNode(LoaderSlot, {
        "name": "v-data-table-progress",
        "absolute": true,
        "active": true,
        "color": typeof props.loading === 'boolean' || props.loading === 'true' ? props.color : props.loading,
        "indeterminate": true
      }, {
        default: slots.loader
      })])])]);
    });
  }
});
//# sourceMappingURL=VDataTableHeaders.js.map