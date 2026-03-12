# ResumeOptimizer 架构快速参考

## 文件结构速查

```
vitaPolish/
├── views/
│   └── ResumeOptimizer.vue              ← 主页面（只做协调）
├── composables/
│   ├── useResumeData.ts                 ← 简历数据管理
│   ├── useAiCompletion.ts               ← AI 补全逻辑
│   ├── useProjectOptimization.ts        ← 项目优化逻辑
│   └── useResumeManagement.ts           ← 简历管理逻辑
├── components/
│   ├── sections/
│   │   ├── ResumeManagementSection.vue  ← 简历管理 UI
│   │   ├── PersonalInfoSection.vue      ← 个人信息 UI
│   │   ├── CoreSkillsSection.vue        ← 核心技能 UI
│   │   ├── StrengthsSection.vue         ← 个人优势 UI
│   │   ├── DesiredRoleSection.vue       ← 期望职位 UI
│   │   ├── AiCompletionSection.vue      ← AI 补全结果 UI
│   │   ├── WorkExperienceSection.vue    ← 工作经历 UI
│   │   ├── ProjectExperienceSection.vue ← 项目经历 UI
│   │   ├── EducationSection.vue         ← 教育经历 UI
│   │   ├── OptimizationSuggestionsSection.vue ← 优化建议 UI
│   │   └── SaveResumeSection.vue        ← 保存简历 UI
│   └── resume/
│       ├── ResumePreview.vue
│       ├── ResumeRenderer.vue
│       └── ResumeSectionCard.vue
├── service/
│   └── resumeApplyService.ts            ← 工具函数
├── api/
│   ├── resume.js
│   ├── jobSkill.js
│   └── projectOptimization.js
└── REFACTOR_SUMMARY.md                  ← 重构文档
```

---

## 快速查找

### 我要修改"个人信息"功能

**修改 UI？**
→ `components/sections/PersonalInfoSection.vue`

**修改业务逻辑？**
→ `composables/useResumeData.ts` 中的 `applyResumeData()` 等方法

**修改数据保存？**
→ `composables/useResumeData.ts` 中的 `handleSaveResume()`

---

### 我要修改"AI 补全"功能

**修改 UI？**
→ `components/sections/AiCompletionSection.vue`

**修改 AI 逻辑？**
→ `composables/useAiCompletion.ts` 中的 `triggerAiCompletion()`

**修改数据应用？**
→ `service/resumeApplyService.ts` 中的 `applySuggestedXxx()` 函数

---

### 我要修改"项目优化"功能

**修改 UI？**
→ `components/sections/ProjectExperienceSection.vue`

**修改优化逻辑？**
→ `composables/useProjectOptimization.ts` 中的 `optimizeProjectSummary()` 等

**修改项目排序？**
→ `composables/useResumeManagement.ts` 中的 `sortProjectsByPeriod()`

---

### 我要添加新功能

**步骤：**

1. 创建 Composable（如果需要业务逻辑）
```typescript
// composables/useNewFeature.ts
export function useNewFeature() {
  const state = reactive({})
  const method = () => {}
  return { state, method }
}
```

2. 创建 Component（UI 展示）
```vue
<!-- components/sections/NewFeatureSection.vue -->
<script setup>
defineProps({ /* ... */ })
defineEmits(['event'])
</script>
<template><!-- UI --></template>
```

3. 在 View 中使用
```vue
<!-- views/ResumeOptimizer.vue -->
<script setup>
import { useNewFeature } from '../composables/useNewFeature'
import NewFeatureSection from '../components/sections/NewFeatureSection.vue'

const { state, method } = useNewFeature()
</script>

<template>
  <NewFeatureSection :state="state" @event="method" />
</template>
```

---

## 数据流速查

### 用户点击"AI 智能补全"按钮

```
PersonalInfoSection.vue
  ↓ @trigger-ai-completion
ResumeOptimizer.vue (View)
  ↓ handleTriggerAiCompletion()
useAiCompletion.ts (Composable)
  ↓ triggerAiCompletion()
jobSkill.js (API)
  ↓ analyzeJobSkill()
Backend
  ↓ 返回 AI 结果
jobSkill.js
  ↓ 返回数据
useAiCompletion.ts
  ↓ 更新 aiCompletion.result
ResumeOptimizer.vue
  ↓ 传递给 AiCompletionSection
AiCompletionSection.vue
  ↓ 渲染 AI 结果
用户看到结果
```

### 用户点击"应用到当前头衔"

```
AiCompletionSection.vue
  ↓ @apply-personal-title
ResumeOptimizer.vue (View)
  ↓ resume.personalInfo.title = aiCompletion.result?.inferredJobTitle
resume 对象更新
  ↓ 自动保存到本地存储（watch 监听）
useResumeData.ts
  ↓ saveResumeToStorage()
localStorage
```

### 用户点击"保存简历"

```
SaveResumeSection.vue
  ↓ @save-resume
ResumeOptimizer.vue (View)
  ↓ handleSaveResume()
useResumeData.ts (Composable)
  ↓ handleSaveResume()
resume.js (API)
  ↓ saveResume()
Backend
  ↓ 保存数据
Backend
  ↓ 返回 resumeId
resume.js
  ↓ 返回数据
useResumeData.ts
  ↓ 更新 saveState
ResumeOptimizer.vue
  ↓ 传递给 SaveResumeSection
SaveResumeSection.vue
  ↓ 显示成功提示
用户看到成功消息
```

---

