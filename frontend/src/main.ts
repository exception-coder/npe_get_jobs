import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import { vuetify } from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import './styles/main.scss';
import '@/modules/vitaPolish/style.css';
import { installVXETable } from './plugins/vxe-table';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
installVXETable(app);

app.mount('#app');
