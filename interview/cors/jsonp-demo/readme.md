- 面试官底牌
    1. 会前后端联调
        - 分工不同  前后端分离
        - 前端驱动界面的数据通过axios发送请求
            fastmock node 假数据
            数据交换格式 json
            axios baseUrl
            development localhost fastmock
            product 后端给的api  /api/
        - 后端在 method + url 提供接口数据
        - 项目确定后，讨论一个接口文档
            POST  /api/auth/login
            传的参数 { username:'admain', password:'123456' }
            返回的数据 { 
                code: 0,
                token: '',
                user: {
                    username: ''
                }
            }
- 难点
    跨域
        1. 后端cors 中间件 接收header设置的域，方法 跨域请求
            Access-Control-Allow-Origin
        2. jsonp 
            不一定，还有其他jsonp方案
            img link script 等标签 可以发出跨域请求，不受限
            script 服务器端返回的js 都OK
- 跨域
    1. 产生
        协议 域名 端口
    2. 同源策略
        cors domain error
    3. 公司大的时候
        公司内部跨域的方式来启动服务