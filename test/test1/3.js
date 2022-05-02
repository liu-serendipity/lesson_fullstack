// == 会做类型转换     === 简单数据类型
console.log(0 == 0);  // true
console.log(-0 == +0);  // true
console.log(-0 === +0);  // true
console.log(1 == '1');  // true  相等判断的同时，先去做了类型的转换
console.log(1 === '1');  // false  相等判断的同时，不会去做类型的转换
console.log(1 == true);  // true  谁转谁？ 规则  数字优先
console.log(0 == false);  // true
console.log(3 == true); // false
if(3) {
    console.log('-------');
}
console.log(null == undefined);  // true  两边都转
console.log(null === undefined);  // false
console.log({} == {});  // false
console.log({} === {});  // false