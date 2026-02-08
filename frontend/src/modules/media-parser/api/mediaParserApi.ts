import { http, httpJson } from '@/api/http';
import type { MediaPlatform } from '../constants/platformMeta';

export interface MediaInfo {
  platform: MediaPlatform;
  title: string;
  description: string;
  author: string;
  authorAvatar?: string;
  coverUrl?: string;
  mediaType: 'video' | 'image' | 'carousel';
  mediaUrls: string[];
  duration?: number;
  likeCount?: number;
  commentCount?: number;
  shareCount?: number;
  publishTime?: string;
  originalUrl: string;
}

export interface ParseRequest {
  url: string;
}

export interface ParseResponse {
  success: boolean;
  message: string;
  data: MediaInfo | null;
}

/**
 * 解析媒体链接
 */
export async function parseMediaUrl(url: string): Promise<ParseResponse> {
  return httpJson<ParseResponse>('/api/media-parser/parse', {
    method: 'POST',
    body: JSON.stringify({ url }),
  });
}

/**
 * 下载媒体文件
 */
export async function downloadMedia(mediaUrl: string, filename: string): Promise<void> {
  try {
    const response = await fetch(mediaUrl);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('下载失败:', error);
    throw error;
  }
}

