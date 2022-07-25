import { AnyAction, Dispatch } from 'redux'
import * as ActionTypes from '../action-types'
import { getHotwordRequest } from '@/api'

export const  setHotword = (data:any[]):AnyAction => ({
    type: ActionTypes.SET_HOTWORD,

})

export const  getHotword = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        // 请求数据的地方
        dispatch(setHotword([]))
    }
}