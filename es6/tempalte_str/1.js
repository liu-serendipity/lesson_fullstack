const name = 'Snickers';
const age = 2;
// 重复了，违反了dry原则
// console.log('my dog '+name+' is '+age+' years old');

const name2 = 'egg';
const age2 = 5;
// console.log('my dog '+name2+' is '+age2+' years old');
// 函数表达式
// 匿名函数

// 箭头函数  不需要function 关键字， return关键字也可以不要
// 如果函数体只有一句代码，并且是返回值的话， 连花括号也可以省略
const sayMyDog = (name, age) => `my dog ${name} is ${age} years old`;
    // 'my dog '+name+' is '+age+' years old';
console.log(sayMyDog(name,age));