import axios from 'axios';
import { Notify } from 'vant';
import store from '../store';

export const EquipmentService = {
    findAllSale: async function () {
        try {
            const { data } = await axios.get(`/api/equipments/sale`, {
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
    buy: async function (id, count) {
        try {
            const { data } = await axios.post(`/api/equipments/${id}/buy`, {
                count
            }, {
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