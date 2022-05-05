// 构造函数， 没有设置原型
function Animal() {  // 父类
    this.species = "动物";
}
// extends  class  用不了， 手写
function Cat(name, color) {
    // 具有 species 属性就可以
    // this
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
