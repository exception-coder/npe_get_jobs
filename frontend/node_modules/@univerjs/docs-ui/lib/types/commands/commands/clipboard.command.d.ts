import { IAccessor, IContextService, IMultiCommand, CommandType } from '@univerjs/core';
export declare function whenDocOrEditor(contextService: IContextService): boolean;
export declare function whenFocusEditor(contextService: IContextService): boolean;
export declare const DocCopyCommand: IMultiCommand;
export declare const DocCopyCurrentParagraphCommand: {
    id: string;
    type: CommandType;
    handler: (accessor: IAccessor) => Promise<boolean>;
};
export declare const DocCutCommand: IMultiCommand;
export declare const DocCutCurrentParagraphCommand: {
    id: string;
    type: CommandType;
    handler: (accessor: IAccessor) => Promise<boolean>;
};
export declare const DocPasteCommand: IMultiCommand;
