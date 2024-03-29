#  高仿哔哩哔哩  
    - 全新的项目
        1. 仿， 大厂的新项目 掘金搜不到
            小特  
        2. react 全家桶(hooks + router + redux) + ts + node 
            大前端 reat 前端 + node 后端 
            全端工程师 reat PC|Mobile + react Native(Native) | Android | IOS  用户体验 

- npm init vite 
    - 创建了  react  + ts  bilibili 移动端单页应用
        用户的浏览器  
    - bilibili-api 后端  
        服务器 
        /url   接口  数据的对接 
        大前端 node 代码只为前端提供数据接口 

- ts 前端 
    1. vite   react-ts 模板来创建  
    2. 强制类型声明 
        @types/react   react 类型声明文件   React.FC<PropTypes>
        - UI Component  组件位置声明  对props  interface 约定 
        - ts  + api   :Promise<MemberEntity[]>
        getMembers:Promise<MemberEntity[]>() {
            const p = new Promise();
            reutrn p 
        }
        - ts  redux 
        - ts vites 配置 
- api 服务  js来写 
- alias 配置在ts 里对tsx 组件不支持
    - 功能没有问题， ts错误提示 
    - tsconfig.json  compilerOptions 
        baseUrl 
        paths 告诉我们ts 添加 预编译的路径 

- @types/node  @types/react  有点像  
    有node 里相关的类型声明可以用， process:Process 进程  
    @types/ 就是ts 类型声明需要的 interface type 

- 全栈 项目中  数据从服务器端 到 页面显示 
    经过哪些地方？ 
    audios 
    1. 后端给我们一个数据接口 /api  某个返回promise 的函数
        url /audios GET  res  JSON 数组
    2. bilibili-api  跟前端的api 对接的 
        怎么满足1？
        - http 服务 协议前提
            http://localhost:3300/audios domain
            baidu  dns解析 ip
    3. /audios GET [{}]
        react-router 负责的
        koa-router
        - /audios 路径，前端后端都能设置吗？
            - 前端路由？ 前端可以，audios 路由级别页面 单页应用
                用户体验 近8年来发明的，react-router
            - 后端必须可以  backend
                /path  method 1.1
            - /videos  react-router <Route path="/videos", element={<Videos />} /> <Link to=" />
                html5 history.pushState(url, )  /  不会更新页面  hashChange  #
            - effect  数据  redux api  bilibili-api/videos
            - koa  3300  http服务
            - /getVideos  get  ctx.body =    JSON 数据
        - 后端传统路由中间件服务的流程
            - 先引入require('koa-router')()
            - router 对象 get|post(url, 中间件函数)
                添加一个路由中间件  ctx.body
            - app.use 挂载一下，才能生效

    - 中间件
        1. 位于 req  res 中间的多个服务
        2. 中间件就是一个函数
        3. compose 成为一个数组
        4. 顺序
        5. 请求响应过程中，所有的中间件会按顺序为我们提供服务
            也可以提前退出中间件服务，也会出现服务跳过的情况

- 前端api ts 注意哪些？
    1. 要请求的数据，严格要求，那么
        ts models/ 架构文件
        对数据进行建模  interface 表 字段 -> interface
    2. 接口函数
        - 函数的返回值 (resolve, reject):Promise<Vedio[]> => {}
        Video[] T   
        - new Promise<Vedio[]>  显示指定未来的结果 unknow
            unknow 是ts的类型

- 在App.tsx 生命周期中通过 api
    从 http://localhost:3000 => http://localhost:3300/getVideos
    请求失败？原因是什么？
        跨域了，前端在3000   后端在3300
        url里 http://www.baidu.com:3000/a?b=1#hhh
              https://www.baidu.com:3000/a?b=1#hhh 算
              http://www.baidu.com:3300/a?b=1#hhh  算
              http://www.google.com:3000/a?b=1#hhh 算
              http://www.map.baidu.com:3000/a?b=1#hhh 算
        跨域有安全问题，按这些规则来
        1. cors
            后端解决方案

- js 浏览器中有个 同源机制

