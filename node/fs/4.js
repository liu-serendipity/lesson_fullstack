var fs = require('fs');
var path = require('path'); // 路径上升到模块

/**
 * @func  找出指定目录下最大的文件
 * @param {string} dir 
 * @param {function} cb 
 */
function findLargest(dir, cb) {
    fs.readdir(dir, (err, files) => {
        // console.log(files);
        if (err) { 
            return cb(err);
        }
        console.log(files);
        // cb(null, files)
        // 是文件， 还是目录？
        // fs.readFile(files[0]) 
        var couter = files.length; // 数量
        var errored = false;   // 是否出错？ 
        var stats = []; // 
        files.forEach((file, index) =>  {
            // 得到相对于当前4.js 的对的目录
            fs.stat(path.join(dir, file), (err, stat) => {
                if (errored) return;
                if (err) {
                    errored = true;
                    return cb(err)
                }
                stats[index] = stat; // 所有文件信息  入数组了
                if (--couter  == 0) { // 最后一个
                    var fileStats = stats
                        // .map  把一个数组  变成一个新的数组  
                        .filter((stat)=> stat.isFile());
                    let maxFileSize = 0;
                    for (let fileStat of fileStats) {
                        if (fileStat.size > maxFileSize) {
                            maxFileSize = fileStat.size;
                        }
                    }
                    cb(null, maxFileSize);
                    // console.log(largest);
                }
            })
            // fs.stat(path.join(dir, file))
        }) 
    }) // 异步
}

findLargest('./test', (err, fileSize) => {
    if (err) {
        return console.error(err);
    }
    console.log('largest file war:', fileSize);
})