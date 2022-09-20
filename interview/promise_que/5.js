Promise.resolve().then(() => {
    // try {

    // } catch (e) {}
    // throw new Error('error')
    return Promise.reject(new Error('error'))
    // Promise.resolve()
    return new Error('error')
    // return Promise.resolve(new Error('error'))
}).then(res => {
    console.log('then', res);
}).catch(err => {
    console.log('catch', err);
})