- 搜索api
    1. 通过chrome找到了b站的api地址，拿到了结果
    2. 不放到fastmock
    3. 自己的bilibili-api 提供
        - Router.get('/search/suggest', async (ctx, next) => {})
        - ctx.query.w 查询字符串拿出来，koa qs 变成了对象，encodeURL
        - try catch 确保后端容错处理
            - js 是单线程，出错了，web程序就挂了，无法提供访问
            - try { 可能会出错的 } catch(e) { ... }
    4. node-fetch 是node的fetch，原因是node对js最新功能的支持没有那么快
        node-fetch 是可以用于node发送fetch请求  es6 fetch 一样
    5. node 去向b站发送远程接口请求的时候，b站是接受这次跨域请求的
        - 路由 + 假数据 代替fastmock，自建web 后端服务，为前端提供api
        - 如果像b站一样，跨域请求api
            1. chrome network xhr 查看请求
                url method query ...
            2. node api 封装这次请求
                - url domain/path 常量
                - query array [key=value]
                    = url + array.join('&')
                - then
                - try {} catch {}

- api 服务准备res响应数据
    let resData = {
        code: "1",  // 1 成功
        msg: "success"  
    }
    b站 code 0 成功
    data.result 写入resData

- api 服务的使命
    1. http 服务
    2. router method url 响应
    3. try catch 容错
    4. 准备好json数据 响应 res.body

- typescript
    - component
    - api  
    - store

- reducer + typescript 怎么做？
    1. 架构调整了  combineReducers + n reducer 函数 写在一个文件里
    2. npm i @types/redux --save-dev
        build js
    3. AnyAction 类型 action:AnyAction
    4. actions 中 添加AnyAction 一定有type字段
    5. 在异步的action里，约定 dispatch:Dispatch<AnyAction>
        - 一定会调用一个同步的action  AnyAction
    6. redux 需要的最基础typescript 搞完了

- redux typescript 使用
    - store 数据流管理的store 单例(设计模式Singleton createStore ？ newStore？) (由combinReducers 返回的单一状态树)
        1. window as any 断言 跳过 ts 编译阶段的检测  ts 语法编译
        只有运行在浏览器端才有window 对象
        2. ts vite js后  工程化  build main.js
        3. 在浏览器运行 js 短暂的编译阶段 变量提升 window
        4. 运行
        window as any  断言 assert
    - thunk as ThunkMiddleware 断言
    - 提供 state  rootState 自定义类型  ReturnType<typeof reducers>
        state.search  :rootState 推断  代码写起来更快
        正确性  多人协作
    - connect  state:rootState

- bilibili 首页tab 功能
    - antd mobile  tabs  dropdown
    - 数据流角度

- 后端 基本技能
    1. 抖音等没有移动网页的应用
        抓包  代理工具  fiddler app
    2. 缓存  304 Not Modified
    3. 单点入口  景区入口
        http服务的启动
        路由的挂载
        中间件服务（路由）的挂载
        模块化放到其他的地方
        简单、简洁
        MVC model模型层 数据库的抽象
        view html模板
        controllers 控制器（校验参数 page 1  pagesize）
    4. 构建数据模型能力
        b站首页多级菜单
        - 树状结构
        - 0 第一级菜单
            每个菜单项 {tid: 1, typename: "动画"}
            tid 唯一  typename 标题
        - tid 1 父级
            1：[{tid: 33, typename: "MAD·AMV"}]
        - class 声明 模块化，ts要求比较严格 export {}
            children: PartitionType[]

- model层 ts 写法
    1. model 归属 ts  比较难
    2. type  interface  class  关键字
        都可以声明类型
    3. 每个架构级别目录下，添加index.ts 文件  方便引入

- PartitionTypes 从 后端到前端 完整的数据流
    1. 源头
        GET /partitions 获取api服务数据
    2. 前端
        api/getPartitionsRequest  接口
    3. redux
        异步action  结合models 校验
        dispatch 同步action
        reducer 重新计算
    4. connect mapStateToPorps  state:rootState
    5. 组件 props 解构