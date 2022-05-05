// 简单数据类型， 除了null之外， 结果都是靠谱，null是简单数据类型
// null ? 原因 js 一直有的bug
// 32位  二进制  +1  -1 值，拿出一位 1 负， 0 正  符号位
// 'a'  二进制  ascii 65 -> 10 -> 二进制 3位 类型
// null 类型前三位 000
// object 类型前三位 000
// console.log(typeof null); // object
// console.log(typeof 1, typeof 'ss', typeof undefined, typeof false); 
// 判断一个变量是 null
const isUndefined = val => typeof val === undefined;
const isNull = val => val === null;
const isNil = val => val === undefined || val === null;
// 相同点

let a;
let b = null;
// if
// console.log(a || b);
// console.log(isUndefined(a));