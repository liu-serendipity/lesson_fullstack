// js 没有类， 只有对象
// 猫类  构造函数 new Object()
var Cat = {
    // es6
    // 构造函数  降低难度  prototype
    createNew(name){
        var cat = {};
        // 属性， 方法的
        cat.name = name;
        cat.makeSound = function(){
            console.log('喵喵喵')
        }
        return cat;
    }
}
// 猫实例
var tom = Cat.createNew('阿来');
console.log(tom.name); 
console.log(tom.makeSound()); 
var garfield = Cat.createNew('加菲猫');
console.log(garfield.name); 