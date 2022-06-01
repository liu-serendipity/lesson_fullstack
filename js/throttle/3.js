// 90年代末，浏览器简单的业务 js发现 -> es5(jquery) -> es6+(现代js react)
// promise -> es7  async await
// async await  es7提供
// 异步同步化方案 回调 地狱
// promise 是es6提供的异步同步化方案  then()
// es7 还要提供新的方案呢？ then有不完美的地方

function f1(cb) {
    console.log('f1-----');
    setTimeout(function () {
        cb();
    }, 1000)
}

function f2(cb) {
    console.log('f2-----');
    setTimeout(function () {
        cb();
    }, 2000)
}

function f3(cb) {
    console.log('f3-----');
    setTimeout(function () {
        cb();
    }, 2000)
}

function f4() {
    console.log('f4-----');
}
// 回调地狱  异步任务队列（长），保证顺序
// 可读性不太好
f1(function() {
    f2(function() {
        f3(f4)
    })
})