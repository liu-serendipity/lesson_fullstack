// Promise.all
new Promise((resolve, reject) => {
    console.log('new promise');
    // 立即执行 executor
    resolve('success')
    // 无效
    reject('reject')
})

console.log('finish');