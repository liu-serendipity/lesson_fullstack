let obj = {  // 被代理的对象
    age: 19
};
// get set 处理集合
obj.age;  // get  Logger 
obj.age = 'sss';  // set  赋值的同时，监听，介入一下
// p 代理
let p = new Proxy(target, handler);
// p.age = 