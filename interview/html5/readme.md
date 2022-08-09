- html5 主题
    - html ? xml 1990 文档标记语言
    - html4 1997 
        DTD
    - html5 2008 推出
        <!DOCTYPE html> html5声明
    - html5有哪些新特性
        1. 语义化标签
            header nav aside section article footer canvas video audio 以前flash
            - 比所有布局全部采用div标签  代码可读性提升
            - 有利于SEO 搜索引擎优化 识别页面结构 article 更加重要
            - 方便设备解析，盲人阅读 

    - html5 有哪些功能
        1. 表单功能增强
            - input type  placeholder  autofocus  required  maxLength  minLength
            - formData
        2. video audio  B站 爱奇艺
        3. canvas(显卡显存) 弹幕（刷火箭 高帧率刷新 requestAnimationFrame） 游戏
        4. 拖放 
        5. 本地存储 用户端 localStorage(要手动删除) sessionStorage(会话结束就没了，关闭浏览器)
            key => value  setItem('userInfo', JSON.stringify(user))  JSON.parse(getItem('userInfo'))
            数据库 IndexDB sql
            cookie 
        6. Cache Manifest 离线存储功能
        7. Web Worker  浏览器给js的 多线程能力
            - js 是单线程
                优点？ DOM 简单
            - 高精度的计算 BigInt
                大数据时代 城市大脑
                web game
                vr 虚拟现实 加密
                event loop 搞不定
            - js 启动一个新的线程 去专门做一件什么事情
                告诉主线程，结果
            js 由web worker 实现了多线程
            js 是单线程的，给合event loop机制 满足当下web应用开发的需求
            Worker 目前没有主流使用，但未来在 大数据/人工智能/vr/game 很能会快速使用起来
            1. new Worker('worker js 文件名')
            2. 这个文件里不能使用DOM BOM相关的功能，主线程负责这些
            3. postMessage(data) 线程间通信
            4. onmessage
            
        8. 点外卖  地理定位 lbs 应用  硬件能力
            - navigator.geolocation  BOM
            - lbs应用是移动端时代爆发的一类应用，百度地图 美团 无人驾驶汽车
                基于经纬度
            - 注意保护用户隐私，在使用功能时，浏览器代理会询问是否授权
                授权一次后，默认上次，除非清空
            - 浏览器嗅探
            - edge可以正常使用，chrome等不可以，开启了https的应用才可以使用