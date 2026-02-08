<template>
  <div class="card-generator-view">
    <v-container>
      <v-row>
        <!-- 左侧编辑区 -->
        <v-col cols="12" md="6">
          <v-card elevation="2">
            <v-card-title>
              <div class="text-h5">
                <v-icon class="mr-2">mdi-card-text</v-icon>
                小紅書風格卡片生成器
              </div>
            </v-card-title>
            <v-card-subtitle>
              輸入 Markdown 或純文本，快速生成小紅書風格的分享卡片
            </v-card-subtitle>

            <v-card-text>
              <!-- 文本输入 -->
              <v-textarea
                v-model="inputText"
                label="輸入內容"
                placeholder="支持 Markdown 格式&#10;&#10;# 標題&#10;&#10;## 副標題&#10;&#10;- 列表項 1&#10;- 列表項 2&#10;&#10;> 引用文本"
                rows="10"
                variant="outlined"
                auto-grow
              >
                <template #append-inner>
                  <v-tooltip text="加載示例內容">
                    <template #activator="{ props }">
                      <v-btn
                        v-bind="props"
                        icon="mdi-lightbulb-on"
                        variant="text"
                        size="small"
                        color="primary"
                        @click="loadExample"
                      />
                    </template>
                  </v-tooltip>
                </template>
              </v-textarea>

              <!-- 卡片样式选择 -->
              <div class="mt-4">
                <div class="text-subtitle-2 mb-2">選擇卡片樣式</div>
                <v-chip-group v-model="selectedStyleIndex" mandatory column>
                  <v-chip
                    v-for="(style, index) in cardStyles"
                    :key="style.id"
                    :value="index"
                    filter
                    class="style-chip"
                  >
                    <v-icon :icon="style.icon" start />
                    <div class="style-info">
                      <div class="style-name">{{ style.name }}</div>
                      <div class="style-preview">{{ style.preview }}</div>
                    </div>
                  </v-chip>
                </v-chip-group>
              </div>

              <!-- 配色模板选择 -->
              <div class="mt-4">
                <div class="text-subtitle-2 mb-2">選擇配色模板</div>
                <v-chip-group v-model="selectedTemplateIndex" mandatory>
                  <v-chip
                    v-for="(template, index) in templates"
                    :key="template.id"
                    :value="index"
                    filter
                  >
                    <v-icon v-if="template.icon" start>{{ template.icon }}</v-icon>
                    {{ template.name }}
                  </v-chip>
                </v-chip-group>
              </div>

              <!-- Emoji 选择器 -->
              <div class="mt-4">
                <div class="text-subtitle-2 mb-2">添加 Emoji</div>
                <v-expansion-panels>
                  <v-expansion-panel
                    v-for="category in emojiCategories"
                    :key="category.name"
                  >
                    <v-expansion-panel-title>
                      {{ category.name }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <div class="emoji-grid">
                        <v-btn
                          v-for="emoji in category.emojis"
                          :key="emoji"
                          variant="text"
                          size="small"
                          @click="addEmoji(emoji)"
                        >
                          {{ emoji }}
                        </v-btn>
                      </div>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <!-- 已添加的 Emoji -->
              <div v-if="customEmojis.length > 0" class="mt-3">
                <div class="text-subtitle-2 mb-2">已添加的 Emoji</div>
                <v-chip-group>
                  <v-chip
                    v-for="(emoji, index) in customEmojis"
                    :key="index"
                    closable
                    @click:close="removeEmoji(index)"
                  >
                    {{ emoji }}
                  </v-chip>
                </v-chip-group>
              </div>

              <!-- 尺寸设置 -->
              <div class="mt-4">
                <div class="text-subtitle-2 mb-2">卡片尺寸</div>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model.number="cardWidth"
                      label="寬度 (px)"
                      type="number"
                      variant="outlined"
                      density="compact"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model.number="cardHeight"
                      label="高度 (px)"
                      type="number"
                      variant="outlined"
                      density="compact"
                    />
                  </v-col>
                </v-row>
              </div>

              <!-- 字体大小 -->
              <div class="mt-2">
                <div class="text-subtitle-2 mb-2">字體大小: {{ fontSize }}px</div>
                <v-slider
                  v-model="fontSize"
                  :min="12"
                  :max="24"
                  :step="1"
                  thumb-label
                />
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" :loading="isGenerating" @click="handleGenerate">
                <v-icon start>mdi-creation</v-icon>
                生成卡片
              </v-btn>
              <v-btn
                v-if="generatedImage"
                color="success"
                variant="outlined"
                @click="downloadCard"
              >
                <v-icon start>mdi-download</v-icon>
                下載
              </v-btn>
              <v-spacer />
              <v-btn variant="text" @click="reset">
                <v-icon start>mdi-refresh</v-icon>
                重置
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- 右侧预览区 -->
        <v-col cols="12" md="6">
          <v-card elevation="2">
            <v-card-title>實時預覽</v-card-title>
            <v-card-text>
              <div class="preview-container">
                <div ref="cardRef">
                  <!-- 基础风格 -->
                  <BaseCard
                    v-if="selectedStyle === 'base'"
                    :parsed-content="parsedContent"
                    :template="selectedTemplate"
                    :emojis="customEmojis"
                    :width="cardWidth"
                    :height="cardHeight"
                    :font-size="fontSize"
                  />
                  <!-- 现代风格 -->
                  <ModernCard
                    v-else-if="selectedStyle === 'modern'"
                    :parsed-content="parsedContent"
                    :template="selectedTemplate"
                    :emojis="customEmojis"
                    :width="cardWidth"
                    :height="cardHeight"
                    :font-size="fontSize"
                  />
                  <!-- 极简风格 -->
                  <MinimalCard
                    v-else-if="selectedStyle === 'minimal'"
                    :parsed-content="parsedContent"
                    :template="selectedTemplate"
                    :emojis="customEmojis"
                    :width="cardWidth"
                    :height="cardHeight"
                    :font-size="fontSize"
                  />
                  <!-- 可爱风格 -->
                  <CuteCard
                    v-else-if="selectedStyle === 'cute'"
                    :parsed-content="parsedContent"
                    :template="selectedTemplate"
                    :emojis="customEmojis"
                    :width="cardWidth"
                    :height="cardHeight"
                    :font-size="fontSize"
                  />
                </div>
              </div>

              <!-- 生成的图片预览 -->
              <div v-if="generatedImage" class="mt-4">
                <v-divider class="mb-3" />
                <div class="text-subtitle-2 mb-2">生成的圖片</div>
                <v-img :src="generatedImage" class="generated-image" />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useCardGeneratorState } from '../state/cardGeneratorState';
