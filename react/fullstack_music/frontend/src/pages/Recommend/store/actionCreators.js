import { getBannerRequest, getRecommendListRequest } from '@/api/request';
import * as actionTypes from './constants'

export const  changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: data
})
// api 请求 一定放在action 中
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest()
            .then(data => {
                const action = changeBannerList(data.banners)
                dispatch(action)
            })
    }
}

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: data
})
export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest().then(data => {
            dispatch(changeRecommendList(data.result))
            dispatch(changeEnterLoading(false))
        })
    }
}

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data: data
})