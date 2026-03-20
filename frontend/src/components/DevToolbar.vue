<template>
  <div v-if="isDev" class="dev-toolbar">
    <div class="dev-toolbar-toggle" @click="expanded = !expanded">
      <v-icon size="18">mdi-bug-outline</v-icon>
    </div>
    <transition name="slide-up">
      <div v-if="expanded" class="dev-toolbar-panel">
        <div class="dev-toolbar-title">DEV</div>
        <v-btn
          v-for="action in actions"
          :key="action.label"
          size="x-small"
          variant="tonal"
          :color="action.color ?? 'primary'"
          class="dev-action-btn"
          @click="action.handler"
        >
          {{ action.label }}
        </v-btn>
        <v-btn
          size="x-small"
          variant="tonal"
          color="orange"
          class="dev-action-btn"
          @click="openStorage"
        >
          LocalStorage
        </v-btn>
      </div>
    </transition>

    <!-- LocalStorage 管理弹框 -->
    <v-dialog v-model="storageDialog" max-width="680" scrollable>
      <v-card class="storage-card">
        <v-card-title class="storage-card-title">
          <v-icon size="18" class="mr-2">mdi-database-outline</v-icon>
          LocalStorage 管理
          <v-spacer />
          <v-btn icon size="x-small" variant="text" @click="storageDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-0">
          <!-- 新增行 -->
          <div class="add-row">
            <v-text-field
              v-model="newKey"
              label="Key"
              density="compact"
              variant="outlined"
              hide-details
              class="add-field"
            />
            <v-text-field
              v-model="newValue"
              label="Value"
              density="compact"
              variant="outlined"
              hide-details
              class="add-field"
            />
            <v-btn size="small" color="primary" @click="addItem">添加</v-btn>
          </div>

          <v-divider />

          <!-- 列表 -->
          <div v-if="items.length === 0" class="empty-hint">暂无数据</div>
          <div v-for="item in items" :key="item.key" class="storage-row">
            <span class="storage-key" :title="item.key">{{ item.key }}</span>
            <template v-if="editingKey === item.key">
              <v-text-field
                v-model="editingValue"
                density="compact"
                variant="outlined"
                hide-details
                class="edit-field"
                autofocus
              />
              <v-btn size="x-small" color="success" @click="saveEdit(item.key)">保存</v-btn>
              <v-btn size="x-small" variant="text" @click="editingKey = ''">
                <v-icon size="16">mdi-close</v-icon>
              </v-btn>
            </template>
            <template v-else>
              <span class="storage-value" :title="item.value">{{ item.value }}</span>
              <v-btn icon size="x-small" variant="text" @click="startEdit(item)">
                <v-icon size="16">mdi-pencil-outline</v-icon>
              </v-btn>
              <v-btn icon size="x-small" variant="text" color="error" @click="removeItem(item.key)">
                <v-icon size="16">mdi-trash-can-outline</v-icon>
              </v-btn>
            </template>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn size="small" color="error" variant="tonal" @click="clearAll">清空全部</v-btn>
          <v-spacer />
          <v-btn size="small" variant="text" @click="refresh">
            <v-icon size="16" class="mr-1">mdi-refresh</v-icon>刷新
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface DevAction {
  label: string;
  handler: () => void;
  color?: string;
}

defineProps<{ actions: DevAction[] }>();

const isDev = import.meta.env.DEV;
const expanded = ref(false);

// ----- LocalStorage 管理 -----
interface StorageItem { key: string; value: string }

const storageDialog = ref(false);
const items = ref<StorageItem[]>([]);
const newKey = ref('');
const newValue = ref('');
const editingKey = ref('');
const editingValue = ref('');

function loadItems() {
  items.value = Object.keys(localStorage).sort().map(k => ({ key: k, value: localStorage.getItem(k) ?? '' }));
}

function openStorage() {
  loadItems();
  storageDialog.value = true;
}

function refresh() {
  loadItems();
}

function addItem() {
  if (!newKey.value.trim()) return;
  localStorage.setItem(newKey.value.trim(), newValue.value);
  newKey.value = '';
  newValue.value = '';
  loadItems();
}

function removeItem(key: string) {
  localStorage.removeItem(key);
  loadItems();
}

function startEdit(item: StorageItem) {
  editingKey.value = item.key;
  editingValue.value = item.value;
}

function saveEdit(key: string) {
  localStorage.setItem(key, editingValue.value);
  editingKey.value = '';
  loadItems();
}

function clearAll() {
  localStorage.clear();
  loadItems();
}
</script>

<style scoped>
.dev-toolbar {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.dev-toolbar-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #1677ff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.4);
  opacity: 0.85;
  transition: opacity 0.2s;
}

.dev-toolbar-toggle:hover {
  opacity: 1;
}

.dev-toolbar-panel {
  background: #1e1e2e;
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 120px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.dev-toolbar-title {
  font-size: 10px;
  font-weight: 700;
  color: #6b7280;
  letter-spacing: 0.1em;
  padding-bottom: 4px;
  border-bottom: 1px solid #2d2d3f;
  margin-bottom: 2px;
}

.dev-action-btn {
  justify-content: flex-start;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* Storage dialog */
.storage-card {
  background: #1e1e2e;
  color: #e0e0e0;
}

.storage-card-title {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid #2d2d3f;
}

.add-row {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;
}

.add-field {
  flex: 1;
}

.empty-hint {
  padding: 24px;
  text-align: center;
  color: #6b7280;
  font-size: 13px;
}

.storage-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-bottom: 1px solid #2d2d3f;
  min-height: 44px;
}

.storage-key {
  flex: 0 0 180px;
  font-size: 12px;
  color: #93c5fd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.storage-value {
  flex: 1;
  font-size: 12px;
  color: #a3e635;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.edit-field {
  flex: 1;
}
</style>
