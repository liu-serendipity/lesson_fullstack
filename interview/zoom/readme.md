- 前端优化
    - 使用缓存
        强缓存
            清除缓存，立即更新
            bundle.js  Cache-Control Max-age 
            bundle.js?v=20  加版本号
            bundle.122435.js  hash串
            ctrl + F5
            图片直接改名
        协商缓存
    - React 组件优化
    - css
        将 CSS 放在文件头部
    - js
        防抖 节流  ajax suggest scroll resize事件
        JavaScript 文件放在底部
    - 网络层
        - 减少HTTP 请求
            图片懒加载
            雪碧精灵图 （多个图拼成一张图，减少多个图的http请求次数） 修改和定位麻烦
            iconfont
            SVG 移动端适配
            base64
            linear-gradient
        - gzip
        - HTTP 协议的加持
            HTTP 1.1 及以前 HTTP 明文传输 一个TCP 一个请求  结束符号
            KEEP ALIVE 同一域名
            启动HTTP 2.0  多路复用 帧方式流传输  雪碧精灵图不怎么用了
        - CDN
            HTTP 2.0 多路复用 受限于域名
                api.baidu.com
                静态资源不需要  cdn.baidu.com  cdn2.baidu.com
    - 图片
        优化图片的质量 webp
    - webpack
        - 打包的速度
        - 打包的体积
        /node_modules/  exclude 打包提速的核心
        图片base64  url-loader limit 10Kb 减少了HTTP请求
        vendor 把react redux react-router
            单独入口打包
            bundle.js
            vendor.js
        css js 压缩

        #main .box p  css选择器的查询顺序是自右向左的
        改成  #main .box p.inner