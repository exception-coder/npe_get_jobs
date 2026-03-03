<template>
  <div class="config-container">
    <v-row dense>
      <v-col cols="12" xl="7">
        <!-- 黑名单过滤配置 -->
        <div class="modern-card" :class="{ 'loading': state.loading }">
          <div class="card-header">
            <div class="header-icon-wrapper shield">
              <v-icon size="24">mdi-shield-alert-outline</v-icon>
            </div>
            <div class="header-content">
              <h2 class="card-title">黑名单过滤配置</h2>
              <p class="card-subtitle">智能过滤不匹配的岗位和公司</p>
            </div>
          </div>
          
          <div class="card-body">
            <v-form ref="state.blacklistForm">
              <div class="form-section">
                <div class="info-tip">
                  <v-icon size="18" class="tip-icon">mdi-lightbulb-on-outline</v-icon>
                  <span>关键字过滤，包含关键字的岗位或描述将被过滤</span>
                </div>
                <v-combobox
                  v-model="state.form.jobBlacklist"
                  label="岗位黑名单关键字"
                  chips
                  multiple
                  closable-chips
                  hide-selected
                  clearable
                  variant="outlined"
                  density="comfortable"
                  class="modern-input"
                >
                  <template #prepend-inner>
                    <v-icon color="error">mdi-briefcase-remove-outline</v-icon>
                  </template>
                </v-combobox>
              </div>

              <div class="form-section">
                <div class="info-tip">
                  <v-icon size="18" class="tip-icon">mdi-lightbulb-on-outline</v-icon>
                  <span>关键字过滤，包含关键字的公司将被过滤</span>
                </div>
                <v-combobox
                  v-model="state.form.companyBlacklist"
                  label="公司黑名单关键字"
                  chips
                  multiple
                  closable-chips
                  hide-selected
                  clearable
                  variant="outlined"
                  density="comfortable"
                  class="modern-input"
                >
                  <template #prepend-inner>
                    <v-icon color="error">mdi-office-building-remove-outline</v-icon>
                  </template>
                </v-combobox>
              </div>
            </v-form>
          </div>
        </div>

        <!-- 候选人画像 -->
        <div class="modern-card mt-6" :class="{ 'loading': state.loading }">
          <div class="card-header">
            <div class="header-icon-wrapper profile">
              <v-icon size="24">mdi-account-badge-outline</v-icon>
            </div>
            <div class="header-content">
              <h2 class="card-title">候选人画像</h2>
              <p class="card-subtitle">完善个人信息，提升 AI 匹配精准度</p>
            </div>
          </div>
          
          <div class="card-body">
            <v-form ref="state.profileForm">
              <div class="info-tip mb-4">
                <v-icon size="18" class="tip-icon">mdi-lightbulb-on-outline</v-icon>
                <span>用于 AI 职位匹配，请填写自己实际应聘的职位名称</span>
              </div>

              <v-row dense>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="state.form.jobTitle"
                    label="目标职位名称"
                    :rules="[state.rules.required]"
                    variant="outlined"
                    density="comfortable"
                    class="modern-input"
                  >
                    <template #prepend-inner>
                      <v-icon color="primary">mdi-briefcase-outline</v-icon>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="state.form.yearsOfExperience"
                    label="工作年限"
                    :rules="[state.rules.required]"
                    variant="outlined"
                    density="comfortable"
                    class="modern-input"
                  >
                    <template #prepend-inner>
                      <v-icon color="primary">mdi-timeline-clock-outline</v-icon>
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-combobox
                    v-model="state.form.skills"
                    label="核心技能"
                    :rules="[state.rules.minSkill]"
                    chips
                    multiple
                    closable-chips
                    hide-selected
                    variant="outlined"
                    density="comfortable"
                    class="modern-input"
                  >
                    <template #prepend-inner>
                      <v-icon color="primary">mdi-code-tags</v-icon>
                    </template>
                  </v-combobox>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="state.form.careerIntent"
                    label="职业意向"
                    :counter="40"
                    :rules="[state.rules.careerIntent]"
                    rows="3"
                    auto-grow
                    variant="outlined"
                    density="comfortable"
                    class="modern-input"
                  >
                    <template #prepend-inner>
                      <v-icon color="primary">mdi-target-account</v-icon>
                    </template>
                  </v-textarea>
                </v-col>
                <v-col cols="12" md="6">
                  <v-combobox
                    v-model="state.form.domainExperience"
                    label="领域经验"
                    chips
                    multiple
                    closable-chips
                    hide-selected
                    variant="outlined"
                    density="comfortable"
                    class="modern-input"
                  >
                    <template #prepend-inner>
                      <v-icon color="primary">mdi-domain</v-icon>
                    </template>
                  </v-combobox>
                </v-col>
                <v-col cols="12" md="6">
                  <v-combobox
                    v-model="state.form.highlights"
                    label="个人亮点"
                    :rules="[state.rules.maxHighlights]"
                    chips
                    multiple
                    closable-chips
                    hide-selected
                    variant="outlined"
                    density="comfortable"
                    class="modern-input"
                  >
                    <template #prepend-inner>
                      <v-icon color="primary">mdi-star-circle-outline</v-icon>
                    </template>
                  </v-combobox>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </div>
      </v-col>

      <v-col cols="12" xl="5">
        <!-- AI 配置 -->
        <div class="modern-card" :class="{ 'loading': state.loading }">
          <div class="card-header">
            <div class="header-icon-wrapper ai">
              <v-icon size="24">mdi-robot-outline</v-icon>
            </div>
            <div class="header-content">
              <h2 class="card-title">AI 配置</h2>
              <p class="card-subtitle">配置 AI 服务，开启智能求职</p>
            </div>
          </div>
          
          <div class="card-body">
            <v-form>
              <v-select
                v-model="state.form.aiPlatform"
                label="AI 平台"
                :items="Array.isArray(state.aiPlatforms) ? state.aiPlatforms : []"
                item-title="label"
                item-value="value"
                variant="outlined"
                density="comfortable"
                hint="当前仅支持 Deepseek"
                persistent-hint
                disabled
                class="modern-input mb-3"
              >
                <template #prepend-inner>
                  <v-icon color="primary">mdi-robot</v-icon>
                </template>
              </v-select>

              <div class="warning-tip mb-4">
                <v-icon size="20" class="tip-icon">mdi-alert-circle-outline</v-icon>
                <div class="tip-content">
                  <strong>重要提示</strong>
                  <p>请配置自己的 Deepseek API Key 并保存，否则一切 AI 功能无法使用</p>
                </div>
              </div>

              <v-text-field
                v-model="state.form.aiPlatformKey"
                :type="state.showSecret ? 'text' : 'password'"
                label="API Key"
                variant="outlined"
                density="comfortable"
                class="modern-input"
              >
                <template #prepend-inner>
                  <v-icon color="warning">mdi-key-variant</v-icon>
                </template>
                <template #append-inner>
                  <v-btn
                    :icon="state.showSecret ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    variant="text"
                    size="small"
                    @click="state.showSecret = !state.showSecret"
                  />
                </template>
              </v-text-field>

              <div class="divider-line" />

              <div class="switch-group">
                <div class="switch-item">
                  <div class="switch-info">
                    <div class="switch-label">
                      <v-icon size="20" color="primary">mdi-target</v-icon>
                      <span>启用 AI 职位匹配</span>
                    </div>
                    <p class="switch-desc">智能分析岗位匹配度，推荐最适合的职位</p>
                  </div>
                  <v-switch
                    v-model="state.form.enableAIJobMatch"
                    color="primary"
                    hide-details
                    inset
                  />
                </div>

                <div class="info-tip mb-3">
                  <v-icon size="18" class="tip-icon">mdi-lightbulb-on-outline</v-icon>
                  <span>不建议开启「AI 智能打招呼」：较消耗 Token；有实力不需要，没实力易浪费机会</span>
                </div>

                <div class="switch-item">
                  <div class="switch-info">
                    <div class="switch-label">
                      <v-icon size="20" color="primary">mdi-chat-processing-outline</v-icon>
                      <span>启用 AI 智能打招呼</span>
                    </div>
                    <p class="switch-desc">AI 自动生成个性化打招呼内容</p>
                  </div>
                  <v-switch
                    v-model="state.form.enableAIGreeting"
                    color="primary"
                    hide-details
                    inset
                  />
                </div>
              </div>
            </v-form>
          </div>
        </div>

        <!-- 简历与沟通配置 -->
        <div class="modern-card mt-6" :class="{ 'loading': state.loading }">
          <div class="card-header">
            <div class="header-icon-wrapper resume">
              <v-icon size="24">mdi-clipboard-text-outline</v-icon>
            </div>
            <div class="header-content">
              <h2 class="card-title">简历与沟通配置</h2>
              <p class="card-subtitle">管理简历和沟通相关设置</p>
            </div>
          </div>
          
          <div class="card-body">
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="state.form.minSalary"
                  type="number"
                  label="期望薪资下限 (K)"
                  variant="outlined"
                  density="comfortable"
                  class="modern-input"
                >
                  <template #prepend-inner>
                    <v-icon color="success">mdi-currency-cny</v-icon>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="state.form.maxSalary"
                  type="number"
                  label="期望薪资上限 (K)"
                  variant="outlined"
                  density="comfortable"
                  class="modern-input"
                >
                  <template #prepend-inner>
                    <v-icon color="success">mdi-currency-cny</v-icon>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="state.form.resumeImagePath"
                  label="简历图片路径"
                  placeholder="如 /Users/xxx/resume.png"
                  variant="outlined"
                  density="comfortable"
                  class="modern-input"
                >
                  <template #prepend-inner>
                    <v-icon color="info">mdi-image-outline</v-icon>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="state.form.sayHiContent"
                  label="默认打招呼内容"
                  rows="3"
                  auto-grow
                  variant="outlined"
                  density="comfortable"
                  class="modern-input"
                >
                  <template #prepend-inner>
                    <v-icon color="primary">mdi-chat-processing-outline</v-icon>
                  </template>
                </v-textarea>
              </v-col>
              <v-col cols="12">
                <div class="ai-suggestion-box">
                  <div class="suggestion-header">
                    <v-icon size="20" color="primary">mdi-robot</v-icon>
                    <span>AI 建议打招呼内容</span>
                    <v-btn
                      icon="mdi-content-copy"
                      variant="text"
                      size="small"
                      @click="service.copyAIGreeting"
                    />
                  </div>
                  <v-textarea
                    v-model="state.aiGreetingMessage"
                    rows="3"
                    auto-grow
                    readonly
                    variant="outlined"
                    density="comfortable"
                    class="modern-input suggestion-textarea"
                    hide-details
                  />
                </div>
              </v-col>
            </v-row>

            <div class="divider-line" v-if="featureFlags.showHrStatusFilter" />

            <v-combobox
              v-if="featureFlags.showHrStatusFilter"
              v-model="state.form.hrStatusKeywords"
              label="HR 状态过滤关键词"
              chips
              multiple
              closable-chips
              hide-selected
              variant="outlined"
              density="comfortable"
              class="modern-input"
            >
              <template #prepend-inner>
                <v-icon color="error">mdi-account-cancel-outline</v-icon>
              </template>
            </v-combobox>

            <div class="divider-line" v-if="!featureFlags.showHrStatusFilter || featureFlags.showRecommendJobs" />

            <div class="switch-group">
              <div class="switch-item">
                <div class="switch-info">
                  <div class="switch-label">
                    <v-icon size="20" color="primary">mdi-file-image-outline</v-icon>
                    <span>投递时发送图片简历</span>
                  </div>
                  <p class="switch-desc">自动附带图片格式简历</p>
                </div>
                <v-switch
                  v-model="state.form.sendImgResume"
                  color="primary"
                  hide-details
                  inset
                />
              </div>

              <div class="switch-item" v-if="featureFlags.showRecommendJobs">
                <div class="switch-info">
                  <div class="switch-label">
                    <v-icon size="20" color="primary">mdi-thumb-up-outline</v-icon>
                    <span>接收平台推荐</span>
                  </div>
                  <p class="switch-desc">允许平台推荐相关职位</p>
                </div>
                <v-switch
                  v-model="state.form.recommendJobs"
                  color="primary"
                  hide-details
                  inset
                />
              </div>
            </div>
          </div>

          <div class="card-footer">
            <v-btn
              variant="outlined"
              size="large"
              class="action-btn secondary"
              @click="service.resetForm"
              :disabled="state.loading"
            >
              <v-icon start>mdi-refresh</v-icon>
              重置
            </v-btn>
            <v-btn
              color="primary"
              size="large"
              class="action-btn primary"
              @click="service.handleSave"
              :loading="state.saving"
              :disabled="state.loading"
            >
              <v-icon start>mdi-content-save-outline</v-icon>
              保存配置
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useSnackbarStore } from '@/stores/snackbar';
import { useCommonConfigState } from '../state/commonConfigState';
import { useCommonConfigService } from '../service/commonConfigService';

