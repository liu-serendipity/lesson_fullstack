// I/O
// 4.js  运行  readme.md  硬盘  
// 调入 内存中来交给 cpu 运行
// require 关键字,  引入一个模块  Stack  Browser
// 4.js 执行权  内存中
// 去硬盘走一招 等 路程
// 异步
const fs = require('fs'); // fs  file system  硬盘
fs.readFile('./2.js',function(err,data) {
    console.log(data.toString());
})  // 耗时
console.log('2222222222222222');  // 同步