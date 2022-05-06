// 类型的转换  显式和隐式
// 3种，
// 转换成布尔值
// 转换成数字    false + 1
// 转换成字符串   +

console.log(1 + '1');  // 字符串  11  先拼接优先
console.log(true + true); // 2  加法
console.log(true == 2, true == 1);  // false  true
// if (2) 2 => true
console.log(4 + [1,2,3]);  // 41,2,3     [1,2,3] 先用自身的 toString 方法，转换成 '1,2,3', 然后 + 做拼接
console.log('a' + + 'b');  // aNaN
console.log(+ '1');  // 1
console.log(+ 'b');  // NaN
console.log(Number.isNaN(+ 'a1'));  // true
if (! + 'a1') {
    console.log('-------------');
}
console.log(! + 'a1');  // true
console.log(+ 'a1');  // NaN
console.log(4 * '3');  // 12
console.log(4 * []);  // 0
console.log(+ []);  // 0
console.log(4 * [1,2]);  // NaN
console.log(+ [1,2]);  // NaN