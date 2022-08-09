实战开发能力
- 心理上跨越
    套路
    1. formdata  上传文件
        底层逻辑  复杂业务 + 基础知识的考察
    2. form-data 是 form 表单 提交数据的编码格式 上传文件时必须
        默认是 x-www-form-urlencoded
    3. postman 工具 请求模拟工具
    4. node 对 post 请求体的解析，因为和get url 传参
        慢慢到达 中间件 koa-bodyparser
        慢慢收集传过来的数据，要在路由前启动
        req body + method + url -> bodyParser 数组准备好 -> 路由
        koa-bodyparser 默认支持 x-www-form-urlencoded
    5. koa-multer 优秀的文件上传中间件
        处理过什么复杂的业务？ 文件上传
    6. 流程
        form-data  multipart -> multer diskStorage 配置 multer(config) -> post 中间件 -> router
        中间件思维  router -> 登录auth 文件上传 -> router 处理中间件

