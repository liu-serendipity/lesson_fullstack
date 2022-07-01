import { getBannerRequest, getRankListRequest, getSingerRequest } from '../api/request'
// 组件不可以染指数据请求，页面级别组件之中看不到api
// 在action中 redux 指定可以数据流动的地方
// redux 之后，UI 更纯粹
// 应用开发分成 UI + 数据管理

// store reducer defaultState -> action api -> reducer 重新计算 -> 通知connect UI更新

// action 函数
export const changeBannerList = (data) => ({
    type: 'CHANGE_BANNER',
    data
})
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest().then(data => {
            const action = changeBannerList(data.banners)
            dispatch(action)
        })
    }
}

export const changeRankList = (data) => ({
    type: 'CHANGE_RANKLIST',
    data
})
export const getRankList = () => {
    // api 异步
    return (dispatch) => {
        getRankListRequest().then(data => {
            // console.log(data);
            // {type: 'CHANGE_RANKLIST', data}
            const action = changeRankList(data.list)
            // console.log(action);
            // dispatch 这种格式的对象，才能触发reducer重新计算
            dispatch(action)
        })
    }   
}

export const changeSingerList = (data) => ({
    type: 'CHANGE_SINGER',
    data
})
export const getSingerList = () => {
    return (dispatch) => {
        getSingerRequest().then(data => {
            const action = changeSingerList(data.artists)
            dispatch(action)
        })
    }
}