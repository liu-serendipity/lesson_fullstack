// 化实例化的繁琐为函数封装简单， 一定要用 this ？
// 构造函数，封装实例化的过程，更加简便
function Cat(name,color) {
    // this 
    return {
        name: name,
        color: color
    }
}
let cat1 = Cat('Tom','黑色');
console.log(cat1.name, cat1.color);
console.log(cat1.constructor);
