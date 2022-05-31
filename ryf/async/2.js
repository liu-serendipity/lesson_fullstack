function f1(callback) {
    // console.log('f1');
    setTimeout(() => {
        console.log('f1');
        callback();
    }, 2000);
}
function f2() {
    console.log('f2');
}
// 单线程的js 设计了异步任务机制来解决阻塞及程序僵死问题，
// 代码的编写顺序和执行顺序，有差异的，有损可读性
// f1();  // 花比较多时间，setTimeout 异步
// f2();  // 

// 解决异步任务同步化问题
// 1. 回调函数 第一种解决方案
f1(f2)  // 高阶函数