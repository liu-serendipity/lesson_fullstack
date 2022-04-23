let a = 1.23;
// 奇怪的地方？  JS 比较复杂
// a  number  简单的数据类型  不是对象
// a.toFixed  对象
// 在 js 中，基于对象的语言（object-base）的语言
// toFixed（a） 
// 遇到的所有东西几乎都是对象
// 保留一位小数
// console.log(a.toFixed(1));
var n1 = new Number(2);  // 
console.log(n1, typeof n1, n1.valueOf());
// console.log(typeof null);  // bug
// 除不尽  < 1    0  精度  1  多了点？  不准确
// console.log(typeof a, 0.1 + 0.2);
