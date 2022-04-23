// js 早期版本没有class关键字
// es6提供了， 但是class只是语法糖， 底层原型式面向对象并没有改变
// class  传统面向对象， java 一样来写js

class SimpleBrowser {
    constructor() {
        this.x = 1
    }
    push() {

    }
}

const browser = new SimpleBrowser();
// console.log(browser.__proto__.__proto__);
// console.log(browser.__proto__.constructor.prototype);
// browser.push();
for(let key in browser) {
    console.log(key);
}
console.log("push" in browser);