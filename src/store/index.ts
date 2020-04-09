import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/modules/user';

Vue.use(Vuex);

const initPageState = () => {
  return {
    // user: {
    //   email: '',
    //   password: '',
    // },
  };
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
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
