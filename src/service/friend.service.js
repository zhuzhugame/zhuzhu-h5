import axios from 'axios';
import { Notify } from 'vant';
import store from '../store';

export const FriendService = {
    getList: async function () {
        try {
            const { data } = await axios.get(`/api/friends`, {
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
    getReadyConfirmList: async function () {
        try {
            const { data } = await axios.get(`/api/friends/ready_confirm`, {
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
    confirm: async function (id) {
        try {
            await axios.post(`/api/friends/${id}/confirm`, undefined, {
                headers: {
                    Authorization: store.getAccessToken()
                }
            })
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            return null;
        }
    },
    reject: async function (id) {
        try {
            await axios.post(`/api/friends/${id}/reject`, undefined, {
                headers: {
                    Authorization: store.getAccessToken()
                }
            })
        } catch (e) {
            Notify({ type: 'danger', message: '连接失败, 请稍后再试' });
            return null;
        }
    },
    search: async function (value) {
        try {
            const { data } = await axios.get(`/api/friends/search`, {
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
    add: async function (targetPigId) {
        try {
            const { data } = await axios.post(`/api/friends`, { targetPigId }, {
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
    delete: async function (id) {
        try {
            const { data } = await axios.delete(`/api/friends/${id}`, {
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