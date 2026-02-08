<template>
  <div class="login-page">
    <v-container class="pa-0">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-sheet class="login-hero-card" color="transparent" elevation="0">
            <div class="mb-4">
              <div class="login-hero-title">移動通訊精準營銷中心</div>
              <div class="login-hero-subtitle">
                使用專屬帳號登入以管理平台配置、求職紀錄與進階工具。
              </div>
            </div>
            <div class="login-meta">
              若尚未開通帳號，請聯繫系統管理員。當前版本僅模擬登入流程，用於前端體驗設計與權限場景演示。
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="6" lg="4">
          <v-card class="login-card" elevation="0">
            <v-card-title>
              <div class="login-card-title">帳號登入</div>
              <div class="login-card-subtitle mt-1">請輸入系統分配的登入帳號與密碼</div>
            </v-card-title>
            <v-card-text>
              <v-form ref="formRef">
                <v-text-field
                  v-model="form.username"
                  label="使用者名稱"
                  placeholder="例如：admin 或 email"
                  prepend-inner-icon="mdi-account-circle"
                  :rules="[rules.required]"
                  autocomplete="username"
                />
                <v-text-field
                  v-model="form.password"
                  label="密碼"
                  placeholder="請輸入登入密碼"
                  prepend-inner-icon="mdi-lock"
                  :rules="[rules.required, rules.password]"
                  type="password"
                  autocomplete="current-password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions class="px-4 pb-4">
              <v-spacer />
              <v-btn
                class="login-primary-btn"
                color="primary"
                :loading="loading"
                @click="handleSubmit"
              >
                登入
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useSnackbarStore } from '@/stores/snackbar';
import { useLoginState } from '../state/loginState';
import { useLoginService } from '../service/loginService';

const snackbar = useSnackbarStore();
const loginState = useLoginState();

const { loading, formRef, form, rules } = loginState;

const { handleSubmit } = useLoginService(loginState, snackbar);
</script>

<style lang="scss">
/**
 * 样式导入说明：
 * 
 * 问题记录：
 * - 之前将样式导入放在 <script setup> 中使用 import '../styles/login.scss'
 * - 这会导致样式异步加载，在直接访问登录页时可能出现样式未加载完成的情况
 * - 表现为页面初始渲染时样式闪烁或样式缺失
 * 
 * 修复方案：
 * - 将样式导入移到 <style> 标签中使用 @import 导入
 * - 这样样式会在组件编译时处理，确保在组件渲染前样式已加载完成
 * - 与项目中其他组件（如 SaslForm.vue）的导入方式保持一致
 */
@import '../styles/login.scss';
</style>


