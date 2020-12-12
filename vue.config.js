// 作为配置文件，直接导出配置对象即可
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://127.0.0.1:3000',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}