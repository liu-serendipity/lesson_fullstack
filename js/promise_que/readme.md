- question 1
    - Promise 理解
        1. Promise 是一个类，es6 提供的异步代码同步化的解决方案
        2. new Promise 构造函数执行过程都是同步任务 state pending
        3. p1.then 一个异步任务  进入 event loop
        4. resolve  fulfilled 执行完成
        5. 原来的单线程执行栈  同步代码，执行完后，程序进入idle
        6. 去 event loop 去找， pending？ 不执行then ： 执行fulfilled

- question 2
    js 执行 看成是任务  event事件  loop 循环
    任务有先后，
    1. 全局作用 最外层的 event loop 宏（大）任务 没有必要进入event loop  程序会进入idle状态
        js 会自动去轮询event loop中有没有需要执行的异步任务
    2. promise.then 进入 event loop 以微任务的身份进入的  稍后的新的event队列中
    3. event loop 中
        微任务先执行
        宏任务后执行
    4. js 就是依靠 单线程（简单，好学） + 同步任务（快速） | 异步任务（复杂） + event loop 运行的简单高效的（后台）
        while（单线程快速运行，进入idle状态，去event loop里找下有没有到了要执行的任务）