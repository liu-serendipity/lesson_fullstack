// 异步的sleep，同步的代码放到thenable里去运行
function sleep(time) {
    // 耗时任务，封装在Promise内部  resolve
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}
sleep(1000)
    .then(() => {
        console.log('sleep之后要做的事情');
    })

console.log('111');