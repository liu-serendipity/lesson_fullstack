// 'use strict';    编译阶段  a  没定义
// console.log(a);   // error
// 变量提升是变量提升, 赋值操作还是在执行阶段...
console.log(b);  // 报错 undefined 2
var b = 2;