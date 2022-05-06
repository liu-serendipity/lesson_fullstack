# 手写代码

instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
Object.getPrototypeOf

- web 编程的基础是HTTP  基于请求响应式简单协议  
    1. lazyload.html  http请求
        响应  html文件
    2. html 渲染的过程  html DOM + css OM  静态页面
    3. img 引入图片资源的，启动http请求
        图片响应后，显示在页面上
        网页请求数比较多，且大

- 如何优化多图片造成的网络请求阻塞
    1. 请求数是页面打开速度性能的重要指标
        a 标签不算
        link  href  img  src  audio  video  script  过多，页面卡死
        并发
    2. 启动 network 下载 +1
    3. http 协议  请求和响应  有并发限制的

- 延迟加载
    1. img  src  不改变
        显示一个占位图片，
        原来 src -> data-src  不需要并发n张图片
        只需要下载一张占位图片  浏览器对已经下载的资源会缓存 Cache
    2. onscroll  图片  位于可视区