const snackbar = useSnackbarStore();
const state = useCommonConfigState();
const service = useCommonConfigService(state, snackbar);

// 功能开关配置
const featureFlags = ref({
  showHrStatusFilter: false,    // HR 状态过滤关键词（暂时隐藏，后续可能启用）
  showRecommendJobs: false,     // 接收平台推荐（暂时隐藏，后续可能启用）
});

watch(
  () => state.form.aiPlatform,
  (platform) => {
    state.form.aiPlatformKey = state.aiConfigsCache[platform] ?? '';
  },
);

service.loadConfig();
</script>

<style scoped>
/* 容器样式 */
.config-container {
  padding: 24px;
  max-width: 1600px;
  margin: 0 auto;
}

/* 现代卡片样式 */
.modern-card {
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.modern-card:hover {
  border-color: #D1D5DB;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.modern-card.loading {
  opacity: 0.6;
  pointer-events: none;
}

.modern-card.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #1677FF, transparent);
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* 卡片头部 */
.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 28px;
  background: linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%);
  border-bottom: 1px solid #F3F4F6;
}

.header-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.header-icon-wrapper.shield {
  background: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%);
  color: #DC2626;
}

.header-icon-wrapper.profile {
  background: linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%);
  color: #2563EB;
}

.header-icon-wrapper.ai {
  background: linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%);
  color: #4F46E5;
}

