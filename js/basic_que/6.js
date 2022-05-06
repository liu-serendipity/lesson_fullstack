// typeof  除了null, 基本类型检测都还靠谱
console.log(typeof 11111111111111111111n, typeof BigInt(2n));  // bigint
// js 有7种简单数据类型， + 其余都是对象
// 唯一 Symbol

console.log(typeof console.log);  // function