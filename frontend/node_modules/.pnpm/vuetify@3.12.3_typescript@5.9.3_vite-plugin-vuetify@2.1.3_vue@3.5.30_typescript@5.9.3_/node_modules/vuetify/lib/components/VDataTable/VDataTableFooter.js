import { createElementVNode as _createElementVNode, createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VDataTableFooter.css";

// Components
import { VPagination } from "../VPagination/index.js";
import { VSelect } from "../VSelect/index.js"; // Composables
import { usePagination } from "./composables/paginate.js";
import { IconValue } from "../../composables/icons.js";
import { useLocale } from "../../composables/locale.js"; // Utilities
import { computed } from 'vue';
import { genericComponent, omit, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVDataTableFooterProps = propsFactory({
  color: String,
  prevIcon: {
    type: IconValue,
    default: '$prev'
  },
  nextIcon: {
    type: IconValue,
    default: '$next'
  },
  firstIcon: {
    type: IconValue,
    default: '$first'
  },
  lastIcon: {
    type: IconValue,
    default: '$last'
  },
  itemsPerPageText: {
    type: String,
    default: '$vuetify.dataFooter.itemsPerPageText'
  },
  pageText: {
    type: String,
    default: '$vuetify.dataFooter.pageText'
  },
  firstPageLabel: {
    type: String,
    default: '$vuetify.dataFooter.firstPage'
  },
  prevPageLabel: {
    type: String,
    default: '$vuetify.dataFooter.prevPage'
  },
  nextPageLabel: {
    type: String,
    default: '$vuetify.dataFooter.nextPage'
  },
  lastPageLabel: {
    type: String,
    default: '$vuetify.dataFooter.lastPage'
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: '10'
    }, {
      value: 25,
      title: '25'
    }, {
      value: 50,
      title: '50'
    }, {
      value: 100,
      title: '100'
    }, {
      value: -1,
      title: '$vuetify.dataFooter.itemsPerPageAll'
    }]
  },
  showCurrentPage: Boolean
}, 'VDataTableFooter');
export const VDataTableFooter = genericComponent()({
  name: 'VDataTableFooter',
  props: makeVDataTableFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      page,
      pageCount,
      startIndex,
      stopIndex,
      itemsLength,
      itemsPerPage,
      setItemsPerPage
    } = usePagination();
    const itemsPerPageOptions = computed(() => props.itemsPerPageOptions.map(option => {
      if (typeof option === 'number') {
        return {
          value: option,
          title: option === -1 ? t('$vuetify.dataFooter.itemsPerPageAll') : String(option)
        };
      }
      return {
        ...option,
        title: !isNaN(Number(option.title)) ? option.title : t(option.title)
      };
    }));
    useRender(() => {
      const paginationProps = VPagination.filterProps(props);
      return _createElementVNode("div", {
        "class": "v-data-table-footer"
      }, [slots.prepend?.(), _createElementVNode("div", {
        "class": "v-data-table-footer__items-per-page"
      }, [_createElementVNode("span", null, [t(props.itemsPerPageText)]), _createVNode(VSelect, {
        "items": itemsPerPageOptions.value,
        "itemColor": props.color,
        "modelValue": itemsPerPage.value,
        "onUpdate:modelValue": v => setItemsPerPage(Number(v)),
        "density": "compact",
        "variant": "outlined",
        "aria-label": t(props.itemsPerPageText),
        "hideDetails": true
      }, null)]), _createElementVNode("div", {
        "class": "v-data-table-footer__info"
      }, [_createElementVNode("div", null, [t(props.pageText, !itemsLength.value ? 0 : startIndex.value + 1, stopIndex.value, itemsLength.value)])]), _createElementVNode("div", {
        "class": "v-data-table-footer__pagination"
      }, [_createVNode(VPagination, _mergeProps({
        "modelValue": page.value,
        "onUpdate:modelValue": $event => page.value = $event,
        "density": "comfortable",
        "firstAriaLabel": props.firstPageLabel,
        "lastAriaLabel": props.lastPageLabel,
        "length": pageCount.value,
        "nextAriaLabel": props.nextPageLabel,
        "previousAriaLabel": props.prevPageLabel,
        "rounded": true,
        "showFirstLastPage": true,
        "totalVisible": props.showCurrentPage ? 1 : 0,
        "variant": "plain"
      }, omit(paginationProps, ['color'])), null)])]);
    });
    return {};
  }
});
//# sourceMappingURL=VDataTableFooter.js.map