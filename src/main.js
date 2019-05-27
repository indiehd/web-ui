import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex/store';
import './registerServiceWorker';

// plugins
import IndieHD from './plugins/indiehd';

Vue.config.productionTip = false;

Vue.use(IndieHD);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
