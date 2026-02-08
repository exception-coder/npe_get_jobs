import { MentionType } from '../enum/mention-type';
export interface IDocMention extends IMention {
    id: string;
}
export interface IMention {
    objectType: MentionType;
    objectId: string;
    label: string;
    metadata?: Record<string, string | number | boolean | undefined>;
}
