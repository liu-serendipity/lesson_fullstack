- jwt
    登录
    cookie session 怎么实现登录的？
    1. 用户会话状态和身份
    2. uid
    3. 权限
        cookie uid -> mysql uid 相等
        关系型
        CRUD uid
    设计一个逻辑把uid给做掉
    cookie session 安全
    新的方案 加密 解密
    给前端的是加密后的 cookie uid koss:id  拿去后也没用 token  localStorage 签发凭证
        - http性能问题
        - axios 拦截 token
    服务器端 解码 uid -> session -> 会话对象拿出来
        - token -> {
            uid:
            username:
            password:....
        }

- mvc 模式理解
    1. 路由是后端重要模块
        www服务的核心，解决了资源定位问题
        restful 一切皆资源
        get/post method  url /path
    2. 路由要克制，只做路由的设计和定义
    3. 立马交给controller
        三层之一
    4. controller 参数解析，校验
        业务开发，调用model层，取数据
        把结果写入view层(响应json)

- post 拿请求体数据 用中间件
    1. http请求中 post 更复杂
    2. 处理请求前先收集请求体数据
        body-parser

- jwt 面试官考题逻辑
    1. 深入了解http协议
        - post和get不一样 编码 x-www-form-urlencoded
            application/json form-data
        慢慢到达的过程 路由->controller 提前准备好数据接受
        bodyparser 请求体解析成为json  { username, password } = ctx.request.body
        - accessToken 放在header中，Authorization
            http Author .. 特定的语义
        - cookie 每次带uid 明文，而token 是拿不到uid，只能在服务器解开
        - session + cookie / session + jwt 都可以 后者更安全
    2. 中间件
        cors bodyParser 数组， web打理过程是多个中间件相互合作的，流程需要做就做，做完通过next向后传递 ctx.body
        基于请求响应http，中间件打理这个流程
        post /api/auth/login -> cors -> bodyparser -> 
        controller
        post /api/test/comment -> cors -> auth -> controller
        auth 手写中间件，复用jwt 鉴权

- 策略和计划
    1. 19级同学开始秋招 8月15日
    
    - 面试准备
        1. 学习的一部分
            表达 经验
        2. react考点 + react源码
        3. 算法
            - 优先搞排序
                快排
            - 二叉树
            - 分治 贪心 动态规划...
                掘金 修言算法
            - 腾讯 字节级别
        4. js 复习 小黄书
            神三元上中下
        5. es6
            讶羽
        6. http https tcp udp
            神三元
        7. css3
            考题
        8. 工程化
            提升
        9. 如何介绍自己的项目
        10. 八股文
            有了面试再背 理解后
        11. ts
        12. 模拟面试

第一个阶段复习 2周
    ts + node 3个页面以上...
    闭眼 思维导图