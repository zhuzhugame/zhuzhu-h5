const { LoadQueue, SOUND } = require('preload-js');

export default {
    getQueue() {
        const queue = new LoadQueue(true);
        queue.installPlugin(SOUND);
        const assets = [];
        queue.setMaxConnections(10);
        // 指定加载assets目录下的图片
        require.context('../../assets', true, /\.(jpg|jpeg|png|gif|mp3|wav|ogg)$/).keys().forEach(function (n) {
            const r = require('../../assets/' + n.replace('./', ''));
            if (/^data:/.test(r)) return;
            assets.push(r);
        });

        queue.loadManifest(assets);
        return queue;
    }
}