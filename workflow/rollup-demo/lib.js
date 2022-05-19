// lib 库
var counter = 3;
function incCounter() {
    ++counter;
}
module.exports = {
    // counter,
    // 方法
    // get 方法调用以属性的方式
    get counter() {
        return counter
    },
    incCounter
}