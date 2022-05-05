# 异步之数据获取

1. xhr 与 fetch 关系？
    功能都是一样的   xhr 旧时代的， fetch es6最新的api
    fetch(http://localhost:3000/posts)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
    
    xhr = new XMLHttpRequest();  xhr 实例
    <!-- request 多种请求方法    get 明文 url输入  post 加密 -->
    xhr.open("GET","http://localhost:3000/posts");
    xhr.send();
    xhr.onreadystatechange = function() {
        event.target.readyState  4
        <!-- event.target.responseText  string类型 -->
        JSON.parse(event.target.responseText)  JSON
    }
