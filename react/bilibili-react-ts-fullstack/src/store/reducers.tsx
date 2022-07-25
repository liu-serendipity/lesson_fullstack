// reducer + combineReducers
import { combineReducers, AnyAction } from 'redux'
import * as ActionTypes from './action-types'
// 但从未读取其值？ 后面没用到，引入是没必要  ts 代码的正确性
// tree-sharking 黄叶子


const initalState = {
    // 分支
    search: {
        suggest: [],
        hotword: [],
        searchResult: {}
    },
    // 首页
    // 视频
    // 登录
}

const combineSearch = (state = initalState.search, action:AnyAction) => {
    switch(action.type) {
        case ActionTypes.SET_HOTWORD:
            return {
                ...state,
                hotword: action.data
            }
            break;
        case ActionTypes.SET_SUGGEST:
            return {
                ...state,
                suggest: action.data
            }
            break;
        case ActionTypes.SET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.data
            }
            break;
        default:
            return state
    }
}

export default combineReducers({
    search: combineSearch
})