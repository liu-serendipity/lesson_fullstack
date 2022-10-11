1. 宏任务  
    script 、 setTimeout 、setInterval 、setImmediate 、I/O 及 UI rendering
1. 微任务
    process.nextTick（跟前端的Promise.resolve()） 、queueMicrotask、promise.then 、MutationObserver，其中 process.nextTick 为 Node 独有

- 单线程（js简单，异步任务在执行栈栈空时检查） + 执行栈（js执行机制）
- script 作为第一个宏任务先执行 执行栈为空后
- 所有能执行的微任务队列被清空，如果有必要，渲染页面
- 执行一个宏任务
- Loop

- this 问题
    this由调用方式决定
    1. 作为普通函数调用，不管在哪里，指向全局
        严格模式，underfined
    2. 作为对象的方法调用，this指向对象
    3. 以new的方式，指向生成的实例
    4. 箭头函数没有this，取决于包裹箭头函数的第一个普通函数的this
        且之后不能改变this指向
    5. call apply bind 可以指定函数的this，参数为空，指向全局
        如果多次bind 指向第一次的bind
    6. this 优先级
        箭头函数
        new > obj.foo() > foo
        bind call apply