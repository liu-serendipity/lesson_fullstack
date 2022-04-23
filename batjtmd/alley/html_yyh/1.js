// 传统的面向对象 {对象字面量}
// es5的后期提供的js 原来并没有类
class Cat{
    // 构造器
    constructor(name){
        this.name = name;
    }
    // 方法
    makeSound(){
        console.log('喵喵喵');
    }
}

const xm = new Cat('小黑');
xm.makeSound();