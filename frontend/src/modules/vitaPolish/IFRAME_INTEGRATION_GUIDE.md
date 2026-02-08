# iframe 方案快速集成指南

## 🚀 快速开始

### 1. 添加路由

在你的路由配置文件中添加预览页面路由：

```typescript
// frontend/src/router/index.ts
{
  path: '/vitaPolish/preview',
  name: 'ResumePreview',
  component: () => import('@/modules/vitaPolish/views/ResumePreviewPage.vue'),
}
```

### 2. 更新 ResumeOptimizer.vue

```vue
<script setup>
import { ref } from 'vue'
import ResumeRenderer from '../components/resume/ResumeRenderer.vue'
import ResumeRendererIframe from '../components/resume/ResumeRendererIframe.vue'

// 添加切换开关
const useIframeRenderer = ref(true) // 默认使用 iframe 方案
</script>

<template>
  <v-row>
    <v-col cols="12" xl="4" lg="5" md="5">
      <!-- 添加切换开关 -->
      <v-card elevation="2" class="mb-4">
        <v-card-text>
          <v-switch
            v-model="useIframeRenderer"
            label="使用 iframe 渲染（推荐，样式完全隔离）"
            color="primary"
            hide-details
            class="mb-2"
          />
          <v-alert
            v-if="useIframeRenderer"
            type="info"
            variant="tonal"
            density="compact"
          >
            iframe 模式：导出效果与预览完全一致
          </v-alert>
          <v-alert
            v-else
            type="warning"
            variant="tonal"
            density="compact"
          >
            直接渲染模式：可能存在样式差异
          </v-alert>
        </v-card-text>
      </v-card>

      <!-- 导出状态提示 -->
      <v-alert
        v-if="exportState.loading"
        type="info"
        variant="tonal"
        class="mb-4"
      >
        {{ exportState.message }}
      </v-alert>
      <v-alert
        v-if="exportState.success"
        type="success"
        variant="tonal"
        class="mb-4"
      >
        {{ exportState.message }}
      </v-alert>
      <v-alert
        v-if="exportState.error"
        type="error"
        variant="tonal"
        class="mb-4"
      >
        {{ exportState.error }}
      </v-alert>

      <!-- 条件渲染两种方案 -->
      <ResumeRendererIframe
        v-if="useIframeRenderer"
        ref="resumeRendererRef"
        :resume="resume"
        @export-start="handleExportStart"
        @export-success="handleExportSuccess"
        @export-error="handleExportError"
      />

      <ResumeRenderer
        v-else
        ref="resumeRendererRef"
        :resume="resume"
        @export-start="handleExportStart"
        @export-success="handleExportSuccess"
        @export-error="handleExportError"
      />
    </v-col>
  </v-row>
</template>
```

## ✅ 完成！

现在你有两种渲染方案可选：

1. **iframe 方案**（推荐）- 样式完全隔离，导出效果完美
2. **直接渲染**（备选）- 实现简单，但可能有样式差异

## 🎯 验证步骤

1. 启动应用
2. 打开简历编辑页面
3. 切换 iframe 开关
4. 对比两种方案的显示效果
5. 测试导出功能

## 📝 注意事项

- iframe 方案首次加载可能稍慢（约 100ms）
- 确保路由配置正确
- 检查浏览器控制台是否有错误

## 🐛 故障排查

### 问题：iframe 显示空白

**解决方案：**
1. 检查路由是否正确配置
2. 查看浏览器控制台错误
3. 确认 ResumePreviewPage.vue 文件存在

### 问题：导出失败

**解决方案：**
1. 打开浏览器控制台查看详细日志
2. 确认 iframe 已完全加载（previewReady = true）
3. 检查 html2canvas 是否正确安装

### 问题：样式仍然不一致

**解决方案：**
1. 确认使用的是 iframe 方案
2. 清除浏览器缓存
3. 检查模板组件是否正确导入

## 💡 最佳实践

1. **默认使用 iframe 方案** - 确保最佳效果
2. **保留切换选项** - 方便调试和对比
3. **添加加载提示** - 改善用户体验
4. **错误处理** - 提供友好的错误提示

---

**现在你的简历渲染系统已经完全隔离，导出效果完美！** 🎉

