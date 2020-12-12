import axios from 'axios';
import { Notify } from 'vant';
import store from '../store';

export const AuthService = {
    signIn: async function (
        account, password
    ) {
        try {
            const { data } = await axios.post(`api/auth/login`, {
                account, password
            })
            store.commit("setToken", data.accessToken)
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            return null;
        }
    },
    getUser: async function () {
        try {
            const { data } = await axios.get(`api/auth/user`, {
                headers: {
                    Authorization: store.getters.getToken
                }
            })
            store.commit("setPigId", data.pigId)
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            return null;
        }
    },
}