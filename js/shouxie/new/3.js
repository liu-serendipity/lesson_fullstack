function add(a, b, c, d) {
    return a + b + c + d;
}
// 三个参数每次只能给一个？
// let result = add(1, 2, 3);


/**
 * 
 * @param {function} fn
 * @return function 
 */
// 函数的柯里化
function curry(fn) {
    // 函数嵌套函数，内部函数会被返回到外部，并得以执行
    // 闭包空间中
    // 慢慢收集拿到的参数
    // fn 等在闭包空间里的永生变量在被闭包函数声明时已经存在
    // 声明时
    // let arr = [];
    let judge = (...args) => {
        if (args.length == fn.length) return fn(...args);
        return (...arg) => judge(...args, ...arg)
    }
    return judge
    // return (args) => {
    //     // 函数运行时可以访问到声明时的变量
    //     // fn
    //     arr.push(args);
        
    // }
}
// console.log(add.length);
// 得到被闭包的函数
let addCurry = curry(add);  // 返回值 函数
// 执行函数
console.log(addCurry(1)(2)(3)(4));  // 一次接受一个参数，直到接受的参数等于add需要的参数数量，执行，并返回结果