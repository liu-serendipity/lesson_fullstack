// 异步
    // 可读性 代码的编写顺序和执行顺序一样就好了
    // 代码能暂停一下  async await  函数中可以
    // 生成器函数
function *foo(x) {  // generator  * yield
    let y = 2 * (yield(x + 1))  // yield promise
    let z = yield(y / 3)
    return (x + y + z)
}

let it = foo(5)  // 只返回一个迭代器  函数不执行
console.log(it)  // 迭代一次  手动
console.log(it.next())
console.log(it.next(6))
console.log(it.next(4))
console.log(it.next(21))