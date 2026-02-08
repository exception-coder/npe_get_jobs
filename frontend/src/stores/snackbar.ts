import { defineStore } from 'pinia';
import { ref } from 'vue';

type SnackbarColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error';

export const useSnackbarStore = defineStore('snackbar', () => {
  const isVisible = ref(false);
  const message = ref('');
  const color = ref<SnackbarColor>('info');
  const timeout = ref(3000);

  const show = (payload: { message: string; color?: SnackbarColor; timeout?: number }) => {
    message.value = payload.message;
    color.value = payload.color ?? 'info';
    timeout.value = payload.timeout ?? 3000;
    isVisible.value = true;
  };

  const hide = () => {
    isVisible.value = false;
  };

  return {
    isVisible,
    message,
    color,
    timeout,
    show,
    hide,
  };
});
