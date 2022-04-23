function sayHi(...args) {
    console.log(...args);
    // 函数里面有this，auguments
    // this指向
    // 严格模式  this  没什么  undefined
    // 宿主环境  window  ||  global
    // 手动地绑定this
    console.log('Hello',this.name);
}

let yf = {
    name:'好人'
};
// sayHi也是对象  call方法
// 第一个参数 指定this，其余的参数交给函数本身作为参数
// sayHi.call(yf,1,2,3);     // 让普通函数运行， 但是指定this 指向
sayHi.apply(yf,[1,2,3]);  
