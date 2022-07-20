// 应用层 游戏业务开发
// export default  es6
// 常量
const ALLACTIONS = ['rock', 'scissors', 'paper']
module.exports = function(playerAction) {
    if (ALLACTIONS.indexOf(playerAction) === -1) {
        // 没有执行下去的必要
        // return
        throw new Error('Invalid playerAction')
    }
    // console.log(playerAction);
    // 电脑
    let computerAction;
    let random = Math.floor(Math.random() * 3)  // 0 1 2
    // console.log(random);
    computerAction = ALLACTIONS[random]
    // console.log(computerAction);
    if (computerAction == playerAction) {
        console.log('平局');
        return 0
    } else if (
        (computerAction == 'rock' && playerAction == 'scissors') || 
        (computerAction == 'scissors' && playerAction == 'paper') ||
        (computerAction == 'paper' && playerAction == 'rock')
    ) {
        console.log('电脑赢了');
        return -1
    } else {
        console.log('你赢了');
        return 1
    }
}