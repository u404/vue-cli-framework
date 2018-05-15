
module.exports = {
    port: 8080,
    proxyTable: {
        //代理配置示例：
        '/api': 'http://www.baidu.com',
        '/api2': { target: 'http://www.baidu.com' }
    },
    useMicroCache: true,

}