import { reactive, ref } from 'vue';

export type LoginFormModel = {
  username: string;
  password: string;
};

export const useLoginState = () => {
  const loading = ref(false);
  const formRef = ref();

  const form = reactive<LoginFormModel>({
    username: '',
    password: '',
  });

  const rules = {
    required: (value: string) => value.trim().length > 0 || '此欄位為必填',
    password: (value: string) => value.trim().length >= 6 || '密碼長度至少為 6 位',
  };

  return {
    loading,
    formRef,
    form,
    rules,
  };
};


