var sy = sb = Symbol('a');
console.log(Symbol('1') == Symbol('1'));  // false  独一无二
console.log(sy == sb);  // true  值的传递

// 函数嵌套函数
var PClass = (function() {
    // 私有
    const a = Symbol('a');  //唯一
    const m = Symbol('m');  //唯一
    function P() {
        // this.a = a;
        this[a] = '这是私有变量';
        this.b = '变量b 共有属性';
        this[m] = function() {
            console.log('--------');
        }
    }
    P.prototype = {
        getA() {
            console.log(this[a]);
            this[m]();
        }
    }
    return P
})();

// 访问不到 a m     不可能值和a相同
const pc = new PClass();
console.log(pc.b);
pc.getA();
// console.log(pc.a);