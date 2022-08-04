- 大前端项目
    - bilibili-api 提供数据接口服务
        - koa 后端框架
            中间件为特色的开发思路
        - index.js 单点入口
            - http服务
            - 路由、跨域、数据库连接、session服务、等中间件
                koa-cors
            - 注意 保持简洁
                - 路由不要在index.js 写太多
                    routes

- 路由模块化如何做？
    1. 添加一个routers 目录
    2. 每个路由模块都有独立的文件
    3. Router.get  返回 router.routes()
    4. index,js 根路由 router.routes('/search', searchRouter)
    5. app.use(router.routes());

- fastmock -> routes + data

- 前端 react 全家桶 + ts
    1. 准备
        - css reset  iconfont rem.js
            styled-components  createGlobalStyle  IconStyle
            rem.ts 要模块化
    2. vite.config.js  alias
        vite.config.ts + tsconfig.json