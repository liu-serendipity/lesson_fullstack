1. 组织代码
    - 接口  MVC
    - 块级作用域  if  for  while 
    - 功能模块化
        1. 函数     函数式编程
        2. 类       面向对象

## 面向对象编程
    类(模板)--抽象的，对象--具象的
    传统的面向对象，23种设计模式
    new     实例化
    {   }   对象字面量
    类（class）是对象（object）的模板，定义了同一组对象的公共的属性和方法

- JS 本没有类(原型)，但传统的面向对象思想，如何用上呢
    1. 构造函数 this  属性 + 方法
        但函数以new 的方式运行时，this指向实例  添加属性和方法
    2. 净化成  Cat.prototype.makeSound()
        函数也是对象
        prototype 对象上可以添加方法

- new 构造函数  结果  实例
    构造函数和实例之间有什么关系？
    通过实例找到构造函数？
    xm.constructor  任何实例对象上都拥有一个constructor属性指向实例的构造函数
    构造函数的内部不加方法，原因是省内存空间的分配
    构造函数 + prototype 对象 = 类的构建

    任何函数上都有一个prototype对象，所有实例共享的方法
    JS 面向对象  三角恋关系
    class  { constructor + 方法集合 }
    constructor(属性) + prototype(方法) = 实例对象object
