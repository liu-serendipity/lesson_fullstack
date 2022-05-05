// 构造函数， 没有设置原型
function Animal() {  // 父类
    this.species = "动物";
}
Animal.prototype.sayHi = function(){
    console.log('------------------');
}
// extends  class  用不了， 手写
function Cat(name, color) {
    // 具有 species 属性就可以
    // this
    // Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
// prototype 模式
// let ani = new Animal();
Cat.prototype = new Animal();  // 原型对象  Cat 继承到 Animal species 属性
Cat.prototype.constructor = Cat;
var cat1 = new Cat('大毛','黄色');
// console.log(cat.species, cat.sayHi());
console.log(cat1.species);

