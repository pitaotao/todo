import * as types from '../types';

const initPageState = () => {
    return {
        isLogin: false,  // 判断是否登录
        userLogin: {  // 用户登录信息
            email: '',
            password: '',
        },
    };
};

const user = {
  state: initPageState(),
  mutations: {
      saveUser(state: object | any, userLogin: object | any): void {
          state.isLogin = true;
          state.userLogin = userLogin;
      },
  },
  actions: {
      saveUser({commit}: any, payload: object | any): void {
          commit('saveUser', payload);
      },
  },
  getters: {
      isLogin(state: any): any {
        if (state.userLogin.email !== '') {
            return true;
        } else {
            return false;
        }
      },
  },
};

export default  user;
