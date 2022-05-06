// 包装 String('1')
// class String
let a = '1';
console.log(a.toString());  // a 被包装了一下，类型的转换 String
console.log(typeof '1');  // a 回归 String
console.log(typeof a);
console.log(typeof new String('1'));
let b = new String('1');
console.log( b.toString());  
console.log(typeof b);  // object
// js 的长久以来的一个bug，32位系统，为了性能考虑（typeof），使用低位存储变量的类型，3位  null 全是00000000000000000000，undefined 只有前几位不是0
console.log(typeof null);  // object
// console.log(undefined.toString());  // 报错
console.log(null.toString());  // 报错  null -> Null() 没有这个类
