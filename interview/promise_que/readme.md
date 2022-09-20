- async 函数中await 的new Promise 要是没有返回值，就不执行后面的内容
- then 函数中的参数期待的是函数，如果不是函数的话会发送透传

- Promise 状态发送改变后就不能再变了
    .then .catch 函数参数，需先检查状态 Pending
- then catch 为了链式调用 
    then 里本身就是promise的话，没必要
    return 简单数据，一般对象  没有  Promise.resolve来自动包装
    返回值为 参数
    Promise.resolve() 最后返回
    非promise的值都会被包裹成promise对象
- catch 
    1. regected 执行
    2. 也和then Promise.resolve() 包了一下
    3. 捕获到之前链中的错误

- Promise.resolve(1)
    创建一个promise实例，return 已经resolved后
    then 没有显示的return Promise   Promise.resolve()
        then catch 直接return 非promise 链式res

- Promise的then catch 可以被调用很多次，Promise构造函数和状态改变只能执行一次
    数组来收集 []