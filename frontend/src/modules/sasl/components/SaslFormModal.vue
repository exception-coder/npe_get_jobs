<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="900px"
    persistent
    scrollable
    class="sasl-form-modal"
  >
    <v-card class="modal-card" :loading="loading" elevation="0">
      <v-card-title class="section-title d-flex align-center">
        <div class="title-icon">
          <v-icon color="primary">mdi-form-select</v-icon>
        </div>
        <div>
          <div class="title-label">SASL</div>
          <div class="title-sub">客戶資訊登記</div>
        </div>
        <v-spacer />
        <v-btn
          icon="mdi-close"
          variant="text"
          size="small"
          @click="handleClose"
        />
      </v-card-title>
      
      <v-divider />
      
      <v-card-text class="modal-content">
        <v-form ref="formRef">
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.mrtNumber"
                label="MRT"
                placeholder="例如：92479132"
                prepend-inner-icon="mdi-cellphone"
                readonly
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.category"
                label="類別"
                placeholder="例如：638(出機 5G+數據王)"
                prepend-inner-icon="mdi-tag"
                readonly
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.lastTurnNetworkMonth"
                label="最後轉網月份"
                placeholder="例如：202011"
                prepend-inner-icon="mdi-calendar-month"
                readonly
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.oldContract"
                label="舊合約"
                placeholder="例如：2024.01"
                prepend-inner-icon="mdi-calendar"
                readonly
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.sales"
                label="銷售員"
                placeholder="例如：Jackson Hung"
                prepend-inner-icon="mdi-account-tie"
                readonly
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="form.callStatus"
                :items="callStatusOptions"
                label="致電狀態"
                placeholder="請選擇"
                :rules="[rules.required]"
                prepend-inner-icon="mdi-phone"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-menu v-model="nextCallTimeMenu" :close-on-content-click="false" @update:model-value="handleMenuOpen">
                <template #activator="{ props: activatorProps }">
                  <v-text-field
                    v-bind="activatorProps"
                    v-model="form.nextCallTime"
                    label="下次致電時間"
                    placeholder="請選擇日期和時間（可選）"
                    prepend-inner-icon="mdi-clock-time-four-outline"
                    :rules="[rules.nextCallTime]"
                    readonly
                    clearable
                  />
                </template>
                <v-card min-width="300">
                  <v-card-text class="pa-0">
                    <v-row no-gutters>
                      <v-col cols="12" md="6">
                        <v-date-picker
                          v-model="nextCallDate"
                          :min="minDate"
                          @update:model-value="handleDateChange"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-time-picker
                          v-model="nextCallTime"
                          format="24hr"
                          @update:model-value="handleTimeChange"
                        />
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn variant="text" color="error" @click="handleClearNextCallTime">
                      清除
                    </v-btn>
                    <v-spacer />
                    <v-btn variant="text" color="primary" @click="handleConfirmNextCallTime">
                      完成
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.remark"
                label="備註"
                rows="4"
                auto-grow
                prepend-inner-icon="mdi-note-text-outline"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      
      <v-divider />
      
      <v-card-actions class="px-6 py-4 last-call-action">
        <div class="last-call-pill">
          <v-icon icon="mdi-clock-time-four-outline" size="20" />
          <div class="pill-content">
            <div class="pill-label">上次致電時間</div>
            <div class="pill-value">{{ form.lastCallTime || '—' }}</div>
          </div>
        </div>
        <v-spacer />
        <v-btn
          variant="text"
          color="grey"
          @click="handleClose"
        >
          取消
        </v-btn>
        <v-btn
          class="apple-primary-btn"
          color="primary"
          :loading="submitting"
          :disabled="loading"
          @click="handleSubmit"
        >
          提交
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue';
import { useSnackbarStore } from '@/stores/snackbar';
import { useSaslState } from '../state/saslState';
import { useSaslService } from '../service/saslService';
import type { SaslRecordResponse } from '../api/saslConfigApi';

const props = defineProps<{
  modelValue: boolean;
  record?: SaslRecordResponse | null;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'submitted': [];
}>();

const snackbar = useSnackbarStore();
const saslState = useSaslState();

const {
  loading,
  submitting,
  formRef,
  form,
  callStatusOptions,
  rules,
  selectedRecord,
} = saslState;

const { handleSubmit: originalHandleSubmit, fillFormFromRecord } = useSaslService(saslState, snackbar);

// 控制对话框显示
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

// 日期时间选择器相关
const nextCallTimeMenu = ref(false);
const nextCallDate = ref<string>('');
const nextCallTime = ref<string>('');

// 获取当前日期作为最小日期（YYYY-MM-DD格式）
const minDate = computed(() => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
});

// 将日期转换为 YYYY-MM-DD 格式（处理 Date 对象或字符串）
const normalizeDate = (date: string | Date | null | undefined): string => {
  if (!date) return '';
  
  // 如果已经是字符串格式，直接返回
  if (typeof date === 'string') {
    // 检查是否是 YYYY-MM-DD 格式
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date;
    }
    // 如果是其他格式的字符串，尝试解析为 Date 对象
    const dateObj = new Date(date);
    if (!isNaN(dateObj.getTime())) {
      return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
    }
    return '';
  }
  
  // 如果是 Date 对象，转换为 YYYY-MM-DD 格式
  if (date instanceof Date) {
    if (isNaN(date.getTime())) return '';
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }
  
  return '';
};

