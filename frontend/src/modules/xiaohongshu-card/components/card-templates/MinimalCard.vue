<template>
  <div class="xiaohongshu-card minimal-card" :style="cardStyle">
    <div class="card-content">
      <!-- 顶部 Emoji 行 -->
      <div v-if="emojis.length > 0" class="emoji-line">
        <span v-for="(emoji, index) in emojis" :key="index">{{ emoji }}</span>
      </div>

      <!-- 极简标题 -->
      <h1 v-if="parsedContent.title" class="minimal-title">
        {{ parsedContent.title }}
      </h1>

      <!-- 分隔线 -->
      <div class="title-divider" />

      <!-- 内容区 -->
      <div class="minimal-content">
        <template v-for="(section, index) in parsedContent.sections" :key="index">
          <h2 v-if="section.type === 'heading'" :class="`minimal-heading-${section.level}`">
            {{ section.content }}
          </h2>
          <p v-else-if="section.type === 'paragraph'" class="minimal-paragraph">
            {{ section.content }}
          </p>
          <ul v-else-if="section.type === 'list'" class="minimal-list">
            <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
          </ul>
          <blockquote v-else-if="section.type === 'quote'" class="minimal-quote">
            {{ section.content }}
          </blockquote>
          <pre v-else-if="section.type === 'code'" class="minimal-code">{{ section.content }}</pre>
        </template>
      </div>

      <!-- 极简底部 -->
      <div class="minimal-footer">
        <div class="footer-line" />
        <div class="footer-mark">※</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ParsedContent } from '../../utils/markdownParser';
import type { CardTemplate } from '../../constants/cardTemplates';

interface Props {
  parsedContent: ParsedContent;
  template: CardTemplate;
  emojis: string[];
  width: number;
  height: number;
  fontSize: number;
}

const props = defineProps<Props>();

const cardStyle = computed(() => {
  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
    background: '#FFFFFF',
    color: '#333333',
    fontSize: `${props.fontSize}px`,
    '--accent-color': props.template.accentColor,
  };
});
</script>

<style scoped lang="scss">
.minimal-card {
  position: relative;
  border-radius: 8px;
  padding: 60px 48px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.card-content {
  position: relative;
}

.emoji-line {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;
  font-size: 20px;
  opacity: 0.8;
}

.minimal-title {
  font-size: 2.5em;
  font-weight: 300;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 2px;
  margin-bottom: 24px;
  color: #1a1a1a;
}

.title-divider {
  width: 60px;
  height: 2px;
  background: var(--accent-color);
  margin: 0 auto 40px;
}

.minimal-content {
  margin-top: 32px;
}

.minimal-heading-2 {
  font-size: 1.4em;
  font-weight: 600;
  margin: 32px 0 16px;
  color: #2a2a2a;
  letter-spacing: 1px;
}

.minimal-heading-3 {
  font-size: 1.2em;
  font-weight: 500;
  margin: 24px 0 12px;
  color: #3a3a3a;
}

.minimal-paragraph {
  margin: 20px 0;
  line-height: 2;
  font-weight: 300;
  color: #4a4a4a;
}

.minimal-list {
  margin: 20px 0;
  padding-left: 0;
  list-style: none;
  
  li {
    margin: 16px 0;
    padding-left: 28px;
    line-height: 1.8;
    position: relative;
    color: #4a4a4a;

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-weight: bold;
    }
  }
}

.minimal-quote {
  margin: 32px 0;
  padding: 24px 32px;
  border-left: none;
  border-top: 1px solid var(--accent-color);
  border-bottom: 1px solid var(--accent-color);
  font-style: italic;
  text-align: center;
  font-size: 1.1em;
  line-height: 1.8;
  color: #5a5a5a;
}

.minimal-code {
  background: #f8f8f8;
  padding: 20px;
  border-radius: 4px;
  margin: 24px 0;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.85em;
  white-space: pre-wrap;
  word-break: break-word;
  color: #666;
  border-left: 3px solid var(--accent-color);
}

.minimal-footer {
  margin-top: 60px;
  text-align: center;

  .footer-line {
    width: 120px;
    height: 1px;
    background: #ddd;
    margin: 0 auto 16px;
  }

  .footer-mark {
    font-size: 24px;
    color: var(--accent-color);
    opacity: 0.6;
  }
}
</style>

