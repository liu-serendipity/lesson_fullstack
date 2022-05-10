// 立即执行函数 + 闭包
var PClass = (function () {
    // 闭包区域， 变量永生
    var a = '私有变量';
    var getA = function() {
        console.log(a, '私有方法');
    }
    var setA = function(val) {
        a = val;
    }
    function P() {
        // 闭包空间里的a 作为私有属性提供给类
        this.b = 1;  // public
    }
    // 共享
    P.prototype = {
        // 私有属性
        getType: function(type) {
            if (type == 'a') {
                getA();
            }
        },
        setType: function(type, val) {
            if (type == 'a') {
                setA(val);
            }
        }
    }
    return P;
})()
// public 门户开发性的  
// private 按规矩来  定义
const pclass = new PClass();
console.log(pclass.a)
pclass.getType('a');
pclass.setType('a', '1111111');
pclass.getType('a');

