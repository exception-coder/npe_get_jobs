<template>
  <div class="config-container">
    <v-row dense>
      <v-col cols="12">
        <!-- AI 职位匹配补充规则 + 调用测试 -->
        <v-row dense>
          <v-col cols="12" xl="6">
            <div class="modern-card">
              <div class="card-header">
                <div class="header-icon-wrapper rules">
                  <v-icon size="24">mdi-tune-variant</v-icon>
                </div>
                <div class="header-content">
                  <h2 class="card-title">职位匹配扩展规则</h2>
                  <p class="card-subtitle">自定义职位匹配判定规则，优先级高于默认规则</p>
                </div>
              </div>

              <div class="card-body">
                <div class="info-tip mb-4">
                  <v-icon size="18" class="tip-icon">mdi-lightbulb-on-outline</v-icon>
                  <span>每条规则描述一种需要特殊对待的匹配场景，AI 会在默认规则之上额外遵守这些约束。</span>
                </div>
                <div class="info-tip info-tip--example mb-6">
                  <v-icon size="18" class="tip-icon">mdi-comment-text-outline</v-icon>
                  <span>示例：Java开发技术管理岗（组长、技术负责人）也可接受，无需判定为不符</span>
                </div>

                <div v-for="(rule, index) in matchRules" :key="index" class="rule-row mb-3">
                  <v-text-field
                    v-model="matchRules[index]"
                    :label="`规则 ${index + 1}`"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    class="modern-input"
                    placeholder="描述一种需要特殊对待的匹配场景…"
                  >
                    <template #append>
                      <v-btn icon variant="text" color="error" size="small" @click="matchRules.splice(index, 1)">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
                </div>

                <v-btn variant="outlined" prepend-icon="mdi-plus" class="mt-2 mb-6" @click="matchRules.push('')">
                  添加规则
                </v-btn>

                <div class="card-actions">
                  <v-btn color="primary" :loading="savingMatch" prepend-icon="mdi-content-save-outline" @click="saveMatch">
                    保存规则
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>

          <!-- 职位匹配调用验证 -->
          <v-col cols="12" xl="6">
            <div class="modern-card test-card">
              <div class="card-header">
                <div class="header-icon-wrapper test">
                  <v-icon size="24">mdi-flask-outline</v-icon>
                </div>
                <div class="header-content">
                  <h2 class="card-title">职位匹配验证</h2>
                  <p class="card-subtitle">填入变量，调用接口验证当前规则效果</p>
                </div>
              </div>

              <div class="card-body">
                <v-textarea
                  v-model="matchTest.myJd"
                  label="我的目标职责 (my_jd)"
                  variant="outlined"
                  density="comfortable"
                  rows="4"
                  class="modern-input mb-3"
                  placeholder="描述你期望从事的工作内容，如：负责后端微服务开发与维护…"
                />
                <v-textarea
                  v-model="matchTest.jobDescription"
                  label="目标职位描述 (jd)"
                  variant="outlined"
                  density="comfortable"
                  rows="4"
                  class="modern-input mb-4"
                  placeholder="粘贴 JD 内容…"
                />

                <div class="card-actions mb-4">
                  <v-btn
                    color="secondary"
                    :loading="matchTest.loading"
                    :disabled="!matchTest.myJd.trim() || !matchTest.jobDescription.trim()"
                    prepend-icon="mdi-play-circle-outline"
                    @click="runMatchTest"
                  >
                    执行验证
                  </v-btn>
                </div>

                <div v-if="matchTest.result !== null" class="result-block">
                  <div class="result-header">
                    <v-icon size="18" :color="matchTest.result.matched ? 'success' : 'error'">
                      {{ matchTest.result.matched ? 'mdi-check-circle' : 'mdi-close-circle' }}
                    </v-icon>
                    <span class="result-label" :class="matchTest.result.matched ? 'matched' : 'unmatched'">
                      {{ matchTest.result.matched ? '匹配' : '不匹配' }}
                    </span>
                  </div>
                  <p class="result-reason">{{ matchTest.result.reason }}</p>
                </div>

                <div v-if="matchTest.error" class="error-block">
                  <v-icon size="16" color="error">mdi-alert-circle-outline</v-icon>
                  <span>{{ matchTest.error }}</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- 企业评估补充规则 + 调用测试 -->
        <v-row dense class="mt-6">
          <v-col cols="12" xl="6">
            <div class="modern-card" :class="{ loading: savingCompany }">
              <div class="card-header">
                <div class="header-icon-wrapper company">
                  <v-icon size="24">mdi-office-building-cog-outline</v-icon>
                </div>
                <div class="header-content">
                  <h2 class="card-title">企业评估扩展规则</h2>
                  <p class="card-subtitle">自定义企业评分的额外扣分 / 加分规则</p>
                </div>
              </div>

              <div class="card-body">
                <div class="info-tip mb-6">
                  <v-icon size="18" class="tip-icon">mdi-lightbulb-on-outline</v-icon>
                  <span>补充规则将注入 AI 提示词，与默认评分项共同影响最终风险评分。</span>
                </div>

                <p class="section-label">扣分规则</p>
                <div class="info-tip info-tip--example mb-4">
                  <v-icon size="18" class="tip-icon">mdi-comment-text-outline</v-icon>
                  <span>示例：近半年有大规模裁员新闻且无官方回应：-2</span>
                </div>
                <div v-for="(rule, index) in deductions" :key="'d' + index" class="rule-row mb-3">
                  <v-text-field
                    v-model="deductions[index]"
                    :label="`扣分规则 ${index + 1}`"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    class="modern-input"
                    placeholder="描述扣分场景及分值，如：…：-1"
                  >
                    <template #append>
                      <v-btn icon variant="text" color="error" size="small" @click="deductions.splice(index, 1)">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
                </div>
                <v-btn variant="outlined" prepend-icon="mdi-plus" class="mt-2 mb-6" @click="deductions.push('')">
                  添加扣分规则
                </v-btn>

                <v-divider class="mb-6" />

                <p class="section-label">加分规则</p>
                <div class="info-tip info-tip--example mb-4">
                  <v-icon size="18" class="tip-icon">mdi-comment-text-outline</v-icon>
                  <span>示例：在本地就业市场属于头部雇主品牌：+1</span>
                </div>
                <div v-for="(rule, index) in bonuses" :key="'b' + index" class="rule-row mb-3">
                  <v-text-field
                    v-model="bonuses[index]"
                    :label="`加分规则 ${index + 1}`"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    class="modern-input"
                    placeholder="描述加分场景及分值，如：…：+1"
                  >
                    <template #append>
                      <v-btn icon variant="text" color="error" size="small" @click="bonuses.splice(index, 1)">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
                </div>
                <v-btn variant="outlined" prepend-icon="mdi-plus" class="mt-2 mb-6" @click="bonuses.push('')">
                  添加加分规则
                </v-btn>

                <div class="card-actions">
                  <v-btn color="primary" :loading="savingCompany" prepend-icon="mdi-content-save-outline" @click="saveCompany">
                    保存规则
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>

          <!-- 企业评估调用验证 -->
          <v-col cols="12" xl="6">
            <div class="modern-card test-card">
              <div class="card-header">
                <div class="header-icon-wrapper test">
                  <v-icon size="24">mdi-flask-outline</v-icon>
                </div>
                <div class="header-content">
                  <h2 class="card-title">企业评估验证</h2>
                  <p class="card-subtitle">填入企业信息，调用接口验证当前规则效果</p>
                </div>
              </div>

              <div class="card-body">
                <v-textarea
                  v-model="companyTest.companyName"
                  label="企业信息 (company_info)"
                  variant="outlined"
                  density="comfortable"
                  rows="6"
                  class="modern-input mb-4"
                  placeholder="输入公司名称或描述，如：字节跳动，互联网，北京，社保人数5000+…"
                />

                <div class="card-actions mb-4">
                  <v-btn
                    color="secondary"
                    :loading="companyTest.loading"
                    :disabled="!companyTest.companyName.trim()"
                    prepend-icon="mdi-play-circle-outline"
                    @click="runCompanyTest"
                  >
                    执行验证
                  </v-btn>
                </div>

                <div v-if="companyTest.result !== null" class="result-block">
                  <div class="result-header mb-2">
                    <span class="result-company-name">{{ companyTest.result.company_name }}</span>
                    <v-chip :color="scoreColor(companyTest.result.risk_score)" size="small" class="ml-2">
                      评分 {{ companyTest.result.risk_score }}
                    </v-chip>
                  </div>
                  <div class="result-meta mb-2">
                    <v-chip size="x-small" :color="companyTest.result.pay_risk.includes('存在') ? 'error' : 'success'" class="mr-2">
                      {{ companyTest.result.pay_risk }}
                    </v-chip>
                    <v-chip size="x-small" color="default" v-if="companyTest.result.company_type">
                      {{ companyTest.result.company_type }}
                    </v-chip>
                  </div>
                  <p class="result-reason">{{ companyTest.result.reason }}</p>
                </div>

                <div v-if="companyTest.error" class="error-block">
                  <v-icon size="16" color="error">mdi-alert-circle-outline</v-icon>
                  <span>{{ companyTest.error }}</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchExtraRules, saveExtraRules } from '../api/jobMatchRulesApi';
