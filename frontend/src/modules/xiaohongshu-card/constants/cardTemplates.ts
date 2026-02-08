export interface CardTemplate {
  id: string;
  name: string;
  backgroundColor: string;
  gradientColors?: string[];
  textColor: string;
  accentColor: string;
  icon?: string;
}

export const CARD_TEMPLATES: CardTemplate[] = [
  {
    id: 'pink-gradient',
    name: '粉色漸變',
    gradientColors: ['#FFE5E5', '#FFB6C1'],
    textColor: '#333333',
    accentColor: '#FF69B4',
    icon: 'mdi-heart',
  },
  {
    id: 'orange-warm',
    name: '暖橙',
    backgroundColor: '#FFF4E6',
    textColor: '#5D4037',
    accentColor: '#FF6B35',
    icon: 'mdi-white-balance-sunny',
  },
  {
    id: 'blue-fresh',
    name: '清新藍',
    backgroundColor: '#E3F2FD',
    textColor: '#1565C0',
    accentColor: '#2196F3',
    icon: 'mdi-water',
  },
  {
    id: 'green-nature',
    name: '自然綠',
    gradientColors: ['#E8F5E9', '#C8E6C9'],
    textColor: '#2E7D32',
    accentColor: '#4CAF50',
    icon: 'mdi-leaf',
  },
  {
    id: 'purple-elegant',
    name: '優雅紫',
    backgroundColor: '#F3E5F5',
    textColor: '#4A148C',
    accentColor: '#9C27B0',
    icon: 'mdi-star',
  },
  {
    id: 'yellow-bright',
    name: '明亮黃',
    backgroundColor: '#FFFDE7',
    textColor: '#F57F17',
    accentColor: '#FFC107',
    icon: 'mdi-lightbulb',
  },
  {
    id: 'red-passion',
    name: '熱情紅',
    gradientColors: ['#FFEBEE', '#FFCDD2'],
    textColor: '#B71C1C',
    accentColor: '#F44336',
    icon: 'mdi-fire',
  },
  {
    id: 'teal-calm',
    name: '平靜青',
    backgroundColor: '#E0F2F1',
    textColor: '#004D40',
    accentColor: '#009688',
    icon: 'mdi-waves',
  },
];

export interface EmojiCategory {
  name: string;
  emojis: string[];
}

export const EMOJI_CATEGORIES: EmojiCategory[] = [
  {
    name: '表情',
    emojis: ['😊', '🥰', '😍', '🤩', '😎', '🤗', '😘', '😉', '🥳', '😇', '🤔', '😌', '✨', '💫', '⭐'],
  },
  {
    name: '手勢',
    emojis: ['👍', '👏', '🙌', '🤝', '💪', '✊', '🤞', '✌️', '🤟', '👌', '🫶', '🙏'],
  },
  {
    name: '愛心',
    emojis: ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞', '💌', '🧡', '💛', '💚', '💙', '💜', '🤍', '🖤'],
  },
  {
    name: '自然',
    emojis: ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌿', '🍀', '🌱', '🌾', '🌵', '🌴', '🌳', '🍃', '🍂'],
  },
  {
    name: '美食',
    emojis: ['🍰', '🧁', '🍪', '🍩', '🍨', '🍦', '🍓', '🍇', '🍊', '🍋', '🍌', '🍉', '🍎', '🥤', '☕'],
  },
  {
    name: '生活',
    emojis: ['📱', '💻', '📷', '🎨', '🎭', '🎪', '🎬', '🎮', '🎯', '🎲', '🎸', '🎹', '🎺', '🎻', '🎤'],
  },
  {
    name: '旅行',
    emojis: ['✈️', '🚗', '🚙', '🚌', '🚎', '🏖️', '🏝️', '🗻', '🏔️', '⛰️', '🏕️', '🏞️', '🌅', '🌄', '🌠'],
  },
  {
    name: '符號',
    emojis: ['💰', '💎', '🎁', '🎀', '🎊', '🎉', '🎈', '🏆', '🥇', '🌈', '☀️', '🌙', '⭐', '✨', '💫'],
  },
];

