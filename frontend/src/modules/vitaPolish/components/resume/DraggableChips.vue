<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: '标签',
  },
})

const emit = defineEmits(['update:modelValue'])

const newItem = ref('')
const draggedIndex = ref(null)
const editingIndex = ref(null)
const editingValue = ref('')

// 清理列表符号的函数
const cleanListMarkers = (text) => {
  return text
    // 移除 Markdown 无序列表符号：- * +
    .replace(/^[\-\*\+]\s+/, '')
    // 移除 Markdown 有序列表符号：1. 2. 3. 等
    .replace(/^\d+\.\s+/, '')
    // 移除各种 bullet 符号：• ● ○ ◦ ▪ ▫ ‣ ⁃
    .replace(/^[\u2022\u2023\u25E6\u2043\u2219\u25AA\u25AB\u2023\u2043•●○◦▪▫‣⁃]\s*/, '')
    // 移除 Tab 和多余空格
    .replace(/^\s+/, '')
    .trim()
}

// 一键清理所有标签的列表符号
const cleanAllListMarkers = () => {
  const cleanedItems = props.modelValue.map(item => cleanListMarkers(item)).filter(Boolean)
  emit('update:modelValue', cleanedItems)
}

const addItem = () => {
  if (newItem.value.trim()) {
    // 检测是否包含换行符，如果有则分割成多个标签
    const lines = newItem.value
      .split(/\r?\n/)
      .map(line => cleanListMarkers(line))
      .filter(Boolean)
    
    if (lines.length > 0) {
      const items = [...props.modelValue, ...lines]
      emit('update:modelValue', items)
      newItem.value = ''
    }
  }
}

const handlePaste = (event) => {
  const pastedText = event.clipboardData?.getData('text')
  if (!pastedText) return
  
  // 检测粘贴内容是否包含换行符
  const lines = pastedText
    .split(/\r?\n/)
    .map(line => cleanListMarkers(line))
    .filter(Boolean)
  
  // 如果包含多行内容，阻止默认粘贴行为，直接添加为多个标签
  if (lines.length > 1) {
    event.preventDefault()
    const items = [...props.modelValue, ...lines]
    emit('update:modelValue', items)
    newItem.value = ''
  }
  // 如果只有一行，让默认粘贴行为继续
}

const removeItem = (index) => {
  const items = [...props.modelValue]
  items.splice(index, 1)
  emit('update:modelValue', items)
}

// 双击编辑标签
const handleDoubleClick = (index) => {
  editingIndex.value = index
  editingValue.value = props.modelValue[index]
}

// 保存编辑
const saveEdit = (index) => {
  if (editingValue.value.trim()) {
    const items = [...props.modelValue]
    items[index] = editingValue.value.trim()
    emit('update:modelValue', items)
  }
  cancelEdit()
}

// 取消编辑
const cancelEdit = () => {
  editingIndex.value = null
  editingValue.value = ''
}

// 处理编辑输入框的键盘事件
const handleEditKeydown = (event, index) => {
  // Ctrl/Cmd + Enter 保存
  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault()
    saveEdit(index)
  } else if (event.key === 'Escape') {
    event.preventDefault()
    cancelEdit()
  }
  // 普通 Enter 允许换行
}

const handleDragStart = (index) => {
  draggedIndex.value = index
}

const handleDragOver = (event) => {
  event.preventDefault()
}

const handleDrop = (event, dropIndex) => {
  event.preventDefault()
  
  if (draggedIndex.value === null || draggedIndex.value === dropIndex) {
    return
  }

  const items = [...props.modelValue]
  const draggedItem = items[draggedIndex.value]
  
  // 移除拖拽的项
  items.splice(draggedIndex.value, 1)
  
  // 在新位置插入
  items.splice(dropIndex, 0, draggedItem)
  
  emit('update:modelValue', items)
  draggedIndex.value = null
}

const handleDragEnd = () => {
  draggedIndex.value = null
}
</script>

<template>
  <div class="draggable-chips">
    <!-- 工具栏 -->
    <div v-if="modelValue.length > 0" class="chips-toolbar mb-2">
      <v-btn
        size="small"
        variant="text"
        color="primary"
        prepend-icon="mdi-format-clear"
        @click="cleanAllListMarkers"
      >
        一键清理列表符号
      </v-btn>
      <span class="text-caption text-medium-emphasis ms-2">
        提示：双击标签可编辑 · Ctrl/Cmd+Enter 保存 · Esc 取消
      </span>
    </div>

    <div class="chips-container">
      <template v-for="(item, index) in modelValue" :key="`chip-${index}-${item.substring(0, 20)}`">
        <!-- 编辑模式 -->
        <div v-if="editingIndex === index" class="editing-chip ma-1">
          <v-textarea
            v-model="editingValue"
            density="compact"
            variant="outlined"
            hide-details
            auto-grow
            rows="1"
            autofocus
            @keydown="handleEditKeydown($event, index)"
          >
            <template v-slot:append-inner>
              <div class="d-flex flex-column ga-1">
                <v-btn
                  icon="mdi-check"
                  size="x-small"
                  variant="text"
                  color="success"
                  @mousedown.prevent="saveEdit(index)"
                />
                <v-btn
                  icon="mdi-close"
                  size="x-small"
                  variant="text"
                  color="error"
                  @mousedown.prevent="cancelEdit"
                />
              </div>
            </template>
          </v-textarea>
        </div>
        
        <!-- 显示模式 -->
        <v-chip
          v-else
          class="ma-1 draggable-chip"
          :class="{ 'dragging': draggedIndex === index }"
          closable
          draggable="true"
          @click:close="removeItem(index)"
          @dblclick="handleDoubleClick(index)"
          @dragstart="handleDragStart(index)"
          @dragover="handleDragOver"
          @drop="handleDrop($event, index)"
          @dragend="handleDragEnd"
        >
          <v-icon start size="small" class="drag-handle">mdi-drag</v-icon>
          {{ item }}
        </v-chip>
      </template>
    </div>
    
    <v-text-field
      v-model="newItem"
      :label="label"
      density="comfortable"
      variant="outlined"
      class="mt-3"
      @keyup.enter="addItem"
      @paste="handlePaste"
    >
      <template v-slot:append-inner>
        <v-btn
          icon="mdi-plus"
          size="small"
          variant="text"
          @click="addItem"
        />
      </template>
    </v-text-field>
  </div>
</template>

<style scoped>
.draggable-chips {
  width: 100%;
}

.chips-toolbar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.chips-container {
  min-height: 48px;
  padding: 8px;
  border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.draggable-chip {
  cursor: move;
  transition: opacity 0.2s, transform 0.2s;
  max-width: 100%;
  height: auto !important;
  white-space: normal;
}

.draggable-chip :deep(.v-chip__content) {
  white-space: normal;
  word-break: break-word;
  padding: 8px 0;
  line-height: 1.5;
}

.draggable-chip :deep(.v-chip__close) {
  margin-inline-start: 8px;
  flex-shrink: 0;
}

.draggable-chip:hover {
  transform: scale(1.05);
}

.draggable-chip.dragging {
  opacity: 0.5;
}

.drag-handle {
  cursor: grab;
  opacity: 0.6;
}

.drag-handle:active {
  cursor: grabbing;
}

.editing-chip {
  min-width: 300px;
  max-width: 100%;
  flex: 1 1 auto;
}
</style>

