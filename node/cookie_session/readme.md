- cookie session
    识别用户状态的
- http 服务怎么启动？
    node 里那个模块  什么方法？
    1. node 内置了http模块，非常方便，少数几行代码就完成了任务
    2. http 设置成请求响应且是无状态 简单
        分布式的概念 git分布式？ 本地 远程remote  合作者的不同的电脑上
        - 互联 IP http://localhost 127.0.0.1
            TCP IP 双方
        - 端口？
            服务器 软件 web server
            电脑 系统 linux centos ubuntu  web server 其中的一个服务
            web server 进程ID  端口
            A IP -> B(web server)
            多项服务 mysql 数据库服务 3306  邮件服务 

    1. 用户输入url www.baidu.com  方便记忆 www 美国
        .com  .cn 
    2. www.baidu.com 通过dns解析 domain system ip 地址
        1. 问你以前访问过baidu.com
            本地 dns 缓存  host 文件
        2. 局域网 dns 服务器
            key value 数据库
        3. 写入到本地
            dns 缓存之中
        36.152.44.95
        ping www.baidu.com 
    3. ip  TCP/IP 三次握手
        A  url：8080  method http + IP（自己的，服务器的）req
        服务器IP  端口 -> 进程(映射)
        web server createServer callback 执行 res.end('') 返回结果
        A IP -> 显示结果
