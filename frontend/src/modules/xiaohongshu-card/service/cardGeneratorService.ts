import html2canvas from 'html2canvas';
import { useSnackbarStore } from '@/stores/snackbar';
import type { useCardGeneratorState } from '../state/cardGeneratorState';

type CardGeneratorState = ReturnType<typeof useCardGeneratorState>;

export const useCardGeneratorService = (state: CardGeneratorState) => {
  const snackbar = useSnackbarStore();

  const generateCard = async (cardElement: HTMLElement) => {
    if (!state.inputText.value.trim()) {
      snackbar.show({ message: '請輸入文本內容', color: 'warning' });
      return;
    }

    state.isGenerating.value = true;

    try {
      const canvas = await html2canvas(cardElement, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        logging: false,
      });

      state.generatedImage.value = canvas.toDataURL('image/png');
      snackbar.show({ message: '卡片生成成功', color: 'success' });
    } catch (error) {
      console.error('生成卡片失敗', error);
      snackbar.show({ message: '生成卡片失敗，請稍後重試', color: 'error' });
    } finally {
      state.isGenerating.value = false;
    }
  };

  const downloadCard = () => {
    if (!state.generatedImage.value) {
      snackbar.show({ message: '請先生成卡片', color: 'warning' });
      return;
    }

    const link = document.createElement('a');
    link.href = state.generatedImage.value;
    link.download = `xiaohongshu-card-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    snackbar.show({ message: '下載成功', color: 'success' });
  };

  const addEmoji = (emoji: string) => {
    state.customEmojis.value.push(emoji);
  };

  const removeEmoji = (index: number) => {
    state.customEmojis.value.splice(index, 1);
  };

  return {
    generateCard,
    downloadCard,
    addEmoji,
    removeEmoji,
  };
};

