import { ICommand, IParagraphStyle } from '@univerjs/core';
export interface IDocParagraphSettingCommandParams {
    paragraph: Partial<Pick<IParagraphStyle, 'hanging' | 'horizontalAlign' | 'spaceBelow' | 'spaceAbove' | 'indentEnd' | 'indentStart' | 'lineSpacing' | 'indentFirstLine' | 'snapToGrid' | 'spacingRule'>>;
    sections?: Record<string, any>;
}
export declare const DocParagraphSettingCommand: ICommand<IDocParagraphSettingCommandParams>;
