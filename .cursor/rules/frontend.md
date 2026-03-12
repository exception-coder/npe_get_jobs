# npe_get_jobs 前端项目架构与编码规则

## 核心原则（必须遵守）

- **职责分离**：每层只做本层该做的事，不在 View 写业务逻辑。
- **低耦合高内聚**：通过 Composables 分离业务逻辑，通过 Components 分离 UI 展示。
- **可维护性优先**：结构简单、边界清晰、便于单测与后续扩展。
- **代码质量**：遵循 Vue 3 Composition API 最佳实践。
- **团队维护**：义务团队维护开发，代码必须易于理解和扩展。

---

## 分层架构（Vue 3 Composition API）

```
User Interaction → View → Components + Composables → Services → API → Backend
```

| 层 | 位置 | 职责 | 禁止 | 示例 |
|----|------|------|------|------|
| **View（页面）** | `views/` 或 `modules/*/views/` | 页面容器：组织 Composables、协调 Components、处理页面级状态 | 业务逻辑、直接操作 DOM、复杂计算、API 调用 | `UserPage.vue` 组织 `useUserData` 和 `UserForm` 组件 |
| **Components（组件）** | `components/` 或 `modules/*/components/` | UI 展示：接收 Props、触发 Events、渲染模板、处理用户交互 | 业务逻辑、API 调用、复杂状态管理、直接修改 Props | `UserForm.vue` 接收 `user` Props，触发 `@submit` 事件 |
| **Composables（组合式函数）** | `composables/` 或 `modules/*/composables/` | 业务逻辑：状态管理、API 调用、数据处理、事件处理 | UI 渲染、DOM 操作、直接修改 Props、跨模块状态共享 | `useUserData.ts` 管理用户数据状态和 API 调用 |
| **Services（服务）** | `service/` 或 `modules/*/service/` | 工具函数：数据转换、格式化、通用工具、业务规则 | 业务决策、状态管理、API 调用 | `userService.ts` 提供数据格式化函数 |
| **API（接口）** | `api/` 或 `modules/*/api/` | HTTP 请求：与后端通信、请求封装 | 业务逻辑、数据处理、状态管理 | `userApi.ts` 提供 `getUser()`、`saveUser()` 等 API 调用 |

**依赖方向**：View → Components + Composables → Services → API

---

## 项目结构规范

### 前端源代码结构

```
frontend/src/
├── api/                           # 全局 API 层
│   ├── http.ts                    # HTTP 客户端配置
│   ├── userApi.ts
│   ├── jobApi.ts
│   └── ...
├── modules/                       # 业务模块（按功能拆分）
│   ├── user/
│   │   ├── views/                 # 页面容器
│   │   │   ├── UserPage.vue
│   │   │   └── UserDetailPage.vue
│   │   ├── components/            # UI 组件
│   │   │   ├── UserForm.vue
│   │   │   ├── UserList.vue
│   │   │   ├── UserCard.vue
│   │   │   └── sections/          # 页面分区组件
│   │   │       ├── PersonalInfoSection.vue
│   │   │       └── ContactInfoSection.vue
│   │   ├── composables/           # 业务逻辑
│   │   │   ├── useUserData.ts
│   │   │   ├── useUserForm.ts
│   │   │   └── useUserValidation.ts
│   │   ├── service/               # 工具函数
│   │   │   ├── userService.ts
│   │   │   └── userFormatter.ts
│   │   ├── api/                   # 本模块 API
│   │   │   └── userApi.ts
│   │   ├── types/                 # 类型定义
│   │   │   └── user.ts
│   │   ├── constants/             # 常量
│   │   │   └── userConstants.ts
│   │   └── stores/                # 模块级状态（如需要）
│   │       └── userStore.ts
│   ├── job/
│   │   ├── views/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── service/
│   │   ├── api/
│   │   ├── types/
│   │   ├── constants/
│   │   └── stores/
│   ├── resume/
│   │   ├── views/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── service/
│   │   ├── api/
│   │   ├── types/
│   │   ├── constants/
│   │   └── stores/
│   └── ...
├── components/                    # 通用组件
│   ├── GlobalSnackbar.vue
│   ├── StatusChip.vue
│   ├── CascaderSelect.vue
│   └── ...
├── composables/                   # 通用组合式函数
│   ├── useTaskExecutor.ts
│   ├── useNotification.ts
│   └── ...
├── common/                        # 通用模块
│   ├── infrastructure/
│   │   └── auth/
│   │       └── auth.ts
│   └── ...
├── plugins/                       # Vue 插件
│   ├── vuetify.ts
│   └── vxe-table.ts
├── router/                        # 路由配置
│   └── index.ts
├── stores/                        # 全局状态（Pinia）
│   ├── snackbar.ts
│   └── auth.ts
├── styles/                        # 全局样式
│   └── main.scss
├── types/                         # 全局类型
│   └── ...
├── App.vue
└── main.ts
```

