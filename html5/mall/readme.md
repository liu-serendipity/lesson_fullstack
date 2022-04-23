# 电商界面开发

- html  css  js 位置， 意义？
    1. html + css  完成静态页面的显示  越快越好
        css 放到head html + css 允许 并行 下载和执行
        - 下载 html DOM树
        - 下载 css
        css 不会阻塞html的继续下载，  css 放到尽可能的上面 head
        html + css  排版好  可看的
        t = Math.max(t1,t2)
    2. js 放到尾部来呢？
        下载的过程中， 阻塞 html 的下载
        js 下载并执行完后才会回复 html 下载
        t = Math.max(t1,t2)
        js 执行 后台

- defer
    1. 异步 下载html， 不会影响到后续 DOM 的渲染
    2. 多个script  defer  
        文件的大小， 下载的速度和标签的顺序不一样
        js 文件下载后执行
        script 立即执行， head， 下载时间 + 执行时间 = 拖慢首屏静态页面显示时间
        defer 确保 执行的顺序 和 标签的顺序 一致
    3. defer 脚本会在文档渲染完毕后， DOMContentLoaded 事件调用前执行
        DOMContentLoaded(html + css)  早于 load （资源加载都ready） 事件

- async （chrome 新版本 没有去执行）
    - DOMContentLoaded 之后执行
    - 谁先下载完， 谁执行

- js 事件  分不同的时期等级
    1. DOM0 级事件  onload  onclick  事件里包含on
    2. DOM2 级事件  addEventListener('click', callback);

- 电商应用（页面开发）
    1. 界面能力良好， 原子级别（html标签 + css排版）
    2. 组件（页面开发的思维提升， 工具）
        - css 命名技巧
        - 用一堆的html + css 组成了一个组件， 一个展示功能和能力的集合， 复用
        - 有个框架提供了这些组件的话  70% 的工作不用做
    3. 做项目
        - 调研weui  移动端最nb的ui框架
        - 界面能力丰富  业务

- 引入weui框架（框架业务）， 加速且方便开发， 组件
- 打造项目可复用的组件  weui-mark
- 通用业务样式  特定项目  可能跨组件 或 样式功能的
    bg-green
    .f_sm  {font-size: 122px;} 小号字体
    .fr  {float: right;}

- 70% 框架 + 30% 业务代码
    1. 每个项目都有的，引入图标
    2. 图标也是一种字体，微软雅黑
        font-family:
    3. 在默认字体之外， 引入一个图标字体
        iconfont
        - @font-face 引入 字体资源
    4. .icon 元素的地方， 使用这种字体
    5. 使用编码去查找特定文字符号
        .icon-109:before {
            content: '\e667';
        }

- 以文件打开 product.html
    物理路径(文件存储地址)  本地

    相对路径 -> Web App  根路径， 启动了http服务
    ip 可以是本地， 远程
    Mysql  默认端口号 3306
    Web  默认端口号 80
    http://127.0.0.1:5500/html5/mall/product.html

    1. 协议
    2. html  css  js  image ... 等资源下载及显示
        http协议是基于请求响应式的协议

- 组件化思维是良好的编程习惯
    