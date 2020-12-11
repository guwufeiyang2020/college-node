import Vue from 'vue';
import Vuex from 'vuex';
import creatPersistedstate from 'vuex-persistedstate';
import common from './modules/common';
import user from './modules/user';
import { getters } from './getters';
// import module1 from './modules/module1';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    loginDialog: false,
  },
  mutations: {
    changeLoginDialog(state, isShow) {
      state.loginDialog = isShow;
    },
  },
  modules: {
    common,
    user,
  },
  getters,
  strict: debug,
  plugins: [
    creatPersistedstate({
      storage: window.localStorage,
      paths: ['user'], // 缓存的模块
    }),
  ],
});
