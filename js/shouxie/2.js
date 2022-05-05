/**
 * 面试编程题  写一个函数
 * 传统的面向对象语言  实例
 * dog 没有通过Object实例出来，所以  原型链
 * dog.__proto__-> == b.prototype  b是a的原型对象
 * dog.__proto__.__proto__... -> null  b是a的原型链上对象
 * instanceof 传统语言中判断的是a是b的实例
 * js 中 instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
 * @func instanceof 实现
 * @param a 实例对象  b 对象
 * @return boolean
 */
function Cat() {

}
function Dog() {    // 构造函数

}
 // 原型
Dog.prototype.sayHi = function(){

}

function myInstanceof(a,b) {
    // 原型
    let proto = Object.getPrototypeOf(a);   // api
    let prototype = b.prototype;
    // if(proto == b.prototype) return true;
    // return false;
    while(true) {
        if(!proto) return false;
        if(proto == prototype) return true; // while 退出
        proto = Object.getPrototypeOf(proto);
    }
    if(proto == b.__proto__) return true; 
    return false;
}

const dog = new Dog();
console.log(myInstanceof(dog,Dog))  
console.log(myInstanceof(dog,Object))  
console.log(myInstanceof(dog,Cat))