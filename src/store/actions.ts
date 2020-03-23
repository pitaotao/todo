import {ActionTree} from 'vuex';
import States from '@/store/states';
import axios from 'axios';

const actions: ActionTree<typeof States, any> = {
//    注册校验用户名
    EXAMINE_REGISTER_DATA({ commit}, data: any[]) {
        axios({
            method: 'post',
            url: '/v1/api/verification',
            params: data,
        }).then((res: any) => {
            commit('EXAMINE_INFO', res);
        }).catch((error) => {
            commit('EXAMINE_INFO', error);
        });
    },
};
export default  actions;
