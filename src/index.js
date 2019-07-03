import Vue from 'vue';
import router from '@/router/router';
import store from '@/store/index';

import App from 'Components/App';

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

export default app;
