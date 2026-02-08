/**
 * 简历模板常量定义
 * 定义所有可用的简历样式模板
 */

export interface ResumeTemplate {
  id: string
  name: string
  description: string
  thumbnail?: string
  category: 'modern' | 'classic' | 'creative' | 'minimal'
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    textSecondary: string
  }
  fonts: {
    heading: string
    body: string
  }
  layout: 'single-column' | 'two-column' | 'sidebar'
}

export const RESUME_TEMPLATES: ResumeTemplate[] = [
  {
    id: 'neo-brutalism',
    name: '新野兽主义',
    description: '大胆的色块、粗黑边框、强烈对比，充满视觉冲击力',
    category: 'creative',
    colors: {
      primary: '#FF6B35',
      secondary: '#F7931E',
      accent: '#00D9FF',
      background: '#FFFEF2',
      text: '#1A1A1A',
      textSecondary: '#4A4A4A',
    },
    fonts: {
      heading: 'Space Grotesk, sans-serif',
      body: 'Inter, sans-serif',
    },
    layout: 'two-column',
  },
  {
    id: 'glassmorphism',
    name: '玻璃态',
    description: '半透明毛玻璃效果，柔和渐变，现代科技感',
    category: 'modern',
    colors: {
      primary: '#667EEA',
      secondary: '#764BA2',
      accent: '#F093FB',
      background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
      text: '#FFFFFF',
      textSecondary: 'rgba(255, 255, 255, 0.8)',
    },
    fonts: {
      heading: 'Outfit, sans-serif',
      body: 'DM Sans, sans-serif',
    },
    layout: 'single-column',
  },
  {
    id: 'swiss-design',
    name: '瑞士设计',
    description: '极简网格系统，精确排版，理性克制',
    category: 'minimal',
    colors: {
      primary: '#000000',
      secondary: '#E63946',
      accent: '#457B9D',
      background: '#FFFFFF',
      text: '#1D3557',
      textSecondary: '#6C757D',
    },
    fonts: {
      heading: 'Helvetica Neue, Arial, sans-serif',
      body: 'Helvetica Neue, Arial, sans-serif',
    },
    layout: 'two-column',
  },
  {
    id: 'cyberpunk',
    name: '赛博朋克',
    description: '霓虹色彩、未来科技、数字美学',
    category: 'creative',
    colors: {
      primary: '#00FFF0',
      secondary: '#FF00FF',
      accent: '#FFFF00',
      background: '#0A0E27',
      text: '#00FFF0',
      textSecondary: '#8B9DC3',
    },
    fonts: {
      heading: 'Orbitron, sans-serif',
      body: 'Rajdhani, sans-serif',
    },
    layout: 'sidebar',
  },
  {
    id: 'japanese-zen',
    name: '日式禅意',
    description: '留白艺术、和风配色、宁静优雅',
    category: 'minimal',
    colors: {
      primary: '#2C3E50',
      secondary: '#C9ADA7',
      accent: '#9A8C98',
      background: '#F8F5F2',
      text: '#22223B',
      textSecondary: '#4A4E69',
    },
    fonts: {
      heading: 'Noto Serif SC, serif',
      body: 'Noto Sans SC, sans-serif',
    },
    layout: 'single-column',
  },
  {
    id: 'art-deco',
    name: '装饰艺术',
    description: '几何图案、奢华金色、复古优雅',
    category: 'classic',
    colors: {
      primary: '#C9A961',
      secondary: '#2C3E50',
      accent: '#8B7355',
      background: '#1A1A1D',
      text: '#F5F5F5',
      textSecondary: '#C3C3C3',
    },
    fonts: {
      heading: 'Playfair Display, serif',
      body: 'Lato, sans-serif',
    },
    layout: 'two-column',
  },
  {
    id: 'nordic-minimal',
    name: '北欧极简',
    description: '清新淡雅、自然舒适、功能至上',
    category: 'minimal',
    colors: {
      primary: '#5E6472',
      secondary: '#A8DADC',
      accent: '#E63946',
      background: '#F1FAEE',
      text: '#1D3557',
      textSecondary: '#457B9D',
    },
    fonts: {
      heading: 'Montserrat, sans-serif',
      body: 'Open Sans, sans-serif',
    },
    layout: 'single-column',
  },
  {
    id: 'gradient-flow',
    name: '渐变流动',
    description: '流体渐变、动感曲线、活力四射',
    category: 'modern',
    colors: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      accent: '#FFE66D',
      background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%)',
      text: '#FFFFFF',
      textSecondary: 'rgba(255, 255, 255, 0.85)',
    },
    fonts: {
      heading: 'Poppins, sans-serif',
      body: 'Nunito, sans-serif',
    },
    layout: 'sidebar',
  },
]

export const getTemplateById = (id: string): ResumeTemplate | undefined => {
  return RESUME_TEMPLATES.find((template) => template.id === id)
}

export const getTemplatesByCategory = (
  category: ResumeTemplate['category']
): ResumeTemplate[] => {
  return RESUME_TEMPLATES.filter((template) => template.category === category)
}

