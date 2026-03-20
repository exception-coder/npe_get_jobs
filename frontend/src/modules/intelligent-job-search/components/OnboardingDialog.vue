<template>
  <v-dialog v-model="visible" max-width="560" persistent>
    <v-card class="onboarding-card">
      <!-- 头部 -->
      <div class="onboarding-header">
        <div class="header-icon-wrapper">
          <v-icon size="36" color="white">mdi-robot-excited-outline</v-icon>
        </div>
        <h2 class="onboarding-title">{{ headerTitle }}</h2>
        <p class="onboarding-subtitle">{{ headerSubtitle }}</p>
      </div>

      <!-- 输入阶段（含 API Key 区块） -->
      <template v-if="step === 'input'">
        <v-card-text class="onboarding-body">
          <!-- API Key 区块 -->
          <div class="apikey-section" :class="{ saved: apiKeySaved }">
            <div class="input-hint">
              <v-icon size="16" :color="apiKeySaved ? 'success' : 'primary'">{{ apiKeySaved ? 'mdi-key-check-outline' : 'mdi-key-outline' }}</v-icon>
              <span v-if="apiKeySaved">DeepSeek API Key 已配置</span>
              <span v-else>AI 功能需要 DeepSeek API Key，请前往 <a href="https://platform.deepseek.com" target="_blank">platform.deepseek.com</a> 获取</span>
            </div>
            <div v-if="!apiKeySaved" class="apikey-input-row">
              <v-text-field
                v-model="apiKeyInput"
                label="DeepSeek API Key"
                placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                variant="outlined"
                density="compact"
                hide-details="auto"
                :error-messages="apiKeyError"
                class="apikey-field"
                clearable
              />
              <v-btn
                color="primary"
                size="small"
                :loading="apiKeySaving"
                :disabled="!apiKeyInput.trim()"
                @click="saveApiKey"
              >保存</v-btn>
            </div>
          </div>

          <v-divider class="my-3" />

          <div class="input-hint">
            <v-icon size="16" color="primary">mdi-lightbulb-on-outline</v-icon>
            <span>用自然语言描述你自己，AI 会自动提取并填写所有配置</span>
          </div>
          <v-textarea
            v-model="description"
            placeholder="例如：我是一名有 5 年经验的 Java 后端开发，熟悉 Spring Boot、微服务、MySQL、Redis，有电商和金融领域经验，期望薪资 25-40K，不想做外包，目标职位是高级 Java 工程师..."
            rows="6"
            auto-grow
            variant="outlined"
            hide-details
            class="description-input"
          />

          <!-- 地理位置 -->
          <div class="location-box" :class="{ located: !!locationText }">
            <div class="location-info">
              <v-icon size="18" :color="locationText ? 'success' : 'grey'">{{ locationText ? 'mdi-map-marker-check-outline' : 'mdi-map-marker-outline' }}</v-icon>
              <span class="location-text">{{ locationText || '获取所在城市，匹配本地职位' }}</span>
            </div>
            <v-progress-circular v-if="locating" indeterminate size="16" width="2" color="primary" />
            <v-btn v-else-if="!locationText" variant="text" size="small" color="primary" @click="requestLocation">授权获取</v-btn>
          </div>
        </v-card-text>

        <v-card-actions class="onboarding-footer">
          <v-btn variant="text" :disabled="!apiKeySaved" @click="skip">跳过</v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            :disabled="!apiKeySaved || !description.trim()"
            class="action-btn"
            @click="startParsing"
          >
            <v-icon start>mdi-auto-fix</v-icon>
            AI 解析
          </v-btn>
        </v-card-actions>
      </template>

      <!-- 解析中阶段 -->
      <template v-if="step === 'parsing'">
        <v-card-text class="parsing-body">
          <div class="parsing-animation">
            <div class="pulse-ring" />
            <div class="pulse-ring delay-1" />
            <div class="pulse-ring delay-2" />
            <v-icon size="48" color="primary" class="parsing-icon">mdi-brain</v-icon>
          </div>
          <p class="parsing-text">{{ parsingText }}</p>
          <p class="parsing-sub">正在理解你的求职意向...</p>
        </v-card-text>
      </template>

      <!-- 确认阶段 -->
      <template v-if="step === 'confirm'">
        <v-card-text class="onboarding-body confirm-body">
          <div class="parsed-badge">
            <v-icon size="16" color="success">mdi-check-circle-outline</v-icon>
            <span>AI 已解析完成，请确认并按需修改</span>
          </div>

          <!-- 核心信息 -->
          <div class="section-label">核心信息</div>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field v-model="result.jobTitle" label="目标职位" variant="outlined" density="compact" hide-details class="mb-3" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="result.yearsOfExperience" label="工作年限" variant="outlined" density="compact" hide-details class="mb-3" />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="result.minSalary" type="number" label="薪资下限 (K)" variant="outlined" density="compact" hide-details class="mb-3" />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="result.maxSalary" type="number" label="薪资上限 (K)" variant="outlined" density="compact" hide-details class="mb-3" />
            </v-col>
          </v-row>

          <!-- 技能与意向 -->
          <div class="section-label">技能与意向</div>
          <v-combobox v-model="result.skills" label="核心技能" chips closable-chips multiple hide-selected variant="outlined" density="compact" hide-details class="mb-3" />
          <v-textarea v-model="result.careerIntent" label="职业意向" rows="2" auto-grow variant="outlined" density="compact" hide-details class="mb-3" />
          <v-combobox v-model="result.domainExperience" label="领域经验" chips closable-chips multiple hide-selected variant="outlined" density="compact" hide-details class="mb-3" />
          <v-combobox v-model="result.highlights" label="个人亮点" chips closable-chips multiple hide-selected variant="outlined" density="compact" hide-details class="mb-3" />

          <!-- 偏好过滤 -->
          <div class="section-label">过滤偏好</div>
          <v-combobox v-model="result.jobBlacklist" label="岗位黑名单" chips closable-chips multiple hide-selected variant="outlined" density="compact" hide-details class="mb-3" />
          <v-combobox v-model="result.companyBlacklist" label="公司黑名单" chips closable-chips multiple hide-selected variant="outlined" density="compact" hide-details class="mb-1" />
        </v-card-text>

        <v-card-actions class="onboarding-footer">
          <v-btn variant="text" @click="step = 'input'">重新描述</v-btn>
          <v-spacer />
          <v-btn color="primary" class="action-btn" @click="confirm">
            <v-icon start>mdi-check</v-icon>
            确认并开始求职
          </v-btn>
        </v-card-actions>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { parseOnboarding, saveOnboardingProfile, type OnboardingParseResult } from '../api/onboardingApi';
