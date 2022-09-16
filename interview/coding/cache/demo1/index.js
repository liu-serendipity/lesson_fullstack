const http = require('http');
const fs = require('fs');  // 文件系统 index.html  avatar.jpg
const url = require('url');  // req url 打理好
const path = require('path');  // 路径模块

const server = http.createServer((req, res) => {
    // 伺服状态
    let { pathname } = url.parse(req.url, true);  // node url模块特别强
    if (pathname === '/') {  // 首页
        fs.createReadStream(
            path.join(__dirname, 'index.html')  // 文件在这里
        ).pipe(  // 管道
            res
        );  // 用水管一样方便读取文件  可读流
        return ;
    }
    // 缓存？
    // 1. 浏览器能力
    //     css js img 都可以缓存
    // 2. 浏览器能决定用缓存吗？
    //     服务器端更新了呢？
    //     - logo 这种不怎么变化的资源  更新的规则是？ 过期
    //         强缓存 不用去和服务器协商
    //     - 接口api 比较频繁 去问下服务器
    //         文件变了吗？ 变了，用新的
    //         没变 304 Not Modified
    let abs = path.join(__dirname, pathname);  // 任何其他资源
    if (pathname === '/list.jpg') {
        // res.setHeader('Last-Modified', 文件的最后修改时间)
        // etag
        // if (req.headers['if-modified-since'] == 文件修改时间) {
        //     res.statusCode = 304;
        //     res.end();
        //     return;
        // }
    } else {
        res.setHeader('Cache-Control', 'max-age=200000');
    }
    // 如何告知可以用强缓存去处理呢？
    // 告知浏览器 HTTP
    // res.setHeader('Expires', new Date(Date.now() + 200000).toUTCString());  // 响应头
    // res.setHeader('Cache-Control', 'max-age=200000');  // HTTP1.1
    fs.createReadStream(
        abs
    ).pipe(res)
})

server.listen(1314);