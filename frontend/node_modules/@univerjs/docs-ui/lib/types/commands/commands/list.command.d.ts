import { ICommand, IParagraph, IParagraphRange, ISectionBreak, PresetListType } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
interface IListOperationCommandParams {
    listType: PresetListType;
    docRange?: ITextRangeWithStyle[];
}
export declare const ListOperationCommand: ICommand<IListOperationCommandParams>;
interface IChangeListTypeCommandParams {
    listType: PresetListType;
    docRange?: ITextRangeWithStyle[];
}
export declare const ChangeListTypeCommand: ICommand<IChangeListTypeCommandParams>;
export declare enum ChangeListNestingLevelType {
    increase = 1,
    decrease = -1
}
interface IChangeListNestingLevelCommandParams {
    type: ChangeListNestingLevelType;
}
export declare const ChangeListNestingLevelCommand: ICommand<IChangeListNestingLevelCommandParams>;
interface IBulletListCommandParams {
    value?: PresetListType;
    docRange?: ITextRangeWithStyle[];
}
export declare const BulletListCommand: ICommand<IBulletListCommandParams>;
export declare const CheckListCommand: ICommand<IBulletListCommandParams>;
export interface IToggleCheckListCommandParams {
    index: number;
    segmentId?: string;
    textRanges?: ITextRangeWithStyle[];
}
export declare const ToggleCheckListCommand: ICommand<IToggleCheckListCommandParams>;
interface IOrderListCommandParams {
    value?: PresetListType;
}
export declare const OrderListCommand: ICommand<IOrderListCommandParams>;
interface IQuickListCommandParams {
    listType: PresetListType;
    paragraph: IParagraphRange;
}
export declare const QuickListCommand: ICommand<IQuickListCommandParams>;
export declare const InsertBulletListBellowCommand: ICommand<IQuickListCommandParams>;
export declare const InsertOrderListBellowCommand: ICommand<IQuickListCommandParams>;
export declare const InsertCheckListBellowCommand: ICommand<IQuickListCommandParams>;
export declare function getParagraphsRelative(ranges: ITextRangeWithStyle[], paragraphs: IParagraph[], dataStream: string): IParagraph[];
export declare function findNearestSectionBreak(currentIndex: number, sectionBreaks: ISectionBreak[]): ISectionBreak | undefined;
export {};
