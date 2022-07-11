// .jsx -> .tsx
// App <- Hello
// 父组件 向 子组件 提供props jsx输出
// 子组件打工的，prop-types 拒绝裸奔
// 面向对象中，特性 父子组件之间的约定 负责？ 
// interface 接口
import * as React from "react"

// 定义一个接口，父子组件间用
// 子组件需要实现props里面规定的接口属性和方法
// ts 语法能力 面向对象的能力更牛
// ts 可以让我们java 一样
// 接口定义区域
interface Props {
    userName: string;
    age: number
}
// 接口和组件结合 组件要实现这个接口
// props ? { } 空对象
// 泛型
// React.FC 类型定义由 @types/react 提供
const HelloComponent:React.FC<Props> = (props) => {
    return (
        <h2>
            hello user: {props.userName}!
            <br />
            年纪: {props.age}!
        </h2>
    )
}

export default HelloComponent