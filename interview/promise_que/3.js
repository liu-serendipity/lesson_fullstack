// Promise.resolve(1)  // static method
Promise.reject(1)  // promise 实例 Promise <rejected>
    .then(res => {
        console.log(res);
        return 2  // Promise.resolve(2)
        })
    // 链式前面没出现问题 不被调用运行
    .catch(err => {
        return 3  // Promise.resolve(3)
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err, '111111111');
    })