.header-icon-wrapper.resume {
  background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
  color: #059669;
}

.modern-card:hover .header-icon-wrapper {
  transform: scale(1.05) rotate(3deg);
}

.header-content {
  flex: 1;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin: 0;
}

.card-subtitle {
  font-size: 13px;
  font-weight: 500;
  color: #6B7280;
  margin: 4px 0 0;
  line-height: 1.4;
}

/* 卡片主体 */
.card-body {
  padding: 28px;
}

/* 表单区域 */
.form-section {
  margin-bottom: 24px;
}

.form-section:last-child {
  margin-bottom: 0;
}

/* 提示信息 */
.info-tip {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
  border-radius: 10px;
  border-left: 3px solid #3B82F6;
  margin-bottom: 16px;
  font-size: 13px;
  color: #1E40AF;
  line-height: 1.5;
}

.info-tip .tip-icon {
  color: #3B82F6;
  flex-shrink: 0;
  margin-top: 1px;
}

.warning-tip {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  border-radius: 10px;
  border-left: 3px solid #F59E0B;
}

.warning-tip .tip-icon {
  color: #D97706;
  flex-shrink: 0;
  margin-top: 2px;
}

.warning-tip .tip-content {
  flex: 1;
}

.warning-tip strong {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #92400E;
  margin-bottom: 4px;
}

