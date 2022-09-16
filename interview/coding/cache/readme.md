缓存cache 并不是storage
- 前端 后端 运维
    - 前端性能优化
        1. 防抖节流 手写题
        2. 路由的懒加载 react
        3. memo useMemo useCallback react
        4. GPU  css                  
        5. antd 按需加载 react
        6. http请求数量  前后端通信 网络
        7. 启用GZip压缩
        8. cache
            logo 缓存

    - react 优点和缺点？
        首页加载慢

1. 200 第一次请求 服务器返回文件
    如果强缓存，服务器设置Exipres响应头 过期时间 HTTP1.0
        用户时钟不对的话
    HTTP1.1 优化 Cache-Control 偏移量
    万一在过期前，有更新呢？ 换url，avatar.jpg => new_avatar.jpg
    main.1279kandkl.js

2. 数据接口 协商缓存，写入比较频繁的文件
    响应头？掘金首页列表
    每次浏览器都要和服务器协商
    浏览器带什么过来  服务器返回什么？