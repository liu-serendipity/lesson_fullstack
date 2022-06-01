// async await 出来
// 没有抛弃promise，抛弃了烦人的 thenable链条
function sleep(time) {
    // 耗时任务，封装在Promise内部  resolve
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}
// es7 函数的修饰符 async 函数 异步
(async function() {
    // 函数内部的异步任务，如果是用promise来封装的话，可以实现同步化
    console.log('do something,' + new Date());
    // await 右边的返回值是promise 实例
    await sleep(3000); // await 是与async 一起出来的
    await sleep(3000);
    console.log('do something,' + new Date());
})();