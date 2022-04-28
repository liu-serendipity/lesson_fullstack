// 1. dom  operation system  fs
//     js  挺进后端开发
//     os  fs  fileSystem
// 2. 路径
//     path
//     1. js 内存 -> fs.readfile -> I/O -> 硬盘 -> 文件 -> 读入内存
// node 内置 fs    类似document.getElementById
const fs = require('fs');  // node js 关键字  commonjs 模块化规范之一
// fs.readFile('./readme.md', function(err, data) {
//     if(!err) {
//         console.log(data.toString());
//     } else {
//         // console.log(err);
//         console.error(err);
//     }
// })

// 多个异步的任务要去完成， 控制顺序怎么办？
const files = ['./a.text', './readme.md', './b.text'];

function readFile(path, callback) {
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        callback(data);
    })
}
readFile('./readme.md', (data) => {
    console.log(data.toString(),'-------------');
    readFile('./a.text', (data) => {
        console.log(data.toString(),'++++++++++++++++');
        readFile('./b.text', (data) => {
            console.log(data.toString(),'++++++++++++++++++');
            console.log('工作完成！');
        })
    })
})
// 异步
// files.forEach((file) => {
//     fs.readFile(file, function(err, data) {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         console.log(data.toString());
//     })
// })