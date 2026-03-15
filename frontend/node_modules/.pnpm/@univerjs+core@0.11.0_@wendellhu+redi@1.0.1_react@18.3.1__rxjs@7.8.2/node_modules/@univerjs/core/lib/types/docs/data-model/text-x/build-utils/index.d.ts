import { addCustomDecorationTextX, deleteCustomDecorationTextX } from './custom-decoration';
import { copyCustomRange, getCustomRangesInterestsWithSelection, isIntersecting } from './custom-range';
import { getParagraphsInRange, getParagraphsInRanges, isSegmentIntersects, makeSelection, normalizeSelection, transformParagraphs } from './selection';
import { addCustomRangeTextX, deleteCustomRangeTextX, deleteSelectionTextX, retainSelectionTextX } from './text-x-utils';
export declare class BuildTextUtils {
    static customRange: {
        add: typeof addCustomRangeTextX;
        delete: typeof deleteCustomRangeTextX;
        copyCustomRange: typeof copyCustomRange;
        getCustomRangesInterestsWithSelection: typeof getCustomRangesInterestsWithSelection;
        isIntersecting: typeof isIntersecting;
    };
    static customDecoration: {
        add: typeof addCustomDecorationTextX;
        delete: typeof deleteCustomDecorationTextX;
    };
    static selection: {
        replace: (params: import('./text-x-utils').IReplaceSelectionTextXParams) => false | import('../text-x').TextX;
        makeSelection: typeof makeSelection;
        normalizeSelection: typeof normalizeSelection;
        delete: typeof deleteSelectionTextX;
        replaceTextRuns: (params: import('./text-x-utils').IReplaceSelectionTextRunsParams) => false | import('../text-x').TextX;
        retain: typeof retainSelectionTextX;
    };
    static range: {
        isIntersects: typeof isSegmentIntersects;
        getParagraphsInRange: typeof getParagraphsInRange;
        getParagraphsInRanges: typeof getParagraphsInRanges;
    };
    static transform: {
        getPlainText: (dataStream: string) => string;
        fromPlainText: (text: string) => import('../../../..').IDocumentBody;
        isEmptyDocument: (dataStream?: string) => boolean;
    };
    static paragraph: {
        bullet: {
            set: (params: import('./paragraph').ISetParagraphBulletParams) => false | import('../text-x').TextX;
            switch: (params: import('./paragraph').ISwitchParagraphBulletParams) => import('../text-x').TextX;
            toggleChecklist: (params: import('./paragraph').IToggleChecklistParagraphParams) => false | import('../text-x').TextX;
            changeNestLevel: (params: import('./paragraph').IChangeParagraphBulletNestLevelParams) => import('../text-x').TextX;
        };
        style: {
            set: (params: import('./paragraph').ISetParagraphStyleParams) => import('../text-x').TextX;
        };
        util: {
            transform: typeof transformParagraphs;
            getParagraphsInRange: typeof getParagraphsInRange;
            getParagraphsInRanges: typeof getParagraphsInRanges;
        };
    };
    static drawing: {
        add: (param: import('./drawings').IAddDrawingParam) => false | import('ot-json1').JSONOp;
    };
}
export type { IAddCustomRangeTextXParam, IDeleteCustomRangeParam, IReplaceSelectionTextXParams } from './text-x-utils';
