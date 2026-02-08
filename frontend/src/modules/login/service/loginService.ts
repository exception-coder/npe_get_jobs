import { httpJson } from '@/api/http';
import { useSnackbarStore } from '@/stores/snackbar';
import type { useLoginState } from '../state/loginState';
import { useRouter } from 'vue-router';
import { setTokenExpiresAt, startTokenRefreshTimer } from '@/common/infrastructure/auth/auth';

type LoginState = ReturnType<typeof useLoginState>;
type SnackbarStore = ReturnType<typeof useSnackbarStore>;

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  expiresAt: number;
  username: string;
  displayName?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

export const useLoginService = (state: LoginState, snackbar: SnackbarStore) => {
  const router = useRouter();

  const handleSubmit = async () => {
    const result = await state.formRef.value?.validate?.();
    if (result?.valid === false) {
      snackbar.show({ message: '請先修正表單校驗錯誤', color: 'warning' });
      return;
    }

    state.loading.value = true;
    try {
      const request: LoginRequest = {
        username: state.form.username.trim(),
        password: state.form.password,
      };

      const response = await httpJson<ApiResponse<LoginResponse>>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(request),
      });

      if (response.success && response.data) {
        snackbar.show({ message: '登入成功，歡迎回來', color: 'success' });
        
        // 保存 token 过期时间并启动定时刷新
        if (response.data.expiresAt) {
          setTokenExpiresAt(response.data.expiresAt);
          startTokenRefreshTimer();
        }
        
        // 登录成功后，token 已经通过 cookie 设置，跳转到首页或之前想访问的页面
        const redirect = router.currentRoute.value.query.redirect as string;
        if (redirect) {
          router.push(redirect);
        } else {
          router.push('/');
        }
      } else {
        snackbar.show({ message: response.message || '登入失敗，請稍後重試', color: 'error' });
      }
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error('登入失敗', error);
      const errorMessage = error?.payload?.message || error?.message || '登入失敗，請稍後重試';
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.loading.value = false;
    }
  };

  return {
    handleSubmit,
  };
};


