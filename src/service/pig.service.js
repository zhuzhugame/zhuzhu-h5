import axios from 'axios';
import { Notify } from 'vant';
import store from '../store';

export const PigService = {
    getMy: async function () {
        try {
            const { data } = await axios.get(`/api/pigs/my`, {
                headers: {
                    Authorization: store.getAccessToken()
                }
            })
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            return null;
        }
    },
    search: async function (value) {
        try {
            const { data } = await axios.get(`/api/pigs/search`, {
                params: { value },
                headers: {
                    Authorization: store.getAccessToken()
                }
            })
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            return null;
        }
    },
}