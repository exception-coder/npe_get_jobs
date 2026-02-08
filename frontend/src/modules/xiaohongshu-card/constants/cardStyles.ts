export type CardStyle = 'base' | 'modern' | 'minimal' | 'cute';

export interface CardStyleMeta {
  id: CardStyle;
  name: string;
  description: string;
  icon: string;
  preview: string;
}

export const CARD_STYLES: CardStyleMeta[] = [
  {
    id: 'base',
    name: '經典風格',
    description: '傳統小紅書風格，簡潔清晰',
    icon: 'mdi-card',
    preview: '適合日常分享',
  },
  {
    id: 'modern',
    name: '現代風格',
    description: '時尚前衛，充滿設計感',
    icon: 'mdi-cellphone',
    preview: '適合專業內容',
  },
  {
    id: 'minimal',
    name: '極簡風格',
    description: '簡約優雅，突出內容',
    icon: 'mdi-circle-outline',
    preview: '適合文藝分享',
  },
  {
    id: 'cute',
    name: '可愛風格',
    description: '活潑俏皮，充滿少女心',
    icon: 'mdi-heart',
    preview: '適合生活日常',
  },
];