## 常用 Composable 方法

### useResumeData

```typescript
const {
  resume,                      // 简历数据对象
  resumeListState,            // 简历列表状态
  resumeLoadState,            // 简历加载状态
  saveState,                  // 保存状态
  loadResumeList,             // 加载简历列表
  selectResume,               // 选择简历
  createNewResume,            // 创建新简历
  handleSaveResume,           // 保存简历
  loadResumeFromStorage,      // 从本地存储加载
} = useResumeData()
```

### useAiCompletion

```typescript
const {
  aiCompletion,               // AI 补全状态和结果
  canTriggerAiCompletion,     // 是否可以触发 AI 补全
  triggerAiCompletion,        // 触发 AI 补全
} = useAiCompletion()
```

### useProjectOptimization

```typescript
const {
  projectOptimizationStates,  // 项目优化状态 Map
  getProjectState,            // 获取项目状态
  optimizeProjectSummary,     // 优化项目概述
  optimizeProjectHighlights,  // 优化项目成果
  applyOptimizedSummary,      // 应用优化的概述
  applyOptimizedAchievements, // 应用优化的成果
} = useProjectOptimization()
```

### useResumeManagement

```typescript
const {
  experienceOptions,          // 工作年限选项
  optimisationFocus,          // 优化焦点
  suggestions,                // 优化建议
  lastGeneratedAt,            // 最后生成时间
  exportState,                // 导出状态
  generateSuggestions,        // 生成优化建议
  addWorkExperience,          // 添加工作经历
  removeWorkExperience,       // 删除工作经历
  addProject,                 // 添加项目
  removeProject,              // 删除项目
  addEducation,               // 添加教育
  removeEducation,            // 删除教育
  mergeUnique,                // 合并唯一值
  applySuggestedProjects,     // 应用推荐项目
  handleExportStart,          // 导出开始
  handleExportSuccess,        // 导出成功
  handleExportError,          // 导出错误
} = useResumeManagement()
```

---

## 常用 Service 函数

```typescript
import {
  copyTextToClipboard,              // 复制到剪贴板
  applySuggestedPersonalTitle,      // 应用推荐头衔
  applySuggestedExperience,         // 应用推荐经验
  applySuggestedTechStack,          // 应用推荐技术栈
  applySuggestedEssentialStrengths, // 应用推荐优势
  applySuggestedRelatedDomains,     // 应用推荐领域
  applySuggestedDesiredRoleTitle,   // 应用推荐职位
  applySuggestedHotIndustries,      // 应用推荐行业
} from '../service/resumeApplyService'
```

---

## Props 和 Events 速查

### PersonalInfoSection

**Props:**
- `resume: Object` - 简历数据
- `aiCompletion: Object` - AI 补全结果
- `canTriggerAiCompletion: Boolean` - 是否可触发

**Events:**
- `@trigger-ai-completion` - 触发 AI 补全
- `@apply-personal-title` - 应用推荐头衔
- `@apply-experience` - 应用推荐经验

### ProjectExperienceSection

**Props:**
- `resume: Object` - 简历数据
- `aiCompletion: Object` - AI 补全结果
- `getProjectState: Function` - 获取项目状态

**Events:**
- `@add-project` - 添加项目
- `@remove-project` - 删除项目
- `@optimize-project-summary` - 优化项目概述
- `@optimize-project-highlights` - 优化项目成果
- `@apply-optimized-summary` - 应用优化概述
- `@apply-optimized-achievements` - 应用优化成果
- `@apply-suggested-projects` - 应用推荐项目

---

## 调试技巧

### 查看简历数据
```javascript
// 在浏览器控制台
localStorage.getItem('vita-polish:resume')
```

### 查看 AI 补全结果
```vue
<!-- 在 View 中添加调试代码 -->
<pre>{{ JSON.stringify(aiCompletion.result, null, 2) }}</pre>
```

### 查看项目优化状态
```vue
<!-- 在 ProjectExperienceSection 中 -->
<pre>{{ JSON.stringify(getProjectState(project), null, 2) }}</pre>
```

---

## 常见问题

**Q: 为什么修改了 resume 数据后没有自动保存？**
A: 检查 `useResumeData.ts` 中的 `watch` 是否正确监听了 `resume` 对象。

**Q: 为什么 AI 补全没有返回结果？**
A: 检查 `useAiCompletion.ts` 中的 `triggerAiCompletion()` 是否正确调用了 API。

**Q: 为什么项目排序不对？**
A: 检查 `useResumeManagement.ts` 中的 `parsePeriod()` 是否正确解析了时间格式。

**Q: 如何添加新的 Section？**
A: 参考上面的"我要添加新功能"部分。

---

## 性能优化建议

1. **使用 `v-memo` 优化列表渲染**
```vue
<v-expansion-panel v-for="(item, index) in items" v-memo="[item]" :key="index">
  <!-- 内容 -->
</v-expansion-panel>
```

2. **使用 `computed` 代替 `watch`**
```typescript
const totalHighlights = computed(() =>
  resume.workExperiences.reduce((acc, exp) => acc + exp.highlights.length, 0)
)
```

3. **使用异步组件延迟加载**
```typescript
const ProjectExperienceSection = defineAsyncComponent(() =>
  import('../components/sections/ProjectExperienceSection.vue')
)
```

---

## 下一步

- [ ] 添加单元测试
- [ ] 添加集成测试
- [ ] 性能优化
- [ ] 添加更多 AI 功能
- [ ] 支持多语言
