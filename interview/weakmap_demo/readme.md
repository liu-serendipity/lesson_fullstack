- 介绍下es6？
    - 企业级开发大型语言
        - class + super + extends 面向对象+设计模式  还是原型式的语法糖
        - 模块化 es6 模块化
        - 新的数据结构 map（O(1)查找） 和 set（去重）
            weakmap ?
            Map weak? 
            1. key 一定是对象
            2. 它和 对象key 之间是弱引用关系

            - 深拷贝循环引用的处理
            - promise 手写高级
            - 垃圾回收相关
        - 块级作用域 
            let const
        - 新的数据类型 bigint symbol
        - 可读性和代码优雅
            - 箭头函数
            ...
        - 异步解决方案
            - promise 
            - generator
            - async await

- global.gc() Garbage Collection
    垃圾回收机制运作
    - 标记计数法
    - 计数引用
        + 1  - 1  0 
    1. 哪些内存空间可以回收？
        js 闭包, weakmap 弱
    - 对象设置为null，手动垃圾回收的方案 canvas webgl
- process.memoryUsage()
    node 后端