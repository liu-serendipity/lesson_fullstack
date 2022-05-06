// 对象 类型转换
const obj = {
    value: 1,
    valueOf() {
        return 1
    }
}
// new Number(1).toFixed()
console.log(obj == 1);  // true