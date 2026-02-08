<template>
  <div class="xiaohongshu-card modern-card" :style="cardStyle">
    <!-- 装饰圆圈 -->
    <div class="decoration-circles">
      <div class="circle circle-1" />
      <div class="circle circle-2" />
      <div class="circle circle-3" />
    </div>

    <div class="card-content">
      <!-- Emoji 装饰条 -->
      <div v-if="emojis.length > 0" class="emoji-bar">
        <span v-for="(emoji, index) in emojis" :key="index" class="emoji-item">
          {{ emoji }}
        </span>
      </div>

      <!-- 标题区 -->
      <div v-if="parsedContent.title" class="title-section">
        <div class="title-decoration">▶</div>
        <h1 class="card-title">{{ parsedContent.title }}</h1>
      </div>

      <!-- 内容区 -->
      <div class="content-section">
        <template v-for="(section, index) in parsedContent.sections" :key="index">
          <div v-if="section.type === 'heading'" class="heading-box">
            <h2 :class="`heading-${section.level}`">
              <span class="heading-icon">●</span>
              {{ section.content }}
            </h2>
          </div>
          <p v-else-if="section.type === 'paragraph'" class="paragraph">
            {{ section.content }}
          </p>
          <ul v-else-if="section.type === 'list'" class="modern-list">
            <li v-for="(item, i) in section.items" :key="i">
              <span class="list-marker">▸</span>
              {{ item }}
            </li>
          </ul>
          <div v-else-if="section.type === 'quote'" class="modern-quote">
            <div class="quote-icon">"</div>
            <div class="quote-content">{{ section.content }}</div>
          </div>
          <pre v-else-if="section.type === 'code'" class="modern-code">{{ section.content }}</pre>
        </template>
      </div>

      <!-- 底部标签 -->
      <div class="modern-footer">
        <div class="footer-badge">小紅書精選</div>
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
.modern-card {
  position: relative;
  border-radius: 24px;
  padding: 48px 40px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.decoration-circles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;

  .circle {
    position: absolute;
    border-radius: 50%;
    background: var(--accent-color);
    opacity: 0.1;
  }

  .circle-1 {
    width: 200px;
    height: 200px;
    top: -100px;
    right: -50px;
  }

  .circle-2 {
    width: 150px;
    height: 150px;
    bottom: -75px;
    left: -50px;
  }

  .circle-3 {
    width: 100px;
    height: 100px;
    top: 50%;
    right: -30px;
    opacity: 0.05;
  }
}

.card-content {
  position: relative;
  z-index: 1;
}

.emoji-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  
  .emoji-item {
    font-size: 28px;
  }
}

.title-section {
  text-align: center;
  margin-bottom: 32px;

  .title-decoration {
    font-size: 24px;
    color: var(--accent-color);
    margin-bottom: 8px;
  }

  .card-title {
    font-size: 2.2em;
    font-weight: 900;
    line-height: 1.3;
    letter-spacing: 0.5px;
  }
}

.content-section {
  margin-top: 24px;
}

.heading-box {
  margin: 24px 0 16px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  border-left: 4px solid var(--accent-color);

  h2 {
    font-size: 1.4em;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;

    .heading-icon {
      color: var(--accent-color);
    }
  }
}

.paragraph {
  margin: 16px 0;
  line-height: 1.9;
}

.modern-list {
  margin: 16px 0;
  padding-left: 0;
  list-style: none;
  
  li {
    margin: 12px 0;
    padding-left: 24px;
    line-height: 1.7;
    position: relative;

    .list-marker {
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-weight: bold;
    }
  }
}

.modern-quote {
  position: relative;
  margin: 24px 0;
  padding: 24px 24px 24px 60px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;

  .quote-icon {
    position: absolute;
    left: 16px;
    top: 16px;
    font-size: 48px;
    color: var(--accent-color);
    opacity: 0.5;
    font-family: Georgia, serif;
  }

  .quote-content {
    font-style: italic;
    line-height: 1.8;
  }
}

.modern-code {
  background: rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 12px;
  margin: 16px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  white-space: pre-wrap;
  word-break: break-word;
  border: 2px dashed var(--accent-color);
}

.modern-footer {
  margin-top: 48px;
  text-align: center;

  .footer-badge {
    display: inline-block;
    padding: 8px 24px;
    background: var(--accent-color);
    color: white;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: bold;
    letter-spacing: 1px;
  }
}
</style>

