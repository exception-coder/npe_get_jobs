import { IParagraph, ISectionBreak, SpacingRule } from '@univerjs/core';
export declare const useCurrentParagraph: () => import('@univerjs/core').IParagraphRange[];
export declare const useCurrentSections: (currentParagraphs: IParagraph[]) => ISectionBreak[];
export declare const useFirstParagraphHorizontalAlign: (paragraph: IParagraph[], defaultValue: string) => readonly [string, (v: string) => Promise<boolean>];
export declare const useFirstParagraphIndentStart: (paragraph: IParagraph[]) => readonly [number, (v: number) => Promise<boolean>];
export declare const useFirstParagraphIndentEnd: (paragraph: IParagraph[]) => readonly [number, (v: number) => Promise<boolean>];
export declare const useFirstParagraphIndentFirstLine: (paragraph: IParagraph[]) => readonly [number, (v: number) => Promise<boolean>];
export declare const useFirstParagraphIndentHanging: (paragraph: IParagraph[]) => readonly [number, (v: number) => Promise<boolean>];
export declare const useFirstParagraphIndentSpaceAbove: (paragraph: IParagraph[]) => readonly [number, (v: number) => Promise<boolean>];
export declare const useFirstParagraphSpaceBelow: (paragraph: IParagraph[]) => readonly [number, (v: number) => Promise<boolean>];
export declare const useFirstParagraphLineSpacing: (paragraph: IParagraph[]) => {
    lineSpacing: readonly [number, (v: number) => Promise<void>];
    spacingRule: readonly [SpacingRule, (v: SpacingRule) => Promise<void>];
};
