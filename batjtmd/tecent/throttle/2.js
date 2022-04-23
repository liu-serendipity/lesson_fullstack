// call(thisObj,param1,param2...);
// 手写 call 方法 属于函数
// 函数关键字      Object      Array
Function.prototype.call2 = function(...args) {
    // console.log('call2',thisObj,args);
    let thisObj = args[0]?args[0]:null;
    // args.shift();
    // console.log(args);
    console.log(args.slice(1));
}
let yf = {
    name: '好人'
};
function func() {
}
// call 第一个参数，等下是函数里面的this
// 余下的参数交给call2继续过日子
func.call2(yf,1,2,3);
// func.call(yf);
console.log(func.__proto__);
console.log(func instanceof Function)
console.log(Function);  

