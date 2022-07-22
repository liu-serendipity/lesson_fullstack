// api后端服务的单点入口文件 src/main.tsx
const Koa = require('koa'); // http server 
const Router = require('koa-router')();  // koa 路由中间件 BrowserRouter
const app = new Koa();
const crossDomain = require('./middleware/cross-domain');  // 支持跨域

// /videos  get  [{}]
Router.get('/getVideos', ctx => {
    const videos = [
        {
            id: '1',
            name: 'api后端服务的单点入口文件 src/main.tsx',
            pic: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
        },
        {
            id: '2',
            name: 'api后端服务的单点入口文件 src/main.tsx',
            pic: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
        },
        {
            id: '3',
            name: 'api后端服务的单点入口文件 src/main.tsx',
            pic: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
        }
    ]
    ctx.body = videos
})

Router.get('/banners', ctx => {
    const banners = [{

    }]
    ctx.body = banners
})

app.use(crossDomain)
app.use(Router.routes())

// ctx = req 用户请求 + 中间件{n} + res 响应结果
// 中间件函数 
app.use((ctx) => {
    ctx.body = 'hello world'
})

app.listen(3300);