import { useCardGeneratorService } from '../service/cardGeneratorService';
import { CARD_TEMPLATES, EMOJI_CATEGORIES } from '../constants/cardTemplates';
import { CARD_STYLES } from '../constants/cardStyles';
import { parseMarkdown } from '../utils/markdownParser';
import BaseCard from '../components/card-templates/BaseCard.vue';
import ModernCard from '../components/card-templates/ModernCard.vue';
import MinimalCard from '../components/card-templates/MinimalCard.vue';
import CuteCard from '../components/card-templates/CuteCard.vue';

const state = useCardGeneratorState();
const service = useCardGeneratorService(state);

const {
  inputText,
  selectedTemplate,
  selectedStyle,
  fontSize,
  cardWidth,
  cardHeight,
  customEmojis,
  generatedImage,
  isGenerating,
  reset,
} = state;

const { addEmoji, removeEmoji, downloadCard } = service;

const cardRef = ref<HTMLElement | null>(null);
const selectedTemplateIndex = ref(0);
const selectedStyleIndex = ref(0);

const templates = CARD_TEMPLATES;
const emojiCategories = EMOJI_CATEGORIES;
const cardStyles = CARD_STYLES;

// 监听模板选择变化
watch(selectedTemplateIndex, (index) => {
  selectedTemplate.value = CARD_TEMPLATES[index];
});

// 监听样式选择变化
watch(selectedStyleIndex, (index) => {
  selectedStyle.value = CARD_STYLES[index].id;
});

// 解析输入的文本
const parsedContent = computed(() => {
  if (!inputText.value) {
    return { title: '', sections: [] };
  }
  return parseMarkdown(inputText.value);
});

const handleGenerate = async () => {
  if (cardRef.value) {
    await service.generateCard(cardRef.value);
  }
};

// 加载示例内容
const loadExample = () => {
  inputText.value = `# 小紅書分享攻略 ✨

## 為什麼選擇小紅書？

小紅書是一個充滿活力的生活方式分享平台，讓你發現更多美好！

## 🎯 平台優勢

- 真實的用戶體驗分享
- 豐富的生活靈感內容
- 活躍的社區互動氛圍
- 精準的興趣推薦算法

## 💡 創作技巧

> 好的內容來自於真實的體驗和用心的分享

### 標題要點
1. 簡潔有力，突出重點
2. 添加合適的 emoji 增加吸引力
3. 數字化表達更具說服力

### 內容建議
- 📸 配圖精美，構圖用心
- 📝 文字簡練，排版清晰
- 🎨 風格統一，形成個人特色
- 💬 互動積極，回覆評論

## 🌟 熱門話題

\`\`\`
#穿搭分享 #美食探店
#旅行日記 #好物推薦
#生活方式 #學習筆記
\`\`\`

## 📊 數據洞察

記得定期查看數據，了解粉絲喜好，優化內容策略！

─────────

💖 記住：真誠分享，用心創作，你也可以成為優秀的創作者！`;

  // 同时添加一些示例 emoji
  customEmojis.value = ['✨', '💖', '🎨', '📸'];
};
</script>

<style scoped lang="scss">
.card-generator-view {
  padding: 20px 0;
}

.emoji-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 4px;
}

.style-chip {
  height: auto !important;
  padding: 12px 16px;

  .style-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 8px;

    .style-name {
      font-weight: 600;
      font-size: 14px;
    }

    .style-preview {
      font-size: 11px;
      opacity: 0.7;
      margin-top: 2px;
    }
  }
}

.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  overflow: auto;
}

.generated-image {
  border-radius: 8px;
  max-width: 100%;
}
</style>
