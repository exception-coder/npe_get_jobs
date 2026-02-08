<template>
  <div class="xiaohongshu-card cute-card" :style="cardStyle">
    <!-- 可爱装饰元素 -->
    <div class="cute-decorations">
      <div class="star star-1">★</div>
      <div class="star star-2">☆</div>
      <div class="star star-3">✦</div>
      <div class="heart heart-1">♥</div>
      <div class="heart heart-2">♡</div>
    </div>

    <div class="card-content">
      <!-- Emoji 云朵 -->
      <div v-if="emojis.length > 0" class="emoji-cloud">
        <div class="cloud-shape">
          <span v-for="(emoji, index) in emojis" :key="index" class="emoji-bubble">
            {{ emoji }}
          </span>
        </div>
      </div>

      <!-- 可爱标题 -->
      <div v-if="parsedContent.title" class="cute-title-box">
        <div class="title-corner corner-tl">┌</div>
        <div class="title-corner corner-tr">┐</div>
        <h1 class="cute-title">{{ parsedContent.title }}</h1>
        <div class="title-corner corner-bl">└</div>
        <div class="title-corner corner-br">┘</div>
      </div>

      <!-- 内容区 -->
      <div class="cute-content">
        <template v-for="(section, index) in parsedContent.sections" :key="index">
          <div v-if="section.type === 'heading'" class="cute-heading">
            <span class="heading-deco">✿</span>
            <h2 :class="`heading-${section.level}`">{{ section.content }}</h2>
            <span class="heading-deco">✿</span>
          </div>
          <p v-else-if="section.type === 'paragraph'" class="cute-paragraph">
            {{ section.content }}
          </p>
          <ul v-else-if="section.type === 'list'" class="cute-list">
            <li v-for="(item, i) in section.items" :key="i">
              <span class="list-heart">♥</span>
              {{ item }}
            </li>
          </ul>
          <div v-else-if="section.type === 'quote'" class="cute-quote">
            <div class="quote-deco quote-deco-top">꒰</div>
            <div class="quote-text">{{ section.content }}</div>
            <div class="quote-deco quote-deco-bottom">꒱</div>
          </div>
          <pre v-else-if="section.type === 'code'" class="cute-code">{{ section.content }}</pre>
        </template>
      </div>

      <!-- 可爱底部 -->
      <div class="cute-footer">
        <div class="footer-wave">～～～</div>
        <div class="footer-text">◠ 小紅書可愛風 ◡</div>
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
.cute-card {
  position: relative;
  border-radius: 32px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(255, 105, 180, 0.2);
  overflow: hidden;
  border: 3px dashed rgba(255, 255, 255, 0.5);
}

.cute-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  .star, .heart {
    position: absolute;
    opacity: 0.3;
    animation: float 3s ease-in-out infinite;
  }

  .star-1 {
    top: 20px;
    right: 40px;
    font-size: 24px;
    color: var(--accent-color);
  }

  .star-2 {
    top: 60%;
    left: 30px;
    font-size: 20px;
    color: var(--accent-color);
    animation-delay: 1s;
  }

  .star-3 {
    bottom: 100px;
    right: 60px;
    font-size: 18px;
    color: var(--accent-color);
    animation-delay: 2s;
  }

  .heart-1 {
    top: 45%;
    right: 25px;
    font-size: 22px;
    color: #ff69b4;
    animation-delay: 0.5s;
  }

  .heart-2 {
    bottom: 80px;
    left: 40px;
    font-size: 18px;
    color: #ff69b4;
    animation-delay: 1.5s;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.card-content {
  position: relative;
  z-index: 1;
}

.emoji-cloud {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  .cloud-shape {
    display: flex;
    gap: 8px;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .emoji-bubble {
      font-size: 24px;
      display: inline-block;
      animation: bounce 1s ease-in-out infinite;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }

      &:nth-child(4) {
        animation-delay: 0.6s;
      }
    }
  }
}

@keyframes bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.cute-title-box {
  position: relative;
  text-align: center;
  padding: 20px;
  margin-bottom: 32px;

  .title-corner {
    position: absolute;
    font-size: 24px;
    color: var(--accent-color);
    font-weight: bold;
  }

  .corner-tl {
    top: 0;
    left: 0;
  }

  .corner-tr {
    top: 0;
    right: 0;
  }

  .corner-bl {
    bottom: 0;
    left: 0;
  }

  .corner-br {
    bottom: 0;
    right: 0;
  }

  .cute-title {
    font-size: 2em;
    font-weight: 800;
    line-height: 1.4;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
}

.cute-content {
  margin-top: 24px;
}

.cute-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 24px 0 16px;

  .heading-deco {
    font-size: 20px;
    color: var(--accent-color);
  }

  h2 {
    font-size: 1.4em;
    font-weight: bold;
  }
}

.cute-paragraph {
  margin: 16px 0;
  line-height: 1.9;
  text-align: justify;
}

.cute-list {
  margin: 16px 0;
  padding-left: 0;
  list-style: none;
  
  li {
    margin: 12px 0;
    padding-left: 32px;
    line-height: 1.7;
    position: relative;

    .list-heart {
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-size: 16px;
    }
  }
}

.cute-quote {
  position: relative;
  margin: 24px 16px;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  text-align: center;

  .quote-deco {
    font-size: 32px;
    color: var(--accent-color);
    font-weight: bold;
  }

  .quote-deco-top {
    margin-bottom: 8px;
  }

  .quote-deco-bottom {
    margin-top: 8px;
  }

  .quote-text {
    font-style: italic;
    line-height: 1.8;
    font-size: 1.05em;
  }
}

.cute-code {
  background: rgba(255, 255, 255, 0.4);
  padding: 16px;
  border-radius: 16px;
  margin: 16px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  white-space: pre-wrap;
  word-break: break-word;
  border: 2px dotted var(--accent-color);
}

.cute-footer {
  margin-top: 48px;
  text-align: center;

  .footer-wave {
    font-size: 24px;
    color: var(--accent-color);
    margin-bottom: 8px;
    letter-spacing: 4px;
  }

  .footer-text {
    font-size: 0.95em;
    font-weight: 600;
    letter-spacing: 2px;
  }
}
</style>

