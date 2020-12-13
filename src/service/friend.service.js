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
}