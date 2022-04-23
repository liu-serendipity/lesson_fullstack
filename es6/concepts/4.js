'use strict';
// 当 箭头函数的时候， 普通函数调用
// this 又有新方案
// 箭头函数没有this， 通过作用域链查找到外部的this
console.log(this,'-----------');
let b = 2;
const func = () => {
    // console.log(this);
    // return a+b;
}
// func(1);
let o = new func();