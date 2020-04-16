import * as types from '../types';

const initPageState = () => {
    return {
        isLogin: false,  // 判断是否登录
        UserInfo: {  // 用户登录信息
            email: '',
            password: '',
            name: '',
            defaultAvatar: false,
        },
    };
};

const user = {
  state: initPageState(),
  mutations: {
      saveUser(state: object | any, UserInfo: object | any): void {
          state.isLogin = true;
          state.UserInfo = UserInfo;
      },
  },
  actions: {
      saveUser({commit}: any, payload: object | any): void {
          commit('saveUser', payload);
      },
  },
  getters: {
      isLogin(state: any): any {
        if (state.UserInfo.email !== '') {
            return true;
        } else {
            return false;
        }
      },
  },
};

export default  user;
