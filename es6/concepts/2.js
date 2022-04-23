// 箭头函数     函数表达式
// 简化函数， 不用写 function  {}  return
// 歧义     函数的{}    对象字面量的{}
// 箭头函数  只有一句代码， 且是返回值
// 如果是对象的话
const func = (a,b) => ({val: a + b}); // es6
// console.log(typeof func);  // function
console.log(func(1,2));  // undefined