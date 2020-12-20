import * as _ from 'lodash';

export const AssetsService = {
    getById: function (assetsId) {
        return _.get(data, assetsId, null)
    },
}

const data = {
    铁剑: require('../assets/weapon/铁剑.png'),
}