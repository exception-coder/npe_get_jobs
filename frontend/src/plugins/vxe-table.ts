import type { App } from 'vue';
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';

const VIRTUAL_SCROLL_THRESHOLD = 200;

export const installVXETable = (app: App): void => {
  app.use(VXETable);
  VXETable.setup({
    table: {
      border: true,
      stripe: true,
      round: true,
      size: 'small',
      autoResize: true,
      showOverflow: 'tooltip',
      showHeaderOverflow: 'tooltip',
      scrollY: {
        gt: VIRTUAL_SCROLL_THRESHOLD,
      },
    },
    column: {
      resizable: true,
    },
    grid: {
      border: true,
      stripe: true,
      round: true,
    },
    toolbar: {
      perfect: true,
    },
  });
};

