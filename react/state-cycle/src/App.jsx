import React, { useState, useEffect } from 'react'
// jsx 对象  React.createElement('div', null, {className:'hello'}, 'hello word');
const Hello = () => <div className="hello">hello world</div>;
// console.log(Object.prototype.toString.call(Hello));
// 1. jsx 优秀 且简单的UI 表达创新
// 2. jsx -> babel -> 转义 React.createElement()
// Index
// 状态 自有， useState 响应式，但是一般建议放在父组件中
// 便于多个子组件共享数据
// 子组件里 props 参数对象的
// 子组件里不要去添加自有状态，外界不同步了  除非外界不要用
const Header = () => {
  return (
    <div>
      <Title title="首页"/>
    </div>
  )
}
const Title = (props) => {
  const { title } = props;
  return (
    <div>
      {title}
    </div>
  )
}
const Main = ({users}) => {
  // props users
  return (
    <div>
      main
      <ul>
        {/**uniq  */}
        {users.map(user => <li key={user.id}>{user.id}:{user.name}-{user.age}</li>)}
      </ul>
    </div>
  )
}
const Footer = ({count}) => {
  return (
    <div>
      footer,有{count}位用户
    </div>
  )
}
// props 父组件给的，不是自己的
const Index = () => {
  // 不是用useState  数据绑定且响应
  // 不够格成为状态
  // 状态，响应式的
  // state 自有的，父组件
  const [users, setUsers] = useState([
    {
      name: 'John',
      age: 36,
      id: 1
    },
    {
      name: 'John',
      age: 33,
      id: 2
    },
    {
      name: 'Jane',
      age: 40,
      id: 3
    }
  ])
  // 生命周期函数    onload  onDOMContentLoaded
  // Component useEffect onDOMContentLoaded  组件挂载了
  useEffect(() => {
    console.log('组件加载好了！');
    setTimeout(() => {
      setUsers([
        ...users,
        {
          name: 'llm',
          age: 20,
          id: 4
        }
      ])
    }, 2000)
  }, [])
  // setTimeout(() => {
    // users.push({
    //   name: 'llm',
    //   age: 20,
    //   id: 4
    // });
    // console.log(users);
  //   setUsers([
  //     ...users, 
  //     {
  //       name: 'llm',
  //       age: 20,
  //       id: 4
  //     }
  //   ])
  // }, 2000);
  return (
    // 如果唯一的父元素，只起到包裹作用，而不需要标签，省略它
    <>
      <Header/>
      <Main users={users}/>
      <Footer count={users.length}/>
    </>
  )
}
function App() {
  // return <Hello/>
  // return React.createElement('div', null, 'hello word')
  return (
    <Index/>
  )
}

export default App
