import { createStore, compose, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import reducers from './reducers'  // 合并
// window  interface  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ts as 强制类型声明 断言 
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
    composeEnhancers(
        applyMiddleware(
            // 断言  dispatch 异步action ts -> ThunkMiddleware
            thunk as ThunkMiddleware
        )
    )
)
// rootState  state 状态类型
// type interface ts里的类型声明
// type 自定义类型
export type rootState = ReturnType<typeof reducers>

export default store