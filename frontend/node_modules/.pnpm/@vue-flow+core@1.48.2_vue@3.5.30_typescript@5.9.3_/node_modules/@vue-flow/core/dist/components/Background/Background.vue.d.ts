declare const _default: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    {
      id: {
        type: import('vue').PropType<string>
      }
      x: {
        type: import('vue').PropType<number>
        default: number
      }
      y: {
        type: import('vue').PropType<number>
        default: number
      }
      color: {
        type: import('vue').PropType<string>
      }
      size: {
        type: import('vue').PropType<number>
        default: number
      }
      offset: {
        type: import('vue').PropType<number | [number, number]>
        default: number
      }
      gap: {
        type: import('vue').PropType<number | number[]>
        default: number
      }
      variant: {
        type: import('vue').PropType<import('./types').BackgroundVariant>
        default: string
      }
      lineWidth: {
        type: import('vue').PropType<number>
        default: number
      }
    },
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        id: {
          type: import('vue').PropType<string>
        }
        x: {
          type: import('vue').PropType<number>
          default: number
        }
        y: {
          type: import('vue').PropType<number>
          default: number
        }
        color: {
          type: import('vue').PropType<string>
        }
        size: {
          type: import('vue').PropType<number>
          default: number
        }
        offset: {
          type: import('vue').PropType<number | [number, number]>
          default: number
        }
        gap: {
          type: import('vue').PropType<number | number[]>
          default: number
        }
        variant: {
          type: import('vue').PropType<import('./types').BackgroundVariant>
          default: string
        }
        lineWidth: {
          type: import('vue').PropType<number>
          default: number
        }
      }>
    >,
    {
      x: number
      y: number
      size: number
      offset: number | [number, number]
      gap: number | number[]
      variant: import('./types').BackgroundVariant
      lineWidth: number
    },
    {}
  >,
  {
    'pattern-container'?(_: { id: string }): any
    pattern?(_: {}): any
    default?(_: { id: string }): any
  }
>
export default _default
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S
  }
}
