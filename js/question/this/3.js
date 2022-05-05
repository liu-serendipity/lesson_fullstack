var obj = {
    // es6 对象字面量的简写方式
    hi: function () {
        // this 对象方法调用 obj
        console.log(this);  // global
        // 返回值是函数， 高阶函数
        // 是个箭头函数
        return () => {
            console.log(this);
        }
    },
    sayHi: function () {
        return function () {
            console.log(this);
            return () => {
                console.log(this);
            }
        }
    },
    say: () => {
        console.log(this);
    }
}

// const func = obj.hi; // 赋值  普通函数
// func(obj); // 调用方式是普通函数
// 返回 箭头函数时  this -> window
// const innerFunc = func(); 
// innerFunc();
// 返回 箭头函数时  this -> obj
obj.hi()();