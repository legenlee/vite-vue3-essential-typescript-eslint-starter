import { createApp } from 'vue';
import { router } from './router';
import { store, key } from './store';
import App from './App.vue';

const app = createApp(App);

app.use(store, key);
app.use(router);

app.mount('#app');
