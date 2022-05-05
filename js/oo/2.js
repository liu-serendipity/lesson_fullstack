// 原型式的面向对象  缺点
// 学习成本有点大
// prototype
// es6 新的方案， 减少学习成本

var Cat = { // 不需要new
    name:'大毛',
    makeSound: function() {
        console.log('喵喵喵');
    }
}
// Cat 模板
// var garfield = {
//     name:'加菲猫',
//     makeSound: function() {
//         console.log('喵喵喵')
//     }
// }
// var tom = {
//     name:'Tom',
//     makeSound: function() {
//         console.log('喵喵喵')
//     }
// }

var tom = Object.create(Cat);
// console.log(tom.name)
// tom.makeSound();
tom.name = 'Tom';
console.log(tom.name)
tom.makeSound();
let obj = new Object();
console.log(obj); // {}
console.log(tom.__proto__); // 原型对象
console.log(tom.__proto__.constructor);  // function: Object