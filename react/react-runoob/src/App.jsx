// 解构 React Hooks
import React, {useState} from 'react';

// 一个函数封装返回一段jsx
const App = () => {
  // let name = 'llm';
  // state 状态
  // 当前组件添加一个状态  默认值
  // 解构
  let [isSingle, setIsSingle] = useState(true);  // 单身
  let [name, setName] = useState('llm');  // 给jsx带来状态
  let [date, setDate] = useState(new Date().toLocaleTimeString());
  // jsx {} 占位符，简单用法 输出值
  // {} 内就是js的运行区域，结果默认输出
  setInterval(() => {
    setDate(new Date().toLocaleTimeString());
  }, 1000);
  const changeName = () => {
    // console.log('-----------');
    setName('lyf');
  }
  const friends = [{
    name: 'John',
    age: 34
  }, {
    name: 'Jane',
    age: 40
  }];
  return (
    <div>
      {/* jsx 简单高效的ui模板，状态+事件+.... react */}
      <p>{isSingle ? <span>单身</span> : <span>有主</span>}</p>
      <h1>hello {name}</h1>
      <h2>现在是{date}</h2>
      <ul>
        {
          friends.map((friend, index) => <li key={index}>{friend.name} - {friend.age}</li>)
        }
      </ul>
      <button onClick={changeName}>显示英文名</button>
    </div>
  )
}

export default App;
