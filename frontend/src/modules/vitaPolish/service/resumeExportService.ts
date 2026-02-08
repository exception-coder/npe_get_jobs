/**
 * 简历导出服务
 * 负责将简历导出为图片格式
 */

import html2canvas from 'html2canvas'

export interface ExportOptions {
  format: 'png' | 'jpeg'
  quality?: number // 0-1, 仅对 jpeg 有效
  scale?: number // 导出图片的缩放比例，默认 2（高清）
  backgroundColor?: string
  filename?: string
  debug?: boolean // 调试模式，显示 canvas 预览
}

export class ResumeExportService {
  /**
   * 将 DOM 元素导出为图片
   */
  static async exportToImage(
    element: HTMLElement,
    options: ExportOptions = { format: 'png' }
  ): Promise<Blob> {
    const {
      format = 'png',
      quality = 0.95,
      scale = 2,
      backgroundColor = '#ffffff',
    } = options

    try {
      // 等待所有图片和字体加载完成
      await document.fonts.ready
      await this.waitForImages(element)

      // 获取元素的实际尺寸
      const rect = element.getBoundingClientRect()
      const width = element.scrollWidth || rect.width
      const height = element.scrollHeight || rect.height

      console.log('Exporting element:', { width, height, scale })

      const canvas = await html2canvas(element, {
        scale,
        backgroundColor,
        useCORS: true,
        allowTaint: false,
        logging: true, // 开启日志以便调试
        width,
        height,
        windowWidth: width,
        windowHeight: height,
        scrollX: 0,
        scrollY: 0,
        x: 0,
        y: 0,
        // 强制使用更好的渲染模式
        foreignObjectRendering: false,
        // 忽略某些可能导致问题的元素
        ignoreElements: (element) => {
          // 忽略某些可能导致问题的元素
          return element.classList?.contains('v-overlay') || 
                 element.classList?.contains('v-menu') ||
                 element.tagName === 'IFRAME'
        },
        // 在渲染前克隆元素并应用计算样式
        onclone: (clonedDoc, clonedElement) => {
          // 递归应用所有计算样式到内联样式
          this.applyComputedStylesToClone(element, clonedElement)
        },
      })

      console.log('Canvas created:', { width: canvas.width, height: canvas.height })

      // 调试模式：显示 canvas 预览
      if (options.debug) {
        this.showCanvasPreview(canvas)
      }

      // 使用 Promise 包装 toBlob
      return new Promise((resolve, reject) => {
        try {
          canvas.toBlob(
            (blob) => {
              if (blob) {
                console.log('Blob created successfully:', blob.size, 'bytes')
                resolve(blob)
              } else {
                console.error('toBlob returned null')
                reject(new Error('Failed to create blob from canvas'))
              }
            },
            format === 'jpeg' ? 'image/jpeg' : 'image/png',
            quality
          )
        } catch (error) {
          console.error('toBlob error:', error)
          reject(error)
        }
      })
    } catch (error) {
      console.error('Export to image failed:', error)
      throw new Error(`导出失败: ${error.message || '未知错误'}`)
    }
  }

