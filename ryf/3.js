// js 解决实例和类之间的关系
// 面向对象语言中 class 不言自明
// java  this 属于 class  方法之间， 共享属性和方法 this.
// js 在函数中引入了 this， new 方式运行 不需要返回对象（call  constructor）
// 函数看过去更像 构造函数  this 指向了实例化后的对象
function Cat(name,color) {
    this.name = name;
    this.color = color;
}
// cat1, cat2 和Cat 什么关系
let cat1 = new Cat('大毛','黄色');
let cat2 = new Cat('二毛','黑色');
console.log(cat1.constructor); // 父子关系
console.log(cat1.constructor == cat2.constructor); // 兄弟关系
console.log(cat1.__proto__ == cat2.__proto__); // true
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor); // true

console.log(cat1 instanceof Cat);   // true
console.log(Cat.prototype.isPrototypeOf(cat1)); // true