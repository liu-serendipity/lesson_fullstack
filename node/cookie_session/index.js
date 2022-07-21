const http = require('http');

// http 无状态 每次 用户主动来请求
// 软件概念的web服务器
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // 结束这次用户代理和服务i器的交流
        res.end('hello world')
    }
})

server.listen(8080)

