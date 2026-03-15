import type { MiniMapNodeFunc, MiniMapSlots } from './types'

declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    {
      nodeColor: {
        type: import('vue').PropType<string | MiniMapNodeFunc>
      }
      nodeStrokeColor: {
        type: import('vue').PropType<string | MiniMapNodeFunc>
      }
      nodeClassName: {
        type: import('vue').PropType<string | MiniMapNodeFunc>
      }
      nodeBorderRadius: {
        type: import('vue').PropType<number>
      }
      nodeStrokeWidth: {
        type: import('vue').PropType<number>
      }
      maskColor: {
        type: import('vue').PropType<string>
      }
      maskStrokeColor: {
        type: import('vue').PropType<string>
      }
      maskStrokeWidth: {
        type: import('vue').PropType<number>
      }
      position: {
        type: import('vue').PropType<import('../../types').PanelPositionType>
      }
      pannable: {
        type: import('vue').PropType<boolean>
      }
      zoomable: {
        type: import('vue').PropType<boolean>
      }
      width: {
        type: import('vue').PropType<number>
      }
      height: {
        type: import('vue').PropType<number>
      }
      ariaLabel: {
        type: import('vue').PropType<string | null>
      }
      inversePan: {
        type: import('vue').PropType<boolean>
      }
      zoomStep: {
        type: import('vue').PropType<number>
      }
      offsetScale: {
        type: import('vue').PropType<number>
      }
      maskBorderRadius: {
        type: import('vue').PropType<number>
      }
    },
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      click: (params: {
        event: MouseEvent
        position: {
          x: number
          y: number
        }
      }) => void
      nodeClick: (params: import('../../types').NodeMouseEvent<import('../../types').Node>) => void
      nodeDblclick: (params: import('../../types').NodeMouseEvent<import('../../types').Node>) => void
      nodeMouseenter: (params: import('../../types').NodeMouseEvent<import('../../types').Node>) => void
      nodeMousemove: (params: import('../../types').NodeMouseEvent<import('../../types').Node>) => void
      nodeMouseleave: (params: import('../../types').NodeMouseEvent<import('../../types').Node>) => void
    },
    string,
    import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        nodeColor: {
          type: import('vue').PropType<string | MiniMapNodeFunc>
        }
        nodeStrokeColor: {
          type: import('vue').PropType<string | MiniMapNodeFunc>
        }
        nodeClassName: {
          type: import('vue').PropType<string | MiniMapNodeFunc>
        }
        nodeBorderRadius: {
          type: import('vue').PropType<number>
        }
        nodeStrokeWidth: {
          type: import('vue').PropType<number>
        }
        maskColor: {
          type: import('vue').PropType<string>
        }
        maskStrokeColor: {
          type: import('vue').PropType<string>
        }
        maskStrokeWidth: {
          type: import('vue').PropType<number>
        }
        position: {
          type: import('vue').PropType<import('../../types').PanelPositionType>
        }
        pannable: {
          type: import('vue').PropType<boolean>
        }
        zoomable: {
          type: import('vue').PropType<boolean>
        }
        width: {
          type: import('vue').PropType<number>
        }
        height: {
          type: import('vue').PropType<number>
        }
        ariaLabel: {
          type: import('vue').PropType<string | null>
        }
        inversePan: {
          type: import('vue').PropType<boolean>
        }
        zoomStep: {
          type: import('vue').PropType<number>
        }
        offsetScale: {
          type: import('vue').PropType<number>
        }
        maskBorderRadius: {
          type: import('vue').PropType<number>
        }
      }>
    > & {
      onClick?:
        | ((params: {
            event: MouseEvent
            position: {
              x: number
              y: number
            }
          }) => any)
        | undefined
      onNodeClick?: ((params: import('../../types').NodeMouseEvent<import('../../types').Node>) => any) | undefined
      onNodeDblclick?: ((params: import('../../types').NodeMouseEvent<import('../../types').Node>) => any) | undefined
      onNodeMouseenter?: ((params: import('../../types').NodeMouseEvent<import('../../types').Node>) => any) | undefined
      onNodeMousemove?: ((params: import('../../types').NodeMouseEvent<import('../../types').Node>) => any) | undefined
      onNodeMouseleave?: ((params: import('../../types').NodeMouseEvent<import('../../types').Node>) => any) | undefined
    },
    {},
    {}
  >,
  Readonly<MiniMapSlots>
>
export default _default
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S
  }
}