  /**
   * 递归应用计算样式到克隆元素（完全内联化）
   */
  private static applyComputedStylesToClone(original: HTMLElement, cloned: HTMLElement): void {
    const computedStyle = window.getComputedStyle(original)
    
    // 关键样式属性列表 - 这些是 html2canvas 需要的
    const criticalStyles = [
      // 布局相关
      'display', 'position', 'float', 'clear',
      'flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content',
      'flex-grow', 'flex-shrink', 'flex-basis', 'order',
      'grid-template-columns', 'grid-template-rows', 'grid-gap', 'gap',
      
      // 尺寸相关
      'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height',
      'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
      'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
      
      // 边框相关
      'border', 'border-width', 'border-style', 'border-color', 'border-radius',
      
      // 背景相关
      'background', 'background-color', 'background-image', 'background-size',
      'background-position', 'background-repeat',
      
      // 文字相关
      'color', 'font-family', 'font-size', 'font-weight', 'font-style',
      'line-height', 'text-align', 'text-decoration', 'text-transform',
      'letter-spacing', 'word-spacing', 'white-space', 'word-wrap', 'word-break',
      
      // 定位相关
      'top', 'right', 'bottom', 'left', 'z-index',
      
      // 其他
      'opacity', 'visibility', 'overflow', 'overflow-x', 'overflow-y',
      'box-shadow', 'text-shadow', 'transform', 'vertical-align'
    ]
    
    // 应用所有关键样式
    criticalStyles.forEach(prop => {
      const value = computedStyle.getPropertyValue(prop)
      if (value && value !== 'none' && value !== 'normal' && value !== 'auto') {
        cloned.style.setProperty(prop, value, 'important')
      }
    })
    
    // 特殊处理：确保 flex 容器的子元素也正确显示
    if (computedStyle.display === 'flex' || computedStyle.display === 'inline-flex') {
      cloned.style.setProperty('display', computedStyle.display, 'important')
      cloned.style.setProperty('flex-direction', computedStyle.flexDirection, 'important')
      cloned.style.setProperty('flex-wrap', computedStyle.flexWrap, 'important')
      cloned.style.setProperty('justify-content', computedStyle.justifyContent, 'important')
      cloned.style.setProperty('align-items', computedStyle.alignItems, 'important')
      cloned.style.setProperty('gap', computedStyle.gap, 'important')
      
      console.log('Applied flex styles to:', cloned.className, {
        display: computedStyle.display,
        flexDirection: computedStyle.flexDirection,
        gap: computedStyle.gap
      })
    }
    
    // 特殊处理：inline 和 inline-block 元素
    if (computedStyle.display === 'inline' || computedStyle.display === 'inline-block') {
      cloned.style.setProperty('display', computedStyle.display, 'important')
      cloned.style.setProperty('white-space', computedStyle.whiteSpace, 'important')
      
      console.log('Applied inline styles to:', cloned.className, {
        display: computedStyle.display,
        whiteSpace: computedStyle.whiteSpace
      })
    }
    
    // 递归处理所有子元素
    const originalChildren = Array.from(original.children) as HTMLElement[]
    const clonedChildren = Array.from(cloned.children) as HTMLElement[]
    
    originalChildren.forEach((child, index) => {
      if (clonedChildren[index]) {
        this.applyComputedStylesToClone(child, clonedChildren[index])
      }
    })
  }

