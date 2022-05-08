/**
 * @author llm
 */
const o = require('./2.js'); 
// console.log(o);
let s = Symbol('name');
// json  不允许同名的字符串式的key
// 如何向对象添加绝对不重复的key？  Symbol 唯一
let newObj = {
    ...o,
    [s]: 'ysw'
};
console.log(newObj);  // 被替换了
// 独一无二  es6提供
// let s = Symbol();
// console.log(typeof s);  // Symbol
// let s2 = Symbol();
// console.log(s == s2);  // false

// let s3 = Symbol('fool');// 不能以new 的方式来运行，它是特殊的简单数据类型，不是类
// let s4 = Symbol('fool');
// console.log(s3 == s4); // false

