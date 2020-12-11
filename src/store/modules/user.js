import Vue from 'vue';

const user = {
  state: {
    userInfo: {},
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    loginUserInfo({ commit }, loginForm) {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-undef
        Vue.prototype.$http
          .post('/assso/loginApi/login', loginForm)
          .then((res) => {
            if (res.data.status === 200) {
              commit('SET_USER_INFO', res.data.data);
              localStorage.setItem('login-reload', 'true');
              resolve(res.data);
            } else {
              this.$notify.error({
                title: '错误提示',
                message: res.data.errormsg,
              });
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    layout({ commit }) {
      Vue.prototype.$http.post('/assso/loginApi/exit').then((res) => {
        if (res.data.status === 200 && res.data.data.flag === true) {
          commit('SET_USER_INFO', null);
          window.localStorage.setItem('login-reload', 'false');
        }
      });
    },
    getUserInfo({ commit }) {
      Vue.prototype.$http.get('/assso/userApi/getUserInfo').then((res) => {
        const { data } = res.data;
        commit('SET_USER_INFO', data);
      });
    },
  },
};

export default user;
