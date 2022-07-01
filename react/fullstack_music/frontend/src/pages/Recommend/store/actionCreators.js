import { getBannerRequest } from "@/api/request"
import * as actionTypes from './constants'

// api请求  一定放在action中
export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER_LIST,
    data: data
})
export const getBannerList = () => {
    return (dispatch) => {  
        getBannerRequest()
            .then(data => {
                const action = changeBannerList(data.banners)
                dispatch(action)
            })
    }
}