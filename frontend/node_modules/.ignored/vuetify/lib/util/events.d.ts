type EventHandler = (event: Event) => any;
export declare function getPrefixedEventHandlers<T extends `:${string}`>(attrs: Record<string, any>, suffix: T, getData: EventHandler): Record<`${string}${T}`, EventHandler>;

