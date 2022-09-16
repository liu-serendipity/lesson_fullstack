import { Dispatch } from 'redux'
import * as actionTypes from '../constants'
import {
    getRankingPartitionsRequest,
    getRankingRequest
} from '@/api/request'

// 页面级别action
// promise.all
export const getHomeDataAction = (rId:string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getRankingPartitionsRequest(),
            getRankingRequest(rId)
        ]).then(([partitionsResult, videoResult]) => {
            dispatch(setRankingPartitions(partitionsResult.data))
            dispatch(setRankingVideos(videoResult.data.list))
            dispatch(setLoading(false))
        })
    }
}

export const setRankingPartitions = (data: any[]) => ({
    type: actionTypes.SET_RANKING_PARTITIONS,
    data
})

export const setRankingVideos = (data: any[]) => ({
    type: actionTypes.SET_RANKING_VIDEOS,
    data
})

export const setLoading = (data: boolean) => ({
    type: actionTypes.SET_LOADING,
    data
})