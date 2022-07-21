// node api -> 框架层
// react 单页应用 MVVM 模式的项目 Model View ViewModel
// 后端 模式？ MVC  Model(数据模型，model) View(html) C(controller)
// M V 不能直接通信 controller 来管理（业务）
const Koa = require('Koa')  // 最好用的node 后端框架，遵守MVC开发方式
const app = new Koa()  // web server  server app    
// use 启用一个中间件  函数
// app.use  redux compose
// ctx context
app.use(async ctx => {
    // 支持异步
    // 数据库的查询
    // await db.find()
    ctx.body = `hello word`
})
app.listen(1314)