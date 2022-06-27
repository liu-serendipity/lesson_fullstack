import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
// 子组件
function App(props) {
  console.log(props, '-------------------');
  let { singers, users } = props
  // useEffect(() => {
  //   fetch('http://localhost:3000/personalized')
  //     .then(data => data.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  // }, [])
  // 有了redux后，页面组件不再做数据管理
  return (
    <div className="App">
      {
        users.map(user => <div key={user.id}>{user.name}</div>)
      }
    </div>
  )
}
// state 是redux 负责的所有子仓数据
// connect 是api   
// 组件数据管理功能被收回
// 组件，通过connect连上store  store未来去管理数据
// redux 让数据管理更科学 开发工艺
// redux 就是数据管理学
// 把store中的状态以props的形式引到组件中
// state 由redux 给我们的，状态树
// 以树来组织数据分仓 树根
const mapStateToProps = (state) => {
  return {
    // 首页想要展示singer数据
    singers: state.singer.singers,
    users: state.user.users
  }
}

export default connect(mapStateToProps)(App)
