// js单点路口
// require 属于node后端运行环境的关键字，不支持浏览器前端运行环境
// js 不同运行环境下有差异
// 模块化方案  module
// js 早期没有模块化方案，早期任务比较简单，不需要模块化
// commonjs 模块化方案 require + module.exports
// es 模块化方案 import from + export default
// 在输出后就结束了

var mod = require('./lib');  // require 关键字
console.log(mod.counter);
mod.incCounter();
// console.log(incCounter);
console.log(mod.counter);