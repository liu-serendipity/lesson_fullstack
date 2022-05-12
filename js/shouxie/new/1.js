// 血缘 extends
function objectFactory() {  // new
    // Person 普通函数运行一下 apply()
    let obj = {};  // 没有血缘关系  原型式的面向对象
    // var Constructor = arguments[0]; 
    // 伪数组  把shift方法借给arguments用
    var Constructor = [].shift.call(arguments);
    // console.log(Constructor, '----------');
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret || obj : obj;
}

function Person(name, age) {  // 编程风格
    this.name = name;
    this.age = age;
    // return {
    //     name,
    //     age,
    //     bb: '11'
    // }
    return null  // 忽略
}

// const p = new Person('llm', 18);
// console.log(p.name);
let p = objectFactory(Person, 'llm', '18');  // 引用式赋值
console.log(p.bb);