import { httpJson } from '@/api/http';

const ONBOARDING_KEY = 'onboarding_completed';

const emit = defineEmits<{
  done: [data: OnboardingParseResult & { location: { latitude: number; longitude: number } | null }];
}>();

type Step = 'input' | 'parsing' | 'confirm';

const visible = ref(localStorage.getItem(ONBOARDING_KEY) !== 'true');
const step = ref<Step>('input');

// ----- DeepSeek API Key -----
const apiKeyInput = ref('');
const apiKeySaving = ref(false);
const apiKeyError = ref('');
const apiKeySaved = ref(false);

async function checkApiKey() {
  try {
    const res = await httpJson<{ apiKey: string }>('/api/deepseek/api-key', { method: 'GET' });
    if (res.apiKey && res.apiKey !== '未配置') apiKeySaved.value = true;
  } catch {
    // 忽略，保持未配置状态
  }
}

async function saveApiKey() {
  if (!apiKeyInput.value.trim()) {
    apiKeyError.value = 'API Key 不能为空';
    return;
  }
  apiKeySaving.value = true;
  apiKeyError.value = '';
  try {
    const res = await httpJson<{ success: boolean; message: string }>('/api/deepseek/api-key', {
      method: 'POST',
      body: JSON.stringify({ apiKey: apiKeyInput.value.trim() }),
    });
    if (res.success) {
      apiKeySaved.value = true;
    } else {
      apiKeyError.value = res.message || '保存失败';
    }
  } catch {
    apiKeyError.value = '请求失败，请检查网络';
  } finally {
    apiKeySaving.value = false;
  }
}

onMounted(() => {
  if (visible.value) checkApiKey();
});
const description = ref('');
const locating = ref(false);
const locationText = ref('');
const locationData = ref<{ latitude: number; longitude: number } | null>(null);
const parsingText = ref('AI 正在理解你的描述...');

const result = ref<OnboardingParseResult>({
  jobTitle: null,
  yearsOfExperience: null,
  minSalary: null,
  maxSalary: null,
  skills: [],
  careerIntent: null,
  domainExperience: [],
  highlights: [],
  jobBlacklist: [],
  companyBlacklist: [],
});

const headerTitle = computed(() => {
  if (step.value === 'confirm') return '确认求职信息';
  return '欢迎使用智能求职';
});

