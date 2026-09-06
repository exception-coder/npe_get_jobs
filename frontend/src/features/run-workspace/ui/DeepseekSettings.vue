<template>
  <section class="model-settings" aria-labelledby="model-settings-title" :aria-busy="loading || saving">
    <header>
      <div><h3 id="model-settings-title">模型服务 <span>当前生效：{{ activeProvider === 'custom' ? '自定义兼容服务' : 'DeepSeek' }}</span></h3>
        <p>{{ loading ? '正在读取配置…' : configured ? `已配置 · ${savedModel} · 意向解析与 JD 匹配使用此模型` : '先配置 API Key，再解析你的求职需求。' }}</p>
      </div>
      <button v-if="!loading" type="button" :aria-expanded="expanded" @click="expanded = !expanded">{{ expanded ? '收起' : '配置模型' }}</button>
    </header>
    <form v-if="expanded && !loading" @submit.prevent="save">
      <fieldset :disabled="saving">
        <label>服务类型<select v-model="provider" aria-label="服务类型" @change="switchProvider"><option value="deepseek">DeepSeek（默认）</option><option value="custom">自定义兼容服务</option></select></label>
        <label v-if="provider === 'custom'">Base URL<input v-model.trim="baseUrl" required type="url" maxlength="500" placeholder="https://你的服务地址/v1" /><small>填写基础地址，不含 /chat/completions。仅使用你信任的服务，解析时会向它发送求职内容。</small></label>
        <label>API Key<input v-model.trim="apiKey" type="password" autocomplete="new-password" :required="!configured || baseUrl !== savedUrl" maxlength="512" :placeholder="configured ? '留空保留此服务的 Key；更换地址需重新填写' : '填写此服务的 API Key'" /></label>
        <label v-if="provider === 'deepseek'">模型<select v-model="model"><option v-for="item in choices" :key="item" :value="item">{{ item }}</option><option value="custom">自定义模型 ID</option></select></label>
        <label v-if="provider === 'custom' || model === 'custom'">模型 ID<input v-model.trim="customModel" required maxlength="200" placeholder="填写服务商提供的模型 ID" /></label>
      </fieldset>
      <footer><small>兼容 OpenAI Chat Completions，需支持 JSON 输出。两套配置独立保存；保存并切换不发起模型请求。</small><button type="submit" :disabled="saving">{{ saving ? '正在保存…' : '保存模型配置' }}</button></footer>
    </form>
    <p v-if="error" role="alert" class="error">{{ error }} <button type="button" :disabled="loading || saving" @click="load">重新读取</button></p>
    <p v-if="message" role="status">{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { loadDeepseekSettings, saveDeepseekSettings, type DeepseekSettings } from '@/shared/api/recruitment';
const emit = defineEmits<{ ready: [value: boolean] }>();
const configured = ref(false), loading = ref(true), saving = ref(false), expanded = ref(true);
const apiKey = ref(''), model = ref(''), savedModel = ref(''), customModel = ref('');
const models = ref<string[]>([]), error = ref(''), message = ref('');
const provider = ref('deepseek'), activeProvider = ref('deepseek'), baseUrl = ref(''), savedUrl = ref('');
const choices = computed(() => [...new Set([...models.value, savedModel.value].filter(Boolean))]);
function apply(value: DeepseekSettings) {
  configured.value = value.configured; savedModel.value = value.model; model.value = value.model;
  models.value = value.models; emit('ready', value.configured);
  provider.value = value.provider ?? 'deepseek'; activeProvider.value = value.activeProvider ?? 'deepseek';
  baseUrl.value = value.baseUrl ?? 'https://api.deepseek.com'; savedUrl.value = baseUrl.value;
  customModel.value = value.model;
}
async function switchProvider() {
  loading.value = true; error.value = ''; message.value = ''; apiKey.value = ''; emit('ready', false);
  try {
    apply(await loadDeepseekSettings(provider.value));
    emit('ready', provider.value === activeProvider.value && configured.value);
    expanded.value = true;
  } catch { error.value = '无法读取该服务配置，请重新读取。'; }
  finally { loading.value = false; }
}
async function load() {
  loading.value = true; error.value = ''; message.value = '';
  try { apply(await loadDeepseekSettings()); expanded.value = !configured.value; }
  catch { error.value = '无法读取模型配置，请检查服务后重试。'; emit('ready', false); }
  finally { loading.value = false; }
}
async function save() {
  if (saving.value) return;
  saving.value = true; error.value = ''; message.value = '';
  try {
    apply(await saveDeepseekSettings(apiKey.value, provider.value === 'custom' || model.value === 'custom' ? customModel.value : model.value,
      { provider: provider.value, baseUrl: baseUrl.value }));
    apiKey.value = ''; message.value = '配置已保存，后续解析和匹配立即使用新模型。尚未验证远程连接。';
  } catch { error.value = '保存未完成，请检查 Key、模型 ID 和后端服务后重试；运行时刷新失败时需要重启服务。'; }
  finally { saving.value = false; }
}
void load();
</script>

<style scoped>
.model-settings { margin: 20px 0; padding: 20px 0; border-block: 1px solid var(--line); color: var(--ink-strong); }
header, footer { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
h3 { margin: 0; font-size: 16px; } h3 span { margin-left: 10px; font-size: 12px; font-weight: 400; color: var(--ink-muted); }
p { margin: 8px 0 0; font-size: 12px; line-height: 1.6; } button { flex-shrink: 0; padding: 9px 14px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink-strong); cursor: pointer; }
fieldset { border: 0; padding: 0; margin: 18px 0; display: grid; grid-template-columns: 1.3fr 1fr; align-items: start; gap: 16px; min-width: 0; }
label { display: grid; gap: 8px; font-size: 12px; } input, select { width: 100%; min-width: 0; padding: 10px 12px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink-strong); font: inherit; }
small { color: var(--ink-muted); font-size: 11px; line-height: 1.6; } footer button { background: var(--ink-strong); color: var(--surface); }
.error { color: var(--accent); } :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; } button:disabled { opacity: .5; cursor: not-allowed; }
@media (max-width: 600px) { fieldset { grid-template-columns: 1fr; } footer { align-items: stretch; flex-direction: column; } h3 span { display: block; margin: 5px 0 0; } }
</style>
