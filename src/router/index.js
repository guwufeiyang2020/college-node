import Vue from 'vue';
import VueRouter from 'vue-router';
import '../utils/install';
import NProgress from 'nprogress'; // progress bar
import store from '../store/index';
import {
  routers
} from './routers';

import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({
  showSpinner: false,
});

const {
  globalConfig
} = window;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: globalConfig.router.base,
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      x: 0,
      y: 0
    };
  }
});

router.beforeEach(async(to, from, next) => {
  NProgress.start();
  // store.dispatch('getUserInfo');
  if (to.meta.requireLogin) {
    const {
      userInfo
    } = store.state.user;
    if (userInfo) {
      next();
      NProgress.done();
    } else {
      store.commit('changeLoginDialog', true);
    }
  } else {
    next();
    NProgress.done();
  }
});
export default router;
