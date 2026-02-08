// Types
import type { CSSProperties, MaybeRefOrGetter, Ref } from 'vue';
export type ColorValue = string | false | null | undefined;
export interface TextColorData {
    textColorClasses: Ref<string[]>;
    textColorStyles: Ref<CSSProperties>;
}
export interface BackgroundColorData {
    backgroundColorClasses: Ref<string[]>;
    backgroundColorStyles: Ref<CSSProperties>;
}
// Composables
export declare function useColor(colors: MaybeRefOrGetter<{
    background?: ColorValue;
    text?: ColorValue;
}>): {
    colorClasses: Readonly<Ref<string[], string[]>>;
    colorStyles: Readonly<Ref<CSSProperties, CSSProperties>>;
};
export declare function useTextColor(color: MaybeRefOrGetter<ColorValue>): TextColorData;
export declare function useBackgroundColor(color: MaybeRefOrGetter<ColorValue>): BackgroundColorData;
export declare function computeColor(colors: MaybeRefOrGetter<{
    background?: ColorValue;
    text?: ColorValue;
}>): {
    class: string[];
    style: CSSProperties;
};
