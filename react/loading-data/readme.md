- 前端在3000端口
- json-server 数据库服务在1234端口
- 文章列表显示到页面
先显示页面 快  posts []
domContentLoaded useEffect
    fetch('http://localhost:1234/posts')  // promise pending
        .then(() => {  // fulfilled
            // json数组 -> jsx数组 -> {}
            setPosts  useState 响应式
        })