const headerSubtitle = computed(() => {
  if (step.value === 'confirm') return '按需修改 AI 解析的结果';
  if (step.value === 'parsing') return 'AI 正在分析你的描述';
  return '用一句话描述自己，AI 自动完成所有配置';
});

const requestLocation = () => {
  if (!navigator.geolocation) return;
  locating.value = true;
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      locationData.value = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
      locationText.value = `已定位 (${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)})`;
      locating.value = false;
    },
    (err) => {
      const reason = err.code === 1 ? '已拒绝授权' : err.code === 2 ? '无法获取位置' : '请求超时';
      locationText.value = `定位失败：${reason}`;
      locating.value = false;
    },
    { timeout: 8000 },
  );
};

requestLocation();

const parsingPhrases = [
  'AI 正在理解你的描述...',
  '提取核心技能中...',
  '分析薪资期望...',
  '识别领域经验...',
  '整理个人亮点...',
];

const startParsing = async () => {
  step.value = 'parsing';
  let i = 0;
  const timer = setInterval(() => {
    parsingText.value = parsingPhrases[i % parsingPhrases.length];
    i++;
  }, 800);

  try {
    const parsed = await parseOnboarding(description.value);
    result.value = parsed;
    step.value = 'confirm';
  } catch {
    step.value = 'input';
  } finally {
    clearInterval(timer);
  }
};

const complete = () => {
  localStorage.setItem(ONBOARDING_KEY, 'true');
  visible.value = false;
  emit('done', { ...result.value, location: locationData.value });
};

const skip = () => {
  localStorage.setItem(ONBOARDING_KEY, 'true');
  visible.value = false;
};

const confirm = async () => {
  try {
    await saveOnboardingProfile(result.value);
  } catch {
    // 忽略保存失败，不阻塞流程
  }
  complete();
};

const open = () => {
  visible.value = true;
  step.value = 'input';
};

defineExpose({ open });
</script>

<style scoped>
.onboarding-card {
  border-radius: 20px;
  overflow: hidden;
}

/* 头部 */
.onboarding-header {
  background: linear-gradient(135deg, #1677FF 0%, #4F46E5 100%);
  padding: 32px 28px 24px;
  text-align: center;
}

.header-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  margin-bottom: 16px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.onboarding-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.onboarding-subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

/* API Key 区块 */
.apikey-section {
  padding: 10px 14px;
  background: #F9FAFB;
  border-radius: 10px;
  border: 1px solid #E5E7EB;
  transition: all 0.3s ease;
}

.apikey-section.saved {
  background: #F0FDF4;
  border-color: #86EFAC;
}

.apikey-input-row {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-top: 8px;
}

.apikey-field {
  flex: 1;
}

/* 输入阶段 */
.onboarding-body {
  padding: 24px 24px 8px;
}

.input-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #3B82F6;
  margin-bottom: 12px;
}

.description-input :deep(.v-field) {
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.6;
}

.location-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #F9FAFB;
  border-radius: 10px;
  border: 1px solid #E5E7EB;
  margin-top: 12px;
  transition: all 0.3s ease;
}

.location-box.located {
  background: #F0FDF4;
  border-color: #86EFAC;
}

.location-info {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  font-size: 13px;
  color: #6B7280;
  min-width: 0;
}

.location-box.located .location-info {
  color: #15803D;
}

.location-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 解析中阶段 */
.parsing-body {
  padding: 48px 24px;
  text-align: center;
}

.parsing-animation {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #1677FF;
  opacity: 0;
  animation: pulse 2s ease-out infinite;
}

.pulse-ring.delay-1 { animation-delay: 0.5s; }
.pulse-ring.delay-2 { animation-delay: 1s; }

@keyframes pulse {
  0% { transform: scale(0.6); opacity: 0.8; }
  100% { transform: scale(1.4); opacity: 0; }
}

.parsing-icon {
  position: relative;
  z-index: 1;
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.parsing-text {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
  min-height: 24px;
  transition: all 0.3s ease;
}

.parsing-sub {
  font-size: 13px;
  color: #9CA3AF;
  margin: 0;
}

/* 确认阶段 */
.confirm-body {
  max-height: 65vh;
  overflow-y: auto;
}

.parsed-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #15803D;
  background: #F0FDF4;
  border: 1px solid #86EFAC;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 16px;
}

.section-label {
  font-size: 12px;
  font-weight: 700;
  color: #9CA3AF;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 12px 0 8px;
}

/* 底部 */
.onboarding-footer {
  padding: 12px 24px 20px;
}

.action-btn {
  min-width: 140px;
  border-radius: 10px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
}
</style>
