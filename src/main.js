/* eslint-disable no-restricted-globals */
import Vue from 'vue';

import VueLazyload from 'vue-lazyload';
import './utils/rem';
import './utils/install';
import router from './router';
import store from './store';
import './assets/styles/index.scss';

import 'babel-polyfill';
import './assets/js/install';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/error.jpg'),
  attempt: 1,
});

Vue.config.productionTip = false;

window.addEventListener('storage', (e) => {
  if (e.key === 'login-reload') {
    window.location.reload();
  }
});
new Vue({
  router,
  store,
  template: '<router-view></router-view>',
}).$mount('#app');
