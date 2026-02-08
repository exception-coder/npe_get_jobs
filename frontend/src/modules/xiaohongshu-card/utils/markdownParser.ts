export interface ParsedContent {
  title: string;
  sections: ContentSection[];
}

export interface ContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'quote' | 'code';
  content: string;
  level?: number;
  items?: string[];
}

/**
 * 解析 Markdown 文本
 */
export function parseMarkdown(markdown: string): ParsedContent {
  const lines = markdown.split('\n');
  const sections: ContentSection[] = [];
  let title = '';
  let currentList: string[] = [];
  let inCodeBlock = false;
  let codeContent = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 代碼塊
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        sections.push({
          type: 'code',
          content: codeContent.trim(),
        });
        codeContent = '';
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      continue;
    }

    // 保存之前的列表
    if (currentList.length > 0 && !line.trim().match(/^[-*]\s/)) {
      sections.push({
        type: 'list',
        content: '',
        items: [...currentList],
      });
      currentList = [];
    }

    // 標題
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const content = headingMatch[2].trim();
      
      if (level === 1 && !title) {
        title = content;
      } else {
        sections.push({
          type: 'heading',
          content,
          level,
        });
      }
      continue;
    }

    // 引用
    if (line.trim().startsWith('>')) {
      sections.push({
        type: 'quote',
        content: line.replace(/^>\s*/, '').trim(),
      });
      continue;
    }

    // 列表
    const listMatch = line.match(/^[-*]\s+(.+)$/);
    if (listMatch) {
      currentList.push(listMatch[1].trim());
      continue;
    }

    // 普通段落
    if (line.trim()) {
      sections.push({
        type: 'paragraph',
        content: line.trim(),
      });
    }
  }

  // 保存最後的列表
  if (currentList.length > 0) {
    sections.push({
      type: 'list',
      content: '',
      items: currentList,
    });
  }

  return {
    title,
    sections,
  };
}

/**
 * 將普通文本轉換為小紅書風格
 */
export function convertToXiaohongshuStyle(text: string): string {
  // 自動添加 emoji 和換行
  let styled = text;

  // 為標題添加裝飾
  styled = styled.replace(/^(.+)$/gm, (match) => {
    if (match.length < 20) {
      return `✨ ${match} ✨`;
    }
    return match;
  });

  // 添加段落間距
  styled = styled.replace(/\n\n/g, '\n\n─────────\n\n');

  return styled;
}

/**
 * 提取文本中的關鍵詞
 */
export function extractKeywords(text: string): string[] {
  // 簡單的關鍵詞提取邏輯
  const words = text.match(/[\u4e00-\u9fa5]{2,}/g) || [];
  const uniqueWords = Array.from(new Set(words));
  return uniqueWords.slice(0, 5);
}

