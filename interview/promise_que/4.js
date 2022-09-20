const promise = new Promise((resolve, reject) => {
    // 封装耗时任务
    setTimeout(() => {
        console.log('timer');
        resolve('success')
    }, 1000)
})

const start = Date.now()
promise.then(res => {
    // 1000
    console.log(res, Date.now() - start);  // 1001
})
promise.then(res => {
    // 1001 + 1  1002
    console.log(res, Date.now() - start);
})