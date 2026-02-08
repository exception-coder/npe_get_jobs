import { reactive, ref, computed, type Ref, type MaybeRef, isRef } from 'vue';
import type { PlatformCode } from '../api/platformConfigApi';
import { PLATFORM_METAS, type FieldConfig } from '../constants/platformMeta';
import type { TaskExecutionStatus } from '../api/taskExecutionApi';

interface OptionItem {
  id: string;
  value?: string;
  label: string;
  children?: OptionItem[];
  props?: Record<string, unknown>;
}

export const usePlatformState = (platformCode: MaybeRef<PlatformCode>) => {
  const loadingDicts = ref(false);
  const loadingConfig = ref(false);
  const saving = ref(false);
  const formRef = ref();
  const quickDeliveryLoading = ref(false);
  const taskStatus = ref<TaskExecutionStatus | null>(null);
  const terminatingTask = ref(false);
  const clearingTask = ref(false);

  // 支持响应式的 platformCode
  const platformCodeRef = isRef(platformCode) 
    ? platformCode as Ref<PlatformCode>
    : ref(platformCode) as Ref<PlatformCode>;
  
  const meta = computed(() => PLATFORM_METAS[platformCodeRef.value]);

  const dictOptions = reactive<Record<string, OptionItem[]>>({});
  const form = reactive<Record<string, any>>({});
  const initialSnapshot = ref<Record<string, any> | null>(null);

  const normalizeOptionValue = (input: unknown) => {
    if (typeof input === 'string') {
      return input.trim();
    }
    if (input && typeof input === 'object' && typeof (input as any).value === 'string') {
      return String((input as any).value).trim();
    }
    return '';
  };

  const clearReactiveObject = (target: Record<string, unknown>) => {
    Object.keys(target).forEach((key) => {
      delete target[key];
    });
  };

  const initializeForm = () => {
    if (!meta.value) return;
    clearReactiveObject(form);
    meta.value.fields.forEach((field) => {
      if (field.type === 'switch') {
        form[field.key] = false;
      } else if (field.multiple) {
        form[field.key] = [];
      } else {
        form[field.key] = '';
      }
    });
  };

  const resetDictOptions = () => {
    clearReactiveObject(dictOptions);
  };

  const toArray = (input: unknown) => {
    if (Array.isArray(input)) {
      return input.map((item) => String(item));
    }
    if (typeof input === 'string') {
      return input
        .split(',')
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
    }
    return [];
  };

  const snapshotForm = () => {
    initialSnapshot.value = JSON.parse(JSON.stringify(form));
  };

  const resetForm = () => {
    if (!initialSnapshot.value) return;
    Object.assign(form, JSON.parse(JSON.stringify(initialSnapshot.value)));
  };

  const buildOptionsWithHierarchy = (items: unknown): OptionItem[] => {
    if (!Array.isArray(items)) return [];

    const optionMap = new Map<string, OptionItem>();
    const pendingChildren: Array<{ parentCode: string; option: OptionItem }> = [];
    const roots: OptionItem[] = [];

    items.forEach((raw, index) => {
      if (!raw || typeof raw !== 'object') return;
      const rawCode =
        (raw as any).code ??
        (raw as any).value ??
        (raw as any).id ??
        (raw as any).key ??
        (raw as any).name ??
        '';
      const code = String(rawCode ?? '').trim();
      const label = String(
        (raw as any).name ??
          (raw as any).label ??
          (raw as any).title ??
          (raw as any).value ??
          (raw as any).key ??
          code,
      ).trim();
      if (!label) return;

      const parentCodeRaw = (raw as any).parentCode ?? (raw as any).parentId ?? (raw as any).parent;
      const parentCode =
        parentCodeRaw === undefined || parentCodeRaw === null ? '' : String(parentCodeRaw).trim();

      const idBase = code || label || `node-${index}`;
      const optionId = parentCode ? `${parentCode}::${idBase}::${index}` : `root::${idBase}::${index}`;
      const option: OptionItem = { id: optionId, label };
      if (code) {
        option.value = code;
        if (!parentCode && !optionMap.has(code)) {
          optionMap.set(code, option);
        }
      }

      if (parentCode) {
        pendingChildren.push({ parentCode, option });
      } else {
        roots.push(option);
      }
    });

    pendingChildren.forEach(({ parentCode, option }) => {
      const parent = optionMap.get(parentCode);
      if (parent) {
        parent.children = parent.children ?? [];
        parent.children.push(option);
        if (parent.value) {
          delete parent.value;
        }
        parent.props = { ...(parent.props ?? {}), selectable: false };
      } else {
        console.warn('[PlatformState] 未找到父行业节点', {
          parentCode,
          option,
        });
        roots.push(option);
      }
    });

    const ensureChildrenDisabled = (nodes: OptionItem[]) => {
      nodes.forEach((node) => {
        if (node.children && node.children.length > 0) {
          if (node.value) {
            delete node.value;
          }
          node.props = { ...(node.props ?? {}), selectable: false };
          ensureChildrenDisabled(node.children);
        }
      });
    };
    ensureChildrenDisabled(roots);

    return roots;
  };

  const flattenOptions = (items: unknown): OptionItem[] => {
    if (Array.isArray(items) && items.some((item) => item && typeof item === 'object' && 'parentCode' in item)) {
      return buildOptionsWithHierarchy(items);
    }

    const results: OptionItem[] = [];
    const visited = new Set<string>();
    const traverse = (nodes: unknown) => {
      if (!Array.isArray(nodes)) return;
      nodes.forEach((node) => {
        if (node && typeof node === 'object') {
          const value =
            String(
              (node as any).code ??
                (node as any).value ??
                (node as any).id ??
                (node as any).key ??
                (node as any).name ??
                '',
            ).trim();
          const label =
            String(
              (node as any).name ??
                (node as any).label ??
                (node as any).title ??
                (node as any).value ??
                value,
            ).trim();
          if (value.length > 0 && !visited.has(value)) {
            visited.add(value);
            results.push({ id: `${value}`, value, label });
          }
          if (Array.isArray((node as any).children)) {
            traverse((node as any).children);
          }
          if (Array.isArray((node as any).items)) {
            traverse((node as any).items);
          }
        }
      });
    };

    traverse(items);
    return results;
  };

  const applyConfig = (config: Record<string, unknown>) => {
    if (!meta.value) return;
    meta.value.fields.forEach((field) => {
      const value = config[field.key];
      if (field.type === 'switch') {
        form[field.key] = Boolean(value);
      } else if (field.multiple) {
        form[field.key] = toArray(value);
      } else if (typeof value === 'undefined' || value === null) {
        form[field.key] = '';
      } else {
        form[field.key] = String(value);
      }
    });
  };

  const getFieldOptions = (field: FieldConfig) => {
    if (field.type !== 'select') return [];
    return dictOptions[field.key] ?? [];
  };

  const getFieldRules = (field: FieldConfig) => {
    if (!field.required) return undefined;
    return [
      (value: any) => {
        if (field.type === 'switch') {
          return true;
        }
        if (field.multiple) {
          return (Array.isArray(value) && value.length > 0) || '该项为必填';
        }
        return (value && String(value).trim().length > 0) || '该项为必填';
      },
    ];
  };

  const buildPayload = () => {
    if (!meta.value) return {};
    const payload: Record<string, any> = {};
    meta.value.fields.forEach((field) => {
      const value = form[field.key];
      if (field.type === 'switch') {
        payload[field.key] = Boolean(value);
      } else if (field.multiple) {
        payload[field.key] = (value ?? []).join(',');
      } else {
        payload[field.key] = typeof value === 'string' ? value.trim() : value ?? '';
      }
    });
    return payload;
  };

  const handleAutocompleteUpdate = (field: FieldConfig, newValue: unknown) => {
    if (field.multiple) {
      const rawArray = Array.isArray(newValue) ? newValue : newValue != null ? [newValue] : [];
      const sanitized = rawArray
        .map((item) => normalizeOptionValue(item))
        .filter((item) => item.length > 0);
      const unique = Array.from(new Set(sanitized));
      form[field.key] = unique;
    } else {
      const sanitized = normalizeOptionValue(newValue);
      form[field.key] = sanitized;
    }
  };

  return {
    loadingDicts,
    loadingConfig,
    saving,
    formRef,
    quickDeliveryLoading,
    taskStatus,
    terminatingTask,
    clearingTask,
    meta,
    dictOptions,
    form,
    initialSnapshot,
    initializeForm,
    resetDictOptions,
    toArray,
    snapshotForm,
    resetForm,
    flattenOptions,
    applyConfig,
    getFieldOptions,
    getFieldRules,
    buildPayload,
    handleAutocompleteUpdate,
  };
};

