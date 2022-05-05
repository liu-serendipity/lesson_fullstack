// 传统的面向对象
// 类是对象的属性和方法模板，抽象
// class Dog{
//     // 构造函数
//     constructor(type,color){
//         this.type = type;
//         this.color = color;
//     }
//     makeSound(){
//         console.log('汪汪汪')
//     }
//     eat(){
//         console.log('骨头来一根')
//     }
// }

// js 原型式的面向对象
// 构造函数
function Dog(type,color){
    this.type = type;
    this.color = color;
}
// 任何函数都有prototype对象  方法
// Dog.prototype  xb  smy  什么关系？ 共同的实例，共享的方法
// Dog.prototype {}
Dog.prototype = {
    makeSound: function(){
        console.log(`${this.type} 汪汪汪`);
    },
    eat: function(){
        console.log('骨头来一根');
    },
}
// 构造函数（属性）  原型对象（方法）  实例
// 1.把构造函数运行了一下
// 2.以new的方式运行this  指向xb
const xb = new Dog('土狗','白色');
const smy = new Dog('萨摩亚','白色');
console.log(xb.type);
console.log(xb instanceof Dog);
console.log(xb.__proto__.constructor);
// 私有属性
// 实例对象都有一个__proto__ 指向构造函数的prototype对象
console.log(xb.__proto__);
// xb  Dog.prototype 之间有点关系
// xb 构造器有没有相应的属性，没有可以去原型（prototype）对象上查找
xb.makeSound();
// 相同的地方
console.log(xb.constructor === smy.constructor);    // true
