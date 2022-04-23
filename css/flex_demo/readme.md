- display: block; 带来了页面排版功能的从上到下
- 格式上下文  css  format  context
    1. 新的盒子可以构建全新的显示上下文
    2. display: flex;  弹性
        display  声明显示上下文(环境)
    
    3. 弹性布局由父元素和多个子元素 组成的全新渲染环境
    4. 子元素不受换行的约束， 原因flex全新的格式上下文
    5. 按比例弹性分配空间，每个子元素 flex: 1:1:1    flex: 1:2:3

- css 样式3种写法
    1. 行内样式优先级最高， 不建议常用，  解决一些个别问题
    2. 嵌入样式  style 标签在头部引入
    3. 外联样式  link 引入css 文件  模块化更好

- 404 Not Found
    网络状态码  status code
    304  Not Modified  未修改
    200  OK  请求成功
    403  Forbidden  没有权限  禁用了