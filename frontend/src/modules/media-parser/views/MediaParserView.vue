<template>
  <div class="media-parser-view">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card elevation="2">
            <v-card-title>
              <div class="text-h5">
                <v-icon class="mr-2">mdi-link-variant</v-icon>
                媒體鏈接解析
              </div>
            </v-card-title>
            <v-card-subtitle>
              支持解析 TikTok、小紅書、抖音、Instagram 的視頻和圖文內容
            </v-card-subtitle>

            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="inputUrl"
                    label="媒體鏈接"
                    placeholder="請輸入 TikTok、小紅書、抖音或 Instagram 鏈接"
                    prepend-inner-icon="mdi-link"
                    clearable
                    @keyup.enter="handleParse"
                  >
                    <template #append>
                      <v-btn
                        color="primary"
                        :loading="loading"
                        @click="handleParse"
                      >
                        解析
                      </v-btn>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>

              <!-- 平台支持说明 -->
              <v-row class="mt-2">
                <v-col cols="12">
                  <v-chip-group>
                    <v-chip
                      v-for="platform in platformList"
                      :key="platform.code"
                      :color="platform.color"
                      variant="outlined"
                      size="small"
                    >
                      <v-icon :icon="platform.icon" start />
                      {{ platform.name }}
                    </v-chip>
                  </v-chip-group>
                </v-col>
              </v-row>

              <!-- 解析结果 -->
              <v-row v-if="mediaInfo" class="mt-4">
                <v-col cols="12">
                  <v-card variant="outlined">
                    <v-card-title class="d-flex align-center">
                      <v-avatar size="32" class="mr-2">
                        <v-img v-if="mediaInfo.authorAvatar" :src="mediaInfo.authorAvatar" />
                        <v-icon v-else>mdi-account-circle</v-icon>
                      </v-avatar>
                      <div>
                        <div class="text-subtitle-1">{{ mediaInfo.author }}</div>
                        <v-chip
                          :color="getPlatformMeta(mediaInfo.platform).color"
                          size="x-small"
                          class="mt-1"
                        >
                          {{ getPlatformMeta(mediaInfo.platform).name }}
                        </v-chip>
                      </div>
                      <v-spacer />
                      <v-btn
                        v-if="mediaInfo.mediaUrls.length > 1"
                        color="primary"
                        variant="outlined"
                        @click="handleDownloadAll"
                      >
                        <v-icon start>mdi-download-multiple</v-icon>
                        全部下載
                      </v-btn>
                    </v-card-title>

                    <v-card-text>
                      <div class="text-h6 mb-2">{{ mediaInfo.title }}</div>
                      <div v-if="mediaInfo.description" class="text-body-2 text-grey-darken-1 mb-3">
                        {{ mediaInfo.description }}
                      </div>

                      <!-- 统计信息 -->
                      <div class="d-flex gap-4 mb-4">
                        <div v-if="mediaInfo.likeCount !== undefined" class="d-flex align-center">
                          <v-icon size="small" class="mr-1">mdi-heart</v-icon>
                          <span class="text-caption">{{ formatCount(mediaInfo.likeCount) }}</span>
                        </div>
                        <div v-if="mediaInfo.commentCount !== undefined" class="d-flex align-center">
                          <v-icon size="small" class="mr-1">mdi-comment</v-icon>
                          <span class="text-caption">{{ formatCount(mediaInfo.commentCount) }}</span>
                        </div>
                        <div v-if="mediaInfo.shareCount !== undefined" class="d-flex align-center">
                          <v-icon size="small" class="mr-1">mdi-share</v-icon>
                          <span class="text-caption">{{ formatCount(mediaInfo.shareCount) }}</span>
                        </div>
                        <div v-if="mediaInfo.duration" class="d-flex align-center">
                          <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
                          <span class="text-caption">{{ formatDuration(mediaInfo.duration) }}</span>
                        </div>
                      </div>

                      <!-- 媒体预览 -->
                      <div class="media-preview-container">
                        <v-row>
                          <v-col
                            v-for="(mediaUrl, index) in mediaInfo.mediaUrls"
                            :key="index"
                            cols="12"
                            :sm="mediaInfo.mediaUrls.length > 1 ? 6 : 12"
                            :md="mediaInfo.mediaUrls.length > 2 ? 4 : mediaInfo.mediaUrls.length > 1 ? 6 : 12"
                          >
                            <v-card variant="outlined" class="media-item">
                              <div class="media-wrapper">
                                <v-img
                                  v-if="mediaInfo.mediaType === 'image' || mediaInfo.mediaType === 'carousel'"
                                  :src="mediaUrl"
                                  aspect-ratio="1"
                                  cover
                                  class="media-preview"
                                >
                                  <template #placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                      <v-progress-circular indeterminate color="grey-lighten-5" />
                                    </v-row>
                                  </template>
                                </v-img>
                                <video
                                  v-else
                                  :src="mediaUrl"
                                  controls
                                  class="media-preview"
                                  :poster="mediaInfo.coverUrl"
                                />
                              </div>
                              <v-card-actions>
                                <v-spacer />
                                <v-btn
                                  color="primary"
                                  variant="tonal"
                                  size="small"
                                  :loading="downloadingIndexes.has(index)"
                                  @click="handleDownload(mediaUrl, index)"
                                >
                                  <v-icon start>mdi-download</v-icon>
                                  下載
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-col>
                        </v-row>
                      </div>

                      <v-divider class="my-3" />

                      <div class="text-caption text-grey">
                        <div v-if="mediaInfo.publishTime">
                          發布時間：{{ mediaInfo.publishTime }}
                        </div>
                        <div class="mt-1">
                          原始鏈接：
                          <a :href="mediaInfo.originalUrl" target="_blank" class="text-primary">
                            {{ mediaInfo.originalUrl }}
                          </a>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMediaParserState } from '../state/mediaParserState';
import { useMediaParserService } from '../service/mediaParserService';
import { MEDIA_PLATFORMS, type MediaPlatform } from '../constants/platformMeta';

const state = useMediaParserState();
const service = useMediaParserService(state);

const { loading, inputUrl, mediaInfo, downloadingIndexes } = state;
const { handleParse, handleDownload, handleDownloadAll } = service;

const platformList = computed(() => Object.values(MEDIA_PLATFORMS));

const getPlatformMeta = (platform: MediaPlatform) => {
  return MEDIA_PLATFORMS[platform];
};

const formatCount = (count: number): string => {
  if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}萬`;
  }
  return count.toString();
};

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};
</script>

<style scoped lang="scss">
.media-parser-view {
  padding: 20px 0;
}

.media-preview-container {
  margin-top: 16px;
}

.media-item {
  height: 100%;
}

.media-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.media-preview {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}
</style>

