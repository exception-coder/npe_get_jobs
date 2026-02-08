<template>
  <v-row dense>
    <v-col cols="12" xl="7">
      <v-card class="section-card" :loading="state.loading" elevation="2">
        <v-card-title class="section-title d-flex align-center">
          <v-icon class="mr-2" color="primary">mdi-shield-alert</v-icon>
          黑名单过滤配置
        </v-card-title>
        <v-card-text>
          <v-form ref="state.blacklistForm">
            <v-combobox
              v-model="state.form.jobBlacklist"
              label="岗位黑名单关键字"
              chips
              multiple
              closable-chips
              hide-selected
              hint="职位标题或描述匹配的岗位将被过滤"
              persistent-hint
              clearable
              prepend-inner-icon="mdi-briefcase-remove"
            />
            <v-combobox
              v-model="state.form.companyBlacklist"
              class="mt-4"
              label="公司黑名单关键字"
              chips
              multiple
              closable-chips
              hide-selected
              hint="公司名称匹配的岗位将被过滤"
              persistent-hint
              clearable
              prepend-inner-icon="mdi-office-building-remove"
            />
          </v-form>
        </v-card-text>
      </v-card>

      <v-card class="section-card mt-6" :loading="state.loading" elevation="2">
        <v-card-title class="section-title d-flex align-center">
          <v-icon class="mr-2" color="primary">mdi-account-badge</v-icon>
          候选人画像
        </v-card-title>
        <v-card-text>
          <v-form ref="state.profileForm">
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="state.form.jobTitle"
                  label="目标职位名称"
                  :rules="[state.rules.required]"
                  prepend-inner-icon="mdi-briefcase"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="state.form.yearsOfExperience"
                  label="工作年限"
                  :rules="[state.rules.required]"
                  prepend-inner-icon="mdi-timeline-clock"
                />
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
                  prepend-inner-icon="mdi-xml"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="state.form.careerIntent"
                  label="职业意向"
                  :counter="40"
                  :rules="[state.rules.careerIntent]"
                  rows="3"
                  auto-grow
                  prepend-inner-icon="mdi-target-account"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-combobox
                  v-model="state.form.domainExperience"
                  label="领域经验"
                  chips
                  multiple
                  closable-chips
                  hide-selected
                  prepend-inner-icon="mdi-domain"
                />
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
                  prepend-inner-icon="mdi-star-circle"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xl="5">
      <v-card class="section-card" :loading="state.loading" elevation="2">
        <v-card-title class="section-title d-flex align-center">
          <v-icon class="mr-2" color="primary">mdi-ai</v-icon>
          AI 配置
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-select
              v-model="state.form.aiPlatform"
              label="AI 平台"
              :items="Array.isArray(state.aiPlatforms) ? state.aiPlatforms : []"
              item-title="label"
              item-value="value"
              prepend-inner-icon="mdi-robot"
              hint="当前仅支持 Deepseek"
              persistent-hint
              disabled
            />
            <v-text-field
              v-model="state.form.aiPlatformKey"
              :type="state.showSecret ? 'text' : 'password'"
              label="API Key"
              prepend-inner-icon="mdi-key"
              :append-inner-icon="state.showSecret ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="state.showSecret = !state.showSecret"
            />
            <v-divider class="my-4" />
            <v-switch
              v-model="state.form.enableAIJobMatch"
              color="primary"
              inset
              label="启用 AI 职位匹配"
            />
            <v-switch
              v-model="state.form.enableAIGreeting"
              color="primary"
              inset
              label="启用 AI 智能打招呼"
            />
          </v-form>
        </v-card-text>
      </v-card>

      <v-card class="section-card mt-6" :loading="state.loading" elevation="2">
        <v-card-title class="section-title d-flex align-center">
          <v-icon class="mr-2" color="primary">mdi-clipboard-text-outline</v-icon>
          简历与沟通配置
        </v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="state.form.minSalary"
                type="number"
                label="期望薪资下限 (K)"
                prepend-inner-icon="mdi-currency-cny"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="state.form.maxSalary"
                type="number"
                label="期望薪资上限 (K)"
                prepend-inner-icon="mdi-currency-cny"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="state.form.resumeImagePath"
                label="简历图片路径"
                prepend-inner-icon="mdi-image"
                placeholder="如 /Users/xxx/resume.png"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="state.form.sayHiContent"
                label="默认打招呼内容"
                rows="3"
                auto-grow
                prepend-inner-icon="mdi-chat-processing"
              />
              <v-textarea
                v-model="state.aiGreetingMessage"
                class="mt-2"
                label="AI 建议打招呼内容"
                rows="3"
                auto-grow
                readonly
                variant="outlined"
                prepend-inner-icon="mdi-robot"
                append-inner-icon="mdi-content-copy"
                @click:append-inner="service.copyAIGreeting"
              />
            </v-col>
          </v-row>
          <v-divider class="my-4" />
          <v-combobox
            v-model="state.form.hrStatusKeywords"
            label="HR 状态过滤关键词"
            chips
            multiple
            closable-chips
            hide-selected
            prepend-inner-icon="mdi-account-cancel"
          />
          <v-divider class="my-4" />
          <v-switch
            v-model="state.form.sendImgResume"
            color="primary"
            inset
            label="投递时发送图片简历"
          />
          <v-switch
            v-model="state.form.recommendJobs"
            color="primary"
            inset
            label="接收平台推荐"
          />
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="tonal" color="secondary" @click="service.resetForm" :disabled="state.loading">
            重置
          </v-btn>
          <v-btn color="primary" @click="service.handleSave" :loading="state.saving" :disabled="state.loading">
            保存配置
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useSnackbarStore } from '@/stores/snackbar';
import { useCommonConfigState } from '../state/commonConfigState';
import { useCommonConfigService } from '../service/commonConfigService';

const snackbar = useSnackbarStore();
const state = useCommonConfigState();
const service = useCommonConfigService(state, snackbar);

watch(
  () => state.form.aiPlatform,
  (platform) => {
    state.form.aiPlatformKey = state.aiConfigsCache[platform] ?? '';
  },
);

service.loadConfig();
</script>

