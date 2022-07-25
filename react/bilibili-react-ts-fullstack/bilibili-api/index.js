// api后端服务的单点入口文件 src/main.tsx
const Koa = require('koa'); // http server 
const Router = require('koa-router')();  // koa 路由中间件 BrowserRouter
const cors = require('koa-cors')
const app = new Koa();
const { 
    fetchSuggest,
    fetchHotword,
    fetchSearchData
} = require('./api')
// const crossDomain = require('./middleware/cross-domain');  // 支持跨域
// 首页菜单分类数据
const partitionsData = require('./data/partitions')
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

// 添加了一个路由中间件
// 上下文对象 = req + res
Router.get("/search/suggest", async (ctx, next) => {
    // ctx.query 请求对象中的查询参数
    // -?a=1&b=2 查询参数  设置成{a:1, b:2}
    const w = encodeURI(ctx.query.w);  // 编码？
    // ctx.body = w
    // console.log(w, '------------')
    try{
        const data = await fetchSuggest(w);
        // console.log(data);
        // api 前后端交互的数据格式是JSON
        let resData = {
            code: "1",  // 成功响应 200
            msg: "success"  // 成功 | 失败原因
        }
        if (data.code === 0) {
            resData.data = data.result;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        // // ctx.set('content-type', 'json');
        ctx.body = resData
    } catch(e) {
        // 处理错误
        next(e)
    } 
})

// 接口服务
Router.get("/search/hotword", async (ctx, next) => {
    try {
        const data = await fetchHotword()  // rpc 调用
        let resData = {
            code: "1", 
            msg: "success" 
        }
        if (data.code === 0) {
            resData.data = data.list;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch(e) {
        next(e)
    }
})

Router.get("/search", async (ctx, next) => {
    const w = encodeURI(ctx.query.keyword);
    try {
        const data = await fetchSearchData(w)  // rpc 调用
        let resData = {
            code: "1", 
            msg: "success" 
        }
        if (data.code === 0) {
            resData.data = data.data;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch(e) {
        next(e)
    }
})

Router.get("/partitions", async (ctx, next) => {
    ctx.body = partitionsData
})

app.use(cors())
// app.use(crossDomain)
app.use(Router.routes())

// ctx = req 用户请求 + 中间件{n} + res 响应结果
// 中间件函数 
app.use((ctx) => {
    ctx.body = 'hello world'
})

app.listen(3300);