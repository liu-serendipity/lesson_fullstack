// 当函数名大写，构造函数
// js函数就可以构造一个类
// js早期没有class关键字，但并不影响它做java的传统面向对象编程
// 函数是一等对象，可以用来构造对象
// js 其实没有类
function Cat(name){
    // 给一组对象添加属性
    this.name = name;
    // 内存开销复杂的多  入栈，分配堆内存
    // this.makeSound = function(){
    //     console.log('喵喵喵');
    // }
}
// 是一个构造对象的函数
// 函数也是对象
// js 函数对象有prototype属性
// 公有的方法放到prototype 对象中
Cat.prototype.makeSound = function(){
    console.log('喵喵喵');
}
Cat.prototype.eat = function(){
    console.log('吃鱼');
}
Cat.sayHi = function(){
    console.log('你好啊');
}
// 同一组对象  共同的类方法、属性模板
var xm = new Cat('小黑');
xm.makeSound();
console.log(xm.name);
console.log(Cat.prototype)
//xm.sayHi();     // 不能调用
// var xh = new Cat('小花');
// console.log(xh.name);
// console.log(xm == xh);
// 如何判断两个对象是兄弟
// console.log(xm.constructor == xh.constructor)

// 如何判断对象是某类的实例呢
// typeof []  object
// console.log(xm instanceof Cat)
// Object 既是对象有是
// let a = {}; //对象字面量的构造函数 Object()
// let obj = new Object(); //对象字面量
// console.log(obj instanceof Object);
// console.log(typeof Object)