// 格式化日期时间为 YYYY-MM-DD HH:mm
const formatDateTime = (date: string | Date, time: string): string => {
  const normalizedDate = normalizeDate(date);
  if (!normalizedDate || !time) return '';
  return `${normalizedDate} ${time}`;
};

// 从 form.nextCallTime 解析日期和时间
const parseDateTime = (dateTime: string) => {
  if (!dateTime) {
    return { date: '', time: '' };
  }
  const [date, time] = dateTime.split(' ');
  return { date: date || '', time: time || '' };
};

// 获取默认日期（今天）
const getDefaultDate = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

// 获取默认时间（当前时间+2小时）
const getDefaultTime = (): string => {
  const now = new Date();
  now.setHours(now.getHours() + 2);
  return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
};

// 初始化日期和时间
const initDateTime = () => {
  const { date, time } = parseDateTime(form.nextCallTime);
  nextCallDate.value = date;
  nextCallTime.value = time;
};

// 处理菜单打开事件
const handleMenuOpen = (isOpen: boolean) => {
  if (!isOpen) {
    // 菜单关闭时，同步选择器状态到 form.nextCallTime
    // 如果 form.nextCallTime 有值，初始化选择器；如果为空，清空选择器
    if (form.nextCallTime) {
      initDateTime();
    } else {
      nextCallDate.value = '';
      nextCallTime.value = '';
    }
  } else {
    // 菜单打开时，如果 form.nextCallTime 为空，设置默认值（今天 + 当前时间+2小时）
    if (!form.nextCallTime) {
      nextCallDate.value = getDefaultDate();
      nextCallTime.value = getDefaultTime();
      console.log('[handleMenuOpen] 设置默认值 - 日期:', nextCallDate.value, '时间:', nextCallTime.value);
    } else {
      // 如果已有值，使用现有值初始化选择器
      initDateTime();
    }
  }
};

// 监听 form.nextCallTime 变化，更新日期和时间选择器
watch(() => form.nextCallTime, () => {
  if (!nextCallTimeMenu.value) {
    initDateTime();
  }
}, { immediate: true });

// 监听日期变化，当选择当前日期时，检查时间是否合法
watch(() => nextCallDate.value, (newDate) => {
  // 如果日期是 Date 对象，立即转换为字符串格式
  if (newDate instanceof Date) {
    const normalizedDate = normalizeDate(newDate);
    if (normalizedDate) {
      nextCallDate.value = normalizedDate;
      return; // 转换后返回，让下一次 watch 触发来处理后续逻辑
    }
  } else if (typeof newDate === 'string' && newDate && !/^\d{4}-\d{2}-\d{2}$/.test(newDate)) {
    // 如果是字符串但不是 YYYY-MM-DD 格式，也进行转换
    const normalizedDate = normalizeDate(newDate);
    if (normalizedDate && normalizedDate !== newDate) {
      nextCallDate.value = normalizedDate;
      return;
    }
  }
  
  // 使用规范化后的日期进行比较
  const currentDate = normalizeDate(nextCallDate.value);
  if (currentDate && nextCallTime.value) {
    const today = minDate.value;
    if (currentDate === today) {
      // 如果选择的是今天，检查时间是否早于当前时间
      const [hours, minutes] = nextCallTime.value.split(':').map(Number);
      const now = new Date();
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);
      
      if (selectedTime <= now) {
        // 如果时间早于或等于当前时间，设置为当前时间+1分钟
        const nextMinute = new Date(now);
        nextMinute.setMinutes(nextMinute.getMinutes() + 1);
        nextCallTime.value = `${String(nextMinute.getHours()).padStart(2, '0')}:${String(nextMinute.getMinutes()).padStart(2, '0')}`;
      }
    }
    // 不立即更新 form.nextCallTime，等用户点击"完成"后再更新
  }
});

// 处理日期变化
const handleDateChange = (date: string | Date | null) => {
  // 将日期转换为标准格式
  if (date) {
    const normalizedDate = normalizeDate(date);
    if (normalizedDate) {
      nextCallDate.value = normalizedDate;
    }
  }
  
  if (nextCallDate.value && nextCallTime.value) {
    const today = minDate.value;
    const currentDate = normalizeDate(nextCallDate.value);
    if (currentDate === today) {
      // 如果选择的是今天，检查时间是否早于当前时间
      const [hours, minutes] = nextCallTime.value.split(':').map(Number);
      const now = new Date();
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);
      
      if (selectedTime <= now) {
        // 如果时间早于或等于当前时间，设置为当前时间+1分钟
        const nextMinute = new Date(now);
        nextMinute.setMinutes(nextMinute.getMinutes() + 1);
        nextCallTime.value = `${String(nextMinute.getHours()).padStart(2, '0')}:${String(nextMinute.getMinutes()).padStart(2, '0')}`;
      }
    }
    // 不立即更新 form.nextCallTime，等用户点击"完成"后再更新
  }
};

