# 送花
## talk in js

1. js 运行在浏览器代理中（url），宿主环境（window 全局对象）
   - typeof window   对象   生而知之
   - a  b  name  全局作用域
   - c  声明在函数中   函数 局部作用域

- es6  let const 与 var 
    1. 相同点  属于声明所在的作用域  直接用变量名来直接访问
    2. var 会自动挂载在 window对象上
          其实是副作用， 不太对的
          window.a   the bad parts  不好的  不用， let可以完全取代
    3. let const 不会挂载在 window对象上
    4. const 是常量 不可修改
        - 如果是简单数据类型， 值不能改变
        - 如果是复杂数据类型， 值可以变， 但类型不可以变