import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import thunk from 'redux-thunk'  // 异步reducer变化
import logger from 'redux-logger'  // redux 调试更优秀
// 没有安装redux-dev-tool  compose 百搭
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, 
    // 合并成一个中间件对象
    compose(
        // UI组件    中间件s redux-thuck->applyMiddleware启用    store
        composeEnhancers(applyMiddleware(thunk)), 
        applyMiddleware(logger)
    )
)

export default store