// ts 表面上看类型检测  多写代码，不自由
// 更好的自由，代码建议
const flag:string[] = ["a","b","c"];
console.log(flag.map(item => item.toUpperCase()));
// 元组类型
const flag1:[string, number, boolean] = ["hello", 1, true];
// 枚举类型
enum Color {
    RED,
    PINK,
    BLUE
}
const color:Color = Color.BLUE;  // red, pink, blue
// react`
//     <div>
//         <Component />
//         <span></span>
//     </div>
// `
// HTMLElement
// 1. 全栈项目
// 2. react 源码
// 3. 算法
// 4. 面试题

const sym1 = Symbol("hello")
const sym2 = Symbol("hello")
console.log(Symbol("hello") === Symbol("hello"));