import { fetchCompanyExtraRules, saveCompanyExtraRules } from '../api/companyRulesApi';
import { httpJson } from '@/api/http';
import { useSnackbarStore } from '@/stores/snackbar';

const snackbar = useSnackbarStore();

// --- 职位匹配规则 ---
const savingMatch = ref(false);
const matchRules = ref<string[]>([]);

// --- 企业评估规则 ---
const savingCompany = ref(false);
const deductions = ref<string[]>([]);
const bonuses = ref<string[]>([]);

// --- 职位匹配验证 ---
const matchTest = ref({
  myJd: '',
  jobDescription: '',
  loading: false,
  result: null as { matched: boolean; reason: string } | null,
  error: '',
});

// --- 企业评估验证 ---
const companyTest = ref({
  companyName: '',
  loading: false,
  result: null as { company_name: string; pay_risk: string; company_type: string; risk_score: number; reason: string } | null,
  error: '',
});

onMounted(async () => {
  try {
    matchRules.value = await fetchExtraRules();
  } catch {
    matchRules.value = [];
  }
  try {
    const data = await fetchCompanyExtraRules();
    deductions.value = data.deductions;
    bonuses.value = data.bonuses;
  } catch {
    deductions.value = [];
    bonuses.value = [];
  }
});

async function saveMatch() {
  const filtered = matchRules.value.filter(r => r.trim().length > 0);
  savingMatch.value = true;
  try {
    await saveExtraRules(filtered);
    matchRules.value = filtered;
    snackbar.show({ message: '职位匹配规则已保存', color: 'success' });
  } catch {
    snackbar.show({ message: '保存失败，请重试', color: 'error' });
  } finally {
    savingMatch.value = false;
  }
}

