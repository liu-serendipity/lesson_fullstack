"use strict";

var a = 1; // es6  ie9以前  -ms      es6 -> es5

var func = function func() {
  return "aaa";
};

{
  var b = 2;
}
var s = Symbol(); 
// var a = 1;
// 大胆的使用新语法，转义后兼容良好
// 工程化（node）  文件的模块化合并，es6转es5 工具  babel
// npm i @babel/cli @babel/core @babel/preset-env --save-dev  开发依赖
// - @babel/cli  babel的命令行工具
// - @babel/core  babel转义的核心
// - @babel/presetenv + .babelrc 预处理
// - --save-dev
