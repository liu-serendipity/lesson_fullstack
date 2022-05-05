# oop 面向对象编程  object oriented programing
- 构造函数  原型对象  实例  三者关系
    1. 首字母大写的函数（普通函数）， 内部this 指向未来的实例  以new 的方式运行
        js 没有class 关键字时代， 用函数+prototype对象， 模拟传统面向对象编程， 称之为原型式的面向对象
        原型对象是构造函数的prototype属性， 没有内存担忧的， 向实例们提供共享的方法
        实例具体， 用于业务， 实例们通过自身的__proto__私有属性 共享 构造函数的原型对象上的方法
    2. 彼此独立又相互关联的
        Dog  prototype  { makeSound，eat }
        原型对象和构造函数是什么关系？

- 极简方式  Object.create()