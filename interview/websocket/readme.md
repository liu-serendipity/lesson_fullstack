HTTP 协议有什么限制
    - 无状态
    - 完成即断开
    - 单向  服务器被动伺服

    - 在线聊天室  HTTP怎么做？
        广播 HTML5
        你来我往 setInterval轮询 + ajax + dom 请求服务器
        服务器端有推送能力 websocket 在协议层 提供新的应用（区别于web，实时聊天）方案，
        底层都是TCP/IP
        WebScoket web端的Socket html5功能，弥补了HTTP1.X 缺陷，HTTP请求只能由客户端发送请求
        双向通信的Socket 在web端的实现 HTML5
        当客户端要和服务器端建立WebSocket时，index.html Web QQ，客户端会向服务端发送一个HTTP请求，200 index.html 会包含一个Upgrade请求头，来告知服务器，客户端想建立一个WebSocket链接 不再断开，持久链接的
        Upgrade: webSocket Connection: Upgrade Sec-WebSocket 101 Switch Protcols
        WebSocket
        转换成功后，以后发送和接受消息就通过这个连接通道