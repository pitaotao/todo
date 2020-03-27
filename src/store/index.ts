import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/modules/user';

Vue.use(Vuex);

const initPageState = () => {
  return {
    // user: {
    //   username: "",
    //   password: ""
    // }
  };
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: initPageState,
  mutations: {
    // [types.SET_USER](state, pageState = {}) {
    //   for (const prop in pageState) {
    //     state[prop] = pageState[prop];
    //   }
    // }
  },
  actions: {},
  modules: {
    user,
  },
});

export default store;
