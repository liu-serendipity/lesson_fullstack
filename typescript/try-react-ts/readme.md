- typescript 是 js 的超集
    1. ts 可以提供类型化的js
    let ch:Person
        ch.name
        ch.sex

- 如何使用ts完成子组件UI开发
    1. 后缀为.tsx
    2. prop-types 可以下课了
        语言本身来打理
    3. 子组件接住父组件的props传递
        - 接口 interface
            子组件里定义
        ts 提供的高级面向对象功能  传统的面向对象思想
    4. HelloComponent: React.FC<Props>
    <> 泛型 泛指内部的类型 关心的核心 props: Props
    5. ts 如java 先编译 再运行的 c .o .exe
        js node 1.js  脚本语言
        前端的一些问题，在开发阶段就会暴露出来
        props 问题，

- change事件的typescript 化
    1. e: React.ChangeEvent<HTMLInputElement>
    来自 @types/react
    2. 子组件向父组件报告 调用函数
        复杂性带给父组件
    3. 父组件 接收子组件传过来的value
        子组件 onchange 语义改成 onNameUpdated 中转一下 就好了

- typescript 中架构多了一个model