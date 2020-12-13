import axios from 'axios';
import { Notify } from 'vant';
import store from '../store';

export const FightService = {
    getStat: async function () {
        try {
            const { data } = await axios.get(`/api/fights/stat`, {
                headers: {
                    Authorization: store.getAccessToken()
                }
            })
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            throw e;
        }
    },
    start: async function () {
        try {
            const { data } = await axios.post(`/api/fights/start`, undefined, {
                headers: {
                    Authorization: store.getAccessToken()
                }
            })
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            throw e;
        }
    },
    save: async function (newProcess) {
        try {
            const { data } = await axios.post(`/api/fights/save`, { newProcess }, {
                headers: {
                    Authorization: store.getAccessToken()
                }
            })
            return data;
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            throw e;
        }
    },
}