// 处理时间变化
const handleTimeChange = () => {
  if (nextCallDate.value && nextCallTime.value) {
    const today = minDate.value;
    const currentDate = normalizeDate(nextCallDate.value);
    if (currentDate === today) {
      // 如果选择的是今天，检查时间是否早于当前时间
      const [hours, minutes] = nextCallTime.value.split(':').map(Number);
      const now = new Date();
      const selectedTime = new Date();
      selectedTime.setHours(hours, minutes, 0, 0);
      
      if (selectedTime <= now) {
        // 如果时间早于或等于当前时间，设置为当前时间+1分钟
        const nextMinute = new Date(now);
        nextMinute.setMinutes(nextMinute.getMinutes() + 1);
        nextCallTime.value = `${String(nextMinute.getHours()).padStart(2, '0')}:${String(nextMinute.getMinutes()).padStart(2, '0')}`;
      }
    }
    // 不立即更新 form.nextCallTime，等用户点击"完成"后再更新
  }
};

// 清除下次致电时间
const handleClearNextCallTime = () => {
  nextCallDate.value = '';
  nextCallTime.value = '';
  form.nextCallTime = '';
  nextCallTimeMenu.value = false;
};

// 确认下次致电时间
const handleConfirmNextCallTime = () => {
  console.log('[handleConfirmNextCallTime] 开始执行');
  console.log('[handleConfirmNextCallTime] nextCallDate.value (原始):', nextCallDate.value);
  console.log('[handleConfirmNextCallTime] nextCallDate.value (规范化):', normalizeDate(nextCallDate.value));
  console.log('[handleConfirmNextCallTime] nextCallTime.value:', nextCallTime.value);
  console.log('[handleConfirmNextCallTime] 条件判断结果:', !!(nextCallDate.value && nextCallTime.value));
  
  if (nextCallDate.value && nextCallTime.value) {
    // 确保日期格式正确
    const normalizedDate = normalizeDate(nextCallDate.value);
    if (normalizedDate) {
      nextCallDate.value = normalizedDate;
    }
    const formattedTime = formatDateTime(nextCallDate.value, nextCallTime.value);
    console.log('[handleConfirmNextCallTime] 格式化后的时间:', formattedTime);
    // 直接设置值，Vue 的响应式更新是同步的
    form.nextCallTime = formattedTime;
    console.log('[handleConfirmNextCallTime] 设置后的 form.nextCallTime:', form.nextCallTime);
  } else {
    console.log('[handleConfirmNextCallTime] 条件不满足，清空 form.nextCallTime');
    form.nextCallTime = '';
  }
  // 关闭菜单
  nextCallTimeMenu.value = false;
  console.log('[handleConfirmNextCallTime] 执行完成，菜单已关闭');
};

// 处理关闭
const handleClose = () => {
  dialogVisible.value = false;
};

// 处理提交
const handleSubmit = async () => {
  await originalHandleSubmit();
  emit('submitted');
  handleClose();
};

// 监听 record prop，当有记录传入时填充表单
watch(() => props.record, (newRecord) => {
  if (newRecord && dialogVisible.value) {
    selectedRecord.value = newRecord;
    fillFormFromRecord(newRecord);
    initDateTime();
  }
}, { immediate: true });

// 监听对话框打开，初始化表单
watch(dialogVisible, (isOpen) => {
  if (isOpen && props.record) {
    selectedRecord.value = props.record;
    fillFormFromRecord(props.record);
    initDateTime();
  } else if (!isOpen) {
    // 关闭时清空选中记录
    selectedRecord.value = null;
  }
});

// 组件挂载时初始化
onMounted(() => {
  initDateTime();
});
</script>

<style scoped lang="scss">
@import '../styles/saslForm.scss';

.sasl-form-modal {
  :deep(.v-overlay__content) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.modal-card {
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(9, 15, 33, 0.98), rgba(11, 28, 58, 0.98));
  border: 1px solid rgba(59, 130, 246, 0.25);
  box-shadow: 0 25px 55px rgba(4, 5, 15, 0.75);
  backdrop-filter: blur(18px);
  color: #f4f7ff;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.section-title {
  padding: 20px 24px;
  border-bottom: 1px solid rgba(59, 130, 246, 0.15);
}

.title-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.title-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f4f7ff;
}

.title-sub {
  font-size: 0.85rem;
  color: rgba(244, 247, 255, 0.7);
  margin-top: 2px;
}

.last-call-action {
  border-top: 1px solid rgba(59, 130, 246, 0.15);
}

.last-call-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.pill-content {
  display: flex;
  flex-direction: column;
}

.pill-label {
  font-size: 0.75rem;
  color: rgba(244, 247, 255, 0.7);
  margin-bottom: 2px;
}

.pill-value {
  font-size: 0.9rem;
  font-weight: 500;
  color: #f4f7ff;
}

.apple-primary-btn {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 8px 24px;
}
</style>

