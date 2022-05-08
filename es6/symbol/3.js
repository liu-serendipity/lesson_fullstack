let s = Symbol();  // 独一无二
let s2 = Symbol(); 
console.log(s == s2);  // false

let obj = {
    // [s]: function(arg) {
    //     console.log('--------');
    // },
    // [s2]: function(arg) {
    //     console.log('++++++++');
    // }
    a: 1,
    [Symbol()]: function(arg) {
        console.log('--------');
    },
    [Symbol()]: function(arg) {
        console.log('++++++++');
    }
};

// 调用
// console.log(obj[s]()); 
// console.log(obj[s2]()); 
// console.log(obj);
// for (let key in obj) {
//     console.log();
// }
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
// Object.getOwnPropertyNames(obj).forEach(key => console.log(key));
// Object.getOwnPropertySymbols(obj).forEach(key => console.log(key));
Object.getOwnPropertySymbols(obj).forEach(item => {
    obj[item]();
})
