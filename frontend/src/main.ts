import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import { vuetify } from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import './styles/main.scss';
import '@/modules/vitaPolish/style.css';
import { installVXETable } from './plugins/vxe-table';
import { startTokenRefreshTimer } from '@/common/infrastructure/auth/auth';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
installVXETable(app);

app.mount('#app');

// 启动定时刷新服务（如果用户已登录，会自动开始定时刷新）
startTokenRefreshTimer();
