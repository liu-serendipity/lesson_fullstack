// 栈  数组
// 1. 可以用数组实现
// 2. 受限的数组，没有那么自由，却有自己的特色
        // 可以使用 push + pop 完成增删的数组

// 小卖部  冰柜  栈
// FILO
const stack = []; // 数组栈

stack.push('东北大板');
stack.push('可爱多');
stack.push('巧乐兹');
stack.push('冰工厂');
stack.push('光明奶砖');

// for (let i = stack.length - 1; i >= 0; i--) {
//     console.log(i);
// }

// 遍历  出栈
while(stack.length) {
    // const top = stack.pop();
    const top = stack[stack.length - 1];
    console.log('现在取出的雪糕是：',top);
    stack.pop();
}
