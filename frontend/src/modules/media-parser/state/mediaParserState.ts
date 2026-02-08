import { ref, reactive } from 'vue';
import type { MediaInfo } from '../api/mediaParserApi';

export const useMediaParserState = () => {
  const loading = ref(false);
  const inputUrl = ref('');
  const mediaInfo = ref<MediaInfo | null>(null);
  const downloadingIndexes = reactive<Set<number>>(new Set());

  const reset = () => {
    inputUrl.value = '';
    mediaInfo.value = null;
    downloadingIndexes.clear();
  };

  return {
    loading,
    inputUrl,
    mediaInfo,
    downloadingIndexes,
    reset,
  };
};

