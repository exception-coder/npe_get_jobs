declare module 'vue' {
  export interface GlobalComponents {
    VxeTable: (typeof import('vxe-table'))['VxeTable'];
    VxeColumn: (typeof import('vxe-table'))['VxeColumn'];
  }
}

export {};

