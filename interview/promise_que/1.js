// Promise 手写
// 不要正面硬刚。解题，了解promise细节
// class Promise 
// constructor cb()
// this.state 状态  三种 pending fulfilled rejected
// 由pending开始 resolve -> fulfilled  reject -> rejected
// 一旦状态改变，就不可以再变 
const promise = new Promise((resolve, reject) => {
    resolve('seccess1')  // promise pending => fulfilled
    reject('error')
    resolve('success2')
})

promise
    .then(res => {
        console.log('then', res);
    })
    .catch(err => {
        console.log('catch', err);
    })
