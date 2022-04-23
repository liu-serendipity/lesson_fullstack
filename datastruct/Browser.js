// 浏览器前进后退功能 ， 
// 1. 面向对象模块化， 思想，
//  一个文件就写一个类
    // 2. 引入其他模块 
    const { StackBasedOnLinkedList } = require('./StackBaseOnLinkedList');
    // console.log(StackBasedLinkedList);
    class Browser {
        constructor() {
            this.normalStack = new StackBasedOnLinkedList();
            this.backStack = new StackBasedOnLinkedList();
        }
        pushNormal(name) {
            // jia,   y  y 空 
            this.normalStack.push(name); // 浏览网页入栈 
            this.backStack.clear();  // abc   b -> d   c 丢失
            this.displayAllStack(); 
        }
        back() {
            const value = this.normalStack.pop()
            if (value !== -1) {
                // 可以
                this.backStack.push(value);
                this.displayAllStack();
            } else {
                // 不能点了
                console.log('无法后退');
            }
            // normalStack  pop 
            // backStack  push 
            // 边界
        }
        front() {
            const value = this.backStack.pop();
            if (value !== -1) {
                this.normalStack.push(value);
                this.displayAllStack();
            } else {
                console.log('无法前进');
            }
            // 边界
        }
        displayAllStack() {
            console.log('---后退页面---');
            this.backStack.display();
            console.log('---浏览页面---');
            this.normalStack.display();
        }
    }
    
    let browser = new Browser();
    browser.pushNormal('www.google.com');
    browser.pushNormal('www.baidu.com');
    browser.pushNormal('www.github.com');
    browser.back();
    browser.back();
    browser.front();
    browser.pushNormal('www.tmall.com');