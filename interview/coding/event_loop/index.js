console.log(1);  // 同步代码

setTimeout(() => {  // 宏任务中的立即执行
    console.log(2);
    process.nextTick(() => {  // node 微任务
        console.log(3);
    })
    // 实例化 同步  函数会同步运行
    // then 异步
    // 内部 resolve
    new Promise((resolve, reject) => {
        console.log(4);  // 同步
        resolve();  // then 函数 event loop 可以执行了
    // then 返回的promise 实例
    }).then(() => {  // event loop 微任务 实例 resolve时
        console.log(5);
    })
})

new Promise((resolve) => {
    console.log(7);  // 同步
    resolve();
})  // 同步代码
.then(() => {
    console.log(8);
})

process.nextTick(() => {  // 微任务
    console.log(6);
})

setTimeout(() => {
    console.log(9);
    process.nextTick(() => {
        console.log(10);
    })
    new Promise((resolve) => {
        console.log(11);
        resolve();
    }).then(() => {
        console.log(12);
    })
})