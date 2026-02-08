import { ref } from 'vue';
import type { CardTemplate } from '../constants/cardTemplates';
import { CARD_TEMPLATES } from '../constants/cardTemplates';
import type { CardStyle } from '../constants/cardStyles';

export const useCardGeneratorState = () => {
  const inputText = ref('');
  const selectedTemplate = ref<CardTemplate>(CARD_TEMPLATES[0]);
  const selectedStyle = ref<CardStyle>('base');
  const fontSize = ref(16);
  const cardWidth = ref(600);
  const cardHeight = ref(800);
  const showEmojis = ref(true);
  const customEmojis = ref<string[]>([]);
  const generatedImage = ref<string | null>(null);
  const isGenerating = ref(false);

  const reset = () => {
    inputText.value = '';
    selectedTemplate.value = CARD_TEMPLATES[0];
    selectedStyle.value = 'base';
    fontSize.value = 16;
    cardWidth.value = 600;
    cardHeight.value = 800;
    showEmojis.value = true;
    customEmojis.value = [];
    generatedImage.value = null;
  };

  return {
    inputText,
    selectedTemplate,
    selectedStyle,
    fontSize,
    cardWidth,
    cardHeight,
    showEmojis,
    customEmojis,
    generatedImage,
    isGenerating,
    reset,
  };
};

