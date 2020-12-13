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
            store.setAccessToken(data.accessToken, data.expiresIn)
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            return null;
        }
    },
    signUp: async function (
        account, password, name
    ) {
        try {
            const { data } = await axios.post(`api/auth/register`, {
                account, password, name
            })
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            throw e;
        }
    },
    getUser: async function () {
        try {
            return axios.get(`api/auth/user`, {
                headers: {
                    Authorization: store.getAccessToken()
                }
            })
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            return null;
        }
    },
}