function func(num) {
    // this 指向谁， this.count++ 就是谁
    // 1. new  this -> 实例  大写1作为构造函数  约定
    // 2. window || global || use strict
    // 3. call || apply 
    this.count++;  // 实例的， 不属于类的
    console.log(this)
}
// func 一等对象  count属性属于 func 自己的
func.count = 0;  // 类的静态属性， 不属于实例的
func(0);
console.log(func.count);  // 0