---

## 前端编码规范

### View（页面）规范

**职责：**
- 导入并组织 Composables、Components
- 处理页面级的状态协调
- 将数据和事件传递给 Components
- 处理页面级的加载、错误状态

**禁止：**
- ❌ 复杂的业务逻辑
- ❌ 直接调用 API
- ❌ 复杂的数据转换
- ❌ 直接操作 DOM

**示例：**

```vue
<template>
  <div class="user-page">
    <UserForm 
      :user="userData.user" 
      :loading="userData.loading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { useUserData } from '../composables/useUserData'
import UserForm from '../components/UserForm.vue'

const userData = useUserData()

const handleSubmit = async (formData) => {
  await userData.saveUser(formData)
}
</script>
```

### Components（组件）规范

**职责：**
- 接收 Props 数据
- 触发 Events 事件
- 渲染 UI 模板
- 处理用户交互（点击、输入等）

**禁止：**
- ❌ 调用 API
- ❌ 业务逻辑
- ❌ 直接修改 Props
- ❌ 使用 `v-model` 修改父组件数据
- ❌ 复杂的状态管理

**示例：**

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <input 
      v-model="formData.name" 
      placeholder="用户名"
    />
    <button type="submit" :disabled="loading">
      {{ loading ? '保存中...' : '保存' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '../types/user'

interface Props {
  user?: User
  loading?: boolean
}

interface Emits {
  (e: 'submit', data: User): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const formData = ref<User>({
  name: '',
  email: ''
})

const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>
```

### Composables（组合式函数）规范

**职责：**
- 管理业务状态（reactive）
- 调用 API
- 处理数据转换
- 提供业务方法
- 处理错误和加载状态

**禁止：**
- ❌ UI 渲染
- ❌ DOM 操作
- ❌ 直接修改 Props
- ❌ 跨模块状态共享（除非通过 Pinia）

**规范：**
- 使用 `reactive` 管理状态
- 使用 `computed` 计算派生状态
- 使用 `watch` 监听状态变化
- 返回状态和方法供 View 使用
- 不涉及 UI 渲染

**示例：**

```typescript
// composables/useUserData.ts
import { reactive, computed } from 'vue'
import { getUserList, saveUser } from '../api/userApi'
import type { User } from '../types/user'

export function useUserData() {
  const state = reactive({
    users: [] as User[],
    loading: false,
    error: null as string | null
  })

  const userCount = computed(() => state.users.length)

  const fetchUsers = async () => {
    state.loading = true
    state.error = null
    try {
      state.users = await getUserList()
    } catch (err) {
      state.error = err instanceof Error ? err.message : '获取用户列表失败'
    } finally {
      state.loading = false
    }
  }

  const saveUserData = async (user: User) => {
    state.loading = true
    state.error = null
    try {
      const saved = await saveUser(user)
      const index = state.users.findIndex(u => u.id === saved.id)
      if (index >= 0) {
        state.users[index] = saved
      } else {
        state.users.push(saved)
      }
      return saved
    } catch (err) {
      state.error = err instanceof Error ? err.message : '保存用户失败'
      throw err
    } finally {
      state.loading = false
    }
  }

  return {
    ...state,
    userCount,
    fetchUsers,
    saveUserData
  }
}
```

### Services（服务）规范

**职责：**
- 提供通用工具函数
- 数据格式化和转换
- 复用的业务逻辑
- 验证和转换

**禁止：**
- ❌ 业务决策
- ❌ 状态管理
- ❌ API 调用

**规范：**
- 纯函数优先
- 不管理状态
- 不调用 API
- 可被多个 Composables 复用

**示例：**

```typescript
// service/userService.ts
import type { User } from '../types/user'

export function formatUserName(user: User): string {
  return `${user.firstName} ${user.lastName}`.trim()
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function sortUsersByName(users: User[]): User[] {
  return [...users].sort((a, b) => 
    formatUserName(a).localeCompare(formatUserName(b))
  )
}
```

### API（接口）规范

**职责：**
- HTTP 请求封装
- 与后端通信
- 请求/响应转换

**禁止：**
- ❌ 业务逻辑
- ❌ 数据处理
- ❌ 状态管理

**示例：**

```typescript
// api/userApi.ts
import { http } from './http'
import type { User } from '../types/user'

export async function getUserList(): Promise<User[]> {
  const response = await http.get('/api/users')
  return response.data
}

export async function getUser(id: string): Promise<User> {
  const response = await http.get(`/api/users/${id}`)
  return response.data
}

export async function saveUser(user: User): Promise<User> {
  const response = await http.post('/api/users', user)
  return response.data
}

export async function deleteUser(id: string): Promise<void> {
  await http.delete(`/api/users/${id}`)
}
```

---

## 命名规范

### Composables
- 使用 `use` 前缀：`useUserData`、`useAiCompletion`、`useFormValidation`
- 返回对象包含状态和方法
- 文件名与函数名一致：`useUserData.ts` 导出 `useUserData`

### Components
- 使用 PascalCase：`PersonalInfoSection`、`CoreSkillsSection`、`UserForm`
- Section 组件放在 `components/sections/` 目录
- 基础组件放在 `components/` 目录
- 文件名与组件名一致

### Services
- 使用 camelCase：`userService`、`resumeFormatter`
- 导出纯函数或工具函数
- 文件名与主要导出函数名一致

### API
- 使用 camelCase：`userApi`、`jobApi`
- 函数名清晰表达操作：`getUser`、`saveUser`、`deleteUser`
- 返回 Promise

### Types
- 使用 PascalCase：`User`、`UserCreateRequest`、`UserResponse`
- 文件名与主要类型名一致

### Constants
- 使用 UPPER_SNAKE_CASE：`USER_ROLES`、`API_TIMEOUT`
- 文件名使用 camelCase：`userConstants.ts`

---

## 事件通信规范

**Props 向下传递数据：**

```vue
<PersonalInfoSection 
  :resume="resume" 
  :ai-completion="aiCompletion"
  :loading="loading"
/>
```

**Events 向上触发事件：**

```vue
<PersonalInfoSection 
  @trigger-ai-completion="handleTriggerAiCompletion"
  @save="handleSave"
/>
```

**禁止：**
- ❌ 使用 `v-model` 修改父组件数据
- ❌ 直接修改 Props
- ❌ 使用全局状态管理（除非必要）
- ❌ 跨模块直接通信

**最佳实践：**
- Props 用于数据传递
- Events 用于事件通知
- Pinia 用于全局状态
- Composables 用于业务逻辑共享

---

## 样式规范

- **分离样式文件**：将样式放在独立的 CSS/SCSS 文件中
- **使用 CSS 变量**：管理颜色和尺寸
- **使用 BEM 命名**：保持命名一致
- **响应式设计**：使用媒体查询适配不同屏幕尺寸
- **动画效果**：使用 CSS 动画，避免过度使用 JavaScript
- **作用域样式**：使用 `<style scoped>` 避免样式污染

**示例：**

```vue
<style scoped lang="scss">
.user-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__input {
    padding: 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;

    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }

  &__button {
    padding: 0.75rem 1.5rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-dark);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

@media (max-width: 768px) {
  .user-form {
    gap: 0.75rem;
  }
}
</style>
```

---

## 类型定义规范

**使用 TypeScript 类型定义，避免 `any`：**

```typescript
// ✅ 好的做法
interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}

type UserRole = 'admin' | 'user' | 'guest'

// ❌ 不好的做法
const user: any = {}
```

---

## 代码质量检查清单

- [ ] View 只做页面容器，不包含业务逻辑
- [ ] Components 只做 UI 展示，不调用 API
- [ ] Composables 管理业务逻辑，不涉及 UI 渲染
- [ ] Services 提供工具函数，不管理状态
- [ ] API 只做 HTTP 请求，不处理业务逻辑
- [ ] Props 向下传递，Events 向上触发
- [ ] 使用 TypeScript 类型定义，避免 `any`
- [ ] 样式使用 `<style scoped>`，避免污染
- [ ] 命名清晰，遵循规范
- [ ] 单元测试覆盖率 > 80%

---

## 参考资源

- [Vue 3 官方文档](https://vuejs.org/)
- [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vue 3 最佳实践](https://vuejs.org/guide/best-practices/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Pinia 状态管理](https://pinia.vuejs.org/)
