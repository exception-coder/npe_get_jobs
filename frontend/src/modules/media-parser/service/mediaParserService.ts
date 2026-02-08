import { useSnackbarStore } from '@/stores/snackbar';
import type { useMediaParserState } from '../state/mediaParserState';
import { parseMediaUrl, downloadMedia } from '../api/mediaParserApi';
import { detectPlatform } from '../constants/platformMeta';

type MediaParserState = ReturnType<typeof useMediaParserState>;

export const useMediaParserService = (state: MediaParserState) => {
  const snackbar = useSnackbarStore();

  const handleParse = async () => {
    const url = state.inputUrl.value.trim();
    
    if (!url) {
      snackbar.show({ message: '請輸入媒體鏈接', color: 'warning' });
      return;
    }

    const platform = detectPlatform(url);
    if (!platform) {
      snackbar.show({ message: '不支持的平台或鏈接格式', color: 'error' });
      return;
    }

    state.loading.value = true;
    state.mediaInfo.value = null;

    try {
      const response = await parseMediaUrl(url);
      
      if (response.success && response.data) {
        state.mediaInfo.value = response.data;
        snackbar.show({ message: '解析成功', color: 'success' });
      } else {
        snackbar.show({ message: response.message || '解析失敗', color: 'error' });
      }
    } catch (error: any) {
      console.error('解析失敗', error);
      const errorMessage = error?.payload?.message || error?.message || '解析失敗，請稍後重試';
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.loading.value = false;
    }
  };

  const handleDownload = async (mediaUrl: string, index: number) => {
    if (!state.mediaInfo.value) return;

    state.downloadingIndexes.add(index);

    try {
      const filename = `${state.mediaInfo.value.platform}_${Date.now()}_${index}${getFileExtension(mediaUrl)}`;
      await downloadMedia(mediaUrl, filename);
      snackbar.show({ message: '下載成功', color: 'success' });
    } catch (error) {
      console.error('下載失敗', error);
      snackbar.show({ message: '下載失敗，請稍後重試', color: 'error' });
    } finally {
      state.downloadingIndexes.delete(index);
    }
  };

  const handleDownloadAll = async () => {
    if (!state.mediaInfo.value) return;

    for (let i = 0; i < state.mediaInfo.value.mediaUrls.length; i++) {
      await handleDownload(state.mediaInfo.value.mediaUrls[i], i);
    }
  };

  const getFileExtension = (url: string): string => {
    const match = url.match(/\.(jpg|jpeg|png|gif|mp4|mov|avi)(\?.*)?$/i);
    return match ? `.${match[1]}` : '';
  };

  return {
    handleParse,
    handleDownload,
    handleDownloadAll,
  };
};