  /**
   * 等待元素内的所有图片加载完成
   */
  private static async waitForImages(element: HTMLElement): Promise<void> {
    const images = element.querySelectorAll('img')
    const promises = Array.from(images).map((img) => {
      if (img.complete) {
        return Promise.resolve()
      }
      return new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = resolve // 即使图片加载失败也继续
        setTimeout(resolve, 3000) // 3秒超时
      })
    })
    await Promise.all(promises)
  }

  /**
   * 显示 Canvas 预览（调试模式）
   */
  private static showCanvasPreview(canvas: HTMLCanvasElement): void {
    // 创建模态框
    const modal = document.createElement('div')
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    `

    // 创建标题
    const title = document.createElement('div')
    title.textContent = 'Canvas 预览（这就是将要导出的效果）'
    title.style.cssText = `
      color: white;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    `

    // 创建信息栏
    const info = document.createElement('div')
    info.innerHTML = `
      <div style="color: #4CAF50; margin-bottom: 10px;">
        ✓ Canvas 尺寸: ${canvas.width} × ${canvas.height}
      </div>
      <div style="color: #2196F3; margin-bottom: 10px;">
        ℹ️ 如果预览效果不正确，说明 html2canvas 渲染有问题
      </div>
      <div style="color: #FF9800;">
        ⚠️ 请对比页面显示和这个预览，找出差异
      </div>
    `
    info.style.cssText = `
      color: white;
      font-size: 14px;
      margin-bottom: 20px;
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 8px;
    `

    // 创建容器
    const container = document.createElement('div')
    container.style.cssText = `
      max-width: 90%;
      max-height: 70%;
      overflow: auto;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    `

    // 将 canvas 转换为图片显示
    const img = document.createElement('img')
    img.src = canvas.toDataURL('image/png')
    img.style.cssText = `
      display: block;
      max-width: 100%;
      height: auto;
    `

    // 创建按钮容器
    const buttonContainer = document.createElement('div')
    buttonContainer.style.cssText = `
      margin-top: 20px;
      display: flex;
      gap: 10px;
    `

    // 创建关闭按钮
    const closeButton = document.createElement('button')
    closeButton.textContent = '关闭预览'
    closeButton.style.cssText = `
      padding: 12px 24px;
      background: #f44336;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    `
    closeButton.onclick = () => document.body.removeChild(modal)

    // 创建继续导出按钮
    const continueButton = document.createElement('button')
    continueButton.textContent = '继续导出'
    continueButton.style.cssText = `
      padding: 12px 24px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    `
    continueButton.onclick = () => {
      document.body.removeChild(modal)
      // 触发实际导出
      const link = document.createElement('a')
      link.download = `resume-debug-${Date.now()}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }

    // 创建复制信息按钮
    const copyInfoButton = document.createElement('button')
    copyInfoButton.textContent = '复制调试信息'
    copyInfoButton.style.cssText = `
      padding: 12px 24px;
      background: #2196F3;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    `
    copyInfoButton.onclick = () => {
      const debugInfo = `
Canvas 调试信息
================
尺寸: ${canvas.width} × ${canvas.height}
时间: ${new Date().toLocaleString()}

请检查：
1. 页面显示的布局（横向/纵向）
2. Canvas 预览的布局（横向/纵向）
3. 如果不一致，说明 CSS 样式没有被正确应用

可能的原因：
- Flexbox 布局问题
- CSS 媒体查询
- 动态计算的样式
- 伪元素样式
      `.trim()
      
      navigator.clipboard.writeText(debugInfo).then(() => {
        copyInfoButton.textContent = '✓ 已复制'
        setTimeout(() => {
          copyInfoButton.textContent = '复制调试信息'
        }, 2000)
      })
    }

    // 组装元素
    container.appendChild(img)
    buttonContainer.appendChild(closeButton)
    buttonContainer.appendChild(continueButton)
    buttonContainer.appendChild(copyInfoButton)
    modal.appendChild(title)
    modal.appendChild(info)
    modal.appendChild(container)
    modal.appendChild(buttonContainer)
    document.body.appendChild(modal)

    // ESC 键关闭
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        document.body.removeChild(modal)
        document.removeEventListener('keydown', handleEsc)
      }
    }
    document.addEventListener('keydown', handleEsc)
  }

  /**
   * 下载图片
   */
  static downloadImage(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  /**
   * 导出并下载简历图片
   */
  static async exportAndDownload(
    element: HTMLElement,
    options: ExportOptions = { format: 'png' }
  ): Promise<void> {
    const { format = 'png', filename = `resume-${Date.now()}` } = options

    try {
      const blob = await this.exportToImage(element, options)
      const fullFilename = `${filename}.${format}`
      this.downloadImage(blob, fullFilename)
    } catch (error) {
      console.error('Export and download failed:', error)
      throw error
    }
  }

  /**
   * 复制图片到剪贴板
   */
  static async copyToClipboard(element: HTMLElement, options: ExportOptions = { format: 'png' }): Promise<void> {
    try {
      const blob = await this.exportToImage(element, options)
      
      if (navigator.clipboard && window.ClipboardItem) {
        const item = new ClipboardItem({ [blob.type]: blob })
        await navigator.clipboard.write([item])
      } else {
        throw new Error('Clipboard API not supported')
      }
    } catch (error) {
      console.error('Copy to clipboard failed:', error)
      throw error
    }
  }

  /**
   * 获取图片的 Data URL
   */
  static async getDataURL(
    element: HTMLElement,
    options: ExportOptions = { format: 'png' }
  ): Promise<string> {
    const blob = await this.exportToImage(element, options)
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  }
}

