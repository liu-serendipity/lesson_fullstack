// 不做具体的状态， 分配工作
// let defaultState ={
//     banners: [
//         {id: 1, img: 'xx.jpg'},
//         {id: 2, img: 'xx.jpg'}
//     ],
//     list: [
//         {id: 1, img: 'xx.jpg', title: ''},
//         {id: 2, img: 'xx.jpg', title: ''}
//     ]
// }

// const reducer = (state=defaultState) => {
//     return state
// }

// export default reducer
// redux 提供了 combineReducers 功能
// 多个模块的数据，合并到一起

import { combineReducers } from "redux";
// 一个reducer文件，放一类数据
import userReducer from './user'
// 每个reducer文件负责返回一个函数
// 固定的返回值 页面需要的状态数据
// 页面不再管理数据
import recommendReducer from './recommend'
import rankReducer from './rank'
import singerReducer from './singer'
// combineReducers 接受对象配置
export default combineReducers({
    // key 取的名字  value 对应的reducer函数
    user: userReducer,
    singer: singerReducer,
    recommend: recommendReducer,
    rank: rankReducer
});
