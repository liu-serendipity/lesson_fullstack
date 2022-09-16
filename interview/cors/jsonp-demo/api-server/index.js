const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    // res.end('console.log("hello world!")')
    // query callback
    // 解析查询参数 path
    // console.log(url.parse(req.url, true))
    const query = url.parse(req.url, true).query
    const callback = query.callback
    // console.log(callback, '?????????')
    let data = { code: 0, username: 'lll' }
    // callback ? json with padding
    // 后端比以往的json请求，把json包在一个callback函数内
    // 前端页面提前留好callback函数
    res.end(callback + '(' + JSON.stringify(data) + ')')
})
server.listen(8888)