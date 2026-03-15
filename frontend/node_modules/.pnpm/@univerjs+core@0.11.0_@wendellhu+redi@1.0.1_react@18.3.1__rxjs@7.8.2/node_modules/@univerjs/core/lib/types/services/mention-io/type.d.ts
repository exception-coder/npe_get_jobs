import { MentionType } from '../../types/enum';
import { IMention } from '../../types/interfaces';
export interface IListMentionParam {
    search?: string;
    type?: MentionType;
    page?: number;
    size?: number;
    unitId?: string;
}
export interface ITypeMentionList {
    mentions: IMention[];
    type: MentionType;
    metadata: Record<string, string>;
    title: string;
}
export interface IListMentionResponse {
    list: ITypeMentionList[];
    page?: number;
    size?: number;
    total?: number;
}
export interface IMentionIOService {
    list(params: IListMentionParam): Promise<IListMentionResponse>;
}
export declare const IMentionIOService: import('@wendellhu/redi').IdentifierDecorator<IMentionIOService>;
