- fullstack 全栈
    1. 前端方向 vitejs/app 工程化生成单页应用
    2. 后端使用 开源的 NeteaseCloud
        - git 干掉
            同一个项目目录下不能有多个 git
    3. 前端和后端怎么交流？
        axios api ->
        frontend UI组件   需要数据（faskmock 假数据）
        backend  api 3000 接口 
        前后端分离

- npm install -g cnpm -registry=https://registry.npm.taobao.org
    全局安装 cnpm  来自阿里
    npm i 国外服务器上去把package.json 中依赖的包下载下来，好慢，容易出错
    cnpm i  到阿里云上下载，更快
    --registry 手动设置安装源

- react 全家桶到位
    react 组件化，MVVM 响应式
    react-router 路由
    redux 数据流管理
        前端 -> api -> redux（中央银行） -> 后端

- react 是声明式的UI组件开发框架
    1. 那么多的组件 好复杂，好多API
    2. 可以用组件来声明功能  更好读

- react 和 ReactDOM
    react-router + react-router-dom
    redux + react-redux

- 数据仓库的搭建过程
    1. 从 react-redux 中解构Provide
        声明给应用添加数据管理功能
    2. store 专有目录下redux中的 createStore 创建仓库实例
    3. createStore 方法接受 reducer 函数