async function saveCompany() {
  const filteredD = deductions.value.filter(r => r.trim().length > 0);
  const filteredB = bonuses.value.filter(r => r.trim().length > 0);
  savingCompany.value = true;
  try {
    await saveCompanyExtraRules({ deductions: filteredD, bonuses: filteredB });
    deductions.value = filteredD;
    bonuses.value = filteredB;
    snackbar.show({ message: '企业评估规则已保存', color: 'success' });
  } catch {
    snackbar.show({ message: '保存失败，请重试', color: 'error' });
  } finally {
    savingCompany.value = false;
  }
}

async function runMatchTest() {
  matchTest.value.result = null;
  matchTest.value.error = '';
  matchTest.value.loading = true;
  try {
    const res = await httpJson<{ matched: boolean; reason: string }>('/api/ai/job/match-with-reason', {
      method: 'POST',
      body: JSON.stringify({
        myJd: matchTest.value.myJd,
        jobDescription: matchTest.value.jobDescription,
      }),
    });
    matchTest.value.result = res;
  } catch (e: unknown) {
    matchTest.value.error = e instanceof Error ? e.message : '请求失败，请重试';
  } finally {
    matchTest.value.loading = false;
  }
}

async function runCompanyTest() {
  companyTest.value.result = null;
  companyTest.value.error = '';
  companyTest.value.loading = true;
  try {
    const res = await httpJson<{ result: { company_name: string; pay_risk: string; company_type: string; risk_score: number; reason: string } }>('/api/ai/company/evaluate', {
      method: 'POST',
      body: JSON.stringify({ companyName: companyTest.value.companyName }),
    });
    companyTest.value.result = res.result;
  } catch (e: unknown) {
    companyTest.value.error = e instanceof Error ? e.message : '请求失败，请重试';
  } finally {
    companyTest.value.loading = false;
  }
}

function scoreColor(score: number): string {
  if (score >= 7) return 'success';
  if (score >= 4) return 'warning';
  return 'error';
}
</script>

<style scoped>
.config-container {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.modern-card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: opacity 0.2s;
  height: 100%;
}

.modern-card.loading {
  opacity: 0.6;
  pointer-events: none;
}

.test-card {
  border-style: dashed;
  background: #fafbfc;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid #f1f5f9;
}

.header-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
  color: #fff;
}

.header-icon-wrapper.rules {
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
}

.header-icon-wrapper.company {
  background: linear-gradient(135deg, #0369a1 0%, #38bdf8 100%);
}

.header-icon-wrapper.test {
  background: linear-gradient(135deg, #059669 0%, #34d399 100%);
}

.header-content .card-title {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.header-content .card-subtitle {
  font-size: 13px;
  color: #64748b;
  margin: 4px 0 0;
}

.card-body {
  padding: 24px;
}

.section-label {
  font-size: 14px;
  font-weight: 600;
  color: #334155;
  margin: 0 0 12px;
}

.info-tip {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 13px;
  color: #0369a1;
}

.info-tip--example {
  background: #fefce8;
  border-color: #fde68a;
  color: #92400e;
}

.tip-icon {
  flex-shrink: 0;
  margin-top: 1px;
  color: inherit;
}

.rule-row {
  display: flex;
  align-items: center;
}

.modern-input :deep(.v-field) {
  border-radius: 10px;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
}

.result-block {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 14px 16px;
}

.result-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.result-label {
  font-size: 15px;
  font-weight: 700;
}

.result-label.matched {
  color: #16a34a;
}

.result-label.unmatched {
  color: #dc2626;
}

.result-company-name {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
}

.result-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}

.result-reason {
  font-size: 13px;
  color: #475569;
  margin: 0;
  line-height: 1.6;
}

.error-block {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #dc2626;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 10px 14px;
}
</style>