.warning-tip p {
  font-size: 13px;
  color: #78350F;
  margin: 0;
  line-height: 1.5;
}

/* 现代输入框样式 */
.modern-input :deep(.v-field) {
  border-radius: 10px;
  transition: all 0.2s ease;
}

.modern-input :deep(.v-field:hover) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.modern-input :deep(.v-field--focused) {
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.12);
}

.modern-input :deep(.v-chip) {
  border-radius: 6px;
  font-weight: 500;
}

/* 分割线 */
.divider-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, #E5E7EB, transparent);
  margin: 24px 0;
}

/* 开关组 */
.switch-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.switch-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  background: #F9FAFB;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.switch-item:hover {
  background: #F3F4F6;
}

.switch-info {
  flex: 1;
}

.switch-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.switch-desc {
  font-size: 13px;
  color: #6B7280;
  margin: 0;
  line-height: 1.4;
}

/* AI 建议框 */
.ai-suggestion-box {
  background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #BAE6FD;
}

.suggestion-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #0C4A6E;
}

.suggestion-header span {
  flex: 1;
}

.suggestion-textarea :deep(.v-field) {
  background: #FFFFFF !important;
}

/* 卡片底部 */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 28px;
  background: #F9FAFB;
  border-top: 1px solid #F3F4F6;
}

.action-btn {
  min-width: 120px;
  height: 44px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: none;
  transition: all 0.2s ease;
}

.action-btn.secondary {
  border-width: 2px;
}

.action-btn.secondary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.action-btn.primary {
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.2);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.3);
}

/* 响应式设计 */
@media (max-width: 960px) {
  .config-container {
    padding: 16px;
  }

  .card-header {
    padding: 20px;
  }

  .card-body {
    padding: 20px;
  }

  .card-footer {
    padding: 16px 20px;
    flex-direction: column;
  }

  .action-btn {
    width: 100%;
  }

  .card-title {
    font-size: 18px;
  }

  .card-subtitle {
    font-size: 12px;
  }
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modern-card {
  animation: fadeIn 0.4s ease-out;
}

.modern-card:nth-child(2) {
  animation-delay: 0.1s;
}

.modern-card:nth-child(3) {
  animation-delay: 0.2s;
}
</style>

