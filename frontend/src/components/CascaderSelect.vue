<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="fade-transition"
    max-width="520"
    offset-y
  >
    <template #activator="{ props: activatorProps }">
      <v-text-field
        v-bind="activatorProps"
        :label="label"
        :hint="hint"
        :persistent-hint="Boolean(hint)"
        :prepend-inner-icon="icon"
        :readonly="true"
        :clearable="clearable"
        :model-value="displayText"
        :rules="textFieldRules"
        @click:clear="handleClear"
      />
    </template>

    <v-card class="cascader-select-card" elevation="3">
      <v-row class="ma-0" no-gutters>
        <v-col cols="5" class="cascader-select-left">
          <v-list nav density="compact">
            <v-list-item
              v-for="root in rootItems"
              :key="root.id"
              :active="activeRoot?.id === root.id"
              @click="selectRoot(root)"
            >
              <v-list-item-title class="text-body-2">{{ root.label }}</v-list-item-title>
              <template #append>
                <v-chip size="x-small" color="grey-darken-1" variant="tonal">
                  {{ getSelectedCount(root) }}/{{ getLeafCount(root) }}
                </v-chip>
              </template>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="7" class="cascader-select-right">
          <div v-if="activeLeaves.length > 0" class="cascader-select-right__list">
            <v-list density="comfortable">
              <v-list-item
                v-for="leaf in activeLeaves"
                :key="leaf.id"
                :value="leaf.value"
                @click="toggleLeaf(leaf)"
              >
                <template #prepend>
                  <v-checkbox-btn
                    :model-value="isLeafSelected(leaf)"
                    @update:model-value="toggleLeaf(leaf)"
                  />
                </template>
                <v-list-item-title class="text-body-2">{{ leaf.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
          <div
            v-else
            class="cascader-select-right__placeholder text-body-2 text-medium-emphasis"
          >
            ← 请先选择左侧分类
          </div>
        </v-col>
      </v-row>
      <v-divider />
      <v-card-actions class="justify-space-between">
        <v-btn variant="text" color="secondary" @click="handleClear" :disabled="!hasSelection">
          清空
        </v-btn>
        <v-btn variant="text" color="primary" @click="menu = false">完成</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { computed, ref, watch, type PropType } from 'vue';

interface CascaderNode {
  id: string;
  label: string;
  value?: string;
  children?: CascaderNode[];
  props?: Record<string, unknown>;
}

const props = defineProps({
  modelValue: {
    type: [Array, String] as PropType<string[] | string>,
    default: () => [],
  },
  items: {
    type: Array as PropType<CascaderNode[]>,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array as PropType<Array<(value: unknown) => true | string>>,
    default: () => [],
  },
  clearable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: string[] | string): void;
}>();

const menu = ref(false);
const activeRoot = ref<CascaderNode | null>(null);
const selectedSet = ref<Set<string>>(new Set());

const normalizeInput = (value: string[] | string): Set<string> => {
  if (Array.isArray(value)) {
    return new Set(value.filter((item) => typeof item === 'string' && item.length > 0));
  }
  if (typeof value === 'string' && value.length > 0) {
    return new Set([value]);
  }
  return new Set();
};

watch(
  () => props.modelValue,
  (value) => {
    selectedSet.value = normalizeInput(value as string[] | string);
  },
  { immediate: true, deep: true },
);

const rootItems = computed(() => props.items ?? []);

watch(
  [menu, rootItems],
  () => {
    if (!menu.value) return;
    if (!activeRoot.value) {
      activeRoot.value = rootItems.value[0] ?? null;
    } else if (!rootItems.value.some((item) => item.id === activeRoot.value?.id)) {
      activeRoot.value = rootItems.value[0] ?? null;
    }
  },
  { immediate: false },
);

const flattenLeaves = (nodes: CascaderNode[]): CascaderNode[] => {
  const accumulator: CascaderNode[] = [];
  const walk = (nodeList: CascaderNode[]) => {
    nodeList.forEach((node) => {
      if (Array.isArray(node.children) && node.children.length > 0) {
        walk(node.children);
      } else if (node.value) {
        accumulator.push(node);
      }
    });
  };
  walk(nodes);
  return accumulator;
};

const leavesByRoot = computed(() => {
  const map = new Map<string, CascaderNode[]>();
  rootItems.value.forEach((root) => {
    map.set(root.id, flattenLeaves([root]));
  });
  return map;
});

const valueToNode = computed(() => {
  const map = new Map<string, CascaderNode>();
  leavesByRoot.value.forEach((leaves) => {
    leaves.forEach((leaf) => {
      if (leaf.value) {
        map.set(leaf.value, leaf);
      }
    });
  });
  return map;
});

const activeLeaves = computed(() => {
  if (!activeRoot.value) return [];
  return leavesByRoot.value.get(activeRoot.value.id) ?? [];
});

const hasSelection = computed(() => selectedSet.value.size > 0);

const displayText = computed(() => {
  if (selectedSet.value.size === 0) {
    return '';
  }
  const labels = Array.from(selectedSet.value)
    .map((value) => valueToNode.value.get(value)?.label ?? value)
    .sort();
  return labels.join('、');
});

const emittedValue = computed(() => {
  const values = Array.from(selectedSet.value);
  return props.multiple ? values : values[0] ?? '';
});

const textFieldRules = computed(() => {
  if (!props.rules || props.rules.length === 0) return undefined;
  return props.rules.map((rule) => () => rule(emittedValue.value));
});

const selectRoot = (root: CascaderNode) => {
  activeRoot.value = root;
};

const isLeafSelected = (leaf: CascaderNode) => {
  return leaf.value ? selectedSet.value.has(leaf.value) : false;
};

const toggleLeaf = (leaf: CascaderNode) => {
  if (!leaf.value) return;
  const next = new Set(selectedSet.value);
  if (props.multiple) {
    if (next.has(leaf.value)) {
      next.delete(leaf.value);
    } else {
      next.add(leaf.value);
    }
  } else {
    next.clear();
    next.add(leaf.value);
    menu.value = false;
  }
  updateSelection(next);
};

const updateSelection = (next: Set<string>) => {
  selectedSet.value = next;
  emit('update:modelValue', emittedValue.value);
};

const handleClear = () => {
  if (selectedSet.value.size === 0) return;
  updateSelection(new Set());
};

const getLeafCount = (node: CascaderNode) => {
  return leavesByRoot.value.get(node.id)?.length ?? 0;
};

const getSelectedCount = (node: CascaderNode) => {
  const leaves = leavesByRoot.value.get(node.id) ?? [];
  return leaves.filter((leaf) => leaf.value && selectedSet.value.has(leaf.value)).length;
};
</script>

<style scoped>
.cascader-select-card {
  width: 480px;
  max-width: 100%;
}

.cascader-select-left {
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  max-height: 320px;
  overflow-y: auto;
}

.cascader-select-right {
  max-height: 320px;
  overflow-y: auto;
  padding-left: 12px;
}

.cascader-select-right__placeholder {
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

