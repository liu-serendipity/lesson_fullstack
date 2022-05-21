const _ = require('lodash');  // 工具函数库

console.log(_.flatten([1, 2, [3]]))

// [1, 2, [3], [4, [5, 6]]] => [1, 2, 3, 4, 5, 6]
// 1. 快速搞定
//     - for
//     - Array.isArray
//     - ...  concat
// 2. 