// 继承
// 父类
var Animal = {
    createNew: function(){
        var animal = {};
        animal.sleep = function(){
            console.log('睡觉');
        }
        return animal;
    }
}
// 动物的子类， 猫
var Cat = {
    createNew: function(name){
        var cat = Animal.createNew();
        cat.name = name;
        var sound = '喵喵喵'; // 私有属性
        cat.makeSound = function(){
            console.log(sound);
        }
        return cat;
    }
}
var tom = Cat.createNew('Tom');
console.log(tom.name);
// console.log(tom.sound);  // private
tom.makeSound();
tom.sleep;
