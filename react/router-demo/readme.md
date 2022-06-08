- 锚点
    页面的电梯， pc时代， 内容高度太那啥， 有用

    react 响应式开发  区别于 DOM编程
    + react-router 加持 全家桶开发，单页应用 Single Page Application  SPA

- 瞄点  hash #  url 加#
    url 发生了改变，页面没有重新加载，
    :3000/#aaa   当前页面上去找name aaa 的 a
    不用像传统a 向服务器重新发出请求，页面会白一下，SPA 单页应用专门解决  路由的底层
    /about

- react-router 为前端带来了路由功能，
    1. HashRouter  #/about  兼容性更好
        react-router 捕获hashChange事件，当点击Link组件 hash -> Routes（Route）找到相应的页面级组件，动态切换，单页应用（不用为了显示不同的页面去白一下），幻灯片一样切换不同的页面
    2. BrowserRouter  /about  看上去更像传统（后端）路由
        不好兼容？ html5 history API
    