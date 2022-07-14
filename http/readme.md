- node 和 es6 在模块化上可以共处
    1. react es6+
        node cjs阶段
        js 优点就是前后端通吃  cjs esm 代码风格不太OK，两套代码
        不能接受
    2. 引入工程化解决
        babel
        写的代码可以转变成能运行的代码
         @babel/core @babel/cli @babel/preset-env @babel/node
         babel.config.js 
         npx babel-node 1.js

- web server
    后端种cookie  /
    res.setHeader("Set-Cookie", [['type=ninja', 'language=cn']])
    阿里国际站

    req.url = '/about'  当我们从/about访问时
    自动带上cookie 去访问

    cookie 是一段文本，用于弥补http无状态的缺陷

    http 无状态协议
    Stateless 每次请求都是独立的，没有相关性
    http 0.9 web发明时 大学
    在 http 1.0 微软 blog 哪个版本里加了 cookie ？ 状态
    一段文本 4kb key=value;key2=value2
    服务器或客户端都可以种cookie
    之后的每次请求中，都会带上cookie
    没有改变 http 无状态
    服务器端解析cookie 就可以获得用户身份了

- Cookie 属性
    不同的网站，访问时带上相应的cookie Domain
    百度种的和掘金种的就不一样
    path 除了域名限定外，还可以做路径限定  /admain 后台
    /admain cookie 与 juejin 用户端
    / 所有路径可以访问
    /admain 后台 才会带上 用于特殊权限的处理

    Expires / MaxAge  Cookie 过期即删除
    Expires 时间戳
    MaxAge 倒计时

    HttpOnly
        安全性而来 
        js 不能够访问
