- promise 操作系统的一个概念相结合
    1. 并发 concurrence（在同一时间内通过任务间的切换来完成 多任务执行） Promise.all/race
    2. 并行 parallelism  有多个cpu，一个cpu有多个核心，同时执行多任务

- js 是单线程，解决异步问题
    - 回调
        问题
        1. 回调地狱
            可读性
            1. 嵌套函数存在耦合性，一旦有所改变，就要全改
            2. 嵌套函数一多，很难处理错误
            try {

            }catch (e) {}
            3. 不能return

- 在回调和promise之后，async/await之前
    generator 
    1. 函数内可以停止（异步） yield await
    2. 先运行一下，得到迭代器
    3. 开始使用next手动迭代  async不用多运行，且自动迭代
    4. next(值) 上一次的yield调用
    5. done: true 停下

- async await 
    async 就是将函数的返回值 使用 Promise.all包裹下 和then处理一样
    - async await 异步终极解决方案
        比Promise优点，处理then的调用链
        代码清晰
    - 缺点是？
        性能降低
        Promise.all()
        有依赖关系 await 

- Promise A+ 规范
    1. 封装Promise类  执行器
    2. Promise 会有三个状态
        - pending 等待
        - Full filled 完成
        - Rejected 失败
    3. 状态只能由
        Pending -> Full filled
        pending -> rejected
        改变不可逆
    4. 提供resolve reject方法
        then 
        onFullfillCallback
        onRejectCallback
        执行一下
    5. promise then 链式调用 

- Promise 手写历程
    1. es6类式新特性
    2. constructor 传入
        executor 同步   
    3. then 
        - 实例自己的then
        - 实例自己的多个then
        - 链式调用的then 
            同步的
    4. 异步在executor里面
        缓存的onFufilledCallback运行