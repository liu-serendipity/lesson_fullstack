// cinst arr = [1,,2,3]
const func = function(a,b){
    // this
    // arguments
    console.log(arguments,arguments[2]);
    console.log(a,b);
}

func(1,2,3);
console.log(func.prototype)
// new func();


// 箭头函数有几个使用注意点。

// （1）函数体内的 this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用 yield命令，因此箭头函数不能用作 Generator 函数。