import * as actionTypes from './constants'

const defaultState = {
    hotList: [],
    suggestList: [],
    songsList: [],
    enterLoading: false
}
// redux 状态就是心相印纸巾
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOT_KETWORDS:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.SET_SUGGEST_LIST:
            return {
                ...state,
                suggestList: action.data
            }
        case actionTypes.SET_RESULT_SONGS_LIST:
            return {
                ...state,
                songsList: action.data
            }
        case actionTypes.SET_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state
    }
}