- html5 主题
    - html ? xml 1990 文档标记语言
    - html4 1997 
        DTD
    - html5 2008 推出
        <!DOCTYPE html> html5声明
    - html5有哪些新特性
        1. 语义化标签
            header nav aside section article footer canvas video audio 以前flash
            - 比所有布局全部采用div标签  代码可读性提升
            - 有利于SEO 搜索引擎优化 识别页面结构 article 更加重要
            - 方便设备解析，盲人阅读 

    - html5 有哪些功能
        1. 表单功能增强
            - input type  placeholder  autofocus  required  maxLength  minLength
            - formData
        2. video audio  B站 爱奇艺
        3. canvas(显卡显存) 弹幕（刷火箭 高帧率刷新 requestAnimationFrame） 游戏
        4. 拖放 
        5. 本地存储 用户端 1. localStorage(要手动删除) sessionStorage(会话结束就没了，关闭浏览器)
            key => value  setItem('userInfo', JSON.stringify(user))  JSON.parse(getItem('userInfo'))  5-10M
                应用场景 举出哪些？
                - 存储地理位置 geolocation  locationStorage
                - 存储登录信息 取代cookie登录  基于token
                    cookie uid -> 服务器端 session中间件(基于cookie) 内存会话存储对象 key value
                - 用户信息的存储 昵称 头像 ...
                - redux 一些需要持久化的状态
                    todos [{text:, done:}]  dispatch  localStorage.setItem()
                    getItem()  dispatch setTodos()
                    logined
                    userInfo
                - 主题颜色，icon，风格，语言（react 国际化）
                    en -> cn  看小说
                - 用户设置
            2. 数据库 IndexDB sql  几十M
            3. cookie HTTP 无状态 每次都带上，加剧了请求的性能开销  很小 4kb
            4. 浏览器缓存  静态资源 js不介入 状态码
        6. Cache Manifest 离线存储功能
        7. Web Worker  浏览器给js的 多线程能力
            - js 是单线程
                优点？ DOM 简单
            - 高精度的计算 BigInt
                大数据时代 城市大脑
                web game
                vr 虚拟现实 加密
                event loop 搞不定
            - js 启动一个新的线程 去专门做一件什么事情
                告诉主线程，结果
            js 由web worker 实现了多线程
            js 是单线程的，给合event loop机制 满足当下web应用开发的需求
            Worker 目前没有主流使用，但未来在 大数据/人工智能/vr/game 很能会快速使用起来
            1. new Worker('worker js 文件名')
            2. 这个文件里不能使用DOM BOM相关的功能，主线程负责这些
            3. postMessage(data) 线程间通信
            4. onmessage
            
        8. 点外卖  地理定位 lbs 应用  硬件能力
            - navigator.geolocation  BOM
            - lbs应用是移动端时代爆发的一类应用，百度地图 美团 无人驾驶汽车
                基于经纬度
            - 注意保护用户隐私，在使用功能时，浏览器代理会询问是否授权
                授权一次后，默认上次，除非清空
            - 浏览器嗅探
            - edge可以正常使用，chrome等不可以，开启了https的应用才可以使用

- 传统登录 cookie + session -> token 登录 （licalStorage）
    axios 拦截  authorization token
    1. cookie 维护用户状态
        克制，session_id uid
    2. cookie  expires/maxAge  domain  path  httpOnly  SameSite  Secure
    3. session 服务器端
    4. session 基于cookie
        username password session 中间件 session对象 同时生成cookie对象
        sid -> 客户端也有了sid cookie -> /post/save -> session中间件 -> 
        拿到cookie sid -> 后端session 内存空间 sid 作为key去查找 会话对象里的
        存储 -> 登录了，用户名，头像... 不需要去数据库查找 -> 数据库开销非常大