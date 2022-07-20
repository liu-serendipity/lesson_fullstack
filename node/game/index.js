// 输入，输出设备打交道
const game = require('./game.js');

let winCount = 0;  // 计算赢的次数
// 进程 隔离资源的最小单元  A  B  C  D ? 进程切换 中断
process.stdin.on('data', (buffer) => {
    // json，node c++ buffer 格式
    // console.log(buffer, buffer.toString());  // 二进制缓冲
    const action = buffer.toString().trim();  // 
    const result = game(action);  // 用户的输入 交给游戏逻辑，并告诉我赢了 还是输了
    if (result == 1) {
        winCount++
        if (winCount >= 3) {
            console.log('不玩了......');
            process.exit()
        }
    }
})
