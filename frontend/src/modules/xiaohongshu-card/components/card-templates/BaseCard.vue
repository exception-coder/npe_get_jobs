<template>
  <div class="xiaohongshu-card base-card" :style="cardStyle">
    <div class="card-content">
      <!-- Emoji 装饰 -->
      <div v-if="emojis.length > 0" class="emoji-decoration">
        <span v-for="(emoji, index) in emojis" :key="index" class="emoji">
          {{ emoji }}
        </span>
      </div>

      <!-- 标题 -->
      <h1 v-if="parsedContent.title" class="card-title">
        {{ parsedContent.title }}
      </h1>

      <!-- 内容区 -->
      <div class="card-sections">
        <template v-for="(section, index) in parsedContent.sections" :key="index">
          <h2 v-if="section.type === 'heading'" :class="`heading-${section.level}`">
            {{ section.content }}
          </h2>
          <p v-else-if="section.type === 'paragraph'" class="paragraph">
            {{ section.content }}
          </p>
          <ul v-else-if="section.type === 'list'" class="list">
            <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
          </ul>
          <blockquote v-else-if="section.type === 'quote'" class="quote">
            {{ section.content }}
          </blockquote>
          <pre v-else-if="section.type === 'code'" class="code">{{ section.content }}</pre>
        </template>
      </div>

      <!-- 底部装饰 -->
      <div class="card-footer">
        <div class="divider" />
        <div class="footer-text">✨ 小紅書風格卡片 ✨</div>
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
  const background = props.template.gradientColors
    ? `linear-gradient(135deg, ${props.template.gradientColors.join(', ')})`
    : props.template.backgroundColor;

  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
    background,
    color: props.template.textColor,
    fontSize: `${props.fontSize}px`,
    '--accent-color': props.template.accentColor,
  };
});
</script>

<style scoped lang="scss">
.base-card {
  position: relative;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-content {
  position: relative;
  z-index: 1;
}

.emoji-decoration {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 24px;
}

.card-title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.4;
}

.card-sections {
  margin-top: 20px;
}

.heading-2 {
  font-size: 1.5em;
  font-weight: bold;
  margin: 20px 0 10px;
  color: var(--accent-color);
}

.heading-3 {
  font-size: 1.3em;
  font-weight: bold;
  margin: 15px 0 8px;
}

.paragraph {
  margin: 12px 0;
  line-height: 1.8;
}

.list {
  margin: 12px 0;
  padding-left: 24px;
  
  li {
    margin: 8px 0;
    line-height: 1.6;
    
    &::marker {
      color: var(--accent-color);
    }
  }
}

.quote {
  border-left: 4px solid var(--accent-color);
  padding-left: 16px;
  margin: 16px 0;
  font-style: italic;
  opacity: 0.9;
}

.code {
  background: rgba(0, 0, 0, 0.05);
  padding: 12px;
  border-radius: 8px;
  margin: 12px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  white-space: pre-wrap;
  word-break: break-word;
}

.card-footer {
  margin-top: 40px;
  text-align: center;
}

.divider {
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    var(--accent-color),
    transparent
  );
  margin-bottom: 16px;
}

.footer-text {
  font-size: 0.9em;
  opacity: 0.7;
}
</style>

