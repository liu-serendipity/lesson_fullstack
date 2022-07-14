// 写后端代码，稳定和性能为主，服务器端node版本更新没那么快
// 滞后的commonjs模块化
// 前端 webpack vitejs 现代化，发展比node 快多了 es6模块化
// const http = require('http');
import http from 'http';
// http 内置createServer 返回server服务
// 在3000端口启动web服务 祠服状态
// js 单线程的 web服务是 天生是多线程的
// 服务器CPU 多核的，每核都可以独立运行
// node 异步 事件型的
const server = http.createServer(
    (req, res) => {
        if (req.url == '/about') {
            res.end('about us')
            return
        }
        res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript'])
        res.end('hello world')
    }
)

server.listen(3000)