const promise = new Promise((resolve, reject) => {
    reject('error')  // rejected
    resolve('success2')
})

promise
    // 链式
    .then(res => {
        console.log('then1', res);
        // Promise.resolve()
        let newP = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('new error')
            }, 1000)
        })
        return newP
    })
    .then(res => {
        console.log('then2', res);
    })
    // catch 当promise rejected后 执行catch

    .catch(err => {
        console.log('catch', err);
        // return 2
        // catch then Promise.resolve 去包一下
    })
    .then(res => {
        console.log('then3', res);
    })