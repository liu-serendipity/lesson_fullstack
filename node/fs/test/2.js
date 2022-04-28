const fs = require('fs');  // node  js  commonjs

const files = ['./a.text', './readme.md', './b.text'];
// 嵌套
for (let file of files) {
    // 可以为读取文件停下来  同步写法
    // 阻塞代码
    const data = fs.readFileSync(file)
    console.log(data.toString());
    // fs.readFile(file, (err, data) => {
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data.toString());
    // })
}