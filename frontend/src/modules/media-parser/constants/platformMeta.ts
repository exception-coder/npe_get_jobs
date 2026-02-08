export type MediaPlatform = 'tiktok' | 'xiaohongshu' | 'douyin' | 'instagram';

export interface PlatformMeta {
  code: MediaPlatform;
  name: string;
  icon: string;
  color: string;
  urlPatterns: RegExp[];
}

export const MEDIA_PLATFORMS: Record<MediaPlatform, PlatformMeta> = {
  tiktok: {
    code: 'tiktok',
    name: 'TikTok',
    icon: 'mdi-music-note',
    color: '#000000',
    urlPatterns: [
      /tiktok\.com\/@[\w.-]+\/video\/\d+/,
      /vm\.tiktok\.com\/[\w-]+/,
      /vt\.tiktok\.com\/[\w-]+/,
    ],
  },
  xiaohongshu: {
    code: 'xiaohongshu',
    name: '小红书',
    icon: 'mdi-book-open-page-variant',
    color: '#FF2442',
    urlPatterns: [
      /xiaohongshu\.com\/discovery\/item\/[\w-]+/,
      /xiaohongshu\.com\/explore\/[\w-]+/,
      /xhslink\.com\/[\w-]+/,
    ],
  },
  douyin: {
    code: 'douyin',
    name: '抖音',
    icon: 'mdi-music-note-outline',
    color: '#000000',
    urlPatterns: [
      /douyin\.com\/video\/\d+/,
      /v\.douyin\.com\/[\w-]+/,
      /iesdouyin\.com\/share\/video\/\d+/,
    ],
  },
  instagram: {
    code: 'instagram',
    name: 'Instagram',
    icon: 'mdi-instagram',
    color: '#E4405F',
    urlPatterns: [
      /instagram\.com\/p\/[\w-]+/,
      /instagram\.com\/reel\/[\w-]+/,
      /instagram\.com\/tv\/[\w-]+/,
    ],
  },
};

export function detectPlatform(url: string): MediaPlatform | null {
  for (const [platform, meta] of Object.entries(MEDIA_PLATFORMS)) {
    if (meta.urlPatterns.some((pattern) => pattern.test(url))) {
      return platform as MediaPlatform;
    }
  }
  return null;
}

